import consumer from "./consumer"

consumer.subscriptions.create("AppearanceChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    this.perform('appear')
    // this.perform('user_join_room')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if (document.querySelector(`.user-${data.id}-status`)){
      let userDots = document.querySelectorAll(`.user-${data.id}-status`)
      let mobileUser = document.querySelector(`.user-${data.id}-status-mobile`)
      let spanDots = document.querySelector(`.user-${data.id}-status-span`)
      let desktopFirst = document.querySelectorAll('#desktop-bar')[0]
      let desktopLast = document.querySelector('#desktop-bar:last-of-type')
      let mobileFirst =  document.querySelectorAll('#mobile-bar')[0]
      let mobileLast = document.querySelector('#mobile-bar:last-of-type')

      if (data.online == true){
        desktopFirst.insertAdjacentElement('beforebegin', spanDots)
        mobileFirst.insertAdjacentElement('beforebegin', mobileUser)
        userDots.forEach(element => {
          element.classList.add('online')
        });
      } else {
        if (desktopFirst.innerHTML.includes(`${data.username}`)){
          desktopLast.insertAdjacentElement('afterend', desktopFirst)
        }
        if (mobileFirst.innerHTML.includes(`${data.username}`)){
          mobileLast.insertAdjacentElement('afterend', mobileFirst)
        }
        userDots.forEach(element => {
          element.classList.remove('online')
        });
      }
    }
  }
});
