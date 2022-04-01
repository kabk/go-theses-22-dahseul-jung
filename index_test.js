$(document).mousemove(e => {
  $('.custom-cursor').position({
    my: 'left center',
    of: e,
    collision: 'none'
  });
});