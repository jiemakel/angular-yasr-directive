declare namespace fi.seco.yasr {
    class YasrDirective {
        private $timeout;
        constructor($timeout: angular.ITimeoutService);
        restrict: string;
        scope: {
            [id: string]: string;
        };
        link: (...any) => void;
    }
}
