import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './ongoingcard.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

function OngoingCardid(props) {
  const { posts } = useSelector(store=>store.post);

  const post = posts?.find((post) => post._id === props.post);

  return (
    <Card style={{ width: '22rem' }} className='animcard suce text-light img-thumbnail'>
      <Card.Img className='card-img' variant="top" src={post.image ? `${post.image}`:'/images/no-image.jpeg'}/>
      <Card.Body>
        <Card.Title className='text-center fs-2'>{post.title}</Card.Title>
        <Card.Text>
          Location: {post.location}<br />
          Status:  {post.status} 
        </Card.Text>
        <button className='w-100 btn btn-light'>Completed</button>
        <button className='w-100 btn btn-light mt-2'>Not Completed</button>

      </Card.Body>
    </Card>
  )
}

export default OngoingCardid