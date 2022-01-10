import { Router } from 'express'

const router = Router()

router.get('/code', (req, res) => {
    res.status(200).json({ message: 'Already to code!' })
})

export { router }