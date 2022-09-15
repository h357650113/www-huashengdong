import React, { useEffect, useState, useRef } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import Album from './components/Album/Album'
import './index.scss'
import { getAlbumItems } from '../../api/album'
import { useParams, useNavigate } from 'react-router-dom'

export default function AlbumItems() {
    const ref = useRef()
    const { id } = useParams()
    const [albumItem, setAlbumItem] = useState({ store: [], current: [] })
    async function fetchAlbums(id) {
        const response = await getAlbumItems({ id })
        if (response.data) {
            setAlbumItem({
                store: response.data,
                current: response.data,
            })
            ref?.current?.scrollIntoView({ behavior: 'smooth' })
        }
        document.title = 'ALBUM'
    }
    useEffect(() => {
        fetchAlbums(id)
    }, [id])
    const navigate = useNavigate()
    const handleMoreClicK = (id) => {
        navigate(`/detail/${id}`)
    }
    const handleSearchEnterDown = (value) => {
        value &&
            setAlbumItem((pre) => {
                return {
                    ...pre,
                    current: pre.store.filter(
                        (item) =>
                            item.title.match(value) || item.summary.match(value)
                    ),
                }
            })

        !value && fetchAlbums()
    }
    return (
        <div className="page-album-items" ref={ref}>
            <Header />
            <SearchBar
                hasBack
                hasSearch
                onSearchEnterDown={handleSearchEnterDown}
            />
            <div className="albums-wrap">
                {albumItem.current.length
                    ? albumItem.current.map((item) => (
                          <Album
                              key={item.id}
                              {...item}
                              onMoreClick={handleMoreClicK}
                          />
                      ))
                    : 'Not Found'}
            </div>
            <Footer />
        </div>
    )
}
