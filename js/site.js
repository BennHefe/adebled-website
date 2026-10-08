(function () {
  var WA = 'https://wa.me/2349037944140';
  document.querySelectorAll('form[data-wa]').forEach(function (form) {
    form.addEventListener('submit', function () {
      var lines = [form.getAttribute('data-wa')];
      form.querySelectorAll('[data-label]').forEach(function (f) {
        if (f.value && f.value.trim()) lines.push(f.getAttribute('data-label') + ': ' + f.value.trim());
      });
      var hidden = form.querySelector('input[name="text"]');
      if (hidden) hidden.value = lines.join('\n');
    });
    form.setAttribute('action', WA);
  });
})();
