// import { Box, Button, Typography } from "@mui/material";
// import axios from "axios";
// import { useState } from "react";
// import { useParams } from "react-router-dom";



// function ProductDetail() {



//     let params = useParams();

//     const [model, setModel] = useState({});
  
//     let getData = () => {
//       axios
//         .get(`https://fakestoreapi.com/products/${params.id}`)
//         .then((res) => {
//           console.log(res.data);
//           setModel({ ...res.data });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
    
//     return (
//       <>
//             <h1>ProductDetail</h1>
//             <Box>
//         <Typography>Single Post</Typography>
//         <Button onClick={getData} variant="contained">
//           Get Single Post
//         </Button>
//         <Typography variant="h3">{model.title ?? ""}</Typography>
//         <Typography className="d-block" variant="body">
//           {model.rating ?? ""}
//         </Typography>
//         <Typography className="d-block" variant="body">
//           User Id : {model.id ?? ""}
//         </Typography>
//       </Box>

//       </>
//     );
//   }
  
//   export default ProductDetail;
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';

// function ProductDetail() {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);

// //   useEffect(() => {
// //     axios.get(`https://fakestoreapi.com/products/${id}`)
// //       .then((response) => setProduct(response.data))
// //       .catch((error) => console.error(error));
// //   }, [id]);

// //   if (!product) {
// //     return <div>Loading...</div>;
// //   }

//   return (
//     <div className="product-detail">
//        {/* <img src={product.image} alt={product.title} />
//        <h2>{product.title}</h2>
//        <p>{product.description}</p>
//        <p>Price: ${product.price}</p> */}
//      </div>
//   );
// }

// export default ProductDetail;



import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';

import {Image,Stack,Heading,Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function ProductDetail(){
    let params = useParams();
    const [model, setModel] = useState({});
   
    const renderData = ()=>{
    axios 
    .get(`https://fakestoreapi.com/products/${params.id}`)
    .then((res)=>
    {
        console.log(res.data);
        setModel({...res.data})

    })
    .catch((err)=>{
        console.log(err)
    })

    }
    return (

        <>
<div>
<Typography variant="h4">Welcome to this page</Typography>
        <Button 
         sx={{marginLeft:10,marginBottom:3, paddingY:1, paddingX:3,borderRadius:7}}
        color="secondary" 
        onClick={renderData}
         variant="contained"
         endIcon={<KeyboardDoubleArrowRightSharpIcon/>}>
          Click here to see 
        </Button>
</div>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '100px' }}
    // className="p-5"
    src={model.image }
    alt={model.title }
  />

  <Stack>
    <CardBody>

      <Heading size='md'><b>CATEGORY :   </b>{model.category}</Heading>

      <Text py='2'>
      <b>Description :   </b>{model.description}
      </Text>

      <Text py='2'>
      <b>Price :   </b>{model.price}
      </Text>

      <Text py='2'>
      <b>CATEGORY :   </b>{model.category}
      </Text>

      <Text py='2'>
      {/* <b>Rating :   </b>{model.title} */}
      <b>Rating : </b>{model.rating?.rate} ({model.rating?.count} ratings)
      </Text>
    </CardBody>

    
  </Stack>
</Card>










   
   {/* <Box>
        <Typography>Theres your Data</Typography>
        <Button onClick={renderData} variant="contained">
          Get Single Post
        </Button>

        <Typography variant="h3">{model.title ?? ""}
        </Typography>

        <Typography className="d-block" variant="body">
          {model.price ?? ""}
        </Typography>

        <Typography className="d-block" variant="body">
          User Id : {model.price?? ""}
        </Typography>

        <Typography className="d-block" variant="body">
          User Id : {model.description?? ""}
        </Typography>

        <Typography className="d-block" variant="body">
          User Id : {model.category?? ""}
        </Typography>

        <Typography className="d-block" variant="body">
          User Id : {model.id?? ""}
        </Typography>

      </Box> */}
        </>
    )
}