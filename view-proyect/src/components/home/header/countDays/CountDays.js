import React from 'react';
import './countDays.scss';

export default function CountDays() {
    return (
        <div className="content-count">
            <div className="content-left">
                <p>CLOSING IN</p>
            </div>
            <div className="content-right">
                <p><span>22</span> days</p>
            </div>
        </div>
    )
}

