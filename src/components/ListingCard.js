import React, { useState } from "react";

function ListingCard( {id, image, description, location, handleDelete} ) {

  const [isFav, setFavStatus] = useState(false)

  function handleClick() {
    setFavStatus(!isFav)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFav ? (
          <button onClick = {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {() => handleDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
