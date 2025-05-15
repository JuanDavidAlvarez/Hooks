import React, { useState, useMemo } from 'react';

function calcularFactorial(n) {
  if (n <= 0) return 1;
  return n * calcularFactorial(n - 1);
}

function Factorial() {
  const [numero, setNumero] = useState(1);

  const resultado = useMemo(() => calcularFactorial(numero), [numero]);

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />
      <p>Factorial: {resultado}</p>
    </div>
  );
}

export default Factorial;