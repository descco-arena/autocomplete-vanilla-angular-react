import Suggestion from '../components/suggestion';

describe('Suggestion', () => {

  describe('Create request', () => {
    let suggestion;
    let mediator;
    const optSuggestion = {
            url         : 'http://private-047f-meliuztestefrontend.apiary-mock.com/artists',
            idField     : 'js-field',
            idContainer : 'js-suggestions',
            classItems  : 'js-suggestions-item',
            classButtons: 'js-suggestions-item'
          };

    beforeEach(() => {

      var fixture = '<div class="search">' +
      '<form class="search-form" action="" role="form">' +
        '<fieldset class="form-fieldset">' +
          '<legend class="form-legend">Formulário de busca de discografias</legend>' +
          '<p><input class="search-form-field" id="js-field" type="text" autocomplete="off"></p>' +
          '<div class="suggestions" id="js-suggestions"></div>' +
        '</fieldset>' +
      '</form>' +
      '</div>';

      document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);

      suggestion = new Suggestion(mediator, optSuggestion);
    });

    it('Verify object', () => {
      assert.equal(Object.keys(suggestion.options).length, 5);
    });
  });

});
