import React from 'react';
import './CSSstyles/video.css';
import logo from '../Images/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import bgimage from "../Images/bgi.jpg";

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
  uploadButton: {
    backgroundColor: '#194F92', // Customize the button style here
    color: 'white', // Customize the button style here
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '10%'
  },
}));

function Video() {
  const classes = useStyles();
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [videoUploaded, setVideoUploaded] = React.useState(false);
  const [locationText, setLocationText] = React.useState('');
  
  const handleLogout = () => {
    // Implement your logout logic here
  };

  const handleUploadVideo = () => {
    // Access the file input element and trigger a click event
    document.getElementById('videoInput').click();
  };

  const handleVideoChange = (event) => {
    // Handle the selected video file here
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // You can perform additional logic, such as uploading the file to a server
      console.log('Selected video:', selectedFile);
  
      // Display the selected video on the frontend
      const videoURL = URL.createObjectURL(selectedFile);
      setSelectedVideo(videoURL);
      setVideoUploaded(true);
  
      // Send the selected file to the server without modifying the filename
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      // Make an HTTP POST request to the Flask server to upload the video
      fetch('http://localhost:5000/upload_video', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          // Optionally, you can use the result data from the server
          console.log(data.result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  const handleAnalyze = () => {
    fetch('http://localhost:5000/analyze_media', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        media_folder: 'C:\\Users\\Shreya Ranjan\\Desktop\\Capstone\\police\\backend\\uploads',
        frames_folder: 'Extracted_Frames',
        output_excel_file: 'face_detection_results.xlsx',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Handle success or error based on the response
        if (data.status === 'success') {
          console.log('Analysis completed successfully');
          // Add any other logic you want to execute on success
        } else {
          console.error(`Error during analysis: ${data.message}`);
          // Add error handling logic
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log('Analyzing the video...');
  };
  
  const handleLocationChange = (event) => {
    // Update the location text value
    setLocationText(event.target.value);
  };

  return (
    <div className='bgi' style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="App1">
        <header className="App-header1">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <button className={`register-button ${classes.logoutButton}`} onClick={handleLogout}>Logout</button>
        </header>
      </div>
      <div className='row2'>
        <div className="columnv"> 
          <div className={classes.card}>
            <div>
              {videoUploaded ? (
                <div>
                  <h2>Analyze Video</h2>
                  {selectedVideo && (
                    <video width="100%" height="auto" controls>
                      <source src={selectedVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <button className={`register-button`} onClick={handleAnalyze}>
                    Analyze
                  </button>
                </div>
              ) : (
                <div>
  <h2>Upload Video</h2>
<input
  type="text"
  placeholder="Location"
  className='location'
  value={locationText}
  onChange={handleLocationChange}
/>

<input
  id="videoInput"
  type="file"
  accept="video/*"
  style={{ display: 'none' }}
  onChange={handleVideoChange}
/>

<button className={`r ${classes.uploadButton}`} onClick={handleUploadVideo}>
  Upload Video
</button>
</div>

              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
