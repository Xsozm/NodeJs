const express = require('express');
const app = express();

import {router} from './router';



// application router 
app.use('/',(req,res)=>{
    res.send('Hello');
});
//application router to specific request method
app.get('/path',(req,res)=>{

})
 app.use((req,res,next)=>{
     //application middleware to the whole app 
 }); 

 app.use('/path',(req,res,next)=>{
    //application middleware to the specific route
    // i can define the method too  
}); 
// use express router 
app.use(router);

// i can use the router as a subpathes 
app.use('/admin/',router); // will use all routes with prefix /admin/


app.listen(9000,()=>{
    console.log('listening to port 900..');
    
})

//application layaer middleware 
app.use((req,res,next)=>{
    console.log('middleware..');
    next();

});


