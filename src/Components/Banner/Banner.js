import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Caurosel from './Caurosel';

const useStyle= makeStyles(()=>({
     banner:{
         backgroundImage:"url(./banner.jpg)",
         backgroundSize: 1600,
         backgroundRepeat:"no-repeat",
        //  opacity:0.5
         
     },
     bannercontent:{
         height:400,
        //  width:"100vw",
         display:"flex",
         flexDirection:"column",
         paddingTop:25,
         justifyContent:"space-around",
        //  overflow:"hidden"
     },
     tagline:{
        display:"flex",
        flexDirection:"column",
        height:"40%",
        textAlign:"center",
        justifyContent:"center"


     }
}))
function Banner() {
    const classes=useStyle();
  return (
    <div className={classes.banner}>
        <Container className={classes.bannercontent}> 
        <div className={classes.tagline}>
            <Typography variant='h2' style={{ fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat" }}>
            Crypto Monster
            </Typography>
            <Typography variant='subtitle2' style={{color:"grey",textTransform:"capitalize", fontFamily:"Montserrat" }}>
           Get all the info regarding your favourite crypto currency
            </Typography>
        </div>
        <Caurosel/>
        </Container>
    </div>
  )
}

export default Banner