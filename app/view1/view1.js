(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('View1Controller', View1Controller);

    function View1Controller() {
        var vm = this;
        vm.colunas = [
            {
                exebivel:'#',
                propriedade:'id'
            },
            {
                exebivel:'Nome',
                propriedade:'nome'
            },
            {
                exebivel:'Filme Favorito',
                propriedade:'filme_favorito'
            },
            {
                exebivel:'Serie Favorita',
                propriedade:'serie_favorita'
            },
            {
                exebivel:'Game Favorito',
                propriedade:'game_favorito'
            }
        ];
        vm.valores = [
            {
                id:1,
                nome:'Manoel',
                filme_favorito:'Star Wars',
                serie_favorita:'Dr Who',
                game_favorito:'Final Fantasy'
            },
            {
                id:2,
                nome:'João',
                filme_favorito:'Duro de Matar',
                serie_favorita:'Two Broken Girls',
                game_favorito:'Fifa'
            },
            {
                id:3,
                nome:'José',
                filme_favorito:'O senhor dos Anéis',
                serie_favorita:'Brooklin 911',
                game_favorito:'Call of Duty'
            },
            {
                id:4,
                nome:'Marcela',
                filme_favorito:'Varios',
                serie_favorita:'Grossip Girl',
                game_favorito:'Não tem'
            },
        ];
            
        activate();

        ////////////////

        function activate() {}
    }
})();