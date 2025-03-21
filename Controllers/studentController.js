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

export function createStudent(req,res){
    const student = new Student(req.body)
    student.save().then(()=>{
        res.json({
            message : "Student Create Successfully !"
        })
    }).catch((err)=>{
      res.json({
        message : "Student Create Unsuccessfully !"
      })
    })
}

