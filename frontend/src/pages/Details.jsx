import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Details = () => {
    const [rams, setRams] = useState([]);
    const location = useLocation()
    const ramId = location.pathname.split("/")[2]

  
    useEffect(() => {
      const fetchAllRams = async () => {
        try {
          const res = await axios.get("http://localhost:8000/rams");
          setRams(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllRams();
    }, []);
  
  
  
    return (
      <div className="form2">
        <h1>Details of ram</h1>
        <table>
                <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Clock speed</th>
                    <th>Size</th>
                    <th>CAS latency</th>
                    <th>ECC status</th>
                    <th>Price (€)</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
          {rams.map((ram, index) => {
            if(index === ramId-1)

                return <tr key={ram.id} className="book">
                <td>{ram.brand}
                </td>
                <td>{ram.model}</td>
                <td>{ram.clock_speed}</td>
                <td>{ram.size}</td>
                <td>{ram.CAS_latency}</td>
                <td>{ram.ECC_status}</td>
                <td>{ram.price}</td>
                <td>{ram.name}</td>
                <td><button className="update">
                <Link
                  to={`/update/${ram.id}`}
                  style={{ color: "inherit", textDecoration: "none" }}>
                  Update
                </Link>
                </button></td>
                </tr>
              ;
          })}
                </tbody>
            </table>
        <Link to="/">See all rams</Link>

      </div>
    );
  };
export default Details