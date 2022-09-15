import React, { useRef, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import './index.scss'
import DateViewsChart from './components/DateViewsChart/DateViewsChart'
import BlogViewsChart from './components/BlogViewsChart/BlogViewsChart'
import AreaCountChart from './components/AreaCountChart/AreaCountChart'

export default function Chart() {
    const ref = useRef()
    useEffect(() => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])
    return (
        <div className="page-chart" ref={ref}>
            <Header />
            <SearchBar hasBack />
            <div className="charts-wrap">
                <h3>30天日访问量：</h3>
                <DateViewsChart />
                <h3>30天Blog问量：</h3>
                <BlogViewsChart />
                <h3>区域统计：</h3>
                <AreaCountChart />
            </div>
            <Footer />
        </div>
    )
}
