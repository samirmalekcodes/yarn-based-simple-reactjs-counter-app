import React from 'react'

const MyProfileCard = ({ image, name, title, description }) => {

    return (
        <div style={{ 
                backgroundColor: 'white', 
                margin: 10, 
                padding: 5 , 
                borderRadius: 15,
            }}>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <img src={image} alt="" height="75px" style={{ borderRadius: 10}} />
                <div>
                    <h2 style={{ marginLeft: "10px" }}> {name} </h2>
                    <h5 style={{ marginLeft: "10px" }}> {title} </h5>
                </div>
            </div>
            <div style={{ display: "flex" , justifyContent: "center"}}>
                <p style={{ fontSize: "18px", padding: 5 }}>
                    Description: {description} </p>
            </div>
        </div>
    )
}

export default MyProfileCard
