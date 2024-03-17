import express from 'express'

import taskModel from '../models/taskModel.js'
const router = express.Router()

router.get('/tasks',async (req,  res)=>{
    let tasks= await taskModel.find()
    res.send(tasks)
})
router.post('/task', async (req,res)=> {
    let task=new todoModel({
        item:req.body.item,
        status:req.body.status
        
    })
    let newTask= await task.save()
    res.send({
        'message':'created task',
        'data':newTask
    })

})


router.get('/tasks/get/:id', async (req,res)=>{
    let id=req.params.id
    let task=await taskModel.find({_id: id})
    res.send({
        message:'Found task by id',
        data:task
    })
})
router.post('/tasks/complete/:id', async (req, res)=>{
    let id = req.params.id
    let task = await taskModel.findOne({_id:id})
    task.status='complete'
    let updatedTask = await task.save()
    res.send({
        message:'Task completed',
        data: updatedTask
    })
})

router.delete('/tasks/:id',async (req, res)=>{
    let id = req.params.id 
    await taskModel.deleteOne({_id:id})
    res.send({
        message: 'task deleted'
    })
})
export default router 