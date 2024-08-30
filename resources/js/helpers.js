// NOTE: variables globales que se usaran en el sistema
const turnoIndice = ['PR', 'PM', 'OS'];
if (localStorage.getItem('turnNumber') === null) {
    localStorage.setItem('turnNumber', 1);
}
if (localStorage.getItem('turnActive') === null) {
    localStorage.setItem('turnActive', JSON.stringify([]));
}
if (localStorage.getItem('turnPending') === null) {
    localStorage.setItem('turnPending', JSON.stringify([]));
}

/******************************************/
/***ANCHOR: metodos para limpiar datos***/
/**************************************/
export function clearData(){
    localStorage.setItem('turnActive', JSON.stringify([]));
    localStorage.setItem('turnPending', JSON.stringify([]));
    localStorage.setItem('turnNumber', 1);
    contentTurnActive(null);
    contentTurnPending(null);
}

/*****************************************/
/***ANCHOR: metodos para llamar turnos***/
/***************************************/
export function contentTurnActive(attended){
    if (attended === null || attended.length == 0) {
        $('#turn-actual').text("STA"); // NOTE: STA -> sin turno atendido
    }else{
        let data = attended.length - 1;
        $('#turn-actual').text(attended[data]);
    }
}

export function contentTurnPending(pending){
    if (pending === null || pending.length == 0) {
        $('#turn-next').text("STP"); // NOTE: STP -> sin turnos pendientes
    }else{
        $('#turn-next').text(pending[0]);
    }
}

export function callTurn(){
    let listAttended = JSON.parse(localStorage.getItem('turnActive')); // NOTE: Capturo el array del storage de turnos atendidos
    let listPending = JSON.parse(localStorage.getItem('turnPending')); // NOTE: Capturo el array del storage de turnos pendientes

    if(listPending.length > 0){
        soundTurn();
        listAttended.push(listPending[0]);
        listPending.shift();

        localStorage.setItem('turnActive', JSON.stringify(listAttended));
        localStorage.setItem('turnPending', JSON.stringify(listPending));

        contentTurnActive(listAttended);    
        contentTurnPending(listPending);
    }
}

/*****************************************/
/***ANCHOR: metodos para pedir turnos***/
/**************************************/
export function obtainOrderTurn(buttonId) {
    $(buttonId).on('click', function() {
        let order = $(this).data('order');
        let alias = turnoIndice[order];
        let listPending = JSON.parse(localStorage.getItem('turnPending'));
        let number = parseInt(localStorage.getItem('turnNumber'))
        let turnAssigned = alias + '-' + number;
        listPending.push(turnAssigned);
        localStorage.setItem('turnPending', JSON.stringify(listPending));
        number++;
        localStorage.setItem('turnNumber', number);
    });
}

export function soundTurn(){
    $('#update-turn')[0].play();
    $('#update-turn')[0].volume = 0.3;
}

/*****************************************/
/****ANCHOR: metodos para ver turnos****/
/**************************************/
export function showOrders(){
    let attendedList = JSON.parse(localStorage.getItem('turnActive'));
    $('#turnsTable tbody').empty();
    $('#message-table').empty();
    if (attendedList.length > 0) {
        $('#turnsTable').show();
        attendedList.reverse();
        attendedList.forEach(function(elemento) {
            let fila = `<tr>
                            <td>${elemento}</td>
                        </tr>`;
            $('#turnsTable tbody').append(fila);
        });
    } else {
        $('#turnsTable').hide();
        $('#message-table').append(`
            <div class='alert-box'> 
                <div class='alert alert-notice'>
                    <i class='bx bxs-info-square icon-head icon-medium'></i>
                    No hay turnos registrados!!! 
                </div>
            </div>
        `);
    }
}