import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom";
import baseurl from "../../Constants";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import './AllBooks.css';
import BookUpload from "./BookUpload";
import Swal from "sweetalert2";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SidebarAdmin from "../SidebarAdmin";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";



const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const location = useLocation();
 const navigate=useNavigate();
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${baseurl}/Book/getAll`);
      console.log(response.data.data);
      setBooks(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${baseurl}/Book/deleteBook?bookId=${bookId}&uploaderId=0`, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(response.status);
          if (response.data.status === "Success") {
            setBooks(prevBooks => prevBooks.filter(book => book.bookId !== bookId));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        } catch (error) {
          console.error("Error deleting book:", error);
        }
      }
    });
  };

  const handleUpdate = async () => {
    // setShowUploadForm(false);
    // await fetchBooks(); 
     navigate("/bookupload-form");
  };

  return (
    <div className="container-fluid mt-5" id="all-book">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <SidebarAdmin />
        </div>
        <div className="col-md-11 table-container mt-5">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div id="check">
              {Array.isArray(books) && books.length === 0 ? (
                <p>No data found</p>
              ) : (
                <table className="table table-hover table-bordered custom-table mt-5">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Book Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <tr key={book.bookId}>
                        <td>
                          {book.bookName} {book.bookAuthor}
                        </td>
                        <td>
                          <DeleteTwoToneIcon className="me-4"  style={{ fontSize: 30, cursor: "pointer" }}
                            onClick={() => handleDelete(book.bookId)}
                          />
                          <EditTwoToneIcon className="me-4"  style={{ fontSize: 30, cursor: "pointer" }}  onClick={() =>navigate("/updatebook")}/>

                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          <div className="Add-book">
            <NoteAddIcon
             style={{ fontSize: 40, cursor: 'pointer' }}
             onClick={() => navigate('/bookupload-form')}
            />
          </div>
          {/* {showUploadForm && (
            <BookUpload
              onClose={() => setShowUploadForm(false)}
              onUpdate={handleUpdate}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
