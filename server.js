const express= require ('express');
const app = express ();
app.listen (1234);

app.use(express.static('node_modules'));
app.use(express.static('public'));
