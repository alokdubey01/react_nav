import React from 'react'
import ".././App.css"
export default function Home() {
    return (
        <div className="container">
            <label htmlFor="search">Search</label><br />
            <input type="search" name="search" id="search" />
        </div>
    )
}
