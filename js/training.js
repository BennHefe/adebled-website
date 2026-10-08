(function () {
  var select = document.getElementById('course');
  document.querySelectorAll('[data-course]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (select) select.value = btn.getAttribute('data-course');
      var form = document.getElementById('enquire');
      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (select) select.focus({ preventScroll: true });
    });
  });
})();
