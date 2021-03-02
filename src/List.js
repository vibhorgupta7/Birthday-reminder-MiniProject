import React from 'react';

const List = ({people}) => {
  
  return (
    <>
      {people.map((i)=> {
        const { id, age, name, image } = i;

        return(
          <article key={id} className="person">
              <img src={image} alt={name}></img>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
          </article>
        ) 
      })
      }
    </>
  );
};

export default List;
