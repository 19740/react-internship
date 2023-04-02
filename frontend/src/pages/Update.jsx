import React from "react";
import axios from "axios";
import { useEffect } from 'react'
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const [rams, setRams] = useState([]);
    const [ram, setRam] = useState({
        brand: "",
        model: "",
        clock_speed: null,
        size: null,
        CAS_latency: null,
        ECC_status: null,
        price: null,
        id_type: null
    });

    const navigate = useNavigate() 
    const location = useLocation()

    const ramId = location.pathname.split("/")[2]

    const handleChange = (e) => {

        setRam((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    };

    useEffect(() => {
        const fetchAllRams = async () => {
          try {
            const res = await axios.get("http://localhost:8000/types");
            setRams(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllRams();
      }, []);


    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8000/rams/"+ ramId, ram)
            navigate("/")

        } catch (err){
            console.log(err)
        }
    }
    console.log(rams)

    return(
        <div className="form">
            
        <h1>Update book</h1>
        <input
        type="text"
        placeholder="Brand"
        name="brand"
        onChange={handleChange}
        
        />
        <input
        type="text"
        placeholder="Model"
        name="model"
        onChange={handleChange}
        />
        <input
        type="text"
        placeholder="Clock_speed"
        name="clock_speed"
        onChange={handleChange}
        />
        <input
        type="text"
        placeholder="Size"
        name="size"
        onChange={handleChange}
        />
        <input
        type="text"
        placeholder="CAS_latency"
        name="CAS_latency"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="ECC_status"
        name="ECC_status"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />

        <select className="form-control" onChange={handleChange} name = "id_type">
        <option value=""></option>
        {rams.map((type) => ( 
        <option value={type.id}>{type.name}</option>
        
        ))}
        </select>
        

            <button className="Button" onClick={handleClick}>Update</button>

        </div>
    );

};

export default Update