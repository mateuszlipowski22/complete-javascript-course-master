import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   * Render the ercived object to the DOM
   * @param {Object | Object[]} data the data to be rendered
   * @param {boolean} [render=true] if false, create markup instead of rendering to the DOM.
   * @returns {undefined | string} A markup string is returned if render=true
   * @this {Object} View instance
   * @author Mateusz
   * @Todo finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newElem, i) => {
      const curEl = curElements[i];

      if (
        !newElem.isEqualNode(curEl) &&
        newElem.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newElem.textContent;
      }

      if (!newElem.isEqualNode(curEl)) {
        Array.from(newElem.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(messege = this._errorMessege) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${messege}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessege(messege = this._messege) {
    const markup = `
      <div class="messege">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${messege}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
