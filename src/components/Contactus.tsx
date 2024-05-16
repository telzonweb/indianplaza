import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const ContactUs: React.FC = () => {
  return (
    <div>
      {/* <h1>Contact Us</h1> */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '30%' }}>
          <h3>Address</h3>
          <p>1234 Main St</p>
          <p>City, State, 12345</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '30%' }}>
          <h3>Email</h3>
          <p>contact@example.com</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '30%' }}>
          <h3>Web Address</h3>
          <p>www.example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
