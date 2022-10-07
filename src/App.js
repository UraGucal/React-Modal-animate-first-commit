import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
 const [open, setOpen] =  React.useState(false);
 const modalTittle = 'Мотозапчасти';
  return (
    <div className="App">
      <header className="App-header"> 
        <div  className="container bg-light">
          <div className={`header-intro ${open ? 'show' : ''}`}>
            <Button onClick={ ()=> setOpen(true) } className="btn-danger mb-3">Каталог товаров</Button>
            {open &&(
              <div className="overlay">
                <div className="Vmodal">
                  <div className="Vmodal-header">
                    <h1>{modalTittle}</h1>
                    <img onClick={ ()=> setOpen(false)} alt="lan" src="https://img.icons8.com/color/48/000000/close-window.png"/>
                  </div>
                </div>
              </div>
            )}
          </div> 
        </div>
      </header>
    </div>
  );
}

export default App;
