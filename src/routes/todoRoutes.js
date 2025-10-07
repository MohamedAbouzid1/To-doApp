import express from 'express';
import db from '../db.js';


const router = express.Router();

// get all the todos for the user
router.get('/', (req, res) => {
    const user_id = req.body;
    try {
        const getTodos = db.prepare(`SELECT * FROM todos WHERE user_id=?`)
        // note here we didn't really authenticate the user, we'll do this in the authMidlleware
        const todos = getTodos.all(req.userId)
        res.json(todos)
    } catch (err) {
        console.log({message: `no tasks found for this user`})
    }
});

// create one todo
router.post('/', (req, res) => {

});

// update todo
router.put('/:id', (req, res) => {

});

// delete a todo
router.delete('/:id', () => {

});

export default router;