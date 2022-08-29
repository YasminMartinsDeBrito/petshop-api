import * as yup from 'yup'

const getAllHistorysSchema = yup.array().of(
    yup.object().shape({
        historyId: yup.string().uuid().required(),
        returning: yup.date().default(null).optional(),
        package: yup.string().optional(),
        created_at: yup.date().default(Date.now.prototype).required(),
        updated_at: yup.date().default(Date.now.prototype).required(),
        pet: yup.object().shape({
            petId: yup.string().uuid().required(),
            name: yup.string().required(),
            birthdate: yup.date().required(),
            sex: yup.string().required(),
            type: yup.string().required(),
            size: yup.string().required(),
            img: yup.string().optional().nullable(),
        }),
        user: yup.object().shape({
            userId: yup.string().uuid().required(),
            isAdm: yup.boolean().default(false).optional(),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            img: yup.string().default(null).optional(),
            email: yup.string().email().required(),
            address: yup.object().shape({
                addressId: yup.string().uuid().required(),
                street: yup.string().required(),
                district: yup.string().required(),
                city: yup.string().required(),
                state: yup.string().required(),
                number: yup.number().required(),
                zipcode: yup.string().required()
            })
        }),
        schedule: yup.object().shape({
            scheduleId: yup.string().uuid().required(),
            returning: yup.date().default(null).optional(),
            description: yup.string().required(),
        })
        
    })
)

export {getAllHistorysSchema}