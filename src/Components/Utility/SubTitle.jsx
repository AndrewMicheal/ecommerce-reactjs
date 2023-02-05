import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({title , btntitle , pathText}) => {
  return (
    <React.Fragment>
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
                   <Link to = {`${pathText}`} style = {{textDecoration : "none"}}>
                   <div className="shopping-now">{btntitle}</div>
                    
                   </Link>
            ) : null}
        </div>
    </React.Fragment>
  )
}

export default SubTitle