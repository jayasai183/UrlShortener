const express=require("express");
const app=express();
const shortid=require("shortid");
const port=process.env.PORT||5000;

app.use(express.json());
shortUrls={};
app.get("/api/urls",(req,res)=>{
    res.send(shortUrls);
})

app.get("/api/urls/:id",(req,res)=>{
    res.redirect(shortUrls[req.params.id]);
})


app.post("/api/urls", (req,res)=>{
    const id=shortid.generate();
    shortUrls[id]=req.body.longUrl;
    res.send({shortUrl: req.protocol + "://" + req.get("host") + req.originalUrl + "/" + id});
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
