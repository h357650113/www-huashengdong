import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default function Album({
    cdt,
    summary,
    title,
    type,
    open_source,
    style = {},
}) {
    return (
        <Link to={`/detail/${open_source.match(/\d(\S+)|\d/g)}/${title}`}>
            <div className="album-item" style={{ ...style }}>
                <div className="type">{type}</div>
                <div className="content">
                    <div className="des">
                        <div className="title">{title}</div>
                        <div className="summary">{summary}</div>
                        <div className="tags">
                            <div className="tag">Blog</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="date">{cdt}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
