import React from 'react'
import dateIcon from '../../asset/icon/date-line.png'
import './index.scss'

export default function Filter({
    fold = true,
    onFilterIconClick = () => {},
    onFilterChange = () => {},
}) {
    const handleFilterWrapClick = (event) => {
        event.stopPropagation()
    }
    return (
        <div
            className={`filter-wrap ${fold ? 'filter-wrap-fold' : ''}`}
            onClick={handleFilterWrapClick}
        >
            <div className="filter">
                <div className="type">
                    <div className="type-filter">
                        <div className="icon-wrap" onClick={onFilterIconClick}>
                            <img src={dateIcon} alt="" />
                        </div>
                        <span>DATE</span>
                    </div>
                </div>
                <div className="sort">
                    <select onChange={onFilterChange}>
                        <option value="up">recently</option>
                        <option value="down">previously </option>
                    </select>
                </div>
            </div>
        </div>
    )
}
