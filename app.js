import express from 'express'
const path = require('path');
import expressRoute from './routes/expressRoute.js';
import greetingRoute from './routes/greetingRoute.js';
import nodejsRoute from './routes/nodejsRoute.js';
import apiRoute from './routes/apiRoute.js';

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/express', expressRoute);
app.use('/greeting', greetingRoute);
app.use('/nodejs', nodejsRoute);
app.use('/api', apiRoute);

app.listen(PORT, () => {
  console.log(`App is listening on localhost:${PORT}`);
});
