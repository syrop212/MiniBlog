$(function () {
   var APPLICATION_ID = "8BEC3A3D-D036-E24B-FF03-BAA2824E0B00",
       SECRET_KEY = "A54A9ADE-F30B-9D51-FFD5-DE703B8F1300",
       VERSION = "v1";
       
   Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
   var user = new Backendless.User();
   user.email = "albertocasas05@gmail.com";
   user.password = "syro2112";
   Backendless.UserService.register(user);
   
});
