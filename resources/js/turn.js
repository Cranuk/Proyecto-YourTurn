import * as helpers from './helpers.js';

$(function(){
    /*****************************************/
    /***ANCHOR: eventos para llamar turnos***/
    /***************************************/
    
    helpers.contentTurnActive(JSON.parse(localStorage.getItem('turnActive')));
    helpers.contentTurnPending(JSON.parse(localStorage.getItem('turnPending')));

    $('#button-callturn').on('click', function(){
        helpers.callTurn();
    });

    /*********************************************/
    /***ANCHOR: eventos para listar los turnos***/
    /******************************************/

    helpers.showOrders();

    window.addEventListener('storage', function(event) { // NOTE: evento que se encarga de que el storage este actualizada en cada ventana
        if (event.key === 'turnPending') {
            helpers.contentTurnPending(JSON.parse(localStorage.getItem('turnPending')));
        }

        if(event.key === 'turnActive') {
            helpers.contentTurnActive(JSON.parse(localStorage.getItem('turnActive')));
            helpers.showOrders();
        }
    });

    /*****************************************/
    /***ANCHOR: eventos para pedir turnos***/
    /**************************************/

    helpers.obtainOrderTurn('#order-particular');
    helpers.obtainOrderTurn('#order-retirees');
    helpers.obtainOrderTurn('#order-socialWork');

    $('#clean').on('click', function() {
        helpers.clearData();
    }); 
})