const{logindata,SigninData}=require("../controller/api")


const route=require("express").Router()


route.post('/login',logindata)
route.post('/signin',logindata)

module.exports=route
