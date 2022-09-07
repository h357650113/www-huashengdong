import React, { useEffect, useState } from 'react'
import './index.scss'

export default function Categories({
    onChange = () => {},
    defaultCurrentTags = [],
}) {
    const [tags, setTags] = useState([
        { name: 'blog', id: 1 },
        { name: 'pic', id: 3 },
    ])
    const [currentTags, setCurrentTags] = useState(defaultCurrentTags)
    const handleTagClick = (target) => {
        setCurrentTags((pre) => {
            if (pre.find((item) => item.id === target.id)) {
                return pre.filter((item) => item.id !== target.id)
            }
            return [...pre, target]
        })
    }
    useEffect(() => {
        onChange(currentTags)
    }, [currentTags, onChange])
    return (
        <div className="categories">
            <h1>Categories</h1>
            <div className="tags-wrap">
                {tags.length &&
                    tags.map((item) => (
                        <div
                            className={
                                currentTags.find(
                                    (target) => target.id === item.id
                                )
                                    ? 'tag action'
                                    : 'tag'
                            }
                            key={item.id}
                            onClick={() => {
                                handleTagClick({ id: item.id, name: item.name })
                            }}
                        >
                            {item.name}
                        </div>
                    ))}
            </div>
        </div>
    )
}
