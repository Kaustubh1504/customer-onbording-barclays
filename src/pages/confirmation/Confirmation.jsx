import React ,{useEffect,useState} from 'react';
import './confirmation.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/header/Navbar';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Footer from '../../components/footer/Footer';
import { Routes, Route, useNavigate } from "react-router-dom";




function Confirmation() {
  let bool=true;

  const navigate = useNavigate();
  const navigateIndividual = () => {
    // navigate to /
    navigate("/individual");
};





  return (
    <div className='confirmation-container'>
          
          <div className='confirmation'>
              <Navbar/>
              <div className='tick'>
                      <FontAwesomeIcon className='tick-icon' icon={faCircleCheck}/>
                      <div className='thanks'>
                          Thank you
                      </div>
                      <div className='explain'>
                            That's all we need to start verifying your identity
                      </div>
                      <div className='load'>
                            {bool&& (<CircularProgress/>)}
                      </div>
                      <div className='space'>
                          space
                      </div>

                     <button onClick={navigateIndividual}>Go back</button>
                      
              </div> 
          </div>
          <div className='foot'>
               <Footer/>
    
          </div>
          
    </div>
  )
}

export default Confirmation