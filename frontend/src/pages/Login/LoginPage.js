import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import classes from './loginPage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { EMAIL } from '../../constant/pattern';

export default function LoginPage() {
    
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm();

    const naviget = useNavigate()
    const { user, login } = useAuth();
    const [params] = useSearchParams();
    const returnUrl = params.get('returnUrl')

    useEffect(() => {
        if(!user) return;

        returnUrl ? naviget(returnUrl) : naviget('/');
    }, [user]);
    
    const submit = async ({ email, password }) => {
        await login(email, password);
    };

    return (
        <div className={classes.container}>
            <div className={classes.details}>
                <Title title="Login"/>
                <form onSubmit={handleSubmit(submit)} noValidate>
                    <Input
                        type="emial"
                        label="Email"
                        {...register('email', {
                            required: true,
                            pattern: EMAIL,
                        })}
                        error={errors.email}
                    />   

                    <Input
                       type="password"
                       label="Password"
                       {...register('password', {
                            required: true,
                       })} 
                       error={errors.password}
                    /> 

                    <Button type="submit" text="Login"/>

                    <div className={classes.register}>
                        New User? &nbsp;
                        <Link to={`/register${returnUrl ? '?returnUrl=' +returnUrl : ''}`}>
                            Register here
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    )
}

