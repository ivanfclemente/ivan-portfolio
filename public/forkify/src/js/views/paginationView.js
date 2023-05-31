import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next');
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev');
    }
    // Other page
    if (curPage < numPages) {
      return (
        this._generateMarkupButton('prev') + this._generateMarkupButton('next')
      );
    }

    // Page 1, and there are no other pages
    return '';
  }

  _generateMarkupButton(buttonType) {
    const curPage = this._data.page;
    const pageToGo = buttonType === 'prev' ? curPage - 1 : curPage + 1;

    return `
        <button data-goto="${pageToGo}" class="btn--inline pagination__btn--${buttonType}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${
      buttonType === 'prev' ? 'left' : 'right'
    }"></use>
            </svg>
            <span>Page ${pageToGo}</span>
        </button>
      `;
  }
}

export default new PaginationView();
