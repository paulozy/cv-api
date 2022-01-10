import { Schema, model, connection } from 'mongoose'

type Personal = {
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
    },
    objetive: string,
    qualifications: [string],
    profissionalExperience: [{
        company: string,
        start: Date,
        end: Date,
        office: string,
        responsibilities: [string]
    }],
    academicEducation: [{
        course: string,
        institution: string
    }],
    technologies: [string]
}

const schema = new Schema<Personal>({
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
    },
    objetive: String,
    qualifications: [String],
    profissionalExperience: [{
        company: String,
        start: Date,
        end: Date,
        office: String,
        responsibilities: [String]
    }],
    academicEducation: [{
        course: String,
        institution: String
    }],
    technologies: [String]
})

const modelName = 'Personal'

export default (connection && connection.models[modelName])
    ? connection.models[modelName]
    : model<Personal>(modelName, schema)