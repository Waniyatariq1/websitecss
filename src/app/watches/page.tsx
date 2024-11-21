import React from 'react'

const Watches = () => {

    const watchData=[
      {id: 1, name:'Rolex',price: 12000, description:'Luxury watch',image: '/watch3.png'},
      {id: 2, name:'omega',price: 8000, description:'sporty design ',image: '/watch4.png'},
      {id: 3, name:'Patek Philippe',price: 25000, description:'Elegent Timeplace',image: '/watch5.png'},
      {id: 4, name:'Seiko',price: 1000, description:'Affordable and reliable ',image: '/watch6.png'},
      {id: 5, name:'Breitling',price: 7000, description:'Bold and rugged',image: '/banner.png'},
    ]
  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
<div key={watch.id} className="watch-card">
  <img src={watch.image} alt={watch.name}/>
  <h3>{watch.name}</h3>
  <p>{watch.description}</p>
  <div className="price">${watch.price}</div>
  <button>Add To Cart</button>
  

</div>
        ))}
      </div>
    </div>
  )
}

export default Watches
