import React from 'react'
import './index.scss'

export default function Album() {
    return (
        <div className="album">
            <div className="content">
                <div>
                    <h3>Title of Something</h3>
                    <p>
                        This is a paragraph with more information about
                        something important. This something has many uses and is
                        made of 100% recycled material.
                    </p>
                </div>
                <img src="" alt="" />
            </div>
            <div className="ctrl">
                <div className="date">DATE: 2200-20-20</div>
                <div className="more">MORE</div>
            </div>
            <div className="tags">
                <div className="tag">Tag</div>
                <div className="tag">Tag</div>
            </div>
        </div>
    )
}
