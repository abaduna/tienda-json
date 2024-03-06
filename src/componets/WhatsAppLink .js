import React, { useState } from 'react';

const WhatsAppLink = ({ caritoDeCompras}) => {
    const [caritoTitle,setCaritoTitle] = useState([])
    const [totalPrecio, setTotalPrecio] = useState(0);
  // Formatear el número de teléfono eliminando caracteres no numéricos
  const formattedPhoneNumber = 5493413592493
  const total = caritoDeCompras.reduce((acc, producto) => acc + parseFloat(producto.precio), 0);
  

  const titulos = caritoDeCompras.map(producto => producto.title);
    console.log(titulos);
  const carritoTitleString = titulos.join(','); 
  console.log(carritoTitleString);

   

   
  const mensaje = `Hola buen Dia quiro comprar\n
  ____________\n
  ${carritoTitleString}\n
  Precio total: ${total}\n`
  
  
  const whatsappLink = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(mensaje)}`;
  return (
    <a href={whatsappLink} className='button-carrito' target="_blank" rel="noopener noreferrer">Finalizar compra </a>
  )
}

export default WhatsAppLink;