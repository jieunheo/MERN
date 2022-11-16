import React from "react";
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import './PlaceForm.css';

const DEMO_LIST = [
  {
    id: 'p1',
    imageUrl: 'http://image.auction.co.kr/itemimage/1f/f6/a6/1ff6a67ca6.jpg',
    title: 'Sweet House',
    description: 'So sweet house',
    address: 'oo ooo oo',
    creator: 'u1',
    location: {
      lat: 35.814705,
      lng: 127.152629
    }
  },
  {
    id: 'p2',
    imageUrl: 'http://openimage.interpark.com/goods_image_big/1/7/6/8/8619791768_l.jpg',
    title: 'Mushroom House',
    description: 'So cute mushroom house',
    address: 'oo ooo oo',
    creator: 'u1',
    location: {
      lat: 35.814705,
      lng: 127.152629
    }
  },
  {
    id: 'p3',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWvZGLYbdBmvVR4hlVYrDf5foSBQMB_uSJA&usqp=CAU',
    title: 'Luxury House',
    description: 'So luxury house',
    address: 'oo ooo oo',
    creator: 'u2',
    location: {
      lat: 35.814705,
      lng: 127.152629
    }
  }
]

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DEMO_LIST.find(place => place.id === placeId);

  if(!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not found place!</h2>
      </div>
    );
  }
 
  return (
    <form className="place-form">
      <Input 
        id='title'
        element='input' 
        type='text' 
        label='Title' 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText='Please enter a valid title.' 
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input 
        id='description'
        element='textarea' 
        label='Description' 
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText='Please enter a valid description (at least 5 charactors).' 
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button
        type='submit'
        disabled={true}
      >UPDATE PLACE</Button>
    </form>
  );
}

export default UpdatePlace;