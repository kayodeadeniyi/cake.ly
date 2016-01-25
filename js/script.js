
var navbar = {
  $element: $('.ck-navbar'),

  show: function() {
    this.$element.addClass('open')
  }
}

var hero = {
  $browseBtn: $('.ck-hero-content button'),
  $baseElement: $('.ck-hero'),

  init: function() {
    this.$browseBtn.click(function() {
      navbar.show()
      hero.$baseElement.fadeOut()
    })
  }
}
var main = {
  $baseElement: $('main'),
  $collapsedMain: $('main.collapse')
}

var cover = {
  $baseElement: $('.ck-cover'),

  init: function() {
    this.$baseElement.click(function() {
      sideBar.$baseElement.removeClass('open')
      main.$baseElement.removeClass('collapse')
      $(this).removeClass('open')
    })
  }
}

var carousels = {
  $mainCarousel: $('.ck-main-carousel'),

  init: function() {
    this.$mainCarousel.click(function() {
      sideBar.open()
    })
  }
}

var sideBar = {
  $baseElement: $('.ck-sidebar'),

  open: function() {
    sideBar.$baseElement.addClass('open')
    cover.$baseElement.addClass('open')
    main.$baseElement.addClass('collapse')
  }
}

$(document).ready(function(){
  hero.init()
  carousels.init()
  cover.init()
})
