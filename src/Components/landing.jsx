import React from 'react';
import './CSSstyles/landing.css';
import logo from '../Images/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import bgimage from "../Images/bgi.jpg";
import photo from '../Images/photo.jpg';
import video from '../Images/video.jpg';

// Import the necessary Card components
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText} from '@coreui/react';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  titleSpan: {
    color: theme.palette.primary.main,
  },
  logoutButton: {
    marginLeft: 'auto',
  },
  customButton: {
    marginTop: '4%',
    background: '#194F92',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
}));

function CustomButton({ text, onClick }) {
  const classes = useStyles();

  return (
    <button className={classes.customButton} onClick={onClick}>
      {text}
    </button>
  );
}

function Landing() {
  const classes = useStyles();

  const handleLogout = () => {
    // Implement your logout logic here
  };

  const handleGo1Click = () => {
    window.location.href = '/photo';
  };

  const handleGo2Click = () => {
    window.location.href = '/video';
  };

  return (
    <div className="App1">
      <div className='bgi' style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <header className="App-header1">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <button className={`register-button ${classes.logoutButton}`} onClick={handleLogout}>Logout</button>
        </header>

        <div className="content-wrapper">
          <div className="card-container">
            <CCard className="card1">
              <CCardImage orientation="top" src={photo} />
              <CCardBody>
                <CCardTitle style={{ fontSize: '18px' }}>Upload Missing Person Details</CCardTitle>
                <CCardText>
                  Register the details of the missing person in the database.
                </CCardText>
                <CustomButton text="Go" onClick={handleGo1Click} />
              </CCardBody>
            </CCard>
            <CCard className="card2">
              <CCardImage orientation="top" src={video} />
              <CCardBody>
                <CCardTitle style={{ fontSize: '18px' }}>Upload and Analyze Video</CCardTitle>
                <CCardText>
                  Upload the CCTV video footage for analysis.
                </CCardText>
                <CustomButton text="Go" onClick={handleGo2Click} />
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
