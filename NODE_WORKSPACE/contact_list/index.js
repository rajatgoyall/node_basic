const express= require('express');
const port = 8000;
const path= require('path');

const app= express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
// //middleware1
// app.use(function(req,res,next)
// {
//     console.log('middleware 1');
//     next();
// });
// app.use(function(req,res,next)
// {
//     console.log('middleware 2');
//     next();
// });



var contactList=[
    {
        name:'Rajat',
        phone:'9517734570'
    },
    {
        name:'Rivanshu',
        phone:'9587925590'
    }
]


app.get('/', function(req, res)
{
    res.render('home',{
        title: "My contacts list",
        contact_List:contactList
    
    });
})
app.get('/practice',function(req,res){
    res.render('practice',{
        title:"Practice File",
        
    })
})


app.post('/create-contact',function(req, res){
       // contactList.push({
         //   name: req.body.name,
         //   phone: req.body.phone
       // });
       contactList.push(req.body);
       // return res.redirect('/')
       return res.redirect('back')
})




app.listen(port, function(err)
{
    if(err)
    {
        console.log('Error in running the server ',err);
    }
    console.log('Yup! the server is up and running at port: ',port);
})