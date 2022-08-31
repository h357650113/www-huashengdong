import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import searchSrc from '../../asset/icon/search.png'
import returnSrc from '../../asset/icon/return.png'
import homeSrc from '../../asset/icon/home.png'
import './index.scss'

export default function SearchBar({
    hasBack = false,
    hasSearch = false,
    onSearchEnterDown = () => {},
}) {
    const navigate = useNavigate()
    const handleBlackClick = () => {
        if (window.history.length > 1) navigate(-1)
        if (window.history.length === 1) window.location.href = '/'
    }

    const searchRef = useRef()
    const handleSearchEnterDown = (e) => {
        if (e.key === 'Enter') onSearchEnterDown(searchRef.current.value)
    }

    return (
        <div className="search-bar">
            {hasBack && window.history.length && (
                <div className="back" onClick={handleBlackClick}>
                    <img
                        src={window.history.length === 1 ? homeSrc : returnSrc}
                        alt=""
                    />
                    {window.history.length === 1 ? ' home' : ' back'}
                </div>
            )}
            {hasSearch && (
                <div className="search">
                    <img src={searchSrc} alt="" />
                    <input
                        ref={searchRef}
                        placeholder="SEARCH"
                        onKeyDown={handleSearchEnterDown}
                    />
                </div>
            )}
        </div>
    )
}
