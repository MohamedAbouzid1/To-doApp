import express from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../prismaClient.js';


const router = express.Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos for the authenticated user
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of todos retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// get all the todos for the user
router.get('/', async (req, res) => {
    try {
        const todos = await prisma.todo.findMany({
            where: {
                userId: req.userId
            }
        })
        res.json(todos)
    } catch (err) {
        console.log({message: `no tasks found for this user`})
    }
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - task
 *             properties:
 *               task:
 *                 type: string
 *                 description: The todo task description
 *                 example: "Complete the project"
 *     responses:
 *       200:
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// create one todo
router.post('/', async (req, res) => {
    const { task }= req.body
    const todo = await prisma.todo.create({
        data: {
            task: task,
            userId: req.userId
        }
    })

    res.json(todo)
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo's completion status
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - completed
 *             properties:
 *               completed:
 *                 type: boolean
 *                 description: Whether the todo is completed
 *                 example: true
 *     responses:
 *       201:
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Todo updated"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// update todo
router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params
    const updateTodo =  await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: {
            completed: !!completed
        }
    })
    res.status(StatusCodes.CREATED).json(updateTodo)

});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID
 *     responses:
 *       201:
 *         description: Todo deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deleted todo"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    const deletedTodo = await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId: userId
        }
    })
    res.status(StatusCodes.CREATED).json( deletedTodo )

});

export default router;