import * as yup from 'yup'

const getAllPetsSchema = yup.array().of(
    yup.object().shape({
        petId: yup.string().uuid().required(),
        name: yup.string().required(),
        birthdate: yup.string().required(),
        sex: yup.string().required(),
        type: yup.string().required(),
        size: yup.string().required(),
        img: yup.string().default(null).optional(),
        // user: yup.object().shape({
        //     userId: yup.string().uuid().required(),
        //     isAdm: yup.boolean().default(false).optional(),
        //     firstName: yup.string().required(),
        //     lastName: yup.string().required(),
        //     img: yup.string().optional().nullable(),
        //     email: yup.string().email().required(),
        // })
    })
).required()

export {getAllPetsSchema}