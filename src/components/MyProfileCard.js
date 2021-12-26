import React from 'react'

const MyProfileCard = () => {

    return (
        <div style={{ backgroundColor: 'white' , margin: 10 }}>
            <div style={{ display: "flex" }}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bi4hemoQNKvvwwjINkKinQHaDt%26pid%3DApi&f=1" alt="" height="50px"/>
                <div>
                    <h2 style={{ marginLeft: "10px" }}> Samir Malek </h2>
                    <h5 style={{ marginLeft: "10px" }}> Freelance Web Developer & Coach </h5>
                </div>
            </div>
            <div>
                <p style={{fontSize: "18px", padding: 5}}>Description: I'm a huge fan of Sonic Cartoons. I'm also a developer 👨🏻‍💻 </p>
            </div>
        </div>
    )
}

export default MyProfileCard
