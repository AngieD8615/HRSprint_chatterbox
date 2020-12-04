var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
    _.each(Rooms, (room) => {
      RoomsView.$select.append('<select><%= room %></select>');
    });
  }

};
