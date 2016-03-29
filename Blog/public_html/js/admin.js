$(function () {
   var APPLICATION_ID = "8BEC3A3D-D036-E24B-FF03-BAA2824E0B00",
       SECRET_KEY = "A54A9ADE-F30B-9D51-FFD5-DE703B8F1300",
       VERSION = "v1";
       
   Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
   var loginScript =$("#login-template").html();
   var loginTemplate = Handlebars.compile(loginScript);
   
   $(".main-container").html(loginTemplate);
   
   $(document).on('submit', 'form-signin', function(event){
       event.preventDefault();
       
       var data = $(this).serializeArray(),
           email = data[0].value,
           password = data[1].value;
           
        Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
   });
}); 

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.Email || "";
}

function userLoggedIn() {
    console.log("user successfully logged in");
}

function gotError(error) {
    console.log("Error message - " + error.message);
    console.log("Error code - " + error,code);
}