const express = require('express');
const app = express(); 
const {MongoClient} = require("mongodb")
const PORT = process.env.PORT || 8000;

// Initialize middleware
// express function to parse incoming JSON payload
app.use(express.json({ extended: false }));

// reusable function to perform db actions
const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db("mernblog");
        await operations(db);
        client.close();
    } catch {
        res.status(500).json({ message: "Error connecting to database", error });
    }
}

// get request for fetching article comment info
app.get('/api/articles/:name', (req, res) => {
    withDB( async(db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res);
});

// push request for pusing comments on article to db
app.post('/api/articles/:name/add-comments', (req, res) => {
    const { username, comment } = req.body;
    const articleName = req.params.name;
    withDB(async (db) => {
        const articlInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({ name: articleName }, {
            $set: {
                comments: articlInfo.comments.concat({ username, comment })
            }
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
})


app.listen(8000, () => console.log(`Server started at port ${PORT}`));