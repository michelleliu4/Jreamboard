import React from 'react';

export default function MeetUp() {

    const data = [
        {Mentor:"Michelle Liu", Activity:"Chess in the Park", Location:"Central Park, New York", Time: "5:00pm on 9/17/2022"},
        {Mentor:"Paul Franco", Activity:"Coding Lesson", Location:"277 Park Avenue", Time: "5:00pm on 9/17/2022"},
        {Mentor:"Ali Atis", Activity:"Soccer", Location:"NYU, New York", Time: "5:00pm on 9/17/2022"},
        {Mentor:"Madelyn Chew", Activity:"Food Crawl", Location:"International District, New York", Time: "5:00pm on 9/17/2022"},
        {Mentor:"Quang Nguyen", Activity:"Q & A", Location:"Metlife Stadium, New York", Time: "5:00pm on 9/17/2022"}
    ]

    let itemList=data.map((item,index)=>{
        return <button key={index} className="meetUpCard">
            <p>Mentor: {item.Mentor}</p>
            <p>Activity: {item.Activity}</p>
            <p>Location: {item.Location}</p>
            <p>Time: {item.Time}</p>
        </button>
    })

    return (
    <div className='Login-app'>
        <h3 className="center">Meet Ups in the Area!</h3>
        <div className="container meetUpContainer">
            {itemList}
        </div>
    </div>
    )  
}