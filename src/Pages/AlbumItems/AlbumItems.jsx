import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import Album from './components/Album/Album'
import './index.scss'
import { getAlbumItems } from '../../api/album'
import { useParams, useNavigate } from 'react-router-dom'

export default function AlbumItems() {
    const { id } = useParams()
    const [albumItem, setAlbumItem] = useState([])
    async function fetchAlbums() {
        const response = await getAlbumItems({ id })
        if (response.data) {
            setAlbumItem(response.data)
        }
    }
    useEffect(() => {
        fetchAlbums()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const navigate = useNavigate()
    const handleMoreClicK = (id) => {
        navigate(`/detail/${id}`)
    }
    const handleSearchEnterDown = (value) => {
        value &&
            setAlbumItem((pre) =>
                pre.filter(
                    (item) =>
                        item.title.match(value) || item.summary.match(value)
                )
            )

        !value && fetchAlbums()
    }
    return (
        <div className="page-default">
            <Header />
            <SearchBar
                hasBack
                hasSearch
                onSearchEnterDown={handleSearchEnterDown}
            />
            <div className="albums-wrap">
                {albumItem.length
                    ? albumItem.map((item) => (
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
