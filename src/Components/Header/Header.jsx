import React from 'react'
import './index.scss'
import emailSrc from '../../asset/icon/email.png'
import githubSrc from '../../asset/icon/github.png'

export default function Header() {
    const handleGithubClick = () => {
        window.open('https://github.com/h357650113')
    }
    return (
        <div className="header">
            <div className="logo">huashengdong.com</div>
            <div className="tips">
                <div className="github" onClick={handleGithubClick}>
                    <img src={githubSrc} alt="h357650113 github" />
                </div>
                <div className="email">
                    <img src={emailSrc} alt="察纳雅言" />
                    <div className="text">Email</div>
                </div>
            </div>
        </div>
    )
}
