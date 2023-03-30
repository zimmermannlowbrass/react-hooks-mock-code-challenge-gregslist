import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {searchLetters} ) {

  const [listings, setListings] = useState([])

  useEffect(() => 
  fetch(`http://localhost:6001/listings`)
  .then(r => r.json())
  .then(data => setListings(data)), []
  )

  const filteredSearchLetters = listings.filter(listing => {
    return listing.description.includes(searchLetters)
  })
  
  const listingCards = listings.map((listing) => {
    return (
      <ListingCard 
      key = {listing.id}
      id = {listing.id}
      image = {listing.image}
      description = {listing.description}
      location = {listing.location}
      handleDelete = {deleteTheCard}
      />
    )
  })

  const filteredListingCards = filteredSearchLetters.map((listing) => {
    return (
      <ListingCard 
      key = {listing.id}
      id = {listing.id}
      image = {listing.image}
      description = {listing.description}
      location = {listing.location}
      handleDelete = {deleteTheCard}
      />
    )
  })

  function deleteTheCard(deletedKeyID) {
    fetch(`http://localhost:6001/listings/${deletedKeyID}`, {
      method: "DELETE"
    })
    const newListings = listings.filter(listing => listing.id !== deletedKeyID)
    setListings(newListings)
  }

  return (
    <main>
      <ul className="cards">
        {searchLetters ? filteredListingCards : listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
