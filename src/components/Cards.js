import {
  Box,Card,CardContent,CardMedia,Divider,Paper,Typography} from "@mui/material";
import { useEffect, useState } from "react";

const Cards = ({ data, setData }) => {
    
    
  return (
    <Box sx={{ border: "1px solid black" }}>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Popular
      </Typography>
      <Box sx={{ display: "flex",border: "1px solid green" , alignItems:'center', justifyContent:'space-around', flexWrap:"wrap"}}>
        {
            data.filter((ele)=>{return ele.isPopular == true}).map((ele,i)=>{
                return(
                    <Paper key={i} sx={{margin:"10px", }}>
                <Card sx={{ height: "300px", width: "250px" }}>
                  <CardMedia sx={{ height: "60%" }} image={'https://precious-lime-kimono.cyclic.app'+ele.image} title="firts" />
                  <CardContent sx={{ background: "#e6f2ff" }}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      {ele.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        border: "1px solid red",
                        margin: "10px",
                      }}
                    >
                      <Typography>3.2 Rating</Typography>
                      <Typography>{ele.restaurantType}</Typography>
                    </Box>
                    <Typography sx={{ textAlign: "center" }}>{ele.offerText}</Typography>
                  </CardContent>
                </Card>
              </Paper>
                )

            })
        }
        
        
            
      </Box>
      <Divider></Divider>

      <Box >
      <Typography sx={{ textAlign: "center" }} variant="h4">
        All Venders
      </Typography>
      <Box sx={{ display: "flex", border: "1px solid green" , alignItems:'center', justifyContent:'space-around', flexWrap:"wrap"}}>
      {
            data.map((ele,i)=>{
                return(
                    <Paper key={i} sx={{margin:"30px"}}>
                <Card sx={{ height: "300px", width: "250px" }}>
                  <CardMedia sx={{ height: "60%" }} image={'https://precious-lime-kimono.cyclic.app'+ele.image} title="firts" />
                  <CardContent sx={{ background: "#e6f2ff" }}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      {ele.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        border: "1px solid red",
                        margin: "10px",
                      }}
                    >
                      <Typography>3.2 Rating</Typography>
                      <Typography>{ele.restaurantType}</Typography>
                    </Box>
                    <Typography sx={{ textAlign: "center" }}>{ele.offerText}</Typography>
                  </CardContent>
                </Card>
              </Paper>
                )

            })
        }
        </Box>




      </Box>
    </Box>
  );
};
export default Cards;
