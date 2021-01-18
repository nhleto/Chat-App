document.addEventListener('turbolinks:load', ()=>{
  document.querySelector('.openbtn').addEventListener('click', ()=>{
    document.getElementById("mySidebar").classList.add('reveal')
    document.getElementById("mySidebar2").classList.remove('reveal')
  })
  document.querySelector('.closebtn').addEventListener('click', ()=>{
    document.getElementById("mySidebar").classList.remove('reveal')
  })

  document.querySelector('.openbtn.users').addEventListener('click', ()=>{
    document.getElementById("mySidebar2").classList.add('reveal')
    document.getElementById("mySidebar").classList.remove('reveal')
  })
  document.querySelector('.closebtn2').addEventListener('click', ()=>{
    document.getElementById("mySidebar2").classList.remove('reveal')
  })
})