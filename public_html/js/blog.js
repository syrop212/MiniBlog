$(function () {
   var APPLICATION_ID = "8BEC3A3D-D036-E24B-FF03-BAA2824E0B00",
       SECRET_KEY = "A54A9ADE-F30B-9D51-FFD5-DE703B8F1300",
       VERSION = "v1";
       
   Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
   var postsCollection = Backendless.Persistence.of(Posts).find();
   
   
   console.log(postsCollection);
   
   var wrapper = {
       posts: postsCollection.data
   };
   
   Handlebars.registerHelper("format", function(time) {
       return moment(time).format("dddd, MMMM Do YYYY");
   });
   
   var blogScript =$("#blogs-template").html();
   var blogTemplate = Handlebars.compile(blogScript);
   var blogHTML = blogTemplate(wrapper);
   
   $(".main-container").html(blogHTML);
   
}); 

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
