import * as yup from 'yup'

const createUserSchema = yup.object().shape({
    isAdm: yup.boolean().default(false).optional(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    img: yup.string().optional().nullable(),
    email: yup.string().email().lowercase().required(),
    cpf: yup.string().max(11).required(),
    password: yup.string().required()
})

const serializerCreateUserSchema = yup.object().shape({
    userId: yup.string().uuid().required(),
    isAdm: yup.boolean().default(false).optional(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    img: yup.string().optional().nullable(),
    email: yup.string().email().required(),
    // address: yup.object().shape({
    //     addressId: yup.string().uuid().required(),
    //     street: yup.string().required(),
    //     district: yup.string().required(),
    //     city: yup.string().required(),
    //     state: yup.string().required(),
    //     number: yup.number().required(),
    //     zipcode: yup.string().required()
    // })
})

export { createUserSchema, serializerCreateUserSchema}