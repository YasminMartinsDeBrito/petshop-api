import * as yup from 'yup'

const createHistorySchema = yup.object().shape({
    returning: yup.date().default(null).optional(),
    package: yup.string().required()
})

const serializerCreateHistorySchema = yup.object().shape({
    historyId: yup.string().uuid().required(),
    returning: yup.date().default(null).optional(),
    package: yup.string().optional(),
    pet: yup.object().shape({
        petId: yup.string().uuid().required(),
        name: yup.string().required(),
        birthdate: yup.date().required(),
        sex: yup.string().required(),
        type: yup.string().required(),
        size: yup.string().required(),
        img: yup.string().default(null).optional(),
    })
})

export { createHistorySchema, serializerCreateHistorySchema}