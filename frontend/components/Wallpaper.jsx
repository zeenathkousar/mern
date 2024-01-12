import React from 'react'
import imgwall from '../src/assets/Wallpaper'

export const Wallpaper = () => {
  return (
    <>
        <img src={imgwall} alt="" className="homeimge"/>
    <div className="restaurant">
        <button classNameName="login">login</button>
        <button className="creat">creat an account</button>
    </div>
    <div className="topsection">
        <div className="logo">e!</div>
        <div className="head">Find the best restaurants, cafes, and bars</div>
        <br/>
        <div className="search">
            <span>
                <select className="cites">
                    <option>mumbai</option>
                    <option>chennai</option>
                    <option>hyderabad</option>
                    <option>bangalore</option>
                    <option>delhi</option>
                </select>
            </span>
            <span className="searchbox">
                <i className="bi bi-search searchicon"></i>
                <input  className="searchinput"type="text" placeholder="search for restaurants"/>
            </span>
        </div>

    </div>        


    </>
  )
}
