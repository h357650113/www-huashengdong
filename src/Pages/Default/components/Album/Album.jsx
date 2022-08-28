import React from 'react'
import './index.scss'

export default function Album({
    coverImage,
    cdt,
    summary,
    id,
    title,
    onMoreClick = () => {},
}) {
    const handleMoreClick = () => {
        onMoreClick(id)
    }

    return (
        <div className="album">
            <div className="content">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <div
                    className="cover-image"
                    style={{ backgroundImage: `url(${coverImage})` }}
                />
            </div>
            <div className="ctrl">
                <div className="date">DATE: {cdt}</div>
                <div className="more" onClick={handleMoreClick}>
                    MORE
                </div>
            </div>

            <div className="tags">
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
            </div>
        </div>
    )
}
