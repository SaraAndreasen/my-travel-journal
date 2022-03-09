import React from "react"
import Navbar from "./components/Nav";
import Card from "./components/Card";
import data from "./data";
import './style.css'; //if CSS doesn't load from index



export default function App() {
    const cards = data.map(item => {
        return (
        <Card
            key={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}       
            description={item.description}
            imageUrl={item.imageUrl}
        />
        )
    })

    return (
        <div>
            <div className="row">
             <Navbar />
            </div>
        
            <div className="">
                <div className="">
                    {cards}
                </div>
            </div>
        </div>
        
        
        

    )
}