import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json({extended:true}))
app.use(express.urlencoded());

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://user1:useR1MerN@cluster0.aylfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true , useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
console.log(`Connection is Established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);