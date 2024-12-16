import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import Main from './Layouts/Main';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Main/> 
     </BrowserRouter>
  </StrictMode>,
)
