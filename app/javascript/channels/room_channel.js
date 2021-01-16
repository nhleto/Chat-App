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
      let array = []
      array.push(data)
      window.elements = array
      console.log(data)
      const messageDisplay = document.querySelector('#message-display')
      messageDisplay.insertAdjacentHTML('afterbegin', this.template(data))
  
      let memberDiv = document.querySelector(`.room-${data.room.id}-members`)
      let memberNums = parseInt(document.querySelector(`.room-${data.room.id}-members`).innerHTML.match(/\d+/))
      if (data.users.length !== memberNums){
        memberDiv.innerHTML = `${data.users.length} Members`
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
