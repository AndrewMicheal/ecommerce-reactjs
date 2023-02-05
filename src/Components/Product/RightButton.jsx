import React from 'react'
import prev from '../../Images/prev.png'

const RightButton = (onClick) => {
  return (
    <React.Fragment>
        <img
            src={prev}
            alt=""
            width="35px"
            onClick={onClick}
            height="35px"
            style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
        />
    </React.Fragment>
  )
}

export default RightButton