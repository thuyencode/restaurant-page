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
 * @returns {HTMLDivElement}
 */
export function createMenuItem(menuProps) {
  const template = `
<h2 class="flex items-center justify-between border-b border-dashed border-slate-500 pb-3 dark:border-slate-300">
  ${menuProps.title}
  <span>${menuProps.price} đ</span>
</h2>
`

  return htmlToElement(template)
}
