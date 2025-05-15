// ComponenteHijo.js
import React from 'react';
import { useColor } from './ColorContext';

function ComponenteHijo() {
  const color = useColor();
  return <div style={{ color }}>Soy un texto de color {color}</div>;
}

export default ComponenteHijo;
jsx
Copiar
Editar
