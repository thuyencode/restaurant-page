/// <reference path="../global.d.ts" />

import db from '../db.json'

/**
 * @type {HTMLDivElement}
 */
const contentDiv = document.querySelector('#content')

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
 * @param {MenuItem} menuProps
 * @returns {HTMLDivElement}
 */
function createMenuItem(menuProps) {
  const template = `
<h2 class="flex items-center justify-between border-b border-dashed border-slate-500 pb-3 dark:border-slate-300">
  ${menuProps.title}
  <span>${menuProps.price} đ</span>
</h2>
`

  return htmlToElement(template)
}

function addMenuItems() {
  /**
   * @type {HTMLDivElement}
   */
  const menuContainer = document.querySelector('#menu-container')

  menuContainer.innerHTML = ''

  for (const item of db) {
    menuContainer.appendChild(createMenuItem(item))
  }
}

export function createNavbar() {
  const template = `
<nav class="fixed inset-x-0 top-0 z-10 flex border-b-2 border-white bg-orange-100 dark:bg-slate-900" aria-label="Tabs" role="tablist">
  <button
    class="active inline-flex w-1/3 items-center justify-center gap-x-2 whitespace-nowrap py-3 text-gray-800 hover:bg-white/60 hover:font-semibold disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:font-semibold hs-tab-active:text-slate-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    type="button" id="tab-home-item" data-hs-tab="#tab-home" aria-controls="tab-home" role="tab"
  >
    <h3>Home</h3>
  </button>
  <button
    class="inline-flex w-1/3 items-center justify-center gap-x-2 whitespace-nowrap py-3 text-gray-800 hover:bg-white/60 hover:font-semibold disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:font-semibold hs-tab-active:text-slate-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    type="button" id="tab-menu-item" data-hs-tab="#tab-menu" aria-controls="tab-menu" role="tab"
  >
    <h3>Menu</h3>
  </button>
  <button
    class="inline-flex w-1/3 items-center justify-center gap-x-2 whitespace-nowrap py-3 text-gray-800 hover:bg-white/60 hover:font-semibold disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:font-semibold hs-tab-active:text-slate-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    type="button" id="tab-contact-item" data-hs-tab="#tab-contact" aria-controls="tab-contact" role="tab"
  >
    <h3>Contact</h3>
  </button>
</nav>`

  contentDiv.appendChild(htmlToElement(template))
}

export function createHomePage(params) {
  const template = `
<div class="mt-12" id="tab-home" role="tabpanel" aria-labelledby="tab-home">
  <div class="relative h-[45vh] bg-home bg-cover bg-center dark:bg-home-dark">
    <div class="flex h-full flex-col justify-center space-y-3 text-center text-white backdrop-blur-sm">
      <h1 class="font-sans">Welcome to</h1>
      <h1 class="text-4xl md:text-5xl">Thuyen Code's Restaurant</h1>
    </div>
    <p class="absolute inset-x-0 bottom-5 text-center font-sans text-xs text-white/80 dark:hidden md:text-sm">
      Photo by
      <a class="border-b border-white text-white" href="https://unsplash.com/photos/people-inside-cafe-qE1jxYXiwOA" target="_blank">
        Petr Sevcovic
      </a>
    </p>
    <p class="absolute inset-x-0 bottom-5 hidden text-center font-sans text-xs text-white/80 dark:inline md:text-sm">
      Photo by
      <a class="border-b border-white text-white" href="https://unsplash.com/photos/a-group-of-people-sitting-at-a-table-in-a-restaurant-uskQ8hyZNgQ" target="_blank">
        Leohoho
      </a>
    </p>
  </div>

  <div class="gap-5 p-5 text-center max-md:flex max-md:flex-col md:px-8 lg:px-16">
    <div class="md:float-left md:w-1/2">
      <h1 class="mb-3 inline-flex items-center gap-2 font-semibold">
        <iconify-icon icon="fluent-mdl2:business-hours-sign"></iconify-icon>
        Open Hours
      </h1>
      <ul class="space-y-2 font-sans">
        <li class="font-light">
          <p>Sunday: <span class="font-medium">8am - 8pm</span></p>
        </li>
        <li class="font-light">
          <p>Monday: <span class="font-medium">6am - 6pm</span></p>
        </li>
        <li class="font-light">
          <p>Tuesday: <span class="font-medium">6am - 6pm</span></p>
        </li>
        <li class="font-light">
          <p>Wednesday: <span class="font-medium">6am - 6pm</span></p>
        </li>
        <li class="font-light">
          <p>Thursday: <span class="font-medium">6am - 10pm</span></p>
        </li>
        <li class="font-light">
          <p>Friday: <span class="font-medium">6am - 10pm</span></p>
        </li>
        <li class="font-light">
          <p>Saturday: <span class="font-medium">8am - 10pm</span></p>
        </li>
      </ul>
    </div>
    <div class="order-first md:float-right md:w-1/2">
      <h1 class="mb-3 inline-flex items-center gap-2 font-semibold">
        <iconify-icon icon="ion:location-outline"></iconify-icon>
        Location
      </h1>
      <p class="font-sans">
        <a class="inline-flex items-center gap-1.5 border-b border-transparent font-sans hover:border-slate-900 dark:hover:border-white" href="https://github.com/thuyencode/restaurant-page" target="_blank">
          <iconify-icon class="text-xl max-xs:hidden" icon="ri:github-fill"></iconify-icon>
          Thuyen Code, Github, The Internet
          <iconify-icon class="text-xl max-xs:hidden" icon="ri:external-link-line"></iconify-icon>
        </a>
      </p>
    </div>
  </div>
</div>`

  contentDiv.appendChild(htmlToElement(template))
}

export function createMenuPage() {
  const template = `
<div class="mt-12 hidden" id="tab-menu" role="tabpanel" aria-labelledby="tab-menu">
  <div class="float-left w-full space-y-3 p-5 font-medium sm:w-2/3 md:px-8 lg:px-16" id="menu-container">
    <h1 class="mt-5 text-center">There're no items on the menu</h1>
  </div>
  <div class="fixed right-0 top-0 -z-10 h-screen w-1/3 bg-menu bg-cover bg-center text-white max-sm:hidden">
    <p class="absolute inset-x-0 bottom-5 text-center font-sans text-xs text-white/80 md:text-sm">
      Photo by
      <a class="border-b border-white text-white" href="https://unsplash.com/photos/a-couple-of-bowls-of-food-on-a-table-QCnvLhKv4is" target="_blank" >
        Monika Borys
      </a>
    </p>
  </div>
</div>`

  contentDiv.appendChild(htmlToElement(template))
  addMenuItems()
}

export function createContactPage() {
  const template = `
<div class="hidden h-screen" id="tab-contact" role="tabpanel" aria-labelledby="tab-contact">
  <div class="flex h-full flex-col justify-center gap-5 p-5 text-center md:gap-10 md:px-8 lg:px-16">
    <div>
      <h1 class="mb-3 inline-flex items-center gap-2 font-semibold">
        <iconify-icon icon="ion:location-outline"></iconify-icon>
        Location
      </h1>
      <p class="font-sans">
        <a class="inline-flex items-center gap-1.5 border-b border-transparent font-sans hover:border-slate-900 dark:hover:border-white" href="https://github.com/thuyencode/restaurant-page" target="_blank">
          <iconify-icon class="text-xl max-xs:hidden" icon="ri:github-fill"></iconify-icon>
          Thuyen Code, Github, The Internet
          <iconify-icon class="text-xl max-xs:hidden" icon="ri:external-link-line"></iconify-icon>
        </a>
      </p>
    </div>
    <div>
      <h1 class="mb-3 inline-flex items-center gap-2 font-semibold">
        <iconify-icon icon="ic:baseline-phone"></iconify-icon>
        Phone Number:
      </h1>
      <h3 class="font-sans">+84 0123 0123 0123</h3>
    </div>
    <div>
      <h1 class="mb-3 inline-flex items-center gap-2 font-semibold">
        <iconify-icon icon="mdi:email-outline"></iconify-icon> Email
      </h1>
      <p class="font-sans">
        <a class="inline-flex items-center gap-1.5 border-b border-transparent font-sans hover:border-slate-900 dark:hover:border-white" href="mailto:thuyencode@protonmail.me" target="_blank">
          thuyencode@protonmail.me
        </a>
      </p>
    </div>
  </div>
</div>`

  contentDiv.appendChild(htmlToElement(template))
}
