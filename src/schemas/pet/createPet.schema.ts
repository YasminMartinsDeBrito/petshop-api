import * as yup from 'yup'

const createPetSchema = yup.object().shape({
    name: yup.string().required(),
    birthdate: yup.string().required(),
    sex: yup.string().required(),
    type: yup.string().required(),
    size: yup.string().required(),
    img: yup.string().default(null).required()
})

const serializerCreatePetSchema = yup.object().shape({
    petId: yup.string().uuid().required(),
    name: yup.string().required(),
    birthdate: yup.string().required(),
    sex: yup.string().required(),
    type: yup.string().required(),
    size: yup.string().required(),
    img: yup.string().optional().nullable(),
    user: yup.object().shape({
        userId: yup.string().uuid().required(),
        isAdm: yup.boolean().default(false).optional(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        img: yup.string().optional().nullable(),
        email: yup.string().email().required(),
    })
})

export { createPetSchema, serializerCreatePetSchema}