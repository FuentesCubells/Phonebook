import React from "react";



const AppHeader = () => {
    //const add = process.env.PUBLIC_URL + '/assets/Add.png'

    return (
        <div className="app-header-container">
            <div className="app-header-name">
                <h2>List</h2>
            </div>
            <button className="app-header-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" fill="white" fill-opacity="0.01"/>
                    <path d="M21.25 18.75V10H18.75V18.75H10V21.25H18.75V30H21.25V21.25H30V18.75H21.25Z"/>
                </svg>
            </button>
        </div>
    )
}

export default AppHeader
