import { Router } from 'express'
import { addHeader, deleteHeader, updateHeader } from '../controllers/Header'

const router = Router()

router.get('/code', (req, res) => {
    res.status(200).json({ message: 'Already to code!' })
})

router.post('/header', addHeader)
router.put('/header/:_id', updateHeader)
router.delete('/header/:_id', deleteHeader)

export { router }