import React, { useRef, useEffect } from 'react'
import Tree from 'react-d3-tree'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import './index.scss'

const orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
}

function OrgChartTree() {
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ width: '1000px', height: '500px' }}>
            <Tree data={orgChart} />
        </div>
    )
}

export default function Chart() {
    const ref = useRef()
    useEffect(() => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])
    return (
        <div className="page-nodes" ref={ref}>
            <Header />
            <SearchBar hasBack />
            <div className="nodes-wrap">
                <OrgChartTree />
            </div>
            <Footer />
        </div>
    )
}
