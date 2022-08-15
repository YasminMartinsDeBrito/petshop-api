import * as yup from 'yup'

const getAllVaccinesSchema = yup.array().of(
    yup.object().shape({
        vaccineId: yup.string().uuid().required(),
        name: yup.string().required(),
        fabricante: yup.string().default(null).optional(),
        pet: yup.object().shape({
             petId: yup.string().uuid().required(),
             name: yup.string().required(),
             birthdate: yup.date().required(),
             sex: yup.string().required(),
             type: yup.string().required(),
             size: yup.string().required(),
             img: yup.string().default(null).optional()
        })
    })
).required()

export {getAllVaccinesSchema}