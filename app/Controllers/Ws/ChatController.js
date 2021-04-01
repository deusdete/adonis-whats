'use strict'

class ChatController {
  constructor ({ socket }) {
    this.socket = socket
  }

  onMessage (message) {
    console.log('message', message)
    this.socket.broadcastToAll('message', message)
  }
}

module.exports = ChatController
