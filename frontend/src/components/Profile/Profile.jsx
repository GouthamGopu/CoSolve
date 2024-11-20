import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import MyCard from '../Card/MyCard';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { userid } = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const { user } = useSelector(store => store.auth); 
  const { posts } = useSelector(store => store.post); 
  const [admin, setAdmin] = useState({}); 
  const [error, setError] = useState(''); 

  useEffect(() => {
    if (userid) {
      const fetchAuthor = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/v1/user/${userid}/profile`, { withCredentials: true });
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
  }, [userid]);

  const [loggined, setLoggined] = useState(user._id === admin._id);


  useEffect(() => {
    setLoggined(user._id === admin._id);
  }, [admin, user._id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-light">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row mb-4">
            <div className="col-4 text-center">
              {admin.profilePicture ? (
                <img
                  className="profile"
                  src={admin.profilePicture}
                  style={{ width: '46px', height: '46px', borderRadius: '50%' }}
                  alt="profile"
                />
              ) : (
                <FaUser size={50} color="white" />
              )}
            </div>
            <div className="col-8">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="m-0">{admin.username}</h3>
                  {loggined && (
                    <NavLink to="/home/profileEdit" className="btn btn-outline-secondary btn-sm text-light">
                      Edit Profile
                    </NavLink>
                  )}
                </div>
                <div>Rating or other profile info here</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center mb-3">
            <button
              className={`btn tw-text-white btn-link ${activeTab === 'posts' ? 'fw-bold' : ''}`}
              onClick={() => handleTabChange('posts')}
            >
              POSTS
            </button>
            <button
              className={`btn tw-text-white btn-link ${activeTab === 'saved' ? 'fw-bold' : ''}`}
              onClick={() => handleTabChange('saved')}
            >
              SAVED
            </button>
          </div>
          <div className="row g-3">
            {activeTab === 'posts' ? (
              <div className="d-flex gap-2">
                {posts
                  .filter(post => post.author._id === admin._id) // Match posts for the viewed profile
                  .map(post => (
                    <MyCard key={post._id} post={post} />
                  ))}
              </div>
            ) : activeTab === 'saved' ? (
              <div>Saved posts logic here</div>
            ) : null}
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
