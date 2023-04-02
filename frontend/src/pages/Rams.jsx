import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const Rams = () => {
    const [rams, setRams] = useState([]);
  
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
  
    console.log(rams);
  
  
    return (
      
      <div className="form">
        <h1>My ram</h1>
        <table>
                <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        rams.map((ram) => (
                            <tr key={ram.id} className="ram">
                                <td>{ram.brand}</td>
                                <td>{ram.model}</td>
                                <td>{ram.name}</td>
                                <td><button className="details"><Link to={`/details/${ram.id}`}>
                                  Details
                                </Link></button></td>
                            </tr>
                            
                        ))
                    }
                    
                </tbody>
            </table>
          


       
      </div>
    );
  };
export default Rams