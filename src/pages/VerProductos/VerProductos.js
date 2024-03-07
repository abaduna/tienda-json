import React, { useContext, useEffect, useState } from "react";
import { db } from "../../confic/firebase";
import { Link } from "react-router-dom";
import { CaritoComprarContex } from "../../contexts/carito";
import { IconName } from "react-icons/fa";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CaritoDeComprasCOmponet from "../../componets/CaritoDeComprasCOmponet";
import Datos from "./../../Data.json";
function VerProductos() {
  const [productos, setProductos] = useState([]);
  const { agregarCarritoDeCompras } = useContext(CaritoComprarContex);

  useEffect(() => {
    setProductos(Datos);
  }, []);

  const agregarACarrito = (product) => {
    agregarCarritoDeCompras(product);
  };

  return (
    <>
      <CaritoDeComprasCOmponet></CaritoDeComprasCOmponet>

      <div>
        <div className="productos-grid">
          {productos.map((product) => (
            <Card sx={{ maxWidth: 500 }} className="productos-grid-item  ">
              <CardMedia
                sx={{ height: 450 }}
                image={product.UrlImage}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>

                <Typography variant="body3" color="text.primary">
                  {product.precis}
                </Typography><br/> 
                <Typography variant="body3" color="text.primary">
                  <Link to={`/Datalles/${product.id}`}>Ver En detalle</Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => agregarACarrito(product)}>
                  Agregar a carrito
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default VerProductos;
