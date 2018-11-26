function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
document.getElementById('no').addEventListener('change', function() {
  mainmenufun();
})

function mainmenufun() {
  var x = document.getElementsByClassName("no")[0].value;
  if (x > 0 && x != 0) {
    document.getElementsByClassName("mainmenu")[0].style.display = "block";
  }
  if (x < 0 || x == 0) {
    document.getElementsByClassName("mainmenu")[0].style.display = "none";
  }
}