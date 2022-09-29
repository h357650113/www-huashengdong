import React, { useEffect, useState, useRef } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import './index.scss'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../api/album'

export default function Detail() {
    const { id, title } = useParams()
    const [blog, setBlog] = useState('')
    const refPageBlog = useRef()

    async function fetchBlog(blogIid) {
        const res = await getBlog({ id: blogIid })
        setBlog(res.data)
        document.title = title
        refPageBlog?.current?.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
        fetchBlog(id)
    }, [id])
    return (
        <div className="page-blog" ref={refPageBlog}>
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
