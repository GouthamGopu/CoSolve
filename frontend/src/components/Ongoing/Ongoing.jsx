import React from 'react';
import './ongoing.css'; // Include custom styles
import OngoingCard from '../OngoingCard/OngoingCard'
import { useSelector } from 'react-redux';

function MyCard(props) {
  const {user} = useSelector(store=>store.auth);
  return (
    <div className="p-4 text-light d-flex flex-column">
      {/* Page Header */}
      <div className="d-flex w-100 justify-content-center">
        <h1>Ongoing</h1>
      </div>

      {/* Card Component */}
      <div className='d-flex flex-row post-card mt-5'>
        {
        user.ongoing.map((post) => <OngoingCard key={post._id} post={post}/>)
        }
          
      </div>
    </div>
  );
}

export default MyCard;
