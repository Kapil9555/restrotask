import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const FiltComp = ({data, setData}) => {
    const [cat, SetCat]=useState([])
   
    function unique(arr) {
        const result = ["All"];
      
        for (const i of arr) {
          let noRepeat = true;
      
          for (const j of result) {
            if (i === j) {
              noRepeat = false;
              break;
            }
          }
      
          if (noRepeat) {
            result.push(i);
          }
        }
      
        return result;
      }
    
      // 🎉  [ 1, 3, 2 ]
      
      useEffect(()=>{
        SetCat(unique(data.map((ele)=>{return ele.restaurantType})))
      },[data])
    
   
  return (
    
    <Box sx={{display:"flex",marginTop:"68px", justifyContent:"center",alignContent:"center"}}>
      <Typography variant='h5' sx={{margin:"12px"}}>Filter:</Typography>
     
      {
       cat.map((ele, i)=>{
            return (
                <Button key={i} variant='contained' size='large' color='success' sx={{margin:"10px"}}>{ele}</Button>
            )

        })
      }
       {/* <Button  variant='contained' size='large' color='success' sx={{margin:"10px"}}>All</Button> */}
     
    </Box>
  );
}

export default FiltComp;
