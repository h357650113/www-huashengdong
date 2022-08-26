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
