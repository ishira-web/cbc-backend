import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    st_name : String, 
    st_age : Number,
    st_gender : String
})

const student = mongoose.model("Student",studentSchema);

export default student;
