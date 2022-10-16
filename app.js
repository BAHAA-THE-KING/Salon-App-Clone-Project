const express=require("express");
const bodyParser=require("body-parser");

const adminRoutes=require("routes/admin");
const authRoutes=require("routes/auth");
const userRoutes=require("routes/user");
const salonRoutes=require("routes/salon");

const app=express();

app.set("view engine","ejs");
app.set("views","views");
app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(salonRoutes);

app.listen(3000);