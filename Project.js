var express=require('express');
var app=express();
app.use(express.static("icecream"));
app.use(express.static("icecream/css"));
app.use(express.static("icecream/js"));
app.use(express.static("icecream/images"));
var bd=require('body-parser');
app.set('view engine','ejs');
var ed=bd.urlencoded({extended:false});
var my =require('mysql');
var con =my.createConnection(
    {
        host:'127.0.0.1',
        user:'root',
        password:'',
        database:'project'
    });
    con.connect(function(err){
       if(err)
        throw err;
    console.log("Connected To Mysql "); 
    });

app.get("/",function(req,res)
{
res.sendFile("./icecream/index.html",{root:__dirname});
});
app.get("/index",function(req,res)
{
res.sendFile("./icecream/index.html",{root:__dirname});
});
app.get("/about",function(req,res)
{
res.sendFile("./icecream/about.html",{root:__dirname});
});
app.get("/contact",function(req,res)
{
res.sendFile("./icecream/contact.html",{root:__dirname});
});
app.get("/blog",function(req,res)
{
res.sendFile("./icecream/blog.html",{root:__dirname});
});
app.get("/icecream",function(req,res)
{
res.sendFile("./icecream/icecream.html",{root:__dirname});
});
app.get("/services",function(req,res)
{
res.sendFile("./icecream/services.html",{root:__dirname});
});

app.get("/login",function(req,res)
{
res.sendFile("./icecream/login.html",{root:__dirname});
});

app.get("/register",function(req,res)
{
res.sendFile("./icecream/register.html",{root:__dirname});
});
app.get("/addcart",function(req,res)
{
res.sendFile("./icecream/addcart.html",{root:__dirname});
});

//  app.get("/Regprocess", function(req,res)
// {
//     var a=req.query.name;
//     var b=req.query.email;
//     var c =  req.query.password;
//     var  d = req.query.repassword;
//    var  st= "name= " + a + "email= "+ b + "password= "+ c + "re-password = " + d;
//    res.send(st);
// });

//  app.get("/conprocess", function(req,res)
// {
//     var a=req.query.name;
//     var b=req.query.email;
//     var c =  req.query.Number;
//     var  d = req.query.message;
//    var  ct= "name= " + a + "email= "+ b + "number= "+ c + "message= " + d;
//    res.send(ct);
// });

// app.get("/loginpr", function(req,res)
// {
//     var a=req.query.email;
//     var a=req.query.password;
//     var lt = "email = "+ a + "password = "+b;
//     res.send(lt);
// });
// register form
app.post("/Regprocess",ed,function(req,res)
{
    var a=req.body.name;
    var b=req.body.email;
    var c =  req.body.password;
    var  d = req.body.repassword;
var q="insert into users values('"+a+"','"+b+"','"+c+"')";
con.query(q,function(err,result)
{
if(err)
    throw err;
res.send("You are Successfully Register");
});
});
// login form 
app.post("/loginpr",ed,function(req,res)
{
    var a=req.body.email;
    var b=req.body.password;
    var ln="SELECT * from users where email='"+a+"'";
    con.query(ln,function(err,result)
    {
    if(err)
        throw err;
    var L=result.length;
    if(L>0)
    {
        if(result[0].password==b)
        {
            res.send("You are a Valid User");

        }
        else
        {
            res.send("Password is Incorrect");
        }
    }
    else
    res.send("Email is Incorrect");

    });
});

app.post("/conprocess",ed,function(req,res)
{
    var a=req.body.name;
    var b=req.body.email;
    var c=req.body.number;
    var d=req.body.message;
    var conpr="insert into contact values('"+a+"','"+b+"','"+c+"','"+d+"')";
    con.query(conpr,function(err,result)
    {
    if(err)
        throw err;
    res.send("You are Successfully contact");
    });
    
});
app.get("/admin",function(req,res){
res.sendFile("./icecream/admin.html",{root:__dirname});
});
// admin login 
app.post("/alogin",ed,function(req,res)
{
    var a=req.body.username;
    var b=req.body.password;
    var ln="SELECT * from admin where email='"+a+"'";
    con.query(ln,function(err,result)
    {
    if(err)
        throw err;
    var L=result.length;
    if(L>0)
    {
        if(result[0].password==b)
        {
            res.render("adminpanel",{aname:result[0].name});

        }
        else
        {
            res.send("Password is Incorrect");
        }
    }
    else
    res.send("Email is Incorrect");

    });
});

//viewuser detail
app.get("/viewuser",function(req,res)
{
var q="select * from users";
con.query(q,function(err,result)
{
if(err)
throw err;
res.render("viewuser",{data:result});
});

});
// viewcontact detail
app.get("/viewcontact",function(req,res)
{
var w="select * from contact";
con.query(w,function(err,result)
{
if(err)
throw err;
res.render("viewcontact",{data:result});
});

});

// delet option in user data 
app.get("/deluser", function(req,res)
{
    var email=req.query.email;
    var q="delete from users where email='"+email+"'";
    con.query(q,function(err,result)
{
    if(err)
        throw err;
    res.redirect("viewuser");
});
});
// delet option in contact data
app.get("/delcontact", function(req,res)
{
    var email=req.query.email;
    var q="delete from contact where email='"+email+"'";
    con.query(q,function(err,result)
{
    if(err)
        throw err;
    res.redirect("viewcontact");
});
});

app.listen(3000);