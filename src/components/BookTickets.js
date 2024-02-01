import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgDef from "../images/tv-show.png";
import { toast } from "react-toastify";

const BookTickets = () => {
  const location = useLocation();
  const { show } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingInfo", JSON.stringify(formData));
    toast.success("Tickets booked successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    navigate("/");
  };

  return (
    <div
      className="container my-4 d-flex justify-content-center align-items-center vh-99"
      // style={{ backgroundColor: "#0C4160", color: "#C3CEDA" }}
    >
      <div
        className="card border-0 w-50"
        // style={{backgroundColor: "#0C4160", color: "#C3CEDA"}}
      >
        <div
          className="card-body d-flex flex-column"
          style={{ backgroundColor: "#99e2b4" }}
        >
          {show && (
            <img
              src={show.image?.original || imgDef}
              alt={show.name || ""}
              className="card-img-top img-fluid mx-auto py-2"
              style={{ maxWidth: "50%" }}
            />
          )}
          <h2 className="card-title mb-4 mx-auto py-2">
            Book Tickets for <strong>{show?.name}</strong>
          </h2>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <div className="mb-3 mx-auto" style={{ width: "300px" }}>
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3 mx-auto" style={{ width: "300px" }}>
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email ID"
                required
              />
            </div>
            <div className="mb-3 mx-auto" style={{ width: "300px" }}>
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mb-3 mx-auto" style={{ width: "300px" }}>
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                required
              />
            </div>
            <div className="d-flex">
              <button
                type="submit"
                className="btn  mx-auto buttonStyle"
                style={{ backgroundColor: "#57cc99" }}
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTickets;
