import * as Yup from 'yup';
 
export const AddSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Short name!')
    .max(50, 'Long name!')
    .required('Required'),
    major: Yup.string()
    .min(2, 'Short major!')
    .required('Required'),
    positon: Yup.string()
    .min(2, 'Too Short positon!')
    .max(50, 'Too Long positon!')
    .required('Required'),
    price: Yup.number()
    .min(2, 'Too Short price!')
    // .max(50, 'Too Long!')
    .required('Required'),
    imgUrl: Yup.string()
    .min(2, 'Too Short image URL!')
    // .max(50, 'Too Long!')
    .required('Required'),

});