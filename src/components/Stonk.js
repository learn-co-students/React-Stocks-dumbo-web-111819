import React from 'react'


const Stonk = (props) => {
  
  const handleClick = () => {
    props.addRemove(props.stonk)
  }
  
  return(
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {props.stonk.name}
          </h5>
          <p className="card-text">
            {props.stonk.price}
          </p>
        </div>
      </div>
    </div>
  )
  
};

export default Stonk

