
function addCharactere(name,url){
  personage.push({name:name,url:url})
}
var carc=[{name:"blackfire",link:"http://127.0.0.1:5500/backfire.html"},{name:"misterX",link:"http://127.0.0.1:5500/misterX.html"},{name:"slade",link:"http://127.0.0.1:5500/slade.html"},{name:"terra",link:"http://127.0.0.1:5500/terra.html"},{name:"trigon",link:"http://127.0.0.1:5500/trigon.html"}]

var users = []//this var didnt get push into it the data of users but it works

     $(document).ready(function() {
    

        function addUsers(username, password) {
          var newUser = {
            username: username,
            password: password
          };
          users.push(newUser)
          return newUser;
        }

      
        function checkUser(username, password) {
          for (var i = 0; i < users.length; i++) {
            if (username === users[i].username && password === users[i].password) {
              return true;
            }
          }
          return false;
        }
      

        $("#signup-btn").click(function() {
          var username = $("#signup-username").val();
          var password = $("#signup-password").val();
          console.log(users)
          users.push(addUsers(username, password));
        
          alert("Sign up successful!");
        });
        $("#login-btn").click(function() {
          var username = $("#login-username").val();
          var password = $("#login-password").val();
          if (checkUser(username, password)) {
           alert("Login successful!");
            document.getElementById("ID").click();
          } else {
            alert("Invalid username or password.");
          }
        });
      
      });

