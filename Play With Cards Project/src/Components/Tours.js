import Card from "./Card"; 

function Tours({tours, removeTour}) {
  return (
    <div className="container">
        <div><h2 className="title">Play With Me</h2></div>
        <div className="cards">
            {
              // Whenever you use a map function don't forget to send a key, whose value must be unique, in case there is no unique value object then send the 'index' but sending index is a bad practice. 
                tours.map( (tour) => {
                return <Card key={tour.id} {...tour} removeTour={removeTour}/>
                } )
            }
        </div>
    </div>
  );
}

export default Tours;
