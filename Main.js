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
        location.href = "index.html";

      }
    }

  }

}
//hreflink
function ReplaceLink() {
  location.href = "index.html";
}

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* Login Authen*/

var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = "./index.html";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.mecallapi.com/api/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      username: username,
      password: password,
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects["status"] == "ok") {
        localStorage.setItem("jwt", objects["accessToken"]);
        Swal.fire({
          text: objects["message"],
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./index.html";
          }
        });
      } else {
        Swal.fire({
          text: objects["message"],
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  return false;
}

/* text loading */

var indexLoading = 0;
var txt = `Lorem ipsum dolor sit amet, consectetuer"
/*adipiscing elit, sed diamnonummy nibh euismod 
tincidunt ut laoreet dolore magna aliquam eratvolutpat.`;
var speed = 50;
function typeWriter() {
  if (indexLoading < txt.length) {
    document.getElementById("textLoading").innerHTML += txt.charAt(indexLoading);
    indexLoading++;
    setTimeout(typeWriter, speed);
  }
}