import '../hamburger-menu/hamburger-menu';

$('.js-site-navigation__dropdown').hide();
$('.js-site-navigation__item')
  .on('mouseover', show)
  .on('mouseleave', hide);

function show(e) {
  $('.js-site-navigation__dropdown', $(e.currentTarget)).fadeIn(100);
}

function hide(e) {
  $('.js-site-navigation__dropdown', $(e.currentTarget))
    .delay(500)
    .fadeOut(150);
}

