import consumer from "./consumer"
import moment from 'moment'

document.addEventListener('turbolinks:load', ()=>{
  consumer.subscriptions.create({channel: "RoomChannel", room: parseURL() }, {
    connected() {
      console.log('Connected!')
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log(data)
      let memberDiv = document.querySelector(`.room-${data.room.id}-members`)
      let roomsBox = document.querySelector('.rooms.box.left .center')
      const messageDisplay = document.querySelector('#message-display')
      messageDisplay.insertAdjacentHTML('afterbegin', this.template(data))
  
      if (document.querySelector(`.room-${data.room.id}-members`)){
        let memberNums = parseInt(document.querySelector(`.room-${data.room.id}-members`).innerHTML.match(/\d+/))
        if (data.users.length !== memberNums){
          memberDiv.innerHTML = `${data.users.length} Members`
          roomsBox.insertAdjacentHTML('afterend', this.template2(data))
        }
      }
    },
    template(data) {
      return `<article class="message mb-2">
                <div class="message-header">
                  <p>${data.user.username}</p>
                  <p class='time'>${moment(this.textContent).fromNow()}</p>
                </div>
                <div class="message-body">
                  <p>${data.message.body}</p>
                </div>
              </article>`
    },
    template2(data){
      return `<span class='center'>
                <i class="fa fa-circle user-${data.user.id}-status online"></i>
                <p class='ml-1'>${data.user.username}</p> 
              </span>`
    }
  });
  
  function parseURL(){
    if (window.location.href.match(/\/\d+/)){
      let x = window.location.href.match(/\/\d+/).join().split('')
      let y = x.shift()
      let j = parseInt(x.join(''))
      return j
    }
  }
})
