const Task = require('../model/task');
const asyncWrapper = require('../middleware/asyncWrapper')
const {createCustomError} = require('../errors/customError');

const getAllTasks = asyncWrapper( async (req, res) => {

          const tasks = await Task.find({});
          res.status(200).json({ tasks });
          // res.status(200).json({ tasks, amount: tasks.length });
          // res.status(200).json({success: true, data:{tasks, amount: tasks.length}});
          res.status(500).json({ msg: error.message });
})

const createTask = asyncWrapper( async (req, res) => {
   
          const task = await Task.create(req.body);
          // console.log(task);
          res.status(201).json({task: task}); 
          res.status(500).json({ msg: "Something Error" });

})

const getTask = asyncWrapper ( async (req, res, next) => {

          const { id:taskID } = req.params;
          const task = await Task.findOne({_id: taskID});

          if(!task){
          return next(createCustomError(`No Task is found with such ${taskID}`,404));
          }
          res.status(200).json({ task });
})

const updateTask = asyncWrapper( async (req, res, next) =>{

     const {id: taskID} = req.params;
     // second parameter pass in findByIdAndUpdate is when we update the task, if we find using id and remove the data then for update the task we pass another parameter to update the task!!! 

     // this two extra parameters provide options for updating the task
     const task = await Task.findByIdAndUpdate({_id: taskID}, 
          req.body, {
          new: true,
          runValidators: true
     });
  
     if(!task) {
          return next(createCustomError(`No Task is found with such 
          ${taskID}`, 404));
     }

       res.status(200).json({task: task});
});

const deleteTask = asyncWrapper( async (req, res, next ) => {
            const { id:taskID } = req.params;
            const task = await Task.findOneAndDelete({ _id:taskID });
  
            if(!task) {
               return next(createCustomError(`No Task is found with such 
               ${taskID}`, 404));
            }
  
          //   this res send fully json response 
          // for single response use this json format!!
            res.status(200).json({ task: task });
          // we use this which item we want to delete, so we can easily deleted, also use for not send full json format
          //   res.status(200).send({ task: null , status:'Task was success'});

});

module.exports = {
     getAllTasks,
     createTask,
     getTask,
     updateTask,
     deleteTask,
}