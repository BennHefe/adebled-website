(function () {
  var map = { '#it-services': '/it-services/', '#aluminium': '/aluminium/', '#training': '/it-training/', '#it-training': '/it-training/' };
  var target = map[(location.hash || '').toLowerCase()];
  if (target) location.replace(target);
})();
