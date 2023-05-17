import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessege = `We could not find that recipe. Please try another one`;
  _messege = ``;

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
