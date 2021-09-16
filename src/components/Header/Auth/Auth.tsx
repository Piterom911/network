import React from "react";

type AuthPropsType ={
    email: string | null
    isAuth: boolean
}

export const Auth = (props: AuthPropsType) => {
    return (
        <div>
            {props.isAuth
            ? <h6>{props.email}</h6>
            : <p>login</p>}
        </div>
    )
}