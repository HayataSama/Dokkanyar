// A $( document ).ready() block.
$(document).ready(function() {
    user_login()
});


function user_login() {
  $("button").click(function(){
    $.post("api/v1/users/login",
    {
        username: $("#username").val(),
        password: $("#password").val()
    },
    function(data, status){
        if (status == 200) {
          var response = JSON.parse(data)
          if (response.status == "ok") {
            location.href = "users/panel"
          }
          else {
            alert(response.message)
          }
        }
    });
});
}
