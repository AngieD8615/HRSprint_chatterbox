var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
    _.each(Messages, (message) => {
      if (!message.username) {
        message.username = 'unknown';
      }
      if (message.text) {
        var $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      }
    });
  },

};