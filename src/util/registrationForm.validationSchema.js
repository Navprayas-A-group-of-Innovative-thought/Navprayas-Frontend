import * as Yup from 'yup'

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*.{9,}$/

const validationSchema = Yup.object({
    user: Yup.object({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid email format!').required('Required!'),
        dob: Yup.date().min(new Date(1900, 0, 1)).max(new Date(2014, 0, 1)).required('Required'),
        gender: Yup.string().required('Required!'),
        contact: Yup.object({
            primary: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required!"),
            other: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        })
    }),
    address: Yup.object({
        houseNumber: Yup.string().required('Required!'),
        addressLine1: Yup.string().required('Required!'),
        district: Yup.string().required('Required!'),
        city: Yup.string().required('Required!'),
        pincode: Yup.string().required('Required!'),
        country: Yup.string().required('Required!'),
        state: Yup.string().required('Required!')
    }),
    education: Yup.object({
        class: Yup.string().required('Required!'),
        school: Yup.string().required('Required!'),
        board: Yup.string().required('Required!'),
    }),
    fatherName: Yup.string().required('Required!'),
    motherName: Yup.string().required('Required!'),



})

export default validationSchema;