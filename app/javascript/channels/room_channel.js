import consumer from "./consumer"

consumer.subscriptions.create({channel: "RoomChannel", room: parseURL() }, {
  connected() {
    // console.log(this)
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    window.elements = data
    let memberDiv = document.querySelector(`.room-${data.room.id}-members`)
    let memberNums = parseInt(document.querySelector(`.room-${data.room.id}-members`).innerHTML.match(/\d+/))
    // console.log(memberNums)
    if (data.user.length !== memberNums){
      let difference = data.user.length - memberNums
      console.log(data.user.length, memberNums, difference)
      memberDiv.innerHTML = `${data.user.length} Members`
    }
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