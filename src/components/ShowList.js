import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imgDef from "../images/tv-show.png";
const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  const chunkShows = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  return (
    <div
      className="container my-4"
      // style={{ backgroundColor: "#96E9C6", color: "#A6E3E9" }}
    >
      <div
        className="header d-flex py-2"
        style={{ backgroundColor: "#469d89", marginBottom: "10px" }}
      >
        <h1 className="mx-auto" style={{ textAlign: "left" }}>
          <strong>BlinkWatch</strong>
        </h1>
      </div>
      <div className="row justify-content-center align-items-center">
        {chunkShows(shows, 3).map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row mb-4 d-flex align-items-center justify-content-center"
          >
            {row.map((show) => (
              <div
                key={show.show.id}
                className="col-md-4 mb-4 d-flex align-items-center justify-content-center"
              >
                <Link
                  to={`/show/${show.show.id}`}
                  className="d-flex flex-column align-items-center"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={show.show.image?.medium || imgDef}
                    alt={show.show.name}
                    className="img-fluid"
                  />
                  <h4 className="mt-2 py-2">{show.show.name}</h4>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
