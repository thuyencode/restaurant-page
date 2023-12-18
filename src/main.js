import 'iconify-icon'
import { createContactPage, createHomePage, createMenuPage, createNavbar } from './lib/utils'

// https://github.com/htmlstreamofficial/preline/issues/119#issuecomment-1692602870
if (typeof window !== 'undefined') {
  import('preline')
}

createNavbar()
createHomePage()
createMenuPage()
createContactPage()
