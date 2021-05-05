import React from 'react';

const PokemonCard = (props) => {
  console.log(props.id);
  return (
      <div class="m-8 display:flex flex-wrap wrap place-items-center justify-around align-content:center hover:translate-y-3 hover:shadow-md hover:cursor-pointer">
            <div class="h-30 w-30 bg-blue-800 m-2 rounded-2xl flex-2">
                <h3 class="text-white text-6xl">{props.name}</h3>
                <img class="h-25 w-25" src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} />
            </div>
      </div>

  );
};

export default PokemonCard;