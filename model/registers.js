const {default : mongoose} = require("mongoose");

let schema = new mongoose.Schema(
    {
        name: {
            type:String, 
            required: true
        },
        email: {
            type:String, 
            required: true, 
            unique: true,
        },
        password: {
            type: String, 
            required: true
        },
        cpassword: {
            type: String, 
            required: true
        },
    }
)

// create a collection
let Student = new mongoose.model("Student", schema)

// saving document
// saveDoc = ()=>{
//     let s1 = new Student({
//         roll:"2",
//         name: "Arpit",
//         marks: "97",
//         repeat: false
//     })
//     s1.save()
// }

module.exports = Student;