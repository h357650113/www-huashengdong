import React from 'react'
import './index.scss'
import emailSrc from '../../asset/icon/email.png'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">huashengdong.com</div>
            <div className="email">
                <img src={emailSrc} alt="察纳雅言" />
                <div className="text">Email</div>
            </div>
        </div>
    )
}
