import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import { getViewsByDate } from '../../api/chart'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import './index.scss'

export default function Chart() {
    const [viewsByDate, setViewsByDate] = useState([])
    async function fetchViewsByDate() {
        const res = await getViewsByDate()
        setViewsByDate(res.data)
    }
    useEffect(() => {
        fetchViewsByDate()
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
            </div>
            <Footer />
        </div>
    )
}
