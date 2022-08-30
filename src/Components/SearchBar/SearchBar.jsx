import React from 'react'
import { useNavigate } from 'react-router-dom'
import searchSrc from '../../asset/icon/search.png'
import returnSrc from '../../asset/icon/return.png'
import './index.scss'

export default function SearchBar({ hasBack = false, hasSearch = false }) {
    const navigate = useNavigate()
    const handleBlackClick = () => {
        if (window.history.length > 1) navigate(-1)
    }
    return (
        <div className="search-bar">
            {hasBack && window.history.length && (
                <div className="back" onClick={handleBlackClick}>
                    <img src={returnSrc} alt="" /> back
                </div>
            )}
            {hasSearch && (
                <div className="search">
                    <img src={searchSrc} alt="" />
                    <input placeholder="SEARCH" />
                </div>
            )}
        </div>
    )
}
