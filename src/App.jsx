import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MostrarOcultar from './Hooks/Texto'
import Cronometro from './Hooks/Cronometro'
import BusquedaGitHub from './Hooks/Busqueda-GitHub'
import MensajeMontaje from './Hooks/MensajeMontaje'
import AppBut from './components/Button'
import SidebarMenu from './components/MenuLateral'
import AutoComplete_ from './components/AutoComplete'
import AttentionAlert2 from './components/avatars'


import Busqueda from './Hooks/Busqueda_useCallback'
import Factorial from './Hooks/Factorial_Numero'
import React from 'react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Avatar } from 'antd'
        



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <BusquedaGitHub />
      <br />
      <MensajeMontaje />
      <br />
      <MostrarOcultar />
      <br />
      <Cronometro />

      <br />
      <SidebarMenu />
      <br />

      <h3>1. Barra con autocompletado(PrimeReact)</h3>
      <AutoComplete_ />
      <h3>2. Alerta de error (Tailgrids)</h3>
     <AttentionAlert2 /> 
     <h3>3.Boton con iluminacion (ant.desing)</h3>
      <AppBut />
      
      


    





    </>
  )
}

export default App
