// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener('turbolinks:load', () => {
  (document.querySelectorAll('.odin-test .notification') || []).forEach(($delete) => {
    let $notification = $delete.parentNode;
    console.log($notification)

    $delete.addEventListener('click', () => {
      $notification.classList.add('hide-flash');
    });
  });

  function dropdown(event){
    event.stopPropagation();
    document.querySelector('.dropdown-content').classList.toggle('show')
  }

  function rotate(event){
    event.stopPropagation();
    document.querySelector('.fa-caret-down').classList.toggle('down')
  }

  document.querySelector('.dropbtn').addEventListener('click', dropdown)
  document.querySelector('.dropbtn').addEventListener('click', rotate)

  window.onclick = function(event) {
    document.querySelector(".fa-caret-down").classList.remove("down")
    document.getElementById("myDropdown").classList.remove("show")
  };

  let acc = document.getElementsByClassName("accordion");
  let panel = document.getElementsByClassName('panel');

  for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      let setClasses = !this.classList.contains('active');
      setClass(acc, 'active', 'remove');
      setClass(panel, 'show', 'remove');

      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    }
  }

  function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }

  function closeRoomText(){
    const buttonText = document.querySelector('.accordion')
    if (buttonText.innerHTML === 'Close'){
      buttonText.innerHTML = 'New Room'
    } else {
      buttonText.innerHTML = 'Close'
    }
  }

  document.querySelector('.accordion').addEventListener('click', closeRoomText)
});
