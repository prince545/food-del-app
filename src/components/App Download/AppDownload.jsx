import React from 'react'
import './AppDownload.css'
import playStore from '../../assets/frontend_assets/play_store.png';

import appStore from '../../assets/frontend_assets/app_store.png';

const AppDownload = () => {
  return (
    <div className='app-downloaad' id='app-download'>
        <h1>Download Our App</h1>
        <p>Download our app for the best food ordering experience</p>
        <div className='app-download-buttons'>
            <img src={playStore} alt='Play Store' />
            <img src={appStore} alt='App Store' />
        </div>
        

    </div>
  )
}

export default AppDownload