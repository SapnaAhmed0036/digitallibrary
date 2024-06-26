// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import baseurl from '../../Constants';
// import './libraryallbooks.css'
// import DownloadIcon from '@mui/icons-material/Download';
// const Libraryallbooks = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get(`${baseurl}/Book/getAll`);
//                 console.log('Fetched Books:', response.data);
//                 if (response.data.status === "Success" && Array.isArray(response.data.data)) {
//                     setBooks(response.data.data);
//                 } else {
//                     console.error('Unexpected response structure:', response.data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching books:', error);
//             }
//         };

//         fetchBooks();
//     }, []);

//     return (
//         <div className='Library-books'>
       
//             {Array.isArray(books) && books.length > 0 ? (
//                 books.map(book => (
//                     <div key={book.bookId}>
                   
//                     <div className='book-details'>    <h3>{book.bookName}</h3>
//                         <p>Author: {book.bookAuthorName}</p>
//                         <p>Category: {book.categroyName}</p>
//                         <DownloadIcon onClick={downloadbooks}
//                         />
//                         </div>
                       
                       
//                     </div>
//                 ))
//             ) : (
//                 <p>No books available</p>
//             )}
            
//         </div>
//     );
// };

// export default Libraryallbooks;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseurl from '../../Constants';
import { saveAs } from 'file-saver';
import TocIcon from '@mui/icons-material/Toc';
import DownloadIcon from '@mui/icons-material/Download';

const Libraryallbooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${baseurl}/Book/getAll`);
                console.log('Fetched Books:', response.data);
                if (response.data.status === "Success" && Array.isArray(response.data.data)) {
                    setBooks(response.data.data);
                } else {
                    console.error('Unexpected response structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const downloadBook = async (bookId) => {
        try {
            const response = await axios({
                url: `${baseurl}/Book/DownloadBook`,
                method: 'GET',
                responseType: 'blob', // Important to handle binary data
                params: { bookId }
            });

            // Determine the file name from the response headers or use a fallback
            const contentDisposition = response.headers['content-disposition'];
            let fileName = 'downloaded_book.pdf';
            if (contentDisposition) {
                const matches = contentDisposition.match(/filename="(.+)"/);
                if (matches && matches[1]) {
                    fileName = matches[1];
                }
            }

            // Use file-saver to save the file
            saveAs(new Blob([response.data]), fileName);
        } catch (error) {
            console.error('Error downloading book:', error);
        }
    };

    return (
        <div>
            {Array.isArray(books) && books.length > 0 ? (
                books.map(book => (
                    <div key={book.bookId}>
                        <h3>{book.bookName}</h3>
                        <p>Author: {book.bookAuthorName}</p>
                        <p>Category: {book.categroyName}</p>
                        <DownloadIcon onClick={() => downloadBook(book.bookId)} style={{ cursor: 'pointer' }} />
                        <TocIcon/>
                    </div>

                ))
            ) : (
                <p>No books available</p>
            )}
        </div>
    );
};

export default Libraryallbooks;
