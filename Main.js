var i = 0;
function myFunction() {
  alert("หน้าเว็บไม่พร้อมใช้งาน");
  if (i == 0) {
    i = 1;

    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);

        i = 0;
      } else {
        $("#myProgress").show();
        $("#myBar").show();
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
