var RoomsView = {
  $button: $("#rooms button"),
  $select: $("#rooms select"),

  initialize: function () {
    $("#rooms select").change(RoomsView.onChange);
  },

  renderRoom: function (room) {
    $("#rooms select").append(RoomsView.render(room));
  },

  render: function (room) {
    let roomname = {roomname: room};
    var template = _.template(`
      <option class="room" value="<%- roomname %>"><%- roomname %></option>
    `);
    return template(roomname);
  },

  onChange: function (event) {
    console.log("changed", event.target.value);
    MessagesView.renderMessages(_.filter(Messages.messages, (message) => message.roomname === event.target.value));
  }

};
