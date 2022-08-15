import * as yup from 'yup'

const getAllPetsSchema = yup.array().of(
    yup.object().shape({
        petId: yup.string().uuid().required(),
        name: yup.string().required(),
        birthdate: yup.date().required(),
        sex: yup.string().required(),
        type: yup.string().required(),
        size: yup.string().required(),
        img: yup.string().default(null).optional(),
    })
).required()

export {getAllPetsSchema}