import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseurl from '../../Constants';
import './BookUpload.css';

const UpdateBook = ({ bookId }) => {
    const [categories, setCategories] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editBookId, setEditBookId] = useState(null);
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
        if (bookId) {
            setEditBookId(bookId);
            setEditMode(true);
        } else {
            setEditMode(false);
            setEditBookId(null);
        }
    }, [bookId]);

    useEffect(() => {
        if (editMode && editBookId) {
            fetchCategories();
            fetchBookDetails(editBookId);
        }
    }, [editMode, editBookId]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${baseurl}/Book/getBookCategory`);
            setCategories(response.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchBookDetails = async (bookId) => {
        try {
            const response = await axios.get(`${baseurl}/Book/getAll`);
            const bookData = response.data.data.find(book => book.bookId === bookId);
            if (bookData) {
                setFormData({
                    categoryId: bookData.categoryId,
                    bookName: bookData.bookName,
                    bookAuthor: bookData.bookAuthorName,
                    uploadType: bookData.uploadType,
                    keywords: bookData.bookKeywords,
                    bookImage: null,
                    bookPdf: null
                });
            } else {
                console.error("Book not found");
            }
        } catch (error) {
            console.error("Error fetching book details:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (e) => {
        setFormData({ ...formData, categoryId: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));

            const response = await axios.put(
                `${baseurl}/Book/updateBook?bookId=${editBookId}`,
                formDataToSend
            );

            alert('Book updated successfully!');
            setEditMode(false);
            setEditBookId(null);
            setFormData({
                categoryId: '',
                uploaderId: '0',
                bookName: '',
                bookAuthor: '',
                uploadType: '',
                keywords: '',
                bookImage: null,
                bookPdf: null
            });
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error);
            alert('Failed to update the book. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="book-update">
                <label htmlFor="categoryName">Category:</label>
                <select 
                    id="categoryName" 
                    name="categoryId" 
                    value={formData.categoryId} 
                    onChange={handleCategoryChange} 
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.categoryId} value={category.categoryId}>
                            {category.categoryName}
                        </option>
                    ))}
                </select><br/><br/>

                <label htmlFor="bookName">Book Name:</label>
                <input
                    type="text"
                    id="bookName"
                    name="bookName"
                    value={formData.bookName}
                    onChange={handleChange}
                    required
                /><br/><br/>

                <label htmlFor="bookAuthor">Book Author:</label>
                <input
                    type="text"
                    id="bookAuthor"
                    name="bookAuthor"
                    value={formData.bookAuthor}
                    onChange={handleChange}
                    required
                /><br/><br/>

                <label htmlFor="uploadType">Upload Type:</label>
                <select
                    id="uploadType"
                    name="uploadType"
                    value={formData.uploadType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select upload type</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select><br/><br/>

                <label htmlFor="keywords">Keywords:</label>
                <input
                    type="text"
                    id="keywords"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    required
                /><br/><br/>

                <label htmlFor="bookImage">Book Image:</label>
                <input
                    type="file"
                    id="bookImage"
                    name="bookImage"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                /><br/><br/>

                <label htmlFor="bookPdf">Book PDF:</label>
                <input
                    type="file"
                    id="bookPdf"
                    name="bookPdf"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    required
                /><br/><br/>

                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default UpdateBook;
