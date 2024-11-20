import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './postpage.css'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';

function PostPage() {
  const { postid } = useParams();
  const [post, setPost] = useState({});
  const [admin, setAdmin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the post details
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/post/${postid}/getpost`, { withCredentials: true });
        if (res.data.success) {
          setPost(res.data.post);
        } else {
          throw new Error('Failed to fetch post');
        }
      } catch (error) {
        setError('Could not load post details');
        console.error(error);
      } 
    };

    fetchPost();
  }, [postid]);

  // Fetch the author's profile after fetching the post
  useEffect(() => {
    if (post.author) {
      const fetchAuthor = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/v1/user/${post.author}/profile`, { withCredentials: true });
          if (res.data.success) {
            setAdmin(res.data.user);
          } else {
            throw new Error('Failed to fetch author');
          }
        } catch (error) {
          setError('Could not load author details');
          console.error(error);
        }
      };

      fetchAuthor();
    }
  }, [post.author]);

  return (
    <div>
        <div className='d-flex text-light p-3 justify-content-center gap-5'>
          <div className="detail p-4">
            <h1>Service: {post.title}</h1>
            <p className='fs-3 m-0'>Posted By: <NavLink to={`/home/profile/${admin._id}`} className='user'>{admin.username}</NavLink></p>
            <h4 className='m-0'>Location: Near {post.location}</h4>
            <h4>Status: <span className='text-success'>{post.status}</span></h4>
            <h3 className='mt-5'>Description: <p className='fs-4'>{post.description}</p></h3>
          </div>
          <div className="post-img">
              <img className='img-fluid img-thumbnail' src={post.image} alt="" />
          </div>
        </div>

        <div className='w-100 mt-3 d-flex justify-content-center button'>
            <Accordion className='w-25' flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='bg-dark'>Confirm booking</Accordion.Header>
                <Accordion.Body className='book-det'>
                    <h4 className='fs-5'>Phone Number: {admin.phoneNumber}</h4>
                    <h4 className='fs-5'>Email: {admin.email}</h4>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default PostPage