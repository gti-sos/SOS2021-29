var express = require("express");
var PORT = (process.env.PORT || 1607);
var bodyParser = require("body-parser");
var path = require("path");

var BASE_API_PATH = "/api/v1";

///variables API
var homeSellingAPI = require("./home-sellingAPI");
var employmentAPI = require("./employmentAPI");

var app = express();

app.use(bodyParser.json());
app.use("/",express.static("./public"));

employmentAPI.register(app);
homeSellingAPI.register(app);


//public
app.use("/", express.static(path.join(__dirname,"public")));

/*var contacts = [
    {
        "name": "pablo",
        "phone": 12345
    },
    {
        "name": "pepe",
        "phone": 6789
    }
];

app.get(BASE_API_PATH+"/contacts", (req,res)=>{
    res.send(JSON.stringify(contacts,null,2));
 });

app.post(BASE_API_PATH+"/contacts", (req,res)=>{
    var newContact = req.body;
    
    console.log(`new contact to be added: <${JSON.stringify(newContact,null,2)}>`);

    contacts.push(newContact);

    res.sendStatus(201);
 });*/

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});
