import { Schema, model, connection } from 'mongoose'

type Header = {
    name: {
        firstName: string,
        lastName: string
    },
    address: {
        city: string,
        uf: string
    },
    contact: {
        phone: string,
        email: string
        linkedin: string
    }
}

const schema = new Schema<Header>({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    address: {
        city: String,
        uf: String
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        linkedin: String
    }
})

const modelName = 'Header'

export default (connection && connection.models[modelName])
    ? connection.models[modelName]
    : model<Header>(modelName, schema)