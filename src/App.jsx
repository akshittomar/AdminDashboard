// import React from 'react';
// import ListItem from './components/ListItem';
// // import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//   return (
//     <div className="container my-4">
//       <ListItem name="Aaron Miles" email="aaron@mailinator.com" />
      
//       {/* Repeat <ListItem /> for as many items as you have */}
//     </div>
//   );
// };

// export default App;







import React, { useState, useEffect } from 'react';
import ListItem from './components/ListItem';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
        setItems(data); // Assuming the response is an array of items
        setLoad(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container my-4">
      
        { load===false && <ListItem user={items} /> }
        {load=== true && <div>Loading....</div>}
      
    </div>
  );
};

export default App;
