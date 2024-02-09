import React from 'react';

const WelcomeSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: 40,
      background: '#000000', // Black background
      color: '#ffffff', // White text color
      fontFamily: 'Roboto, Arial, sans-serif', // Modern font
    }}>
      <h2>
        <img src="https://cdn.topiclist.xyz/images/png/TopicList5.png" alt="Futuristic Logo" style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', border: '2px solid #00bfff' }} />
      </h2>

      <p style={{ fontSize: '1.5em', margin: '20px 0', color: '#cccccc' }}>Welcome to Topic Docs!</p>
      <p style={{ marginBottom: '30px', fontSize: '1.2em', color: '#aaaaaa' }}>On this website, we will show you how to use our API on your services. We're here to help you use our site.</p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
      }}>
        <a href="/docs/Developer/API/Intro" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#00bfff', // Light blue
            color: '#000000', // Black text
            padding: '15px 30px',
            fontSize: '1.2em',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(0, 191, 255, 0.5)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            fontFamily: 'Roboto, Arial, sans-serif', // Modern font
          }}>Explore Developer Stuff</button>
        </a>
        <a href="/docs/User/introduction/intro" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#ff4500', // Orange
            color: '#000000', // Black text
            padding: '15px 30px',
            fontSize: '1.2em',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(255, 69, 0, 0.5)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            fontFamily: 'Roboto, Arial, sans-serif', // Modern font
          }}>Discover Site Introduction</button>
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#000000', // Black background
    }}>
      <WelcomeSection />
    </div>
  );
};

export default App;
