
//module.exports.str = "hellow world "
//using a function 
exports.person = function(){
    console.log("hellow world")
}

//using object litral
module.exports={
   firstname :"frey",
   lastname :"ye yeshi"
}

//using class
 module.exports =function animal (name ,color){
     this.name = name
     this.color = color;
     this.type=function(){
        return this.name +this.color
     }
 }