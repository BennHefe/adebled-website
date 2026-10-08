(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('a[data-lb]'));
  if (!links.length || typeof HTMLDialogElement !== 'function') return;
  var dlg = document.createElement('dialog');
  dlg.className = 'lb';
  dlg.setAttribute('aria-label', 'Photo viewer');
  dlg.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button class="lb-btn lb-close" type="button" aria-label="Close">&times;</button>' +
    '<button class="lb-btn lb-prev" type="button" aria-label="Previous photo">&#8249;</button>' +
    '<button class="lb-btn lb-next" type="button" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(dlg);
  var img = dlg.querySelector('img'), cap = dlg.querySelector('figcaption'), i = 0;
  function visible() { return links.filter(function (a) { return !a.closest('[hidden]'); }); }
  function show(n) {
    var list = visible(); if (!list.length) return;
    i = (n + list.length) % list.length;
    var a = list[i], t = a.querySelector('img');
    img.src = a.getAttribute('href'); img.alt = t ? t.alt : '';
    var fc = a.parentNode.querySelector('figcaption'); cap.textContent = fc ? fc.textContent : '';
  }
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault(); show(visible().indexOf(a)); dlg.showModal();
    });
  });
  dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.lb-prev').addEventListener('click', function () { show(i - 1); });
  dlg.querySelector('.lb-next').addEventListener('click', function () { show(i + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();
