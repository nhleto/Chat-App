// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
// import moment from 'moment'

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)



document.addEventListener('turbolinks:load', () => {
  (document.querySelectorAll('.odin-test .notification') || []).forEach(($delete) => {
    let $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.classList.add('hide-flash');
    });
  });

  function dropdown(event){
    event.stopPropagation();
    let items = document.querySelector('.dropdown-items')
    let content = document.querySelector('.dropdown-content')
    items.classList.toggle('show')
    content.classList.toggle('show')
    if (items.style.display == 'flex'){
      items.style.display = 'none'
    } else {
      items.style.display = 'flex'
    }
  }

  function rotate(event){
    event.stopPropagation();
    document.querySelector('.fa-caret-down').classList.toggle('down')
  }

  if ( document.querySelector('.dropbtn')){
    document.querySelector('.dropbtn').addEventListener('click', dropdown)
    document.querySelector('.dropbtn').addEventListener('click', rotate)
  }

  if (document.querySelector(".fa-caret-down")){
    window.onclick = function(event) {
      document.querySelector(".fa-caret-down").classList.remove("down")
      document.getElementById("myDropdown").classList.remove("show")
      document.querySelector('.dropdown-items').classList.remove('show')
    };
  }

  let acc = document.getElementsByClassName("accordion");
  let panel = document.getElementsByClassName('panel');
  let acc1 = document.getElementsByClassName("accordion1");
  let panel1 = document.getElementsByClassName('panel1');

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

  for (let i = 0; i < acc1.length; i++) {
    acc1[i].onclick = function () {
      let setClasses = !this.classList.contains('active');
      setClass(acc1, 'active', 'remove');
      setClass(panel1, 'show', 'remove');

      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.children[0].classList.toggle("show");
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

  const accordion = document.querySelector('.accordion')
  if(accordion){
    accordion.addEventListener('click', closeRoomText)
  }

  if (document.querySelector('.submitter')){
    document.querySelector('.submitter').addEventListener('click', ()=> {
      setTimeout(() => {
        let input = document.querySelector('#message-input')
        input.value = ''
      }, 100);
    }) 
  }

  document.querySelector('.submitter').addEventListener('click', ()=>{
    setTimeout(() => {
      let imgSRC = document.querySelector('.image-base').src
      let image = document.querySelector('.image-base')

      function toDataUrl(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            let reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
    toDataUrl(imgSRC, function(myBase64) {
      if (image.width < 25){
        let newImage  = document.createElement('img');
        newImage.src = myBase64
        document.querySelector('.message-header').insertAdjacentElement('afterbegin', newImage).classList.add('gravatar')
        image.remove()
      }
    });
    }, 250)
  })


  if (document.querySelector('.submitter')){
    document.querySelector('.submitter').addEventListener('click', ()=> {
      const chatWindow = document.querySelector('#message-display')
      let xH = chatWindow.scrollHeight;
      setTimeout(() => {
        chatWindow.scrollTo(0, xH);
      }, 250);
    })
  }

  let ellipses = document.querySelector('.ellipsis2')
  let deleteButton = document.querySelector('#delete-button')
  if (ellipses){
    ellipses.addEventListener('click', ()=>{
      console.log(deleteButton)
      if (deleteButton.style.display == 'block'){
        deleteButton.style.display = 'none'
      } else {
        deleteButton.style.display = 'block'
      }
    })
  }
})
