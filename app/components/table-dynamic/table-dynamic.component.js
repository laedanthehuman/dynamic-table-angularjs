(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myApp')
        .component('tableDynamicComponent', {
            // template:'htmlTemplate',
            templateUrl: 'components/table-dynamic/table-dynamic.component.html',
            controller: TableController,
            controllerAs:'ctrl',
            bindings: {
                colunas:'<',
                valores:'<',
            },
        });

    function TableController() {
        var ctrl = this;

        ////////////////

        ctrl.onInit = function() { };
        ctrl.onChanges = function(changesObj) { };
        ctrl.onDestory = function() { };
    }
})();