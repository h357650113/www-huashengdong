import React, { useState } from 'react'
import './index.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="dependence">
                <h1>Dependence</h1>
                <div className="wrap">
                    <Item
                        src={'https://zh-hans.reactjs.org/'}
                        imgSrc={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/www/react.png'
                        }
                    />
                    <Item
                        src={'https://reactrouter.com/en/main'}
                        imgSrc={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/www/screencapture-reactrouter-en-main-getting-started-installation-2022-08-26-17_50_37.png'
                        }
                    />
                    <Item
                        imgSrc={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/www/react.png'
                        }
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="info">
                    <p>copyright@2022 www.huashengdong.com</p>
                    <p>Email: 357650113@qq.com</p>
                    <p>ICP证: 冀ICP备17036318号</p>
                    <p>河北网安备案：13030202002503号</p>
                </div>
            </div>
        </div>
    )
}

const Item = ({ src, imgSrc }) => {
    const [mouseOver, setMouseOver] = useState(false)
    const handleMouseEnter = () => {
        setMouseOver(true)
    }
    const handleMouseLeave = () => {
        setMouseOver(false)
    }
    const handleItemClick = () => {
        window.open(src, '__back')
    }
    return (
        <div
            onClick={handleItemClick}
            className="item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="min-header">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
            <div className="pic">
                <img
                    src={imgSrc}
                    alt=""
                    style={{
                        position: 'relative',
                        transition: 'ease 5s all',
                        transform: !mouseOver
                            ? 'translateY(0)'
                            : 'translateY(-100%)',
                    }}
                />
            </div>
        </div>
    )
}
