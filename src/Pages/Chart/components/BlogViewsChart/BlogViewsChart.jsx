import React, { useState, useEffect } from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from 'recharts'
import { getViewsBlog } from '../../../../api/chart'

export default function BlogViewsChart() {
    const [viewsBlog, setViewsBlog] = useState([])

    async function fetchViewsBlog() {
        const res = await getViewsBlog()
        setViewsBlog(res.data)
    }
    useEffect(() => {
        fetchViewsBlog()
    }, [])

    return (
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={'100%'} height={'100%'} data={viewsBlog}>
                    <Bar dataKey="value" fill="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
