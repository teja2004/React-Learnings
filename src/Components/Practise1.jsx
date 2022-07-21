import React from 'react'
import PropTypes  from 'prop-types';

export default function Practise1(props) {
    
    
  return (
    <>
    <div className="container" style={props.initialColor}>
        <h1 className="text-center">{props.myName}</h1>
        <p>{props.aboutMe.name}</p>
        <p>{props.aboutMe.age}</p>
        <p>{props.aboutMe.favourites.join(' , ')}</p>
        <button className={`btn btn-sm btn-secondary`} type='button' onClick={props.toggleMode}>Toggle Dark Mode</button>
    </div>
    </>
  );
}

Practise1.defaultProps = {
    name : "Give Any Name",
    age : 18,
    favourites : ["Some Hobbies/Favorites"],
}

Practise1.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    favourites : PropTypes.array.isRequired,
}