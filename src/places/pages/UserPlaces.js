import React from "react";

import PlaceList from "../components/PlaceList";

const DEMO_LIST = [
  {
    id: 'p1',
    imageUrl: 'http://image.auction.co.kr/itemimage/1f/f6/a6/1ff6a67ca6.jpg',
    title: 'Sweet House',
    description: 'So sweet house',
    address: 'oo ooo oo',
    creator: 'u1',
    location: {
      lat: '35.814705',
      lng: '127.152629'
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
      lat: '35.814705',
      lng: '127.152629'
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
      lat: '35.814705',
      lng: '127.152629'
    }
  }
]

const UserPlaces = () => {
  return <PlaceList items={DEMO_LIST} />;
}

export default UserPlaces;