import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className='Card'>
      <img src={props.image || "https://imgs.search.brave.com/Kt47QM-mGAPTr_cdwd8tGrir5P3hpJlWHoh7g4zW62E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/NzcxMzg1Mi9waG90/by9oYXBweS1mZW1h/bGUtc3R1ZGVudC1w/b3NpdGl2ZS1mZW1h/bGUtc3R1ZGVudC1i/cmF6aWxpYW4tb3It/aGlzcGFuaWMtbmF0/aW9uYWxpdHktd2l0/aC1hLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YNWk0cEM5/TF9TekJhazhoSm1U/VkFmdkp5WFBlREFX/UmRmSmtOSmxSdVo0/PQ"} alt={props.title} width={250} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;