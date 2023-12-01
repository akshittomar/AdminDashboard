


// import React from 'react';

// const users = [
//   { name: 'Aaron Miles', email: 'aaron@mailinator.com', role: 'member' },
//   { name: 'Aishwarya Naiyyyyyyyyk', email: 'aishwarya@mailinayyyytor.com', role: 'member' },
//   { name: 'Aishw', email: 'ya@mailinator.com', role: 'member' },
//   { name: 'Ai', email: 'aishwarya@mailinator.com', role: 'member' },
//   { name: 'Aishwarya Naik', email: 'aism', role: 'member' },
//   { name: 'Aisk', email: 'aisor.com', role: 'member' },
//   // ... other users
// ];

// const ListItem = () => {
//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse'
//   };

//   const thStyle = {
//     borderBottom: '1px solid #ddd',
//     textAlign: 'left',
//     padding: '8px'
//   };

//   const tdStyle = {
//     borderBottom: '1px solid #ddd',
//     textAlign: 'left',
//     padding: '8px',
//     maxWidth: '15%',
//     overflowWrap: 'break-word'
//   };

//   return (
//     <table style={tableStyle}>
//       <thead>
//         <tr>
//           <th style={thStyle}>Name</th>
//           <th style={thStyle}>Email</th>
//           <th style={thStyle}>Role</th>
//           <th style={thStyle}>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={index}>
//             <td style={tdStyle}>{user.name}</td>
//             <td style={tdStyle}>{user.email}</td>
//             <td style={tdStyle}>{user.role}</td>
//             <td style={tdStyle}>
//               <button>Edit</button>&nbsp;
//               <button>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ListItem;







// import React from 'react';

// const users = [
//   { name: 'Aaron Miles', email: 'aaron@mailinator.com', role: 'member' },
//   { name: 'Aishwarya Naiyyyyyyyyk', email: 'aishwarya@mailinayyyytor.com', role: 'member' },
//   { name: 'Aishw', email: 'ya@mailinator.com', role: 'member' },
//   { name: 'Ai', email: 'aishwarya@mailinator.com', role: 'member' },
//   { name: 'Aishwarya Naik', email: 'aism', role: 'member' },
//   { name: 'Aisk', email: 'aisor.com', role: 'member' },
//   // ... other users
// ];

// const ListItem = () => {
//   const containerStyle = {
//     margin: '20px', // Adjust the margin as you like
//     border: '1px solid #ddd', // Border added here
//     borderRadius: '5px' // Optional: if you want rounded corners
//   };

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     margin: '0', // Reset any default margins
//   };

//   const thStyle = {
//     borderBottom: '1px solid #ddd',
//     textAlign: 'left',
//     padding: '8px',
//     backgroundColor: '#f8f8f8' // Optional: to give headers a distinct background
//   };

//   const tdStyle = {
//     borderBottom: '1px solid #ddd',
//     textAlign: 'left',
//     padding: '8px',
//     maxWidth: '250px', // Use fixed max-width for consistency
//     overflowWrap: 'break-word'
//   };
    
//   const hoverStyle = {
//     backgroundColor: '#aaaabb' // The color you want on hover
//   };

//   return (
//     <div style={containerStyle}> {/* Container div with margin and border */}
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Name</th>
//             <th style={thStyle}>Email</th>
//             <th style={thStyle}>Role</th>
//             <th style={thStyle}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
//            >
//               <td style={tdStyle}>{user.name}</td>
//               <td style={tdStyle}>{user.email}</td>
//               <td style={tdStyle}>{user.role}</td>
//               <td style={tdStyle}>
//                 <button>Edit</button>&nbsp;
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListItem;








// import React, { useState } from 'react';



// const ListItem = () => {


//   const user = [
//     { name: 'Aaron Miles', email: 'aaron@mailinator.com', role: 'member' },
//     { name: 'Aishwarya Naiyyyyyyyyk', email: 'aishwarya@mailinayyyytor.com', role: 'member' },
//     { name: 'Aishw', email: 'ya@mailinator.com', role: 'member' },
//     { name: 'Ai', email: 'aishwarya@mailinator.com', role: 'member' },
//     { name: 'Aishwarya Naik', email: 'aism', role: 'member' },
//     { name: 'Aisk', email: 'aisor.com', role: 'member' },
//     // ... other users
//   ];
//   const [users, setUsers] = useState(user); // State for user data
//   const [searchTerm, setSearchTerm] = useState('');


  

//   const containerStyle = {
//     margin: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//     boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', // Adding a subtle shadow for depth
//   };

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//   };

//   const thStyle = {
//     borderBottom: '2px solid #333', // Thicker bottom border for emphasis
//     textAlign: 'left',
//     padding: '15px', // More padding for a spacious look
//     backgroundColor: '#4a4a4a', // Distinct background color
//     color: 'white', // Text color for contrast
//     fontWeight: 'bold', // Bold text for emphasis
//     fontSize: '18px', // Larger font size
//     textTransform: 'uppercase', // Uppercase for titles
//   };

//   const tdStyle = {
//     borderBottom: '1px solid #ddd',
//     textAlign: 'left',
//     padding: '10px', // Consistent padding with headers
//     maxWidth: '250px',
//     overflowWrap: 'break-word',
//   };

//   const hoverStyle = {
//     backgroundColor: '#f0f0f0', // Lighter color for hover
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const getFilteredUsers = () => {
//     return users.filter(
//       (user) =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   return (
//     <div style={containerStyle}>
//         <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
//       />
//        <button onClick={()=>{setUsers(getFilteredUsers)}}>Search</button>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Name</th>
//             <th style={thStyle}>Email</th>
//             <th style={thStyle}>Role</th>
//             <th style={thStyle}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
//             >
//               <td style={tdStyle}>{user.name}</td>
//               <td style={tdStyle}>{user.email}</td>
//               <td style={tdStyle}>{user.role}</td>
//               <td style={tdStyle}>
//                 <button>Edit</button>&nbsp;
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListItem;








import React, { useState, useEffect } from 'react';
import lunr from 'lunr';

const sampleUsers = [
  { name: 'Aaron Miles', email: 'aaron@mailinator.com', role: 'member' },
    { name: 'Aishwarya Naiyyyyyyyyk', email: 'aishwarya@mailinayyyytor.com', role: 'member' },
    { name: 'Aishw', email: 'ya@mailinator.com', role: 'member' },
    { name: 'Ai', email: 'aishwarya@mailinator.com', role: 'member' },
    { name: 'Aishwarya Naik', email: 'aism', role: 'member' },
    { name: 'Aisk', email: 'aisor.com', role: 'member' },
];


const rowsPerPage = 10;

const ListItem = (props) => {

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(props.user);
  const [index, setIndex] = useState(null);


  const toggleRowSelection = (index) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index);
    } else {
      newSelectedRows.add(index);
    }
    setSelectedRows(newSelectedRows);
  };


  const isRowSelected = (index) => {
    return selectedRows.has(index);
  };


  const selectedRowStyle = {
    backgroundColor: '#f0f0f0', // Grayish background for selected row
    // ... other styles if needed ...
  };


  useEffect(() => {
    // Update total pages whenever the filteredUsers changes
    setTotalPages(Math.ceil(filteredUsers.length / rowsPerPage));
  }, [filteredUsers]);


    // Function to get data for the current page
    const getCurrentPageData = () => {
      const startIndex = (currentPage - 1) * rowsPerPage;
      return filteredUsers.slice(startIndex, startIndex + rowsPerPage);
    };
  
    // Functions to handle page changes
    const goToPage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const goToNextPage = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };
  
    const goToPreviousPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    };
  
    const goToFirstPage = () => {
      setCurrentPage(1);
    };
  
    const goToLastPage = () => {
      setCurrentPage(totalPages);
    };
  
  const containerStyle = {
    margin: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', // Adding a subtle shadow for depth
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    borderBottom: '2px solid #333', // Thicker bottom border for emphasis
    textAlign: 'left',
    padding: '15px', // More padding for a spacious look
    backgroundColor: '#4a4a4a', // Distinct background color
    color: 'white', // Text color for contrast
    fontWeight: 'bold', // Bold text for emphasis
    fontSize: '18px', // Larger font size
    textTransform: 'uppercase', // Uppercase for titles
  };

  const tdStyle = {
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '10px', // Consistent padding with headers
    maxWidth: '250px',
    overflowWrap: 'break-word',
  };

  const hoverStyle = {
    backgroundColor: '#f0f0f0', // Lighter color for hover
  };





  // Initialize Lunr.js index
  useEffect(() => {
    setFilteredUsers(props.user);
    setIndex(lunr(function () {
      this.field('name');
      this.field('email');
      this.field('role');

      sampleUsers.forEach(function (user, idx) {
        this.add({ ...user, id: idx });
      }, this);
    }));
  }, []);

  // Function to handle search button click
  const handleSearch = () => {
    if (!index || searchTerm === '') {
      setFilteredUsers(sampleUsers);
    } else {
      // Append a wildcard to the search term
      const wildcardSearchTerm = searchTerm + '*';
      const results = index.search(wildcardSearchTerm);
      if(results.length!==0)setFilteredUsers(results.map(result => sampleUsers[result.ref]));else {}
    }
  };


  const randomSearch = (str) => {
    if (!index || str === '') {
      setFilteredUsers(sampleUsers);
    } else {
      // Append a wildcard to the search term
      const wildcardSearchTerm = str + '*';
      const results = index.search(wildcardSearchTerm);
      setFilteredUsers(results.map(result => sampleUsers[result.ref]));
    }
  };
  
  const searchBoxStyle = {
    padding: '10px', // Comfortable padding inside the box
    width: '250px', // Adequate width for typing search queries
    border: '1px solid #ddd', // Subtle border
    borderRadius: '5px', // Rounded corners
    fontSize: '16px', // Legible font size
    color: '#333', // Font color for contrast
    margin: '0 10px 10px 0', // Margins to separate it from other elements
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)', // Inner shadow for depth
    outline: 'none', // Remove the default focus outline
    transition: 'border-color 0.3s', // Smooth transition for border color on focus
  
    // Styling for when the input is focused:
    ':focus': {
      borderColor: '#4a90e2', // Highlight color when focused
      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)', // Slightly deeper shadow on focus
    }
  };
  
  // Use it in your input like this:
  // <input type="text" style={searchBoxStyle} placeholder="Search..." />
  

  const searchButtonStyle = {
    backgroundColor: '#4a90e2', // Button background color
    color: 'white', // Text color
    padding: '10px 20px', // Padding around the text
    border: 'none', // No border for a modern look
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Cursor changes to pointer on hover
    fontSize: '16px', // Font size
    fontWeight: 'bold', // Bold text
    margin: '5px', // Margin around the button
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    transition: 'background-color 0.3s', // Smooth transition for hover effect
  };
  
  // Use it in your button like this:
  // <button style={searchButtonStyle}>Search</button>
  

  // Styles
  // ... your styles ...

  return (



    <div>
            <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value); if(e.target.value===''){setFilteredUsers(sampleUsers);setCurrentPage(1);}else { randomSearch(e.target.value);}}}
        style={searchBoxStyle}
      />
      <button onClick={handleSearch} style={searchButtonStyle}>Search</button>

    <div style={containerStyle}>
    
      <table style={tableStyle}>
        <thead>
          <tr>
          <th style={thStyle}>
                <input 
                  type="checkbox" 
                  checked={isRowSelected(-1)} 
                  onChange={() => toggleRowSelection(-1)} 
                />
              </th>
          <th style={thStyle}>Name</th>
             <th style={thStyle}>Email</th>
             <th style={thStyle}>Role</th>
             <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageData().map((user, index) => (
            <tr key={index}  style={isRowSelected(index) || isRowSelected(-1)? {backgroundColor:"grey"} : {}}
                onMouseEnter={  (e) => { !isRowSelected(index) && !isRowSelected(-1) && (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)} }
                onMouseLeave={(e) => { !isRowSelected(index) && !isRowSelected(-1) && (e.currentTarget.style.backgroundColor = '')} }
            >
              <td style={tdStyle}>
                <input 
                  type="checkbox" 
                  checked={isRowSelected(index)} 
                  onChange={() => toggleRowSelection(index)} 
                />
              </td>
               <td style={tdStyle}>{user.name}</td>
               <td style={tdStyle}>{user.email}</td>
               <td style={tdStyle}>{user.role}</td>
               <td style={tdStyle}>
                 <button>Edit</button>&nbsp;
                 <button>Delete</button>
               </td>
            </tr>
          ))}
          {
             <div style={{fontSize:"small" , color:"GrayText"}}>  &nbsp;&nbsp; {filteredUsers.length} &nbsp;Results&nbsp; Found</div>
          }
        </tbody>
      </table>
    </div>


    <div>
        <button onClick={goToFirstPage} disabled={currentPage === 1}>First</button>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
        <button onClick={goToLastPage} disabled={currentPage === totalPages}>Last</button>
      </div>


    </div>
  );
};

export default ListItem;
