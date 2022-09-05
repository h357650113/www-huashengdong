import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import { getViewsByDate, getViewsBlog } from '../../api/chart'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
} from 'recharts'
import './index.scss'

export default function Chart() {
    const [viewsByDate, setViewsByDate] = useState([])
    const [viewsBlog, setViewsBlog] = useState([])
    async function fetchViewsByDate() {
        const res = await getViewsByDate()
        setViewsByDate(res.data)
    }
    async function fetchViewsBlog() {
        const res = await getViewsBlog()
        setViewsBlog(res.data)
    }
    useEffect(() => {
        fetchViewsByDate()
        fetchViewsBlog()
    }, [])
    return (
        <div className="page-chart">
            <Header />
            <SearchBar hasBack />
            <div className="charts-wrap">
                <h3>日访问量：</h3>
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={'100%'}
                            height={'100%'}
                            data={viewsByDate}
                            margin={{
                                top: 15,
                                right: 30,
                                left: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="views"
                                dataKey="value"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <h3>Blog问量：</h3>
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={'100%'}
                            height={'100%'}
                            data={viewsBlog}
                        >
                            <Bar dataKey="value" fill="#8884d8" />
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="title" />
                            <YAxis />
                            <Tooltip />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <Footer />
        </div>
    )
}
