import * as yup from 'yup'

const getAllAddressSchema = yup.array().of(
    yup.object().shape({
        addressId: yup.string().uuid().required(),
        street: yup.string().required(),
        district: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        number: yup.number().required(),
        zipcode: yup.string().required(),
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

export {getAllAddressSchema}