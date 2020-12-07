var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      roomname: 'office',
      text: FormView.$form.find('#message').val(),
      username: App.username,
    };
    Parse.create(message, (data) => {
      console.log(data);
      $("#chats").prepend(MessageView.render(message));
      FormView.$form.find('#message').val("");
    });


    console.log('click submit!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};