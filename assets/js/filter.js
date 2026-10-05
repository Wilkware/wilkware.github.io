const buttons = [...document.querySelectorAll('.filter__btn')];
const cards = [...document.querySelectorAll('.card[data-category]')];
const keys = buttons.map((btn) => btn.dataset.filter);

/**
 * Show only the cards of the given category and mark the matching button.
 */
const applyFilter = (key) => {
  const active = keys.includes(key) ? key : 'all';
  buttons.forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.filter === active)));
  cards.forEach((card) => {
    card.hidden = active !== 'all' && card.dataset.category !== active;
  });
};

const fromHash = () => decodeURIComponent(location.hash.slice(1)) || 'all';

buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    const key = btn.dataset.filter;
    history.replaceState(null, '', key === 'all' ? location.pathname + location.search : `#${key}`);
    applyFilter(key);
  })
);

window.addEventListener('hashchange', () => applyFilter(fromHash()));
applyFilter(fromHash());
