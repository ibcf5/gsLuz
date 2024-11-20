import React, { useState } from 'react';
import { Styles } from '../styles/DispositivosStyles'; // Atualizei o nome do arquivo para DispositivosStyles

function Dispositivos() { // Atualizei o nome do componente para Dispositivos
  const [deviceName, setDeviceName] = useState('');
  const [devices, setDevices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editingValue, setEditingValue] = useState('');

  const handleAddDevice = (event) => {
    event.preventDefault();
    if (deviceName.trim()) {
      if (!devices.includes(deviceName)) {
        setDevices([...devices, deviceName]);
        setDeviceName('');
      } else {
        alert('Dispositivo já está na lista!');
      }
    } else {
      alert('O nome do dispositivo não pode estar vazio!');
    }
  };

  const handleEditDevice = (index) => {
    setEditingIndex(index); 
    setEditingValue(devices[index]); 
  };

  const handleSaveEdit = (index) => {
    const updatedDevices = [...devices];
    updatedDevices[index] = editingValue; 
    setDevices(updatedDevices);
    setEditingIndex(null); 
    setEditingValue('');
  };

  const handleCancelEdit = () => {
    setEditingIndex(null); 
    setEditingValue('');
  };

  return (
    <Styles>
      <h1>Cadastre um dispositivo</h1>
      <form onSubmit={handleAddDevice}>
        <input
          type="text"
          placeholder="ex: Smart TV..."
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
        <button type="submit">Cadastrar dispositivo</button>
      </form>
      <div className="device-list">
        <h3>Dispositivos IoT:</h3>
        {devices.length === 0 ? (
          <p>Nenhum dispositivo cadastrado ainda.</p>
        ) : (
          devices.map((device, index) => (
            <div className="device-item" key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(index)}>Salvar</button>
                  <button onClick={handleCancelEdit}>Cancelar</button>
                </>
              ) : (
                <>
                  {device}
                  <button className="edit-button" onClick={() => handleEditDevice(index)}>Editar</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </Styles>
  );
}

export default Dispositivos; // Atualizei o nome do componente para Dispositivos
