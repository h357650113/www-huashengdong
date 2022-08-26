import React from 'react'
import searchSrc from '../../asset/icon/search.png'
import './index.scss'

export default function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search">
                <img src={searchSrc} alt="" />
                <input placeholder="SEARCH" />
            </div>
        </div>
    )
}
