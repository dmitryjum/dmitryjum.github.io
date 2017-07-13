$(function() {
  $('#send-message').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var emailObject = {
      'message': $('#message').val(),
      'subject': $('#subject').val(),
    }
    var emailHref = 'mailto:dmitryjum@gmail.com' + '?subject=' + emailObject.subject + '&body=' + emailObject.message
    window.location.href = emailHref;
  })
})