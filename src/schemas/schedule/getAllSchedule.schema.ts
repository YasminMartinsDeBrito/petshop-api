import * as yup from 'yup'

const getAllScheduleSchema = yup.array().of(
    yup.object().shape({
        scheduleId: yup.string().uuid().required(),
        returning: yup.date().default(null).optional(),
        description: yup.string().required(),
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
).required()

export {getAllScheduleSchema}