var MessagesView = {
  $chats: $("#chats"),

  initialize: function () {},

  renderMessages: function (messages) {
    messages.forEach((message) => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function (message) {
    $("#chats").append(MessageView.render(message));
  },
};
