import React from "react";

const Square = (props) =>{
    return (
      <div onClick={props.onClick}
        style={{border:"1px solid",height:"100px",width:"100%"}} className="square">
        <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>{props.value}</h2>
      </div>
    );
}

export default Square;