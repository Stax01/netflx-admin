import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidjetLg from '../../components/widjetLg.jsx/WidjetLg'
import WidjetSm from '../../components/widjetSm/WidjetSm'
import './home.scss'
const Home = () => {

    const userData = [
        {
            name: "Jan",
            "Active User": 4000,
        },
        {
            name: "Feb",
            "Active User": 3000,
        },
        {
            name: "Mar",
            "Active User": 5000,
        },
        {
            name: "Apr",
            "Active User": 4000,
        },
        {
            name: "May",
            "Active User": 3000,
        },
        {
            name: "Jun",
            "Active User": 2000,
        },
        {
            name: "Jul",
            "Active User": 4000,
        },
        {
            name: "Agu",
            "Active User": 3000,
        },
        {
            name: "Sep",
            "Active User": 4000,
        },
        {
            name: "Oct",
            "Active User": 1000,
        },
        {
            name: "Nov",
            "Active User": 4000,
        },
        {
            name: "Dec",
            "Active User": 3000,
        },
    ];

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidjet">
                <WidjetSm />
                <WidjetLg />
            </div>

        </div>
    )
}

export default Home
