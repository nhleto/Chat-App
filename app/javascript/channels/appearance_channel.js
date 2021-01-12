import consumer from "./consumer"

consumer.subscriptions.create("AppearanceChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    this.perform('appear')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    window.elements = data
    console.log(data)
    let userDot = document.querySelector(`.user-${data.id}-status`)
    if (data.online === true){
      userDot.classList.add('online')
    } else {
      userDot.classList.remove('online')
    }
  }
});
