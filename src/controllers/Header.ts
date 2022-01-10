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
    
        return res.status(201).json({ message: `Cabeçalho criado com sucesso`, header })
    } catch (error) {
        
        return res.status(400).json(error)
    }
}

export const updateHeader = async (req: Request, res: Response) => {
    const { _id } = req.params
    const { 
        firstName, 
        lastName, 
        city, 
        uf, 
        phone, 
        email, 
        linkedin
    } = req.body

    const header = await Header.findOne({ _id })

    if(header) {
        try {
            await Header.updateOne({ _id }, {
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
    
            return res.status(200).json({ message: `Cabeçalho atualizado com sucesso`, header })
    
        } catch (error) {
            res.status(400).json(error)
    
        }
    } else {
        return res.status(400).json({ message: `Cabeçalho não encontrado`})

    }

}

export const deleteHeader = async (req: Request, res: Response) => {
    const { _id } = req.params
    const header = await Header.findOne({ _id })

    if(header) {
        try {
            await Header.deleteOne({ _id })
            
            return res.status(200).json({ message: `Cabeçalho excluido com sucesso` })
        
        } catch (error) {
            return res.status(200).json(error)

        }
    }
}