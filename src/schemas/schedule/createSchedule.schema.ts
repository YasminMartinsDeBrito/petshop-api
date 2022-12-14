import * as yup from 'yup'

const createScheduleSchema = yup.object().shape({
    returning: yup.date().default(null).optional(),
    description: yup.string().required(),
})

const serializerCreateScheduleSchema = yup.object().shape({
   scheduleId: yup.string().uuid().required(),
   returning: yup.date().default(null).optional(),
   description: yup.string().required(),
   pet: yup.object().shape({
        petId: yup.string().uuid().required(),
        name: yup.string().required(),
        birthdate: yup.string().required(),
        sex: yup.string().required(),
        type: yup.string().required(),
        size: yup.string().required(),
        img: yup.string().optional().nullable(),
    })

})

export { createScheduleSchema, serializerCreateScheduleSchema}