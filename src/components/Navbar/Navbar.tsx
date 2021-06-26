import React from 'react'
import IconUser from '../../icons/IconUser'
import s from './Navbar.module.css'
import IconMessages from "../../icons/IconMessages";
import IconNews from "../../icons/IconNews";
import IconSettings from "../../icons/IconSettings";
import IconMusic from '../../icons/IconMusic';
import {NavItem} from "./NavItem/NavItem";

export function Navbar() {
    return (
        <div className={s.navbar}>
            <NavItem name={'Profile'} to={'/profile'}>
                <IconUser fill={'white'} />
            </NavItem>
            <NavItem name={'Messages'} to={'/messages'}>
                <IconMessages fill={'white'} />
            </NavItem>
            <NavItem name={'News'} to={'/news'}>
                <IconNews fill={'white'} />
            </NavItem>
            <NavItem name={'Settings'} to={'/settings'}>
                <IconSettings fill={'white'} />
            </NavItem>
            <NavItem name={'Music'} to={'/music'}>
                <IconMusic fill={'white'} />
            </NavItem>
        </div>
    )
}