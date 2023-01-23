import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./card.scss"
function CardSection() {

    const [datam, setDatam] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/users").then(({ data }) => {
            setDatam(data);
        });
    }, []);

    return (
        <>
            <div className='textcard'>
                <h3>Practic Areas</h3>
                <p>Lorem Ipsum dolor  sit  amet</p>
            </div>

            <div className='generalcardelement'>
                {datam.map((element) => {
                    return (
                        <div className='elementcard'>
                            <h1> {element.title} </h1>
                            <h4> {element.description} </h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CardSection