// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import baseurl from "../../Constants";
// import './BookUpload.css';

// const BookUpload = () => {
//     const [categories, setCategories] = useState([]);
//     const [formData, setFormData] = useState({
//         categoryId: '',  // Initialize categoryId as an empty string
//         uploaderId: '0',
//         bookName: '',
//         bookAuthor: '',
//         uploadType: '',
//         keywords: '',
//         bookImage: null,
//         bookPdf: null
//     });

//     // Fetch categories from the API
//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get(`${baseurl}/Book/getBookCategory`);
//                 console.log('Categories fetched:', response.data.data); // Debug
//                 setCategories(response.data.data);
//             } catch (error) {
//                 console.error("Error fetching categories:", error);
//             }
//         };

//         fetchCategories();
//     }, []);

//     // Handle text input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // Handle file input changes
//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: files[0]
//         }));
//     };

//     // Handle category selection
//     const handleCategoryChange = (e) => {
//         const { value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             categoryId: value
//         }));
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         formDataToSend.append('categoryId', formData.categoryId);
//         formDataToSend.append('uploaderId', formData.uploaderId);
//         formDataToSend.append('bookName', formData.bookName);
//         formDataToSend.append('bookAuthor', formData.bookAuthor);
//         formDataToSend.append('uploadType', formData.uploadType);
//         formDataToSend.append('keywords', formData.keywords);
//         formDataToSend.append('bookImage', formData.bookImage);
//         formDataToSend.append('bookPdf', formData.bookPdf);

//         const headers = {
//             'Accept': '*/*',
//             'Content-Type': 'multipart/form-data'
//         };

//         try {
//             const response = await axios.post(
//                 `${baseurl}/Book/uploadBook`,
//                 formDataToSend,
//                 { headers }
//             );
//             console.log('Success:', response.data);
//             alert('Book uploaded successfully!');
//         } catch (error) {
//             console.error('Error uploading book:', error.response ? error.response.data : error);
//             alert('Failed to upload the book. Please try again.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="book-upload-form">
//             <label htmlFor="categoryName">Category:</label>
//             <select 
//                 id="categoryName" 
//                 name="categoryId" 
//                 value={formData.categoryId} 
//                 onChange={handleCategoryChange} 
//                 required
//             >
//                 <option value="">Select a category</option>
//                 {categories.map((category) => (
//                     <option key={category.categoryId} value={category.categoryId}>
//                         {category.categroyName}
//                     </option>
//                 ))}
//             </select><br/>

//             <label htmlFor="bookName">Book Name:</label>
//             <input
//                 type="text"
//                 id="bookName"
//                 name="bookName"
//                 value={formData.bookName}
//                 onChange={handleChange}
//                 required
//             /><br/>

//             <label htmlFor="bookAuthor">Book Author:</label>
//             <input
//                 type="text"
//                 id="bookAuthor"
//                 name="bookAuthor"
//                 value={formData.bookAuthor}
//                 onChange={handleChange}
//                 required
//             /><br/><br/>

//             <label htmlFor="uploadType">Upload Type:</label>
//             <select
//                 id="uploadType"
//                 name="uploadType"
//                 value={formData.uploadType}
//                 onChange={handleChange}
//                 required
//             >
//                 <option value="">Select upload type</option>
//                 <option value="Public">Public</option>
//                 <option value="Private">Private</option>
//             </select><br/><br/>

//             <label htmlFor="keywords">Keywords:</label>
//             <input
//                 type="text"
//                 id="keywords"
//                 name="keywords"
//                 value={formData.keywords}
//                 onChange={handleChange}
//                 required
//             /><br/>

//             <label htmlFor="bookImage">Book Image:</label>
//             <input
//                 type="file"
//                 id="bookImage"
//                 name="bookImage"
//                 onChange={handleFileChange}
//                 accept="image/*"
//                 required
//             /><br/>

//             <label htmlFor="bookPdf">Book PDF:</label>
//             <input
//                 type="file"
//                 id="bookPdf"
//                 name="bookPdf"
//                 onChange={handleFileChange}
//                 accept="application/pdf"
//                 required
//             /><br/>

//             <button type="submit">Upload Book</button>
//         </form>
//     );
// };

// export default BookUpload;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseurl from "../../Constants";
import './BookUpload.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const BookUpload = () => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        categoryId: '', 
        uploaderId: '0',
        bookName: '',
        bookAuthor: '',
        uploadType: '',
        keywords: '',
        bookImage: null,
        bookPdf: null
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${baseurl}/Book/getBookCategory`);
                console.log('Categories fetched:', response.data.data);
                setCategories(response.data.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files[0]
        }));
    };

    const handleCategoryChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            categoryId: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('categoryId', formData.categoryId);
        formDataToSend.append('uploaderId', formData.uploaderId);
        formDataToSend.append('bookName', formData.bookName);
        formDataToSend.append('bookAuthor', formData.bookAuthor);
        formDataToSend.append('uploadType', "Public");
        formDataToSend.append('keywords', formData.keywords);
        formDataToSend.append('bookImage', formData.bookImage);
        formDataToSend.append('bookPdf', formData.bookPdf);

        const headers = {
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data'
        };

        try {
            const response = await axios.post(
                `${baseurl}/Book/uploadBook`,
                formDataToSend,
                { headers }
            );
            console.log('Success:', response.data);
            // alert('Book uploaded successfully!');

            // Display success message using SweetAlert2
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Book uploaded successfully!',
                showConfirmButton: false,
                timer: 2000
            });
        } catch (error) {
            console.error('Error uploading book:', error.response ? error.response.data : error);
            // alert('Failed to upload the book. Please try again.');
             // Display error message using SweetAlert2
             Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Failed to upload the book. Please try again.',
                showConfirmButton: true
            });
        }
    };

    return (
        <div className="container mt-4 mb-3">
            <form onSubmit={handleSubmit} className="book-upload-form needs-validation">
                <div className="form-group mb-3">
                    <label htmlFor="categoryName">Category:</label>
                    <select 
                        id="categoryName" 
                        name="categoryId" 
                        value={formData.categoryId} 
                        onChange={handleCategoryChange} 
                        className="form-control" style={{height:"40px"}}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.categoryId} value={category.categoryId}>
                                {category.categroyName}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="form-group mb-3">
                    <label htmlFor="bookName">Book Name:</label>
                    <input
                        type="text"
                        id="bookName"
                        name="bookName"
                        value={formData.bookName}
                        onChange={handleChange}
                        className="form-control" style={{height:"40px"}}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="bookAuthor">Book Author:</label>
                    <input
                        type="text"
                        id="bookAuthor"
                        name="bookAuthor"
                        value={formData.bookAuthor}
                        onChange={handleChange}
                        className="form-control" style={{height:"40px"}}
                        required
                    />
                </div>

                

                <div className="form-group mb-3">
                    <label htmlFor="keywords">Keywords:</label>
                    <input
                        type="text"
                        id="keywords"
                        name="keywords"
                        value={formData.keywords}
                        onChange={handleChange}
                        className="form-control" style={{height:"40px"}}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="bookImage">Book Image:</label>
                    <input
                        type="file"
                        id="bookImage"
                        name="bookImage"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="form-control-file"
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="bookPdf">Book PDF:</label>
                    <input
                        type="file"
                        id="bookPdf"
                        name="bookPdf"
                        onChange={handleFileChange}
                        accept="application/pdf"
                        className="form-control-file" 
                        required
                    />
                </div>

                <button type="submit" className="btn custom-bg-cyan  text-light btn-block">Upload Book</button>
            </form>
        </div>
    );
};

export default BookUpload;

