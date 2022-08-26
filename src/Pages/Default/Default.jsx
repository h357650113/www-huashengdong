import React from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Album from './components/Album/Album'
import Footer from '../../Components/Footer/Footer'
import './index.scss'

export default function Default() {
    return (
        <div className="page-default">
            <Header />
            <SearchBar />
            <div className="albums-wrap">
                <Album />
                <Album />
            </div>
            <Footer />
        </div>
    )
}
