// const mongoose = require("mongoose");
// const express = require("express");
const Task = require('../model/task');

const getAllTasks = async (req, res) => {
     try {
          const tasks = await Task.find({});
          res.status(200).json({ tasks });
     
     } catch (error) {
          res.status(500).json({ msg: error.message });
     }
}

const createTask = async (req, res) => {
     try {
          const task = await Task.create(req.body);
          // console.log(task);
          res.status(201).json({task: task}); 
     } catch (error) {
          res.status(500).json({ msg: "Something Error" });
     }
}

const getTask = async (req, res) =>{
     try {

          const { id:taskID } = req.params;
          const task = await Task.findOne({_id: taskID});

          if(!task){
               return res.status(404).json({ msg:`No Task is found with such 
               ${taskID}` });
          }

          res.status(200).json({ task });

     } catch (error) {
          res.status(500).json({ msg: error });
     }
}

const updateTask = (req, res) =>{
     res.send("update Task");
}

const deleteTask = async (req, res) => {
     try {
          const {id: taskID} = req.params;
          const task = await Task.findOneAndDelete({ _id: taskID });

          if(!task) {
               return res.status(404).json({ msg: `Task not found with this id: ${taskID}, please try again`})
          }

          res.status(200).json({ msg: error });

     } catch (error) {
          res.status(500).json({ msg: error});
     }

}

module.exports = {
     getAllTasks,
     createTask,
     getTask,
     updateTask,
     deleteTask,
}