import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSSstyles/photo.css';
import bgimage from '../Images/bgi.jpg';
import logo from '../Images/logo.png';

const Photo = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [lastSeen, setLastSeen] = useState('');
  const [description, setDescription] = useState(''); // Added Description field
  const [photo, setPhoto] = useState(null);
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [teamLeadName, setTeamLeadName] = useState('');

  const navigate = useNavigate();

  const [mobileError, setMobileError] = useState('');

  const mobileRegex = /^[0-9]{10}$/;

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
    if (!mobileRegex.test(event.target.value)) {
      setMobileError('Please enter a valid mobile number');
    } else {
      setMobileError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || mobile.trim().length !== 10) {
      console.log('Validation error: Please check the form fields.');
      return;
    }

    const objectBody = {
      name,
      dob,
      mobile,
      lastSeen,
      description, // Include the description in the request
      photo,
      gender,
      role,
      team_lead: teamLeadName,
    };

    console.log(objectBody);

    const configObject = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectBody),
    };

    try {
      const responseData = await fetch('http://localhost:8081/user/register', configObject);

      if (responseData.status === 200) {
        navigate('/grassDashboard');
      } else {
        console.log('Registration failed with an unexpected error');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
  
    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append('file', file);
  
    // Make an HTTP POST request to the Flask server to upload the photo
    fetch('http://localhost:5000/upload_photo', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Optionally, you can use the result data from the server
        // For example, if the server returns a processed result
        console.log(data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Read the file for preview (optional)
    const reader = new FileReader();
    reader.onload = (event) => {
      setPhoto(event.target.result);
    };
  
    reader.readAsDataURL(file);
  };
  

  return (
    <div className="bgi" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <header className="App-header1">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="register-button" onClick={() => navigate('/logout')}>
          Logout
        </button>
      </header>
      <div className="register1">
        <form onSubmit={handleSubmit} className="form-register">
          <h2>Register the Missing</h2>
          <div className="row5">
            <div className="column">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  value={mobile}
                  onChange={handleMobileChange}
                />
                {mobileError && <div className="error-message">{mobileError}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="lastSeen">Last Seen</label>
                <input
                  type="text"
                  id="lastSeen"
                  name="lastSeen"
                  value={lastSeen}
                  onChange={(e) => setLastSeen(e.target.value)}
                  className="input-style"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input-style double-width"
                  ></textarea>
              </div>
            </div>
            <div className="column">
              <div className="photo-upload">
                {photo ? (
                  <img src={photo} alt="Preview" className="photo-preview" />
                ) : (
                  <>
                    <label htmlFor="photo-upload" className="upload-label">
                      Click photo to upload
                    </label>
                    <input type="file" id="photo-upload" onChange={handlePhotoChange} accept="image/*" />
                  </>
                )}
              </div>
              <div className="dropdowns">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="Register-sub">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Photo;
