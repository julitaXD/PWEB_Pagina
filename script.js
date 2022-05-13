function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" nome1", "nome2");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " nome1";
}
document.getElementById("paginaEat").click();
  AudioScheduledSourceNode