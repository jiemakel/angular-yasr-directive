angular.module('fi.seco.yasr', []);
var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var yasr;
        (function (yasr_1) {
            'use strict';
            var YasrDirective = (function () {
                function YasrDirective($timeout) {
                    this.$timeout = $timeout;
                    this.restrict = 'E';
                    this.scope = {
                        data: '=',
                        prefixes: '='
                    };
                    this.link = function ($scope, element, attr) {
                        var yasr = YASR(element[0], { getUsedPrefixes: $scope.prefixes });
                        $scope.$watch('data', function (data, odata) { if (data)
                            yasr.setResponse(data); });
                    };
                }/*<auto_generate>*/YasrDirective.$inject = ['$timeout']; YasrDirective.$componentName = 'yasr'/*</auto_generate>*/
                return YasrDirective;
            })();/*<auto_generate>*/angular.module('fi.seco.sparql').directive('yasr',['$timeout',function(){return new (Function.prototype.bind.apply(YasrDirective,[null].concat(Array.prototype.slice.call(arguments))));}]);/*</auto_generate>*/
            yasr_1.YasrDirective = YasrDirective;
        })(yasr = seco.yasr || (seco.yasr = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=yasr-directive.js.map
