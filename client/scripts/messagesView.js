var MessagesView = {
  $chats: $("#chats"),

  initialize: function () {

  },

  renderMessages: function (messages) {
    messages.forEach((message) => {

      console.log(message);
      var $message = MessageView.render(message);

      $("#chats").append($message);
    });
  },
};
