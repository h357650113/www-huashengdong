import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Album from './components/Album/Album'
import Footer from '../../Components/Footer/Footer'
import './index.scss'
import { getAlbums } from '../../api/album'

export default function Default() {
    const [albums, setAlbums] = useState([])
    async function fetchAlbums(search) {
        const response = await getAlbums(search)
        if (response.data) {
            setAlbums(response.data)
        }
    }
    useEffect(() => {
        document.title = 'HOME'
        fetchAlbums()
    }, [])
    const onSearchEnterDown = (value) => {
        fetchAlbums(value)
    }
    return (
        <div className="page-default">
            <Header />
            <SearchBar hasSearch onSearchEnterDown={onSearchEnterDown} />
            <div className="albums-wrap">
                {albums.length
                    ? albums.map((item) => <Album key={item.id} {...item} />)
                    : 'Not Found'}
            </div>
            <Footer />
        </div>
    )
}
