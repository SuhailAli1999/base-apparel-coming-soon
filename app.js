let input = document.querySelector(".hero__left__form__input");

function validation() {
  let email = document.querySelector(".hero__left__form__input").value;

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    document.getElementById("error-logo").style.display = "none";
    document.getElementById("error-msg").style.display = "none";
    console.log("true");
  } else {
    document.getElementById("error-logo").style.display = "block";
    document.getElementById("error-msg").style.display = "block";
    console.log("false");
  }
}

input.addEventListener("keydown", validation);
