import React from 'react'
import './index.scss'

export default function Album({
    cdt,
    summary,
    title,
    type,
    open_source,
    onMoreClick = () => {},
    style = {},
}) {
    const handleMoreClick = () => {
        onMoreClick(open_source.match(/\d(\S+)|\d/g))
    }

    return (
        <div
            className="album-item"
            onClick={handleMoreClick}
            style={{ ...style }}
        >
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
    )
}
