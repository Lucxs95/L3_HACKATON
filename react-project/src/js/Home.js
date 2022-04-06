import React from 'react';
import '../css/Home.css';
import Banner from './Banner'
import Card from './Card'
import img1 from '../img/disability.webp';

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card
                    src={img1}
                    title="Accessibility for all"
                    description="Find a place that suits you !"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className='home__section'>
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat with escalator"
                    description="Accessible for all physical disability"
                    price="130€/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="350€/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Silent bedroom apartment "
                    description="Ideal for sensitive and blind people"
                    price="70€/night"
                />
            </div>
        </div>
    )
}

export default Home
