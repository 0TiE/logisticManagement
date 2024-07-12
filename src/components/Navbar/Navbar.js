import React from 'react'
import './Nav.css';
import logo from './img/ConnexIT.png'
import logo2 from './img/pngtree-logistics-icons-png-image_5397605-removebg-preview.png'

function Navbar() {
  return (
    <div className='navbar123'>
      <div>
        <img src={logo} className='lg1' />
      </div>

      <div> 
        <h3 className='blt'>LOGISTIC </h3><h3 className='grt'> MANAGEMENT</h3>
        <img src={logo2} className='lg2'></img>
      </div>
      
      <div className='btns'>
        <div className='servicetext'><h4>SERVICES</h4></div>
        <button className='sbt'><i class="bi bi-house"></i> DASHBOARD</button><br />
        <button className='sbt'><i class="bi bi-inbox"></i> PRODUCT SELL</button><br />
        <button className='sbt'><i class="bi bi-truck"></i> DELIVERY TRACK</button><br />
        <button className='sbt'><i class="bi bi-pin-map-fill"></i> STOCK MANAGEMENT</button><br />
        <button className='sbt'><i class="bi bi-newspaper"></i> GRN ENTRY</button><br />
        <button className='sbt'><i class="bi bi-geo-alt"></i> TRACKING</button><br />
      </div>


    </div>
  )
}

export default Navbar