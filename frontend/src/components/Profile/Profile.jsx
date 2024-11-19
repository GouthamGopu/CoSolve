import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import MyCard from '../Card/MyCard';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }
  return (
    <div className="text-light">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row mb-4">
            <div className="col-4 text-center">
             
                  <FaUser size={50} color="gray" />
               
            </div>
            <div className="col-8">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="m-0">Gaddam Sriram</h3>
                  <button className="btn btn-outline-secondary btn-sm text-light">
                    Edit Profile
                  </button>

                </div>
                rating
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center mb-3 ">
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
            <div className="d-flex gap-2">

            <MyCard title="Vehicle" />
            <MyCard title="Other" />
            <MyCard title="Volunteer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
