const router=require("express").Router();

const salonController=require("../controllers/salon");

router.get("/salon",salonController.getHome);

exports=router;