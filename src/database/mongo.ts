import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const mongooseConnect = async () => {
    try {
        console.log('Connecting to MongoDB')
        await connect(process.env.MONGO_URL as string)
        console.log('Connected to MongoDB')

    } catch (error) {
        
        console.log(`Error connecting to MongoDB ${error}`)
    }
}