import React from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './index.scss'

export default function Default() {
    return (
        <div className="page-default">
            <Header />
            <SearchBar />
        </div>
    )
}
