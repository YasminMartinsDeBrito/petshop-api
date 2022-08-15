import * as yup from 'yup'

const getAllAddressSchema = yup.array().of(
    yup.object().shape({
        addressId: yup.string().uuid().required(),
        street: yup.string().required(),
        district: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        number: yup.number().required(),
        zipcode: yup.string().required()
    })
).required()

export {getAllAddressSchema}