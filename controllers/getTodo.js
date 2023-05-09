const Todo = require("../models/todo");

exports.getTodo = async(req,res) => {
    try {
        //fetch all todo feom databse
        const todos = await Todo.find({});

        //response update
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched",
        });
            
        
    }
    catch (err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }

}


exports.getTodoById = async (req,res) => {
    try {
        // extract the todo item based on ID
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        //data for given id not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No data found with the given ID"
            })
        }
        // data for given id
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}