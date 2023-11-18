const express = require("express");
const router = express.Router();
const Task = require('../models/task_model')

router.get('/', async function(req, res) {
    const result = await Task.FindAllTask();
    if (result.error) {
        console.log('[ERROR] Fail to get all tasks', result.error);
        return res.status(400).json({error: result.error});
    }
    else {
        res.render('main', {tasks: result.data});    
    }
});

module.exports = router;