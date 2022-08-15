import * as yup from 'yup'

const createVaccineSchema = yup.object().shape({
  name: yup.string().required(),
  fabricante: yup.string().default(null).optional(),
})

const serializerCreateVaccineSchema = yup.object().shape({
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

export { createVaccineSchema, serializerCreateVaccineSchema}