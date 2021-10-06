import React from "react";
import s from './Login.module.css'
import {useForm, SubmitHandler} from "react-hook-form";
import {loginMe} from "../../../redux/auth/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateTypes} from "../../../redux/store";
import {Redirect} from "react-router-dom";
import {AuthInitialStateTypes} from "../../../redux/auth/authTypes";

interface IFormInput {
    userName: string;
    password: string;
    rememberMe: boolean
}

export const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<IFormInput>();
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<IFormInput> = data => {
        dispatch(loginMe(data.userName, data.password, data.rememberMe, false))
    };

    const auth = useSelector<AppStateTypes, AuthInitialStateTypes>(state => state.auth)
     if (auth.isAuth) {
         return <Redirect to={`/profile/${auth.id}`} />
     }

    return (
        <div className={s.wrapper + ' themeBorder themeBorderPad'}>
            <h3>Please Log In</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <p className={s.inputWrapper}>
                    <label className={s.label}>
                        <span className={s.labelText}>Username</span>
                        {errors.userName && <span className={s.error}>Username is required</span>}
                        <input {...register("userName", { required: true })}
                               type="text"
                               className={s.name}/>
                    </label>
                </p>
                <p className={s.inputWrapper}>
                    <label className={s.label}>
                        <span className={s.labelText}>Password</span>
                        {errors.password && <span className={s.error}>Password is required. Should contain minimum 5 symbols.</span>}
                        <input {...register("password", { required: true, minLength: 5 })}
                               type="password"
                               className={s.password}/>
                    </label>
                </p>
                <p className={s.inputWrapper}>
                    <label className={s.label}>
                        <input {...register("rememberMe")}
                               type="checkbox"
                               checked={true}
                               className={s.rememberMe}/>
                        <span className={s.checkboxText}>remember me?</span>
                    </label>
                </p>
                <button className={s.submit}>Sign In</button>
            </form>
        </div>
    )
}