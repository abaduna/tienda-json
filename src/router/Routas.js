import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";


import VerProductos from "../pages/VerProductos/VerProductos"
import Datails from "../pages/Datails/Datails";

// soluciones 1) hacer un renderizado condicional 2) armar un layout 3)Armar un Hoc 4) Armar un layout en una ruta privada
  const RoutesPrincial =()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<VerProductos/>}/>
                <Route path="/Datalles/:id" element={<Datails/>}/>
                
                <Route
                path="*"
                element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
  }

export default RoutesPrincial