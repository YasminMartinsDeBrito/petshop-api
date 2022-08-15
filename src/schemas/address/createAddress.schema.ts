import * as yup from 'yup'

const createAddressSchema = yup.object().shape({
    street: yup.string().required(),
    district: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    number: yup.number().required(),
    zipcode: yup.string().required()

})

const serializerCreateAddressSchema = yup.object().shape({
    addressId: yup.string().uuid().required(),
    street: yup.string().required(),
    district: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    number: yup.number().required(),
    zipcode: yup.string().required()
})

export { createAddressSchema, serializerCreateAddressSchema}