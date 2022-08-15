import * as yup from 'yup'

const getAllUsersSchema = yup.array().of(
    yup.object().shape({
        isAdm: yup.boolean().optional(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        img: yup.string().optional(),
        email: yup.string().email().lowercase().required(),
        cpf: yup.string().required()
    })
).required()

export {getAllUsersSchema}