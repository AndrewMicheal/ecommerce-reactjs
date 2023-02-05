import React from 'react'
import next from '../../Images/next.png'

const LeftButton = (onClick) => {
  return (
    <React.Fragment>
        <img
            src={next}
            alt=""
            width="35px"
            onClick={onClick}
            height="35px"
            style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
        />
    </React.Fragment>
  )
}

export default LeftButton