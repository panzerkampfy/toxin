const $selects = $('.js-select-counter');
[...$selects].forEach((select) => {initSelectCounter(select)})



function initSelectCounter(select) {
  $(select).on('click', showDropdown);

  function showDropdown(e) {
    if (!$(e.currentTarget).hasClass('select-counter--expanded')) {
      $(e.currentTarget).addClass('select-counter--expanded');
    }
    $(document).on('click', hideDropdown);
  }

  function hideDropdown(e) {
    const $isOutsideClick = !$(select).is(e.target) && $(select).has(e.target).length === 0;
    if ($isOutsideClick){
      $(select).removeClass('select-counter--expanded');
    }
  }
}