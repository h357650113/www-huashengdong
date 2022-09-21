import React, { useEffect, useState, useRef } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Album from './components/Album/Album'
import Footer from '../../Components/Footer/Footer'
import Categories from '../../Components/Categories/Categories'
import './index.scss'
import { getAlbums } from '../../api/album'
import Filter from '../../Components/Filter/Filter'

export default function Default() {
    const ref = useRef()
    const [albums, setAlbums] = useState(null)
    const [tags, setTags] = useState(null)
    async function fetchAlbums(search) {
        const response = await getAlbums({
            search,
            tags: tags.map((item) => item.id),
        })
        if (response?.data) {
            setAlbums(response.data)
            ref?.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }
    useEffect(() => {
        document.title = 'HOME'
        tags && fetchAlbums()
    }, [tags])
    const onSearchEnterDown = (value) => {
        fetchAlbums(value)
    }
    const handleCategoriesChange = (_tags) => {
        setTags(_tags)
    }
    return (
        <div className="page-default" ref={ref}>
            <Header />
            <SearchBar hasSearch onSearchEnterDown={onSearchEnterDown} />
            <div className="content">
                <Categories onChange={handleCategoriesChange} />
                <Filter />
                <div className="albums-wrap">
                    {albums?.length
                        ? albums.map((item) => (
                              <Album key={item.id} {...item} />
                          ))
                        : 'Not Found'}
                </div>
                <div className="tips" />
            </div>
            <Footer />
        </div>
    )
}
