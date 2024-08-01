import React from 'react'
import { useForm } from 'react-hook-form';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useAuth } from '../../hooks/useAuth';

function ChangePassword() {
    
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors },
    } = useForm();

    const { changePassword } = useAuth();

    const submit = password => {
        //change password
        changePassword(password);
    };

    return (
        <div>
            <Title title='Change Password'/>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    type="password"
                    label="Change Password"
                    {...register('currentPassword', {
                        required: true,
                    })}
                    error={errors.currentPassword}
                />

                <Input
                    type="password"
                    label="New Password"
                    {...register('newPassword', {
                        required: true,
                        minLength: 5,
                    })}
                    error={errors.newPassword}
                />

                <Input 
                    type="password"
                    label="Confirm Password"
                    {...register('confirmNewPassword',{
                        required: true,
                        validate: value => 
                            value !== getValues('newPassword')
                            ? 'Password Do Not Match'
                            : true,
                    })}
                    error={errors.confirmPassword}       
                />

                <Button type='submit' text="Change" />
            </form>
        </div>
  )
}

export default ChangePassword
