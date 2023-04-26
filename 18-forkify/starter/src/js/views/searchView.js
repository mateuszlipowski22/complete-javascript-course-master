class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery = function () {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  };

  _clearInput = function () {
    this._parentElement.querySelector('.search__field').value = '';
  };

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
