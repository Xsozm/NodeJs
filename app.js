//normal express server 
const express = require('express');

// express-graphql is a middleware allow express to understand graphql
//it's just a middleware that can understand graphql we will ue this middleware on the app  
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema');

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));




app.listen(9000,()=>{
    console.log('listening to port 900..');
    
});



