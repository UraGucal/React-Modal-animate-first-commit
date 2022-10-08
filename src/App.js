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
        <div className="container bg-light">
          <div className="App-intro">
            <Button onMouseEnter={ ()=> setOpen(true) } className="btn-danger mb-3">Каталог товаров</Button>
            <div className={`header-intro ${open ? 'show' : ''}`}>
              {open &&(
                <div className="overlay">
                  <div className="Vmodal">
                    <div className="Vmodal-header">
                      <h1>{modalTittle}</h1>
                      <img className="modalCloseImage" onClick={ ()=> setOpen(false)} alt="lan" src="https://img.icons8.com/color/48/000000/close-window.png"/>
                    </div>
                    <div className="modal-content">
                      <img src="https://cdn.powergo.ca/media/catalog/2022/27/0ebc062a16ee408c8dfcefd840de2f77_site/cfmoto-125-st-papio-lemon-green-2022-0.jpg" alt="" className="content-background" />
                      <p className="content-subtittle">Купить запчасти на скутер, мопед или мотоцикл</p>
                      <span className="modal-content_phone">Тел. (066)-6-228-355</span>
                    </div>
                  </div>
                </div>
              )}
            </div> 
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
