import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import './index.scss'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../api/album'

export default function AlbumItems() {
    const { id } = useParams()
    const [blog, setBlog] = useState('')
    async function fetchBlog(blogIid) {
        const res = await getBlog({ id: blogIid })
        setBlog(res.data)
        document.title = res.data.title
    }
    useEffect(() => {
        fetchBlog(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="page-blog">
            <Header />
            <SearchBar hasBack />
            <div className="title">{blog.title}</div>
            <div className="summary">{blog.summary}</div>
            <div
                className="blog"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <Footer />
        </div>
    )
}
