////////////////////////////////////////////////////////////////////////////////
// Map locations
////////////////////////////////////////////////////////////////////////////////
(() => {
  let mapModule
  let section
  let center

  document.addEventListener('object:accordeon', onTabEvent)

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return
    const tabs = section.getElementsByClassName('location__tabs')[0]
    if (!tabs) return

    const currentTab = getCurrentTab({ tabs: tabs })
    if (currentTab !== 'undefined') {
      const distances = window.$inveroom.locations.distances[currentTab]
      showMap({ pois: distances })
    }

    if (e.detail.state == 'open') {
      tabs.addEventListener('click', onTabClick)
    }
    if (e.detail.state == 'close') {
      tabs.removeEventListener('click', onTabClick)
    }
  }

  function onTabClick(e) {
    const target = e.target
    if (!target.classList.contains('tab')) return
    const currentItem = target.innerText
    if (currentItem == 'undefined') return
    const distances = window.$inveroom.locations.distances[currentItem]
    mapModule.deleteMarkers()
    mapModule.registerMarker({ pois: distances })
    mapModule.renderMarkers()

    const distancesContent = section.getElementsByClassName('detail__items')[0]
    updateDistances({ pois: distances, target: distancesContent })
  }

  function getCurrentTab({ tabs }) {
    const tab = tabs.getElementsByClassName('tab--active')[0]
    if (tab) return tab.innerText

    return 'undefined'
  }

  function showMap({ pois }) {
    mapModule = import('../modules/Google/maps.js')
      .then((Module) => {
        mapModule = new Module.GoogleMapApi({
          apiKey: window.$inveroom.googleMapApiKey,
          afterLoad: () => {
            afterInit({ pois: pois })
          }
        })
        mapModule.Load()

        return mapModule
      });
  }

  function afterInit({ pois }) {
    center = { lat: window.$inveroom.locations.object.lat, lng: window.$inveroom.locations.object.lon }
    mapModule.InitMap({
      div: 'map',
      options: {
        center: center,
        zoom: 15,
        disableDefaultUI: !1,
        zoomControl: !0,
        streetViewControl: !1,
        fullscreenControl: !0,
      }
    })

    showMainMarker()

    mapModule.deleteMarkers()
    mapModule.registerMarker({ pois: pois })
    mapModule.renderMarkers()
  }

  function updateDistances({ pois, target }) {
    target.innerHTML = ''
    for (const poi in pois) {
      const item = pois[poi]
      const template = '<div class="detail__item"><div class="detail__item-title"><img src="/img/check.svg" alt=""><span class="detail__item-title-value">' + item.distance_name + '</span></div><div class="detail__item-desc"><span class="detail__item-desc-value">' + item.distance_value + '</span> m</div></div>'
      target.innerHTML = target.innerHTML + template
    }
  }

  function showMainMarker() {
    const mainMarkerWindow = mapModule.createMainMarker({center: center})
    const city = window.$inveroom.locations.object.city
    const country = window.$inveroom.locations.object.country
    mainMarkerWindow.setContent(country + ', ' + city)
    mapModule.showMainMarker()
    mapModule.getMainMarker().addListener('click', onMainMarkerClick)
  }

  function onMainMarkerClick(e) {
    mapModule.showMainMarker()
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Charts
////////////////////////////////////////////////////////////////////////////////
(() => {
  let section
  let chartModule

  document.addEventListener('object:accordeon', onTabEvent)

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return
    const tabs = section.getElementsByClassName('chart__tabs')[0]
    if (!tabs) return

    const currentTab = getCurrentTab({ tabs: tabs })
    if (currentTab !== 'undefined') {
      const contentActive = section.getElementsByClassName('tab__content--active')[0]
      const chart = contentActive.getElementsByClassName('chart-block')[0]
      const data = window.$inveroom.prices.dynamics[currentTab]
      renderChart({ chartEl: chart, data: data })
    }

    if (e.detail.state == 'open') {
      tabs.addEventListener('click', onTabClick)
    }
    if (e.detail.state == 'close') {
      tabs.removeEventListener('click', onTabClick)
    }
  }

  function getCurrentTab({ tabs }) {
    const tab = tabs.getElementsByClassName('tab--active')[0]
    if (tab) return tab.innerText

    return 'undefined'
  }

  function onTabClick(e) {
    const target = e.target
    if (!target.classList.contains('tab')) return
    const contentActive = section.getElementsByClassName('tab__content--active')[0]
    const currentItem = target.innerText
    if (currentItem == 'undefined') return
    const chart = contentActive.getElementsByClassName('chart-block')[0]
    const chartInstance = contentActive.getElementsByClassName('apexcharts-canvas')[0]
    if (chartInstance) return
    const data = window.$inveroom.prices.dynamics[currentItem]
    renderChart({ chartEl: chart, data: data })
  }

  function renderChart({ chartEl, data }) {
    if (!data) return
    if (chartModule) {
      chartModule.Init({ el: chartEl, data: data })
      return;
    }
    chartModule = import('/js/modules/chart.js')
      .then((Module) => {
        chartModule = new Module.Charts()
        chartModule.Init({ el: chartEl, data: data })
      });
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Price
////////////////////////////////////////////////////////////////////////////////
(() => {
  const priceSection = document.getElementById('main__price')
  if (!priceSection) return
  let currencyValue, currencySymbol
  let baseSquareMeterPrice = priceSection.getElementsByClassName('price_square_meter__value')[0]
  if(baseSquareMeterPrice)
    baseSquareMeterPrice = baseSquareMeterPrice.innerText

  priceSection.addEventListener('click', onPriceClick)

  function onPriceClick(e) {
    const target = e.target
    const parent = document.getElementById('main__price')
    if (!target.closest('.main__price-currency-item')) return

    const currencies = target.closest('.main__price-currency')
    clearCurrenciesActive(currencies)
    target.classList.add('main__price-currency-item--active')
    currencyValue = target.getAttribute('data-value')
    currencySymbol = target.innerText
    const priceDiv = parent.getElementsByClassName('main__price-num')[0]
    const priceUnformatted = priceDiv.getAttribute('data-price')
    const price = priceDiv.getElementsByClassName('main__price-value')[0]
    const priceSymbolDiv = priceDiv.getElementsByClassName('main__price-symbol')[0]
    const newPrice = priceUnformatted * currencyValue
    price.innerText = newPrice.toLocaleString('ru-RU')
    priceSymbolDiv.innerText = currencySymbol

    updateSquarePerMeter(priceSection)
  }

  function updateSquarePerMeter(target) {
    const section = target.getElementsByClassName('price_square_meter')[0]
    if(!section) return

    const price = section.getElementsByClassName('price_square_meter__value')[0]
    const priceSymb = section.getElementsByClassName('price_square_meter__unit')[0]
    const priceNew = Math.floor(baseSquareMeterPrice * currencyValue)
    price.innerText = priceNew.toLocaleString('ru-RU')
    priceSymb.innerText = currencySymbol
  }

  function clearCurrenciesActive(currencies) {
    const items = currencies.getElementsByClassName('main__price-currency-item')
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      item.classList.replace('main__price-currency-item--active', 'main__price-currency-item')
    }
  }

})();

////////////////////////////////////////////////////////////////////////////////
// Main gallery
////////////////////////////////////////////////////////////////////////////////
(() => {
  const popup = document.getElementById('main_gallery--popup')
  const gallery = document.getElementById('main__gallery')
  if (!popup || !gallery) return

  gallery.addEventListener('click', onGalleryClick)
  let module
  module = import('/js/modules/gallery.js')
    .then((Module) => {
      module = new Module.Gallery(gallery, popup)
      return Module
    });

  function onGalleryClick(e) {
    module.open()
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Mats gallery
////////////////////////////////////////////////////////////////////////////////
(() => {
  const popup = document.getElementById('mats_gallery--popup')
  const gallery = document.getElementById('materials__gallery')
  if (!popup || !gallery) return

  gallery.addEventListener('click', onGalleryClick)
  let module
  module = import('/js/modules/gallery.js')
    .then((Module) => {
      module = new Module.Gallery(gallery, popup)
      return Module
    });

  function onGalleryClick(e) {
    const target = e.target
    const img = target.getElementsByTagName('img')[0]
    if (!img) return

    if (!img.getAttribute('data-big-img')) return

    const bigImg = document.createElement('img')
    bigImg.src = img.getAttribute('data-big-img')
    module.appendElement(bigImg)
    module.open()
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Layouts slider
////////////////////////////////////////////////////////////////////////////////
(() => {
  document.addEventListener('object:accordeon', onTabEvent)
  document.addEventListener('tab:afterOpen', afterTabOpen)

  let section
  let sliderInstance
  let galleryInstance
  let sliderContainer
  let slidersContainerStack = []

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return
    if(!section.classList.contains('plan')) return

    if (e.detail.state == 'open') {
      SliderInit()
      GalleryInit(sliderContainer)
    }

    if (e.detail.state == 'close') {
      sliderInstance.destroyAll()
      galleryDestroy()
    }
  }

  function afterTabOpen(e) {
    SliderInit()
    GalleryInit(sliderContainer)
  }

  function SliderInit() {
    const tabContentActive = section.getElementsByClassName('tab__content--active')[0]
    if (!tabContentActive) return

    sliderContainer = tabContentActive.getElementsByClassName('plan__slider')[0]
    slidersContainerStack.push(sliderContainer)
    if (!sliderContainer) return
    import('/js/modules/object_slider.js')
      .then((Module) => {
        const sliderModule = new Module.ObjectSlider(sliderContainer)
        sliderModule.init()
        sliderInstance = sliderModule
      });
  }

  function GalleryInit(sliderContainer) {
    const popup = document.getElementById('layouts_gallery--popup')
    if (!popup || !sliderContainer) return

    import('/js/modules/gallery.js')
      .then((Module) => {
        galleryInstance = new Module.Gallery(sliderContainer, popup)
        return Module
      });

    sliderContainer.addEventListener('click', onGalleryClick)
  }

  function galleryDestroy() {
    for(let i = 0; i < slidersContainerStack.length; i++) {
      const item = slidersContainerStack[i]
      item.removeEventListener('click', onGalleryClick)
    }
  }

  function onGalleryClick(e) {
    const img = e.target
    if (!img) return

    if (!img.getAttribute('data-big-img')) return

    const bigImg = document.createElement('img')
    bigImg.src = img.getAttribute('data-big-img')
    galleryInstance.appendElement(bigImg)
    galleryInstance.open()
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Views slider
////////////////////////////////////////////////////////////////////////////////
(() => {
  document.addEventListener('object:accordeon', onTabEvent)
  document.addEventListener('tab:afterOpen', afterTabOpen)

  let section
  let sliderInstance
  let sliderContainer
  let slidersContainerStack = []

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return

    if(!section.classList.contains('view')) return

    if (e.detail.state == 'open') {
      SliderInit()
    }

    if (e.detail.state == 'close') {
      sliderInstance.destroyAll()
    }
  }

  function afterTabOpen(e) {
    SliderInit()
  }

  function SliderInit() {
    const tabContentActive = section.getElementsByClassName('tab__content--active')[0]
    if (!tabContentActive) return

    sliderContainer = tabContentActive.getElementsByClassName('view__slider')[0]
    slidersContainerStack.push(sliderContainer)
    if (!sliderContainer) return
    import('/js/modules/object_slider.js')
      .then((Module) => {
        const sliderModule = new Module.ObjectSlider(sliderContainer)
        sliderModule.init()
        sliderInstance = sliderModule
      });
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Infrastructure slider
////////////////////////////////////////////////////////////////////////////////
(() => {
  document.addEventListener('object:accordeon', onTabEvent)
  document.addEventListener('tab:afterOpen', afterTabOpen)

  let section
  let sliderInstance
  let slidersContainerStack = []

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return

    if(!section.classList.contains('infrastructure')) return

    if (e.detail.state == 'open') {
      SliderInit()
    }

    if (e.detail.state == 'close') {
      sliderInstance.destroyAll()
    }
  }

  function afterTabOpen(e) {
    SliderInit()
  }

  function SliderInit() {
    const tabContentActive = section.getElementsByClassName('tab__content--active')[0]
    if (!tabContentActive) return

    const sliders = tabContentActive.getElementsByClassName('infrastructure__item')

    for (let i = 0; i < sliders.length; i++) {
      const item = sliders[i]
      if (!item) continue
      const slider = item.getElementsByClassName('slider')[0]
      if (!slider) continue
      slidersContainerStack.push(slider)
      import('/js/modules/object_slider.js')
        .then((Module) => {
          const sliderModule = new Module.ObjectSlider(slider)
          sliderModule.init()
          sliderInstance = sliderModule
        });
    }
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Services slider
////////////////////////////////////////////////////////////////////////////////
(() => {
  document.addEventListener('object:accordeon', onTabEvent)
  document.addEventListener('tab:afterOpen', afterTabOpen)

  let section
  let sliderInstance
  let slidersContainerStack = []

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return

    if(!section.classList.contains('service')) return

    if (e.detail.state == 'open') {
      SliderInit()
    }

    if (e.detail.state == 'close') {
      sliderInstance.destroyAll()
    }
  }

  function afterTabOpen(e) {
    SliderInit()
  }

  function SliderInit() {
    const tabContentActive = section.getElementsByClassName('tab__content--active')[0]
    if (!tabContentActive) return

    const sliders = tabContentActive.getElementsByClassName('service__item')

    for (let i = 0; i < sliders.length; i++) {
      const item = sliders[i]
      if (!item) continue
      const slider = item.getElementsByClassName('slider')[0]
      if (!slider) continue
      slidersContainerStack.push(slider)
      import('/js/modules/object_slider.js')
        .then((Module) => {
          const sliderModule = new Module.ObjectSlider(slider)
          sliderModule.init()
          sliderInstance = sliderModule
        });
    }
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Youtube Player
////////////////////////////////////////////////////////////////////////////////
(() => {
  document.addEventListener('object:accordeon', onTabEvent)
  document.addEventListener('tab:afterOpen', afterTabOpen)

  let section
  let player
  let playerContainer
  let moduleInstance
  let playerStack = []
  let preview
  let loader

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return

    if (isAlienSection()) return

    if (e.detail.state == 'open') {
      previewInit()
    }

    if (e.detail.state == 'close') {
      destroyPlayer()
      previewClear()
    }
  }

  function afterTabOpen(e) {
    if (isAlienSection()) return
    destroyPlayer()
    previewInit()
  }

  function playerInit() {
    destroyPlayer()
    const tabContentActive = section.getElementsByClassName('tab__content--active')[0]
    if (!tabContentActive) return

    playerContainer = tabContentActive.getElementsByClassName('video-block')[0]
    if (!playerContainer) return

    moduleInstance = import('/js/modules/Google/youtube.js')
    .then((Module) => {
      player = new Module.Youtube({ container: playerContainer, onApiReady: onApiReady })
      player.Load()
      playerStack.push(player)
      return player
    });
  }

  function onApiReady() {
   createPlayer()
   hidePreloader()
  }

  function destroyPlayer() {
    if(playerStack.length == 0) return
    for(let i = 0; i < playerStack.length; i++) {
      const instance = playerStack[i]
      instance.clear()
    }
  }

  function createPlayer() {
    if(!moduleInstance) return

    moduleInstance.then((inst) => {
      if(!inst.isApiReady()) return
      const videoId = playerContainer.getAttribute('data-video-id')
      inst.createPlayer({ videoId:videoId })
    })
  }

  function isAlienSection() {
    if(!section.classList.contains('video')) return true

    return false
  }

  function previewInit() {
    const tabContentActive = section.getElementsByClassName('tab__content--active')[0]
    if (!tabContentActive) return

    loader = tabContentActive.getElementsByClassName('loader')[0]

    preview = tabContentActive.getElementsByClassName('video-preview')[0]
    if(!preview) return

    const previewPrototype = tabContentActive.getElementsByClassName('video-preview__prototype')[0]
    if(!previewPrototype) return

    preview.innerHTML = previewPrototype.innerHTML
    const img = preview.getElementsByTagName('img')[0]
    img.src = img.getAttribute('data-src')
    previewShow()

    preview.addEventListener('click', previewClick, {once: true})
  }

  function previewClick(e) {
    previewHide()
    showPreloader()
    playerInit()
    createPlayer()
  }

  function previewHide() {
    preview.style.display = 'none'
  }

  function previewClear() {
    preview.innerHTML = ""
  }

  function previewShow() {
    preview.style.display = 'block'
  }

  function showPreloader() {
    if(loader) loader.style.display = 'block'
  }

  function hidePreloader() {
    if(loader) loader.style.display = 'none'
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Simalar objects zoom previews
////////////////////////////////////////////////////////////////////////////////
(() => {
  document.addEventListener('object:accordeon', onTabEvent)
  document.addEventListener('tab:afterOpen', afterTabOpen)

  let section
  let similarInstance

  function onTabEvent(e) {
    section = e.detail.tab
    if (!section) return

    if(!section.classList.contains('object')) return

    if (e.detail.state == 'open') {
      initModule()
    }

    if (e.detail.state == 'close') {
      similarInstance.clear()
    }
  }

  function afterTabOpen(e) {
    if(!section.classList.contains('object')) return
    initModule()
  }

  function initModule() {
    import('/js/object/similar.js').then((Module) => {
      const similar = new Module.Similar()
      similar.init()
      similarInstance = similar
    });
  }
})();

////////////////////////////////////////////////////////////////////////////////
// Simialar show/hide more objects
////////////////////////////////////////////////////////////////////////////////
(() => {
  const ROWS_VISIBLE_ON_PAGE = 20
  const HIDDEN_ROW_CLASS = 'object__table-row--hidden'
  let currentPage = 0

  const similarSection = document.getElementById('similar-objects')
  if (!similarSection) return

  const btnMore = similarSection.getElementsByClassName('object__btn')[0]
  if (!btnMore) return

  const rowsVisible = filterVisibleTableRows().length
  const rowsTotal = findAllTableRows().length
  if (rowsTotal <= rowsVisible) {
    btnMore.remove()
    return
  }

  currentPage = getCurrentPage()

  btnMore.addEventListener('click', onBtnMoreClick)

  function onBtnMoreClick(e) {
    const target = e.target
    if (!target.closest('.object__btn')) return
    const btn = target.closest('.object__btn')
    const start = currentPage * ROWS_VISIBLE_ON_PAGE
    const end = start + ROWS_VISIBLE_ON_PAGE
    showRowsRange({ start: start, end: end })
    currentPage = getCurrentPage()
    if (isPageLast()) {
      btn.remove()
      return
    }
  }

  function findAllTableRows() {
    const table = similarSection.getElementsByTagName('table')[0]
    if (!table) return
    const body = table.getElementsByTagName('tbody')[0]
    const rows = body.getElementsByTagName('tr')
    return rows
  }

  function filterVisibleTableRows() {
    const allRows = findAllTableRows()
    const visible = []
    for (let i = 0; i < allRows.length; i++) {
      const row = allRows[i];
      if (!row.classList.contains(HIDDEN_ROW_CLASS)) {
        visible.push(row)
      }
    }

    return visible
  }

  function getCurrentPage() {
    const visibleRows = filterVisibleTableRows().length
    const total = findAllTableRows().length
    if (visibleRows == total) return countTotalPages()

    return parseInt(visibleRows / ROWS_VISIBLE_ON_PAGE)
  }

  function isPageLast() {
    const total = countTotalPages()
    if (total == currentPage) return true

    return false
  }

  function showRowsRange({ start, end }) {
    const rows = findAllTableRows()
    for (let i = start; i < end; i++) {
      const row = rows[i]
      if (!row) return
      if (row.classList.contains(HIDDEN_ROW_CLASS)) {
        row.classList.remove(HIDDEN_ROW_CLASS)
      }
    }
  }

  function countTotalPages() {
    const total = findAllTableRows().length
    const pages = total / ROWS_VISIBLE_ON_PAGE
    let fullPages = parseInt(pages)
    const _p = pages - fullPages
    if (_p > 0) {
      fullPages += 1
    }
    return fullPages
  }
})()
