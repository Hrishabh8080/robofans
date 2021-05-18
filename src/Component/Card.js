import React from 'react';

const Card = ({name,email,id}) =>{
    return(
        <div className= " white b--solid tc bg-navy dib br3 pa3 mt4 grow ma2 shadow-3">
            <img src={`https://robohash.org/${id}?200x200`} alt="robotsImage"/>
            <div >
                <h2 >{name}</h2>
                <p>{email }</p>
            </div>
        </div>
    )
}
export default Card;