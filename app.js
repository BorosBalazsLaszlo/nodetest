const express = require('express');
import expressRoute from ('./routes/expressRoute');
import greetingRoute from ('./routes/greetingRoute');
import nodejsRoute from ('./routes/nodejsRoute');
import apiRoute from ('./routes/apiRoute');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/express', expressRoute);
app.use('/greeting', greetingRoute);
app.use('/nodejs', nodejsRoute);
app.use(apiRoute);

app.listen(PORT, () =>{
    console.log('app is listening on localhost:3000')
});