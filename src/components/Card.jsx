import React from "react";

function Card(props) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-40 object-cover"
        src={props.imageUrl}
        alt={props.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
