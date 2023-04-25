class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery = function () {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  };

  #clearInput = function () {
    this.#parentElement.querySelector('.search__field').value = '';
  };

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
