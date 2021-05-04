var express = require('express'); 
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public/images'));


//9th program git proile display
app.get('/',function (req, resp){
	resp.sendFile(__dirname+"/"+"public/gitppro.html")
});


app.listen(2323,function(){
	console.log('Listening at port 2323');
});
