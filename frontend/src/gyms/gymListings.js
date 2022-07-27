import { Fab, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListingCard from "./listingCard";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function GymListings(){

  const [age, setAge]  =   useState('');
  const [gyms,setGyms] =  useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    axios.get("/api/gym/getGymListings")
    .then((res)=>{
        setGyms(res.data.gyms);
    })
    .catch((e)=>{
        console.log("Something went wrong while fetching gyms")
    })
  }, []);


    return(
        <>
            <Navbar />
                <div className="container">
                <Grid container spacing={3} sx={{marginTop:4, marginBottom:4}}>
                    <Grid item xs={4} sm={3} md={3} lg={2}>
                         <Typography variant="h6">Filter by Location:</Typography>
                    </Grid>
                    <Grid item xs={8} sm={9} md={9} lg={10} sx={{textAlign:'left'}}>
                        <FormControl sx={{width:'20rem'}}>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={'Toronto'}>Toronto</MenuItem>
                                <MenuItem value={'Halifax'}>Halifax</MenuItem>
                                <MenuItem value={'Montreal'}>Montreal</MenuItem>
                                <MenuItem value={'Vancouver'}>Vancouver</MenuItem>
                            </Select>
                         </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{marginTop:4, marginBottom:4}}>
                    {
                        gyms.map((element)=>{
                        return(
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <Link to={`/gymdetails/${element.name}`}><ListingCard gym={element} /></Link>
                            </Grid>
                            )
                        })
                    } 
                </Grid>        
                
                
                    
                    <Link to="/gymRegister" variant="body2">   
                      Looking to register your gym? Click here
                    </Link>
                </div>
            <Footer />
        </>
    );
}