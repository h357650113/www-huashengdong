import React from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import './index.scss'
import DateViewsChart from './components/DateViewsChart/DateViewsChart'
import BlogViewsChart from './components/BlogViewsChart/BlogViewsChart'

export default function Chart() {
    return (
        <div className="page-chart">
            <Header />
            <SearchBar hasBack />
            <div className="charts-wrap">
                <h3>日访问量：</h3>
                <DateViewsChart />
                <h3>Blog问量：</h3>
                <BlogViewsChart />
            </div>
            <Footer />
        </div>
    )
}
