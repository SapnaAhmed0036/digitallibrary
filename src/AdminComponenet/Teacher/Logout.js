import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Logout.css';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        Swal.fire({
            title: "Are you sure you want to logout?",
            // text: "You won't be able to revert this!",
            // icon: "warning",
            icon:"question",
            showCancelButton: true,
            confirmButtonColor: "#044E54",
            cancelButtonColor: "#044E54",
            confirmButtonText: "Yes",
            cancelButtonText:"No"

        }).then((result) => {
            if (result.isConfirmed) {
                // Perform logout actions here, like clearing user data
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been successfully logged out.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                }).then(() => {
                    // Navigate to login page after showing the success message
                    navigate('/');
                });
            }
        });
    };

    return (
        <div className="logout-1">
            <button onClick={handleLogoutClick} id="logout-button">
               
                    <h4>Logout</h4>
               
            </button>
        </div>
    );
};

export default Logout;
