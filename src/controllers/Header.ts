import { Request, Response } from 'express'
import Header from '../models/Personal'

export const addHeader = async (req: Request, res: Response) => {
    const { 
        firstName, 
        lastName, 
        city, 
        uf, 
        phone, 
        email, 
        linkedin
    } = req.body

    try {
        const header = await Header.create({
            name: {
                firstName, 
                lastName
            },
            address: {
                city,
                uf
            },
            contact: {
                phone,
                email,
                linkedin
            }
        })
    
        res.status(201).json({ message: `Cabeçalho criado com sucesso`, header })
    } catch (error) {
        
        res.status(400).json(error)
    }
}