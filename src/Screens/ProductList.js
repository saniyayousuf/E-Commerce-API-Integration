import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import MultiCard from "../component/SMCard";


import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';
import { Margin } from "@mui/icons-material";


function ProductList() {

 let renderData = () => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
        console.log(res.data)
        setListData([...res.data]);
    })
    .catch((err) => {
        console.log(err);
      });
 }
 const [listData, setListData] = useState([]);
const navigate = useNavigate()
 let clickCard = (id) => {
    navigate(`/ProductDetail/${id}`);
  };


    return (
        <>
        <Box  
        style={{
            padding: 20,
          }}
        >
        <Typography variant="h2">Product List</Typography>
        <Button 
         sx={{marginLeft:10,marginBottom:3, paddingY:1, paddingX:3,borderRadius:7}}
        color="secondary" 
        onClick={renderData}
         variant="contained"
         endIcon={<KeyboardDoubleArrowRightSharpIcon/>}>
          Click here to see 
        </Button>
        {listData.map((x, i) => (
          <Box
            onClick={() => clickCard(x.id)}
            key={i}
            style={{
              padding: 10,
              backgroundColor: "#FCFCFC",
              marginBottom: 50,
            }}
            >
               
        <Card sx={{marginY:5, maxWidth: 450,  border: '1px solid black',}}>
      <CardActionArea>
        <CardMedia
        className="p-5"
        component="img"
          image={x.image}
          alt={x.title}
        />
        <CardContent className="my-5 ">
          <Typography gutterBottom variant="h5" component="div">
          <b>CATEGORY : </b>  {x.category}
          </Typography>
          <Typography variant="body3" color="text.dark">
          <b >DESCRIPTION : </b>  {x.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button startIcon={<KeyboardDoubleArrowRightSharpIcon/>}  sx={{marginBottom:3, paddingY:1, paddingX:3,borderRadius:7}} variant="contained" size="small" color="secondary">
          View More
        </Button>
      </CardActions>
    </Card>



                </Box>
        ))}
      </Box>
    </>
        
        
    
    )
  


}

export default ProductList;