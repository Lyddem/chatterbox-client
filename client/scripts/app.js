 var app = {

  init: function () {
  // 	$(document).ready(function() {
  		$('.submit').on('click', function () {
  			onSubmit();
  		})
  // 	})
  },

 	onSubmit: function(e) {
  e.preventDefault();

    var message = {
      text: $('#message').val()
    };

    app.send(message);
  },

  send: function (message) {
  	//submit a POST request via $.ajax
  	$.ajax({
		  // This is the url you should use to communicate with the parse API server.
		  url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',
		  type: 'POST',
		  data: JSON.stringify(message),
		  contentType: 'application/json',
		  success: function (data) {
		    console.log('chatterbox: Message sent');
		  },
		  error: function (data) {
		    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
		    console.error('chatterbox: Failed to send message', data);
  		}
		});

  },

  fetch: function() {
  	$.ajax({
		  // This is the url you should use to communicate with the parse API server.
		  url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',
		  type: 'GET',
		  data: {},
		  contentType: 'application/json',
		  success: function (data) {
		    console.log('chatterbox: Message received');
		  },
		  error: function (data) {
		    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
		    console.error('chatterbox: Failed to receive message', data);
  		}
		});
  },

  clearMessages: function () {

  },

  renderMessage: function () {

  },

  renderRoom: function () {

  }
  // return app;
};

app.init();
console.log('hello');

