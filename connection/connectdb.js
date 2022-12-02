let mongoose = require('mongoose')

let URI = "mongodb+srv://RathoreAbhiii:abc%40123@cluster0.zosjnch.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async() => {
try{
    let con = await mongoose.connect(URI, 
    {useUnifiedTopology : true,
    useNewUrlParser : true
    }).then(()=> {
        console.log('Database is connected with the given URI')
    })
}
catch(err){
console.log(err)
}
}

module.exports = connectdb

// CRUD :

