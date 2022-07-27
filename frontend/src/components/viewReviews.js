import { Avatar, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";

export default function Reviews({review}){

    const { reviewerId } = review;
    const[userData, setUserdata]=useState({});

    useEffect(() => {
        axios.get(`/api/users/getUserData/${reviewerId}`)
        .then((res)=>{
            setUserdata(res.data.userData);
        })
    }, []);

    return(
        <div>
            <Grid container spacing ={3} alignItems="center" justifyContent="center" direction='column'>
                <Typography variant="h6" component='div' sx={{margin:2}}>{userData.fname+" "+userData.lname}</Typography>
                <Avatar
                        className="shadow"
                        alt="Remy Sharp"
                        src = {userData.avatar} 
                        sx={{height:'4em', width:'4em'}}
                />
                <Rating
                    name="simple-controlled"
                    sx={{marginTop: 4}}
                    value={review.rating}
                    readOnly
                />
                <Typography variant="h7" component='div' sx={{margin:2}}>{review.review}</Typography>   
            </Grid>
            <hr />  
       </div>

    );
}