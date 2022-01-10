import { Router } from 'express'
import { addHeader } from '../controllers/Header'

const router = Router()

router.get('/code', (req, res) => {
    res.status(200).json({ message: 'Already to code!' })
})

router.post('/header', addHeader)

export { router }