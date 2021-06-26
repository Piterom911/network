import React from 'react'
import s from './Widget.module.css'

type WidgetPropsType = {
    heading?: string
    content?: JSX.Element
}

export function Widget(props: WidgetPropsType) {
    return (
        <div className={`${s.wrapper} themeBorder`}>
            {props.heading ? <h4 className={s.heading}>{props.heading}</h4> : null}
            <div>
                {props.content}
            </div>
        </div>
    )
}