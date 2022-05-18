import { makeStyles } from '@material-ui/core'
import React from 'react'
const useStyle=makeStyles((theme)=>({
    caurosel:{
        display:"flex",
        height:"50%",
        
    },
})); 
function Caurosel() {
    const classes= useStyle();
  return (
    <div className={classes.caurosel}>Caurosel</div>
  )
}

export default Caurosel