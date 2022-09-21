import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Album({
    coverImage,
    ldt,
    summary,
    id,
    title,
    tags,
    onMoreClick = () => {},
    style = {},
}) {
    const handleMoreClick = () => {
        onMoreClick(id)
    }

    return (
        <div className="album" style={{ ...style }}>
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
                <div className="date">LDT: {ldt}</div>
                <div className="more" onClick={handleMoreClick}>
                    <Link to={`/item/${id}`}>MORE</Link>
                </div>
            </div>

            <div className="tags">
                {tags &&
                    tags.map((item) => (
                        <div key={item.id} className="tag">
                            {item.name}
                        </div>
                    ))}
            </div>
        </div>
    )
}
