import React, { useContext } from "react";
import Datos from "../../Data.json";
import { useParams } from "react-router-dom";
import "./Datails.css"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CaritoDeComprasCOmponet from "../../componets/CaritoDeComprasCOmponet";
import { CaritoComprarContex } from "../../contexts/carito";
const Datails = () => {
  const { agregarCarritoDeCompras } = useContext(CaritoComprarContex);
  const { id } = useParams();
  console.log(id);
  const dataItem = Datos[id];
  const handlerCaritoClick = (dataItem) => {
    agregarCarritoDeCompras(dataItem);
  };
  return (
    <>
      <CaritoDeComprasCOmponet />
      <div className="container">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {dataItem.descripcion}
            </Typography>
            <Typography variant="h5" component="div">
              {dataItem.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {dataItem.precis}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handlerCaritoClick(dataItem)}>
              Comprar
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Datails;
