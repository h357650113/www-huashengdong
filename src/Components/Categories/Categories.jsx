import React, { useEffect, useState } from 'react'
import { getAlbumTags } from '../../api/album/index'
import './index.scss'

export default function Categories({ onChange = () => {} }) {
    const [checkedAllTags, setCheckedAllTags] = useState(true)
    const [tags, setTags] = useState(null)
    const [currentTags, setCurrentTags] = useState([])
    const handleTagClick = (target) => {
        setCurrentTags((pre) => {
            if (pre.find((item) => item.id === target.id)) {
                return pre.filter((item) => item.id !== target.id)
            }
            return [...pre, target]
        })
    }
    async function fetchTags() {
        const responseTags = await getAlbumTags()
        if (responseTags.data) {
            setTags(responseTags.data)
            setCurrentTags(responseTags.data)
        }
    }
    useEffect(() => {
        fetchTags()
    }, [])
    useEffect(() => {
        onChange(currentTags)
    }, [currentTags, onChange])

    const handleAllClick = () => {
        setCheckedAllTags((pre) => {
            if (!pre) {
                setCurrentTags(tags)
            } else {
                setCurrentTags([])
            }
            return !pre
        })
    }
    useEffect(() => {
        if (tags?.length !== currentTags?.length) {
            setCheckedAllTags(false)
        } else {
            setCheckedAllTags(true)
        }
    }, [tags, currentTags])
    return (
        <div className="categories">
            <div className="top">
                <h1>Categories</h1>
                <div className="tools">
                    <span
                        className={checkedAllTags && 'action'}
                        onClick={handleAllClick}
                    >
                        ALL
                    </span>
                </div>
            </div>
            <div className="tags-wrap">
                {tags?.length
                    ? tags.map((item) => (
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
                                  handleTagClick({
                                      id: item.id,
                                      name: item.name,
                                  })
                              }}
                          >
                              {item.name}
                          </div>
                      ))
                    : 'Loading...'}
            </div>
        </div>
    )
}
