var MessageView = {
  render: function (message) {
    var template = _.template(`
      <div class="chat">
      <div class="username"><b><%- username %></b></div>
      <div><%- text %></div>
      </div>
      `);
    return template(message);
  },
};
