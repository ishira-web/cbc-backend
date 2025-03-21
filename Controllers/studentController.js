import student from "../Model/student.js"

export function getStudents(req,res){

    student.find().then(
        (studentList)=>{
           res.json({
            list : studentList
           })
        }
    )
}

export function createStudent(req, res) {
    const newStudent = new student(req.body); // Use 'student' instead of 'Student'
    newStudent.save().then(() => {
        res.json({
            message: "Student Created Successfully!"
        });
    }).catch(err => {
        res.status(500).json({ error: err.message });
    });
}