import React from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import MyCard from '../Card/MyCard'
import useGetAllPost from '../../hooks/useGetAllPost';

function Home() {
    useGetAllPost();
    const {posts} = useSelector(store=>store.post)
    const {user} =  useSelector(store=>store.auth);
  return (
    <div className='homepage text-light'>
        <div className='px-4 cont d-flex flex-row justify-content-center pt-5'>
            <div className = "desc d-flex flex-column align-content-center">
                <h1 className='mb-0 title'>CoSolve</h1>
                <p className='caption'>Bringing the world with collaborative solution</p>
                <div className='d-flex align-content-center'>
                    <p className='des'>
                    At CoSolve, we believe in harnessing the power of connection to solve real-life problems. Our platform is designed to bridge gaps, bringing people together to share resources, skills, and opportunities.
                       </p>
                </div>
            </div>
            <div className='image'>
            {/* https://picsum.photos/700/500 */}
                <img className='img-fluid img-thumbnail' src="/images/home.jpg" alt="" />
            </div>
        </div>

        <div className='posts'>
            <h1 className='anim'>Popular Today: </h1>
            <div className='anim d-flex flex-row flex-wrap filter my-3'>
                <h1 className=''>Filters</h1>
                <select name="Location" className='loc border-light text-light rounded-4 ps-3' id="">
                    <option value="Location">Region</option>
                    <option value="1">Ibrahimpatnam</option>
                    <option value="2">Hyderabad</option>
                    <option value="3">L B Nagar</option>
                    <option value="4">Nagole</option>
                    <option value="5">Tarnaka</option>
                    <option value="6">Secunderabad</option>
                    <option value="6">Hubsiguda</option>
                    <option value="6">Uppal</option>
                </select>

                <select name="Location" className='loc border-light text-light rounded-4 ps-3' id="">
                    <option value="Location">Service</option>
                    <option value="1">Transport</option>
                    <option value="2">Rental</option>
                    <option value="3">Skills</option>
                </select>

                <select name="Location" className='loc border-light text-light rounded-4 ps-3' id="">
                    <option value="Location">Status</option>
                    <option value="1">Open</option>
                    <option value="2">Closed</option>
                </select>
            </div>
            <div className='d-flex flex-row post-card'>
            {
            posts.map((post) => <MyCard key={post._id} post={post}/>)
            }

            </div>
        </div>
    </div>
  )
}

export default Home