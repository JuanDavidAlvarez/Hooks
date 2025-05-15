import React, { useState, useCallback } from 'react';

const nombres = ['Ana', 'Luis', 'Carlos', 'Lucía', 'Mario'];

function Busqueda() {
  const [filtro, setFiltro] = useState('');

  const buscar = useCallback(() => {
    return nombres.filter((nombre) =>
      nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [filtro]);

  return (
    <div>
      <input
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Buscar nombre"
      />
      <ul>
        {buscar().map((nombre, idx) => (
          <li key={idx}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Busqueda;