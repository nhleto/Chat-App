import consumer from "./consumer"
import moment from 'moment'

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const messageDisplay = document.querySelector('#message-display')
    messageDisplay.insertAdjacentHTML('afterbegin', this.template(data))
  },
  template(data) {
    return `<article class="message mb-2">
              <div class="message-header">
                <p>${data.user.username}</p>
                <p class='time'>${moment(this.textContent).fromNow()}</p>
              </div>
              <div class="message-body">
                <p>${data.body}</p>
              </div>
            </article>`
  }
});
