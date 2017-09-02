var message = {
  username: window.location.search.slice(10, window.location.search.length),
  text: window.text,
  // roomname: roomSelect.value
};

var app = {

  server: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',

  init: function () {
  //  $(document).ready(function() {
    $('.submit').on('click', function () {
      onSubmit();
    });
  //  })
  },

  onSubmit: function(e) {
    e.preventDefault();

    var message = {
      text: $('#message').val()
  };

    app.send(message);
  },

  send: function (message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
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

  renderMessage: function () {

  },

  renderRoom: function () {

  }
  // return app;
};

$(document).ready(app.init);
console.log('hello');
console.log($("roomSelect:selected").val());
// console.log( window.location.search.slice(10, window.location.search.length));
// console.log(window.newsearch.slice(11, window.newsearch.length));
