import React, { FormEvent } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Input } from './components/Input'

import './global.css'

interface Usuario {
  cep: string
  price: number
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [e.currentTarget.name]: e.currentTarget.value 
    })
  }, [usuario])

  return (
    <div className="container">
      <label>CEP</label>
     <Input mask="cep" name="cep" placeholder="99999-999" onChange={handleChange} />
     
     <label>Currency</label>
     <Input mask="currency" prefix="R$" name="currency" onChange={handleChange} />

    </div>
  );
}

export default App;
