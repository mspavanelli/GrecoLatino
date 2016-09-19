angular.module('grecoLatino')
.directive('curso', function() {
	return {
		restrict: 'AE',
		scope: {
			nome: '@',
			descricao: '@',
			horas: '@'
		},
		templateUrl: 'templates/curso.html'
	}
});