/* const express = require('express');
const cors = require('cors');
const app = express(); */
const app = require('./app')
const port = process.env.port || 5000;

//middle wares
/* app.use(cors());
app.use(express.json());
require('dotenv').config(); */


/* const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oth2isl.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
 */
/* async function run() {
    try {
       
        await client.connect();

        const appliedStudentsCollections = client.db('unicoDB').collection('applied_students');

       
        app.post('/create-user/:applicant_email', async (req, res) => {
            console.log('new user');
            const newApplicant = req.body;
            const email = req.params.applicant_email;
            const query = { applicant_email: email }
            const isPresent = await appliedStudentsCollections.findOne(query)
            if (isPresent) {
                return res.send('already present in appliedStudents collection')
            }
           
            const result = await appliedStudentsCollections.insertOne(newApplicant);
            res.send(result)
        })


      
        app.get('/check-role/:email', async (req, res) => {
            const email = req.params.email;
            console.log(email);
            if (!email) {
                return res.send(' ')
            }
            const query = { applicant_email: email }
            const user = await appliedStudentsCollections.findOne(query)
           
            const role = user.role;
        
            res.send(role)
        })



        
        app.get('/get-student-info/:email', async(req,res)=>{
            const email = req.params.email;
            const query = {applicant_email: email};
            const data = await appliedStudentsCollections.findOne(query);
            res.send(data);
        })

        


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        
    }
}
run().catch(console.dir); */





/* app.get('/', (req, res) => {
    res.send('unico server is running')
}) */

app.listen(port, () => {
    console.log(`unico server is running at port: ${port}`);
})

