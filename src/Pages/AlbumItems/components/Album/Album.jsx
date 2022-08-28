import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Album({
    cdt,
    summary,
    id,
    title,
    type,
    tags,
    onMoreClick = () => {},
}) {
    const handleMoreClick = () => {
        onMoreClick(id)
    }

    return (
        <div className="album-item">
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
