import express from 'express';
import bcrypt, { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';
import StatusCodes from 'http-status-codes'; 

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       503:
 *         description: Service unavailable
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/register', (req, res) => {
    const { username, password }= req.body;
    // encrypt password
    const hashedPassword = bcrypt.hashSync(password, 8);
    try {
        const insertUser = db.prepare( `INSERT INTO users (username, password)
            VALUES(?,?)`)
        const result = insertUser.run(username, hashedPassword)

        // add the first todo for the user
        const defaultTodo = `Hey, this is your first todo`
        const insertTodo = db.prepare( `INSERT INTO todos (user_id, task)
            VALUES(?,?)`)
        insertTodo.run(result.lastInsertRowid, defaultTodo)

        // create token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })
    } catch (err) {
        console.log(err.message);
        res.sendStatus(StatusCodes.SERVICE_UNAVAILABLE)
    }

})

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Invalid password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       503:
 *         description: Service unavailable
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/login', (req, res) => {
    const {username, password } = req.body;
    try {
        const getUser = db.prepare( `SELECT * FROM users WHERE username= ?`)
        const user = getUser.get(username)
        // if we can't find username return out of the function
        if (!user) { return res.status(StatusCodes.NOT_FOUND).send({message: `user not found`})}

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        // if password doesn't match return out of the function
        if (!passwordIsValid) {return res.status(StatusCodes.UNAUTHORIZED).send({message: `Invalid Password`}) }
        console.log(user)
        // successful authentication
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })
    } catch (err) {
        console.log(err.message);
        res.sendStatus(StatusCodes.SERVICE_UNAVAILABLE);
    }

})


export default router;
