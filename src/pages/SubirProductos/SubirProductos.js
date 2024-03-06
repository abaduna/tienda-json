import React, { useState } from 'react'
import { db } from '../../confic/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { storage } from '../../confic/firebase'
import  {ref,uploadBytes,listAll,getDownloadURL } from "firebase/storage" 
import { v4} from "uuid"
import { auth } from '../../confic/firebase'
import Alert from '@mui/material/Alert';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
function SubirProductos() {
  const navigate = useNavigate();
    const [title,SetTitle]= useState("")
    const [descripcion,SetDescripcion]= useState("")
    const [precio,SetPrecion]= useState("")
    const [url,SetUrl]= useState("")
    const [id,SetId]= useState("")
    const [ShowPoster,SetshowPoster]= useState(false)
    // const [producto,SetProductos] = useState({})
    const [imageUpLoading,setImageUpLoading] = useState(null)

    const anteiticacion =()=>{
      const user = auth.currentUser;
      if (!user) navigate("/");
    };
    
    const handlerMandaData = async (url) => {
      SetshowPoster(true)
        const productosCollectionRef = collection(db, "productos");
        console.log(productosCollectionRef);
        console.log(title);
        console.log(descripcion);

        console.log("fyuera de if")

          SetshowPoster(true)
          
            console.log(`entro el if`);
        try {
          
          
          await addDoc(productosCollectionRef, {
            url,
            title,
            descripcion,
            precio,
  
        })
          console.log("Documento subido");
          console.log(url);
        } catch (error) {
          console.error(`catch`);
          console.error("Error al subir el documento:", error);
        }             
          
          empty()


         
        
 

      };
      const conseguiURLdeLaImagen= async()=>{
        SetshowPoster(true)
        console.log(`conseguiURLdeLaImagen`);
        const imageRef = ref(storage, `productos/${imageUpLoading.name + v4()}`)
        await uploadBytes(imageRef,imageUpLoading).then((snaphost)=>{
            getDownloadURL(snaphost.ref).then((url)=>{
                SetUrl(url)
                console.log(url);
            })
            
          })
        await  handlerMandaData()
      }
      const empty =()=>{
        setImageUpLoading(null);
  SetUrl("");
  SetDescripcion("");
  SetTitle("");
  SetId(null);
  SetPrecion("");  
  SetshowPoster(false)
 }
      const showPoster=()=>{

      }
      const handlerMandeDataTotal=()=>{
        SetshowPoster(true)
        conseguiURLdeLaImagen()
        
        
      }
  return (
    <>
     <h1>Subir Producto</h1>
    <label>Titulo </label> 
    {ShowPoster && <Alert severity="success">Subiendo</Alert>}
    
    
    <Input
    placeholder='Titulo'
    value={title}
    onChange={(e)=>SetTitle(e.target.value)}
    type='string' 
    className='anchoDePantalla'></Input>
    <Input
    placeholder='Descripcion...'
    value={descripcion}
    onChange={(e)=>SetDescripcion(e.target.value)} 
    type='string'
    className='anchoDePantalla'></Input>
    <input type="file" className='anchoDePantalla' onChange={(e)=> setImageUpLoading(e.target.files[0])} />
    <Input
     placeholder='Precio'
     value={precio}
     onChange={(e)=>SetPrecion(e.target.value)} 
     type='number' 
     className='anchoDePantalla'></Input> 
    <Button  onClick={handlerMandeDataTotal } className='anchoDePantalla' variant="contained">Contained</Button>
    </>
  )
} 

export default SubirProductos