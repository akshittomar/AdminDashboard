
import React, { useState, useEffect } from 'react';
import lunr from 'lunr';
import './style.css'
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
        filteredUsers[index] = updatedFormData;
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

    const hoverStyle = {
        backgroundColor: '#f0f0f0', // Lighter color for hover
    };


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
            if (results.length !== 0) setFilteredUsers(results.map(result => sampleUsers[result.ref])); else {
                const wildcardSearchTerm = '*' + searchTerm + '*';
                const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref]));
                if (results.length === 0) {

                    const wildcardSearchTerm = str + '*';
                    const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref]));
                }
            }
        }
    };


    const randomSearch = (str) => {
        if (!index || str === '') {
            setFilteredUsers(sampleUsers);
        } else {
            // Append a wildcard to the search term
            const wildcardSearchTerm = str + '*';
            const results = index.search(wildcardSearchTerm);
            if (results.length !== 0) setFilteredUsers(results.map(result => sampleUsers[result.ref])); else {
                const wildcardSearchTerm = '*' + str + '*';
                const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref])); if (results.length === 0) {

                    const wildcardSearchTerm = str + '*';
                    const results = index.search(wildcardSearchTerm); setFilteredUsers(results.map(result => sampleUsers[result.ref]));
                }
            }
        }
    };

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


    const renderRow = (user, index) => {
        if (isEdit[index]) {
            return (
                <tr key={index}>
                    <td className='tdStyle'>Edit This Row</td>
                    <td className='tdStyle'>
                        <input
                            type="text"
                            value={formData[index].name}
                            onChange={(e) => handleInputChange(e, index, 'name')}
                            required
                        />
                    </td>
                    <td className='tdStyle'>
                        <input
                            type="email"
                            value={formData[index].email}
                            onChange={(e) => handleInputChange(e, index, 'email')}
                            required
                        />
                    </td>
                    <td className='tdStyle'>
                        <input
                            type="text"
                            value={formData[index].role}
                            onChange={(e) => handleInputChange(e, index, 'role')}
                            required
                        />
                    </td>
                    <td className='tdStyle'>
                        <button className='editButtonStyle' onClick={() => handleSave(index)}>Save</button>
                    </td>
                </tr>
            );
        } else {
            return (

                <tr key={index} style={isRowSelected(index) || isRowSelected(-1) ? { backgroundColor: "grey" } : {}}
                    onMouseEnter={(e) => { !isRowSelected(index) && !isRowSelected(-1) && (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor) }}
                    onMouseLeave={(e) => { !isRowSelected(index) && !isRowSelected(-1) && (e.currentTarget.style.backgroundColor = '') }}
                >
                    <td className='tdStyle'>
                        <input
                            type="checkbox"
                            checked={isRowSelected(index)}
                            onChange={() => toggleRowSelection(index)}
                        />
                    </td>
                    <td className='tdStyle'>{user.name}</td>
                    <td className='tdStyle'>{user.email}</td>
                    <td className='tdStyle'>{user.role}</td>
                    <td className='tdStyle'>
                        <button className='editButtonStyle' onClick={() => handleEdit(index)} >Edit</button>&nbsp;
                        <button className='deleteButtonStyle' onClick={() => { handleDelete(index) }}>Delete</button>
                    </td>
                </tr>
            );
        }
    };



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

    const startIndex = (currentPage - 1) * rowsPerPage;

    return (
        <div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div >
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); if (e.target.value === '') { setFilteredUsers(sampleUsers); setCurrentPage(1); } else { randomSearch(e.target.value); } }}
                        className='searchBoxStyle'
                    />
                    <button onClick={handleSearch} className='searchButtonStyle'>Search</button>

                </div>


            </div>

            <div className='containerStyle'>

                <table className='tableStyle'>
                    <thead>
                        <tr>

                            <th className='thStyle'>Rows</th>
                            <th className='thStyle'>Name</th>
                            <th className='thStyle'>Email</th>
                            <th className='thStyle'>Role</th>
                            <th className='thStyle'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {getCurrentPageData().map((user, index) => renderRow(user, startIndex+index))}
                        {
                            <tr style={{ fontSize: "medium", color: "black" }}><td>{filteredUsers.length} Rows Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>  <button className='deleteButtonStyle2' style={selectedRows.size===0 ? {cursor:'not-allowed'}:{}}  onClick={handleDeleteSelected}>Delete Selected</button></div>
                <div>
                    <div>Page {currentPage} of {totalPages}</div><hr />
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