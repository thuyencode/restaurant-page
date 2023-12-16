/// <reference path="../global.d.ts" />

/**
 * Convert a HTML string to a HTML DOM
 *
 * @param {string} html
 * @returns {HTMLElement}
 */
export function htmlToElement(html) {
  const temp = document.createElement('template')
  temp.innerHTML = html.trim()

  return temp.content.firstChild
}

/**
 *
 * @param {MenuItem} menuProps
 * @returns
 */
export function createCard(menuProps) {
  const template = `
<div class="card-wrapper">
  <div class="card-head-wrapper group">
    <img
      class="card-head-img group-hover:scale-125"
      src="${menuProps.imgUrl}"
      alt="Image of ${menuProps.title}"
      loading="lazy"
    />
    <div class="card-title-wrapper">
      <h3 class="card-title">${menuProps.title}</h3>
      <span class="badge">$${menuProps.price}</span>
    </div>
    <div class="card-head-gradient group-hover:scale-125"></div>
  </div>
  <div class="card-content-wrapper">
    <p class="card-description">
      ${menuProps.description}.
    </p>
  </div>
</div>`

  return htmlToElement(template)
}
