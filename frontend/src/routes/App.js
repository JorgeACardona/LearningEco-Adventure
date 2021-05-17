import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Inicio from '../Pages/Inicio';
import Iniciar from '../Pages/Iniciar';
import Registro from '../Pages/Registro'
import Contraseña from '../Pages/Contraseña'
import Clases from '../Pages/Clases'
import Planilla from '../Pages/Planilla'
import Dudas from "../Pages/Dudas"
import Perfil from "../Pages/Perfil"
import Informacion from "../Pages/Informacion"
import Contacto from "../Pages/Contacto"
import Pnt from "../Pages/Pnt"
import Pnm from "../Pages/Pnm"
import Pnc from "../Pages/Pnc"
import Respuesta from "../Pages/Respuesta"

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
             <Switch> 
               <Route exact path="/" component={Inicio} />
               <Route exact path="/iniciar" component={Iniciar} />
               <Route exact path="/registro"  component={Registro} />
               <Route exact path="/contraseña" component={Contraseña} />
               <Route exact path="/clases" component={Clases} />
               <Route exact path="/planilla" component={Planilla}/>
               <Route exact path= "/Inquietudes" component={Dudas}/>
               <Route exact path= "/Perfil" component={Perfil}/>
               <Route exact path= "/Informacion" component={Informacion}/>
               <Route exact path= "/contacto" component={Contacto}/>
               <Route exact path= "/pnt" component={Pnt}/>
               <Route exact path= "/pnm" component={Pnm}/>
               <Route exact path= "/pnc" component={Pnc}/>
               <Route exact path= "/cuestionario" component={Respuesta}/>
             </Switch>
            </BrowserRouter>
        );
    }
}

export default App;