import React, { useEffect } from 'react';
import style from './TalentsPopup.module.css';

const TalentsPopup = ({ onClose }) => {

  return (
    <div className={style.popupContainer}>
      <div className={` ${style.popup} ${style.talents} `}>
        <h2>Jobs</h2>
        <h6>Are you interested in joining our visionary team?<br />These are some talents we are looking for.</h6>
        <button className='close' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TalentsPopup;