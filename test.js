function keepClosed() {
    // Declare all variables
    var i, tabcontent;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
}
function tabOpen(cityName) {
    document.getElementById(cityName).style.display = "block";
}
document.getElementById("l").onclick = function() {tabOpen('London')};
document.getElementById("p").onclick = function() {tabOpen('Paris')};
document.getElementById("t").onclick = function() {tabOpen('Tokyo')};