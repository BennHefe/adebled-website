(function () {
  var chips = document.querySelectorAll('.chip[data-filter]');
  var tiles = document.querySelectorAll('.gallery .tile');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      tiles.forEach(function (t) { t.hidden = f !== 'all' && t.getAttribute('data-tag') !== f; });
    });
  });
})();
