import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="dependence">
                <h1>Dependence</h1>
                <div className="wrap">
                    <Item
                        src={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/www/react.png'
                        }
                    />
                    <Item
                        src={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/www/react.png'
                        }
                    />
                    <Item
                        src={
                            'https://hellogen.oss-cn-beijing.aliyuncs.com/www/react.png'
                        }
                    />
                </div>
            </div>
        </div>
    )
}

const Item = ({ src }) => {
    return (
        <div className="item">
            <div className="header">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
            <div className="pic">
                <img src={src} alt="" />
            </div>
        </div>
    )
}
