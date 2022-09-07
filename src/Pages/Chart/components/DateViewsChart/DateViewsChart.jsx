import React, { useState, useEffect } from 'react'
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
import { getViewsByDate } from '../../../../api/chart'

export default function DateViewsChart() {
    const [viewsByDate, setViewsByDate] = useState([])
    async function fetchViewsByDate() {
        const res = await getViewsByDate()
        setViewsByDate(res.data)
    }
    useEffect(() => {
        fetchViewsByDate()
    }, [])
    return (
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
    )
}
