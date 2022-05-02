let _isInit = false
let $this

class Similar {
  constructor() {
    if (this.isInit()) return
    $this = this
  }

  init() {
    if (this.isInit()) return
    this.clear()
    this.findSelectors()
    this.listenEventsTable()
    this.createModal()
    _isInit = true
  }

  findSelectors() {
    this.similarEl = document.getElementById('similar-objects')
    if (!this.similarEl) return

    this.tableEl = this.similarEl.getElementsByClassName('object__table')[0]
  }

  listenEventsTable() {
    if(!this.tableEl) return
    this.tableEl.addEventListener('click', onTableClick)
  }

  clear() {
    if (this.tableEl) this.tableEl.removeEventListener('click', onTableClick)
    if (this.modalCloseBtn) this.modalCloseBtn.removeEventListener('click', onModalClose)

    if (this.modalEl) this.modalEl.remove()
    _isInit = false
  }

  isInit() {
    return _isInit
  }

  createModal() {
    const modalEl = document.createElement('div')
    modalEl.classList.add('gallery-modal', 'layouts_gallery--popup')
    modalEl.innerHTML = modalTemplate()
    document.body.appendChild(modalEl)

    this.modalCloseBtn = modalEl.getElementsByClassName('gallery-modal__close')[0]
    if (this.modalCloseBtn) this.modalCloseBtn.addEventListener('click', onModalClose)

    this.modalEl = modalEl
  }

  appendModalContent(nodeEl) {
    if(!nodeEl) return
    this.clearModalContent()
    const content = this.modalEl.getElementsByClassName('gallery-modal__img')[0]
    if (!content) return

    content.appendChild(nodeEl)
  }

  clearModalContent() {
    const content = this.modalEl.getElementsByClassName('gallery-modal__img')[0]
    if (!content) return

    content.innerHTML = ""
  }

  modalOpen() {
    this.modalEl.classList.add('gallery-modal--active')
  }

  modalClose() {
    this.modalEl.classList.remove('gallery-modal--active')
  }
}

function onTableClick(e) {
  const icon = e.target
  if (!icon.closest('.object__table-icon')) return

  const bigImgSrc = icon.getAttribute('data-big-img');
  if (!bigImgSrc) return

  const bigImg = document.createElement('img')
  bigImg.src = bigImgSrc

  $this.appendModalContent(bigImg)
  $this.modalOpen()

}

function onModalClose(e) {
  $this.modalClose()
}

function modalTemplate() {
  return '' +
    '<div class="container">' +
       '<div class="gallery-modal__top">' +
            '<button class="gallery-modal__close">' +
                '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7864 10.5629L23.7994 0.549907C24.5316 -0.182326 25.7188 -0.182326 26.451 0.549907C27.1832 1.28214 27.1832 2.46932 26.451 3.20156L16.438 13.2145L26.4513 23.2278C27.1835 23.96 27.1835 25.1472 26.4513 25.8794C25.7191 26.6117 24.5319 26.6117 23.7996 25.8794L13.7864 15.8662L3.77333 25.8792C3.0411 26.6115 1.85392 26.6115 1.12168 25.8792C0.389452 25.147 0.389452 23.9598 1.12168 23.2276L11.1347 13.2145L1.12197 3.20177C0.389735 2.46953 0.389735 1.28235 1.12197 0.550116C1.8542 -0.182117 3.04139 -0.182117 3.77362 0.550116L13.7864 10.5629Z" fill="#7786A5"></path>' +
                '</svg>' +
            '</button>' +
        '</div>' +
        '<div class="gallery-modal__img"></div>' +
    '</div>'
}

export { Similar }
