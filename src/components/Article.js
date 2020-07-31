import React from 'react';
import Drawers from '../images/drawers.jpg';
import '../App.css';
import Avatar from '../images/avatar-michelle.jpg';
export default function Article() {
  return (
    <div className="full-card">
      <img src={Drawers} className="main-img" />
      <div className="text-part">
        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p>
          Ever been in a room ean felt like something was missing? Perhaps it
          felt slightly bare uninviting.I've got some simple tips to help you
          make any room feel complete.
        </p>
        <div className="avatar-part">
          <img src={Avatar} className="avatar" />
          <div className='avatar-description'>
            <h4>Michelle Appleton</h4>
            <span>28 Jun 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}
