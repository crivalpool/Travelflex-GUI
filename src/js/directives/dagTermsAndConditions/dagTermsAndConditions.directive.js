(() => {
  'use strict';

  /**
   * @desc TravelFlex terms and conditions
   * @example <dag-terms></dag-terms>
   */
  angular
  .module('copayApp.directives')
  .directive('dagTerms', dagTerms);

  dagTerms.$inject = [];

  function dagTerms() {
    return {
      restrict: 'E',
      scope: false,
      transclude: true,
      templateUrl: 'directives/dagTermsAndConditions/dagTermsAndConditions.template.html',
      link: () => {
      }
    };
  }
})();
