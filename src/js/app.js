// burger
let burger = document.querySelector(".burger");
let headerNav = document.querySelector(".navbar ul");
const contact = document.querySelector(".contact");

burger.addEventListener("click", function () {
  headerNav.classList.toggle("active");
  contact.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// slider
const swiper = new Swiper(".swiper", {
  loop: true,

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// modal
const modalOn = document.querySelector("#hero__row-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const send = document.querySelector(".btn");

modalOn.onclick = () => {
  modal.classList.remove("modal-hidden");
  document.body.classList.toggle("no-scroll");
};

closeModal.onclick = () => {
  modal.classList.add("modal-hidden");
  document.body.classList.toggle("no-scroll");
};

send.onclick = () => {
  modal.classList.add("modal-hidden");
  document.body.classList.toggle("no-scroll");
};

//mail.php

// $("#form").on("submit", function () {
//   $.ajax({
//     url: "/handler.php",
//     method: "post",
//     dataType: "html",
//     data: $(this).serialize(),
//     success: function (data) {
//       $("#message").html(data);
//     },
//   });
// });

document.forms.ourForm.onsubmit = function (e) {
  e.preventDefault();

  const userInput = document.forms.ourForm.login.value;
  // userInput = encodeURIComponent(userInput);
  const emailInput = document.forms.ourForm.email.value;
  const textareaInput = document.forms.ourForm.textarea.value;

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "mail.php?" +
      "login=" +
      userInput +
      "?email=" +
      emailInput +
      "?textarea=" +
      textareaInput.trim()
  );
  xhr.send(userInput);

  // xhr.open("POST", "mail.php");

  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4 && xhr.status === 2000) {
  //     message.textContent = xhr.responseText;
  //   }
  // };

  // xhr.send("login=" + userInput);
};
