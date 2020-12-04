var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: '',
      text: $( "input" ).first().val(),
      roomname: 'lobby',
    };
    console.log('click!', $( "input" ).first().val(), Messages);
    Parse.create(message, () => {
      Messages = [message, ...Messages];
      MessagesView.render();
    });
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};