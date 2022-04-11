import PropTypes from 'prop-types'
import React from 'react'
// import { a } from 'react-router-dom'

export default function Navbar(props) {


  return (
      <>
    <nav className={`navbar navbar-expand-lg navbar-${props.modeVar} bg-${props.modeVar}`}>
    <div className="container-fluid">
      <a className={`navbar-brand text-${props.clr1}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className={`nav-a active text-${props.clr1}`} aria-current="page" href="/">{props.newhome}</a> */}
          </li>
          <li className="nav-item">
          <a className={`nav-a text-${props.clr1}`} href="/">{props.about}</a>
        </li>
        </ul>
        <form className="d-flex">
          <input className="form-control  btn-outline-warning me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-warning" type="submit">Search</button>
        </form>


        <div className={`form-check form-switch mx-3 text-${props.clr}`} >
  <input className="form-check-input" type="checkbox"   onClick={props.something3} role="switch"  name='Ankit' id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> White - Silver</label>
</div>
         <div className={`form-check form-switch mx-3 text-${props.clr}`} >
  <input className="form-check-input" type="checkbox"  onClick={props.something2} role="switch"  name='Ankit'id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> White - Olive</label>
</div>
        <div className={`form-check form-switch mx-3 text-${props.clr}`} >
  <input className="form-check-input" type="checkbox"   onClick={props.something1}  role="switch"  name='Ankit' id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">White - Yellow</label>
</div>
        <div className={`form-check form-switch mx-3 text-${props.clr}`} >
  <input className="form-check-input"  onClick={props.something}  type="checkbox"   role="switch"  name='Ankit' id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >White - Black</label> 
   

    </div>
      </div>
    </div>
  </nav>
  </>
  )
}
Navbar.prototype ={
    
    title:PropTypes.string.isRequired,
    newhome:PropTypes.string

}














