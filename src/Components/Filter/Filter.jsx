import React from 'react'
import dateIcon from '../../asset/icon/date-line.png'
import arrowIcon from '../../asset/icon/arrow-down.png'
import './index.scss'

export default function Filter() {
    return (
        <div className="filter-wrap">
            <div className="filter">
                <div className="type">
                    <div className="type-filter">
                        <div className="icon-wrap">
                            <img src={dateIcon} alt="" />
                        </div>
                        <span>DATE</span>
                    </div>
                </div>
                <div className="sort">
                    <select>
                        <option>
                            <div className="opt">
                                up <img src={arrowIcon} alt="" />
                            </div>
                        </option>
                        <option>
                            <div className="opt">
                                down{' '}
                                <img
                                    src={arrowIcon}
                                    alt=""
                                    style={{ transform: 'skewX(180px)' }}
                                />
                            </div>
                        </option>
                    </select>
                </div>
            </div>
        </div>
    )
}
