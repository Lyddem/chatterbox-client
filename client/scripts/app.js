var app = {

  server: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',

  send: function (messageObj) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(messageObj),
      contentType: 'application/json',
      success: function() {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });

  },

  fetch: function() {
    $.ajax({
      url: app.server,
      type: 'GET',
      data: { order: "-createdAt"},
      success: function (data) {
        console.log('get data', data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message', data);
      }
    });
  },

  clearMessages: function () {
    $('#chats').empty();
  },

  renderMessage: function (message) {

      $('#chats').append("<div>" +  message.username + ": " + message.text +  "</div>");
      app.send(window.text);

      $('#message').val('');
  // })
  },

  renderRoom: function (room) {
    $('#roomSelect').append("<option>" + room + "</option>");

    // 1. var $option = $('<option/>').val(room).text(room).
    // 2. append to options

    //encode uri

  },

  handleUsernameClick: function (event) {

  },

  handleSubmit: function () {
    var message  = {};

      message.username = window.location.search.slice(10, window.location.search.length),
      message.text = $('#message').val(),
      message.roomname = $('#roomSelect').val()

      app.send(message);
      app.renderMessage(message);

  },

  init: function () {

    $('.submit').on('click', function(){
        app.handleSubmit();
    });

    app.fetch();
  }


};

$(document).ready(app.init);


