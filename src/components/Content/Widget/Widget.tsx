import React from 'react'
import s from './Widget.module.css'

export function Widget() {
    return (
        <div className={`${s.wrapper} themeBorder`}>
            Widget
        </div>
    )
}