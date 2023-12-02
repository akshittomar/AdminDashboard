
import React, { useState, useEffect } from 'react';
import lunr from 'lunr';

// const sampleUsers = [
//   { name: 'Aaron Miles', email: 'aaron@mailinator.com', role: 'member' },
//     { name: 'Aishwarya Naiyyyyyyyyk', email: 'aishwarya@mailinayyyytor.com', role: 'member' },
//     { name: 'Aishw', email: 'ya@mailinator.com', role: 'member' },
//     { name: 'Ai', email: 'aishwarya@mailinator.com', role: 'member' },
//     { name: 'Aishwarya Naik', email: 'aism', role: 'member' },
//     { name: 'Aisk', email: 'aisor.com', role: 'member' },
// ];


const rowsPerPage = 10;

const ListItem = (props) => {

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(props.user);
  const sampleUsers = props.user;
  const [index, setIndex] = useState(null);





  const [isEdit, setIsEdit] = useState(Array(sampleUsers.length).fill(false));
  const [formData, setFormData] = useState(sampleUsers);

  const handleEdit = (index) => {
      const updatedIsEdit = [...isEdit];
      updatedIsEdit[index] = true;
      setIsEdit(updatedIsEdit);
  };

  const handleSave = (index) => {
      const updatedIsEdit = [...isEdit];
      updatedIsEdit[index] = false;
      setIsEdit(updatedIsEdit);
      
      // Update the main user data here
      // Assuming sampleUsers is updatable or replaced by a state
      // sampleUsers[index] = formData[index];
      filteredUsers[index] = formData[index];
  };

  const handleInputChange = (event, index, field) => {
      const updatedFormData = [...formData];
      updatedFormData[index] = {
          ...updatedFormData[index],
          [field]: event.target.value
      };
      setFormData(updatedFormData);
      // sampleUsers[index]=updatedFormData;
      filteredUsers[index]=updatedFormData;
  };

  










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
    padding: '5px', // Consistent padding with headers
    maxWidth: '250px',
    overflowWrap: 'break-word',
    fontFamily:"serif"
  };

  const hoverStyle = {
    backgroundColor: '#f0f0f0', // Lighter color for hover
  };





  // Initialize Lunr.js index
  useEffect(() => {
    setFilteredUsers(props.user);
    const sampleUsers = props.user;
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
      if(results.length!==0)setFilteredUsers(results.map(result => sampleUsers[result.ref]));else {  const wildcardSearchTerm = '*' + searchTerm + '*';
      const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref])); 
      if(results.length===0){

        const wildcardSearchTerm = str + '*';
        const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref]));
      } 
    }
    }
  };


  const randomSearch = (str) => {
    if (!index || str=== '') {
      setFilteredUsers(sampleUsers);
    } else {
      // Append a wildcard to the search term
      const wildcardSearchTerm = str + '*';
      const results = index.search(wildcardSearchTerm);
      if(results.length!==0)setFilteredUsers(results.map(result => sampleUsers[result.ref]));else {  const wildcardSearchTerm = '*' + str + '*';
      const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref])); if(results.length===0){

        const wildcardSearchTerm = str + '*';
        const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref]));
      } }
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
  


  const deleteButtonStyle = {
    backgroundColor: 'rgb(200 42 42)', // Button background color
    color: 'white', // Text color
    padding: '7px 15px', // Padding around the text
    border: 'none', // No border for a modern look
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Cursor changes to pointer on hover
    fontSize: '10px', // Font size
    fontWeight: 'bold', // Bold text
    margin: '5px', // Margin around the button
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    transition: 'background-color 0.3s', // Smooth transition for hover effect
    
  };


  const deleteButtonStyle2 = {
    backgroundColor: 'rgb(200 42 42)', // Button background color
    color: 'white', // Text color
    padding: '7px 15px', // Padding around the text
    border: 'none', // No border for a modern look
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Cursor changes to pointer on hover
    fontSize: '15px', // Font size
    fontWeight: 'bold', // Bold text
    margin: '5px', // Margin around the button
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    transition: 'background-color 0.3s', // Smooth transition for hover effect
    
  };

  const editButtonStyle = {
    backgroundColor: 'green', // Button background color
    color: 'white', // Text color
    padding: '7px 15px', // Padding around the text
    border: 'none', // No border for a modern look
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Cursor changes to pointer on hover
    fontSize: '10px', // Font size
    fontWeight: 'bold', // Bold text
    margin: '5px', // Margin around the button
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    transition: 'background-color 0.3s', // Smooth transition for hover effect
    
  };

  // const handleDelete = (index) => {
  //   const newUsers = filteredUsers.filter((_, i) => i !== index);
  //   setFilteredUsers(newUsers);

  //   // If this row is selected, remove it from the selectedRows set
  //   if (selectedRows.has(index)) {
  //     const newSelectedRows = new Set(selectedRows);
  //     newSelectedRows.delete(index);
  //     setSelectedRows(newSelectedRows);
  //   }
  // };




































  const handleDelete = (index) => {
    const newUsers = filteredUsers.filter((_, i) => i !== index);
    setFilteredUsers(newUsers);
  
    // Update isEdit array
    const updatedIsEdit = isEdit.filter((_, i) => i !== index);
    setIsEdit(updatedIsEdit);
  
    // Update formData array
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  
    // Update selectedRows
    const newSelectedRows = new Set();
    selectedRows.forEach((selectedIndex) => {
      if (selectedIndex < index) {
        newSelectedRows.add(selectedIndex);
      } else if (selectedIndex > index) {
        newSelectedRows.add(selectedIndex - 1);
      }
    });
    setSelectedRows(newSelectedRows);
  
    // If the deleted row was selected, remove it from the selectedRows set
    if (selectedRows.has(index)) {
      selectedRows.delete(index);
    }
  };
  







  // Use it in your button like this:
  // <button style={searchButtonStyle}>Search</button>
  

  // Styles
  // ... your styles ...
  const renderRow = (user, index) => {
    if (isEdit[index]) {
        return (
            <tr key={index}>
              <td style={tdStyle}>Edit This Row</td>
                <td style={tdStyle}>
                    <input
                        type="text"
                        value={formData[index].name}
                        onChange={(e) => handleInputChange(e, index, 'name')}
                        required
                    />
                </td>
                <td style={tdStyle}>
                    <input
                        type="email"
                        value={formData[index].email}
                        onChange={(e) => handleInputChange(e, index, 'email')}
                        required
                    />
                </td>
                <td style={tdStyle}>
                    <input
                        type="text"
                        value={formData[index].role}
                        onChange={(e) => handleInputChange(e, index, 'role')}
                        required
                    />
                </td>
                <td style={tdStyle}>
                    <button style={editButtonStyle} onClick={() => handleSave(index)}>Save</button>
                </td>
            </tr>
        );
    } else {
        return (
            // <tr key={index}>
            //     <td style={tdStyle}>{user.name}</td>
            //     <td style={tdStyle}>{user.email}</td>
            //     <td style={tdStyle}>{user.role}</td>
            //     <td style={tdStyle}>
            //         <button onClick={() => handleEdit(index)}>Edit</button>&nbsp;
            //         <button>Delete</button>
            //     </td>
            // </tr>
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
             <button style={editButtonStyle} onClick={() => handleEdit(index)} >Edit</button>&nbsp;
             <button style={deleteButtonStyle} onClick={()=>{handleDelete(index)}}>Delete</button>
           </td>
        </tr>
        );
    }
};



// const handleDeleteSelected = () => {
//   const newUsers = filteredUsers.filter((_, index) => !selectedRows.has(index));
//   setFilteredUsers(newUsers);
//   setSelectedRows(new Set()); // Clear the selection
// };  





const handleDeleteSelected = () => {
  const indicesToDelete = Array.from(selectedRows);

  // Filter out the selected users
  const newUsers = filteredUsers.filter((_, index) => !selectedRows.has(index));
  setFilteredUsers(newUsers);

  // Update isEdit array
  const updatedIsEdit = isEdit.filter((_, index) => !selectedRows.has(index));
  setIsEdit(updatedIsEdit);

  // Update formData array
  const updatedFormData = formData.filter((_, index) => !selectedRows.has(index));
  setFormData(updatedFormData);

  // Clear the selection
  setSelectedRows(new Set());
};




  return (



    <div>
      
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div >
            <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value); if(e.target.value===''){setFilteredUsers(sampleUsers);setCurrentPage(1);}else { randomSearch(e.target.value);}}}
        style={searchBoxStyle}
      />
      <button onClick={handleSearch} style={searchButtonStyle}>Search</button>

      </div>
        

      </div>

    <div style={containerStyle}>
    
      <table style={tableStyle}>
        <thead>
          <tr>
          {/* <th style={thStyle}>
                <input 
                  type="checkbox" 
                  checked={isRowSelected(-1)} 
                  onChange={() => toggleRowSelection(-1)} 
                />
              </th> */}
              <th style={thStyle}>Rows</th>
          <th style={thStyle}>Name</th>
             <th style={thStyle}>Email</th>
             <th style={thStyle}>Role</th>
             <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {getCurrentPageData().map((user, index) => (
           
          ))} */}
           {getCurrentPageData().map((user, index) => renderRow(user, index))}
          {
             <tr style={{fontSize:"medium" , color:"black"}}><td>{filteredUsers.length} Rows Found</td></tr>
          }
        </tbody>
      </table>
    </div>

    <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div> <button style={deleteButtonStyle2}  onClick={handleDeleteSelected}>Delete Selected</button></div>
    <div>
      <div>Page {currentPage} of {totalPages}</div><hr/>
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
    </div>
  );
};

export default ListItem;