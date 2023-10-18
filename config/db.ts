import mongoose from "mongoose"


const url:string ="mongodb://127.0.0.1:27017/randomDB"

const db=()=>{
    mongoose.connect(url).then(()=>{
        console.log("db connection established")
    })
}

export default db