import React, { useRef, useEffect } from 'react';

function InputAutoFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Escribe algo..." />;
}

export default InputAutoFocus;