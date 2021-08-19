import React from "react";
import s from './User.module.css'
import bgImage from '../../../../assets/images/users/user-cover6.jpg'
import userIcon from '../../../../assets/images/users/userIcon4.jpg'

export default function User() {
    return (
        <div className={`contentCenter`}>
            <div className={`themeBorder themeBorderPad ${s.wrapper}`}>
                <img src={bgImage} className={s.bgImage} alt="user background"/>
                <h3 className={s.name}>User Name</h3>
                <div className={s.content}>
                    <div className={s.imageWrapper}>
                        <img src={userIcon} className={s.userImage} alt={`user name`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}