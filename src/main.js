import 'iconify-icon'
import db from './db.json'
import { createMenuItem } from './lib/utils'

// https://github.com/htmlstreamofficial/preline/issues/119#issuecomment-1692602870
if (typeof window !== 'undefined') {
  import('preline')
}

/**
 * @type {HTMLDivElement}
 */
const menuContainer = document.querySelector('#menu-container')

menuContainer.innerHTML = ''

for (const item of db) {
  menuContainer.appendChild(createMenuItem(item))
}
