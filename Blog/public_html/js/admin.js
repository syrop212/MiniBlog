$(function () {
   var APPLICATION_ID = "8BEC3A3D-D036-E24B-FF03-BAA2824E0B00",
       SECRET_KEY = "A54A9ADE-F30B-9D51-FFD5-DE703B8F1300",
       VERSION = "v1";
       
   Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
   var loginScript =$("#login-template").html();
   var loginTemplate = Handlebars.compile(loginScript);
   
   $(".main-container").html(loginTemplate);
   
}); 

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.Email || "";
}

