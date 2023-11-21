import React from 'react'
import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/chart'
import Attendance from '../ui/dashboard/attendance/attendance'

const Dashboard = () => {
    return (
        <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-5 w-full">
                <div id="cards" className="flex gap-5 justify-between">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Attendance />
                <Chart />
            </div>
        </div>
    )
}

export default Dashboard