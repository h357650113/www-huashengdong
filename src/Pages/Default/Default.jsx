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
    const [sortDate, setSortDate] = useState('up')
    const [filterFold, setFilterFold] = useState(true)
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
    const handleFilterIconClick = (event) => {
        event.stopPropagation()
        setFilterFold(false)
    }
    const handleFilterFold = () => {
        setFilterFold(true)
    }
    const handleFilterChange = (event) => {
        setSortDate(event.target.value)
    }
    return (
        <div className="page-default" ref={ref} onClick={handleFilterFold}>
            <Header />
            <SearchBar hasSearch onSearchEnterDown={onSearchEnterDown} />
            <div className="content">
                <Categories onChange={handleCategoriesChange} />
                <Filter
                    onFilterChange={handleFilterChange}
                    onFilterIconClick={handleFilterIconClick}
                    fold={filterFold}
                />
                <div className="albums-wrap">
                    {albums?.length
                        ? albums
                              .sort((target, last) =>
                                  sortDate === 'down'
                                      ? new Date(target.ldt).getTime() -
                                        new Date(last.ldt).getTime()
                                      : new Date(last.ldt).getTime() -
                                        new Date(target.ldt).getTime()
                              )
                              .map((item) => <Album key={item.id} {...item} />)
                        : 'Not Found'}
                </div>
                <div className="tips" />
            </div>
            <Footer />
        </div>
    )
}
