import React from 'react';
import { initialValues } from '../../shared/profileEdit.initialValues'
import validationSchema from '../../util/validationSchema'
import FormEdit from './profile.formEdit';

const onSubmit = (initialvalues, onSubmitProps) => {
    console.log('Form data', initialvalues);
    onSubmitProps.setSubmitting(false);
}

const ProfileEdit = () => {
    return (
        <FormEdit
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        />
    )
}


export default ProfileEdit;