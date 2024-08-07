import React from 'react';
import './CSSstyles/home.css';
import logo from '../Images/logo.png'
import regImage from '../Images/home_collage.png'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      marginTop: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
    titleSpan: {
      color: theme.palette.primary.main,
    },
  }));

function Home() {
    const classes = useStyles();

    const handleLoginClick = () => {
        window.location.href = '/login';
      };
    
      const handleRegisterClick = () => {
        window.location.href = '/register';
      };
  return (
    <div className="App1">
      <header className="App-header1">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <div className="button-container">
          <button className="login-button" onClick={handleLoginClick}>Login</button>
          <button className="register-button" onClick={handleRegisterClick}>Register</button>
        </div>
      </header>
    

      <div className="content-wrapper">
        <div className="image-wrapper">
          <img src={regImage} alt="Registration" className="image-styling" />
        </div>
        <div className="faqss">
          <h2 className="homeheading">Bringing the missing home</h2>
          <p className="hometext">Every day, countless individuals go missing and the traditional process of tracking them down can be time-consuming and reliant on experience. Our goal is to revolutionize this process by utilizing technology to identify missing individuals from surveillance footage and streamline the search process. 
            <br /><br />
            Our mission is to provide a platform that leverages artificial intelligence, data analysis, and community engagement to help reunite families with their loved ones, while also supporting law enforcement agencies in their efforts. Together, we can make a difference.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Home;