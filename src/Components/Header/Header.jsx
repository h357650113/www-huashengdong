import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import emailSrc from '../../asset/icon/email.png'
import githubSrc from '../../asset/icon/github.png'
import chartSrc from '../../asset/icon/chart.png'
import wxQR from '../../asset/icon/qr_weixin.png'
import copySrc from '../../asset/icon/copy.png'
import weixinSrc from '../../asset/icon/weixin.png'

const Card = ({ visible = true }) => {
    const handleEmailCopy = (e) => {
        e.stopPropagation()
        navigator.clipboard.writeText('357650113@qq.com')
    }
    const handleCardClick = (e) => {
        e.stopPropagation()
    }
    return (
        <div
            className="card"
            style={{
                display: visible
                    ? 'none'
                    : window.innerWidth < 740
                    ? 'grid'
                    : 'flex',
            }}
            onClick={handleCardClick}
        >
            <img src={wxQR} alt="" />
            <div className="info">
                <div onClick={handleEmailCopy}>
                    357650113@qq.com{' '}
                    <img style={{ cursor: 'pointer' }} src={copySrc} alt="" />
                </div>
                <div>
                    <img src={weixinSrc} alt="" /> huashengdong
                </div>
            </div>
        </div>
    )
}

export default function Header() {
    const [cardVisible, setCardVisible] = useState(true)
    const navigate = useNavigate()
    const handleGithubClick = () => {
        window.open('https://github.com/h357650113')
    }
    const handleLogoClick = () => {
        window.location.href = '/'
    }
    const handleChartClick = () => {
        navigate('/chart')
    }
    const handleEmailClick = (e) => {
        e.stopPropagation()
        setCardVisible(false)
    }
    document.addEventListener('click', (e) => {
        setCardVisible(true)
    })
    return (
        <div className="header">
            <div className="logo" onClick={handleLogoClick}>
                huashengdong.com
            </div>
            <div className="tips">
                <div className="chart" onClick={handleChartClick}>
                    <img src={chartSrc} alt="chart" />
                </div>
                <div className="github" onClick={handleGithubClick}>
                    <img src={githubSrc} alt="h357650113 github" />
                </div>
                <div className="email" onClick={handleEmailClick}>
                    <img src={emailSrc} alt="察纳雅言" />
                    <div className="text">Email</div>
                </div>
            </div>

            <Card visible={cardVisible} />
        </div>
    )
}
