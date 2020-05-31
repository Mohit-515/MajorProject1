const express=require('express');
const app = express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assests'));

app.use(expressLayouts);

app.use('/',require('./routes'));

//setting up views engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is up and running fine at port: ${port}`);
});