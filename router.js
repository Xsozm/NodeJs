export const router = require('express').Router();


// express router will be like a collection of routes i will use in the app
//i can use them as app.use 

//route
router.use('/hazem',(req,res)=>{
    res.send('hi hazem');
});


//middleware general for all the routes 
router.use((req,res,next)=>{

});

//middleare for specific route 
router.use('/path',(req,res,next)=>{

});

//we can use many middlewares for specific method 