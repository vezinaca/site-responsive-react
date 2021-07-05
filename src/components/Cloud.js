import React from 'react'
import "./Cloud.css";

const Cloud = () => {
    return (
        <>
            <section className="cloud bg-primary my-2 py-2">
                <div className="container grid">
                    <div className="text-center">
                        <h2 className="lg">Extreme Cloud Hosting</h2>
                        <p className="lead my-1">Cloud hosting like you've never seens.
                        Fast, efficient and scalable</p>
                        <a href="#" className="btn btn-dark">Read More</a>
                    </div>
                    <img src="images/cloud.png" alt="" />
                </div>


            </section>
            
        </>
    )
}

export default Cloud
