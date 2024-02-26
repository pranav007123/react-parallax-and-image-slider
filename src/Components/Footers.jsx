import React from 'react'

function Footers() {
  return (
    <>

   <div className='bg-dark text-light text-center'>
        <div className="row p-5">
            <div className="col-lg-6">
    <img src="./logo.png" alt="" />
   <h3> Careos</h3>
            </div>
            <div className="col-lg-2">
                <h5>Mobile App</h5>
               <h6> Live share</h6>
              <h6>  Features</h6>
              <h6>  Video record</h6>

                
            </div>
            <div className="col-lg-2">
            <h5>Community</h5>
               <h6> Featured artists</h6>
              <h6> The Portal</h6>
              <h6> Live events</h6>

            </div>
            <div className="col-lg-2">
            <h5>Company</h5>
               <h6> About us</h6>
              <h6>  Contact us</h6>
              <h6>  History</h6>

            </div>
        </div>
        <hr style={{backgroundColor:'orange'}} />
   </div>
    </>
  )
}

export default Footers