var RoomsView = {
  $button: $("#rooms button"),
  $select: $("#rooms select"),

  initialize: function () {
    RoomsView.$button.on('submit', RoomsView.handleAddRoom);
  },

  renderRoom: function (room) {
    $("#rooms select").append(RoomsView.render(room));
  },

  render: function (room) {
    let roomname = {roomname: room};
    var template = _.template(`
      <option class="room"><%- roomname %></option>
    `);
    return template(roomname);
  },

  handleAddRoom: function () {
    console.log('clicked');
  }
};
