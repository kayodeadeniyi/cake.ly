
var navbar = {
  // variables
  $element: $('.ck-navbar'),

  show: function() {
    this.$element.addClass('open')
  }
}

var hero = {
  // variables
  $browseBtn: $('.ck-hero-content button'),
  $baseElement: $('.ck-hero'),

  init: function() {
    this.$browseBtn.click(function(){
      navbar.show()
      hero.$baseElement.fadeOut()
    })
  }
}

var carousels = {
  // variables
  $mainCarousel: $('.ck-main-carousel'),

  init: function() {
    this.$mainCarousel.click(function(){
      sideBar.open()
    })
  }
}

var sideBar = {
  // variables
  $baseElement: $('.ck-sidebar'),

  open: function() {
    sideBar.$baseElement.addClass('open')
    sideBar.$baseElement.click(function(){
      $(this).removeClass('open')
    })
  }
}

$(document).ready(function(){
  hero.init()
  carousels.init()
})
