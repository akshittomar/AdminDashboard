import React, { useState, useEffect } from 'react';

import ListItem2 from './components/Table';
const App = () => {
  // State to store the fetched data
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);


  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'); // Replace with your API endpoint
        const data = await response.json();
        setItems(data); 
        setLoad(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container my-4">
      
        
        {load=== true && <div>Loading....</div>}
        {load=== false && <ListItem2 user={items}  />}
      
    </div>
  );
};

export default App;
