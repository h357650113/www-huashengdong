import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Album from './components/Album/Album'
import Footer from '../../Components/Footer/Footer'
import './index.scss'
import { getAlbums } from '../../api/album'

export default function Default() {
    const [albums, setAlbums] = useState([])
    async function fetchAlbums() {
        const response = await getAlbums()
        if (response.data) {
            setAlbums(response.data)
        }
    }
    useEffect(() => {
        fetchAlbums()
    }, [])

    return (
        <div className="page-default">
            <Header />
            <SearchBar hasSearch />
            <div className="albums-wrap">
                {albums.length && albums.map((item) => <Album {...item} />)}
            </div>
            <Footer />
        </div>
    )
}
