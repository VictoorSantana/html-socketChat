

function flagEncas(flag) {
  const encas =  document.getElementById('encas');
  const painel = document.getElementById('painel');

  encas.style.display = !flag ? ('none') : ('block');
  painel.style.display = !flag ? ('none') : ('block');
}
