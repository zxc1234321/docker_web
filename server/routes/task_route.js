const express     = require('express');
const router      = express.Router();

const Task         = require('../models/task_model')
// 전체 조회
router.get('/', async function(req, res) {
    const result = await Task.FindAllTask();
    if (result.error) {
        console.log('[ERROR] Fail to get all tasks', result.error);
        return res.status(400).json({error: result.error});
    }
    else if (result.data.length == 0) {
        // 204 Non Content
        return res.status(204).json({data: result.data});
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data});
    }
});
router.get('/:id', async function(req, res) {
    let id = req.params.id;
    id = parseInt(id);
    if (isNaN(id)) {
        // 400 Bad Request
        return res.status(400).json({error: 'ID is Nan'});
    }
    const result = await Task.FindOneTask(id);
    if (result.error) {
        // 400 Bad Request
        return res.status(400).json({error: result.error});
    }
    else if (result.data == undefined || result.data.length == 0) {
        // 204 Non Content
        return res.status(204).json({data: result.data});
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data});
    }
});
router.post('/', async function(req, res) {
    const title = req.body.title;
    const owner = req.body.owner;
    if(typeof title != 'string' || typeof owner != 'string') {
        return res.status(400).json({error: 'title and owner should be string'});
    }
    const task = {
        title: title,
        owner: owner
    }
    const result = await Task.AddTask(task);
    if (result.error) {
        // 400 Bad Request
        return res.status(400).json({error: result.error});
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data.insertId});
    }
});
router.put('/', async function(req, res) {
    const id = req.body.id;
    const owner = req.body.owner;
    const completed = req.body.completed;
    
    if(typeof completed != 'boolean') {
        // 400 Bad Request
        return res.status(400).json({error: 'completed should be boolean'});
    }
    let result = await Task.FindOneTask(id);
    if (result.error) {
        // 400 Bad Request
        return res.status(400).json({error: result.error});
    }
    if (result.data.length == 0) {
        // 204 Non Content
        return res.status(204).json({data: result.data});
    }
    if (result.data.owner != owner) {
        // 401 Unauthorized
        return res.status(401).json({error: 'Unauthorized'});
    }
    result = await Task.UpdateTask(id, completed);
    if (result.error) {
        // 400 Bad Request
        return res.status(400).json({error: result.error});
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data});
    }
});
router.delete('/', async function(req, res) {
    const id = req.body.id;
    
    result = await Task.DeleteTask(id);
    if (result.data.affectedRows == 0) {
        // 204 Non Content
        return res.status(204).json({data: result.data});
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data});
    }
});
module.exports = router;