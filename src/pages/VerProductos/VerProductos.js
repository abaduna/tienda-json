import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../confic/firebase';
import {
  getDocs,
  collection,

  deleteDoc,
} from "firebase/firestore";
import { CaritoComprarContex } from '../../contexts/carito';
import { IconName } from "react-icons/fa"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CaritoDeComprasCOmponet from '../../componets/CaritoDeComprasCOmponet';

function VerProductos() {
  const [productos, setProductos] = useState([]);
  const { agregarCarritoDeCompras} = useContext(CaritoComprarContex);

  const mostrarData = async () => {
    const productosCollectionRef = collection(db, "productos");
    try {
      const data = await getDocs(productosCollectionRef);
      setProductos(data.docs.map((doc) => doc.data()));
    } catch (error) {
      console.error(`mensaje de error ${error}`);
    }
  };

  useEffect(() => {
    mostrarData();
  }, []);

  const agregarACarrito = (product) => {
    agregarCarritoDeCompras(product)
  };

  return (
    <><CaritoDeComprasCOmponet></CaritoDeComprasCOmponet>

  <div>

    <div className='productos-grid' >
      {productos.map((product) => (
    <Card  sx={{ maxWidth: 500 }}className='productos-grid-item  '>
      <CardMedia
        sx={{ height:450 }}
        image={product.url}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.descripcion}
        </Typography>
        <Typography variant="body3" color="text.primary">
        {product.precio}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={() => agregarACarrito(product)}>Agregar a carrito</Button>
      
      </CardActions>
    </Card>        
      ))}
    </div>    

  </div>    
    </>


  );
}

export default VerProductos;