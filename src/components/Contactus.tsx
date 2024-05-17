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
      {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>'
      </LoadScript> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30137.295444516418!2d72.82510435518842!3d19.231773298301427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715926997363!5m2!1sen!2sin"  width="100%"  height="600" style={{border:0}}  loading="lazy" ></iframe>
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
