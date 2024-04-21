$(document).ready(function(){
    $('.nav-link').on('click', function(){
      $('.tab-pane').removeClass('active show');
      $($(this).attr('href')).addClass('active show');
    });
  });


function handleRegistration(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    fullName,
    email,
    password
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = "login.html";
}

const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", handleRegistration);