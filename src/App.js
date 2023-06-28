import React, { useEffect, useState } from 'react';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeFetch, setActiveFetch] = useState([
    {
      name: 'Kacper',
      age: 24,
      info: 'Junior',
    }
  ]);

 
  const saveDataToServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activeFetch),
      });

      if (response.ok) {
        console.log('Data saved to server successfully!');
      } else {
        console.error('Failed to save data to server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const dodajUsera = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const info = document.getElementById('info').value;

    if (name === '' || age === '' || info === '') return null;

    const newUser = {
      name: name,
      age: age,
      info: info,
    };
    const nowyFetch = [...activeFetch, newUser];
    setActiveFetch(nowyFetch);

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('info').value = '';
  };
  const deleteDataFromServer = async (index) => {
	try {
	  const response = await fetch(`http://localhost:3001/api/data/${index}`, {
		method: 'DELETE',
	  });
  
	  if (response.ok) {
		console.log('Data removed from server successfully!');
	  } else {
		console.error('Failed to remove data from server.');
	  }
	} catch (error) {
	  console.error('Error:', error);
	}
  };
  

  const handleClick = (componentNumber) => {
    setActiveComponent(componentNumber);
  };

  return (
    <div className='container'>
      <div className='info'>
        {activeFetch.map((comp, idx) => {
          return (
            <p key={idx}>
              Twoj wiek to {comp.age} i nazywasz sie {comp.name}
            </p>
          );
        })}
      </div>
      <div className={`component ${activeComponent === 1 ? 'component-active' : ''}`}>
        {activeComponent === 1 && <p>You showed component-active1</p>}
      </div>
      <div className={`component ${activeComponent === 2 ? 'component-active' : ''}`}>
        {activeComponent === 2 && <p>You showed component-active2</p>}
      </div>
      <div className={`component ${activeComponent === 3 ? 'component-active' : ''}`}>
        {activeComponent === 3 && <p>You showed component-active3</p>}
      </div>
      <div className={`component ${activeComponent === 4 ? 'component-active' : ''}`}>
        {activeComponent === 4 && <p>You showed component-active4</p>}
      </div>
      <button onClick={() => handleClick(1)}>Kliknij</button>
      <button onClick={() => handleClick(2)}>Kliknij2</button>
      <button onClick={() => handleClick(3)}>Kliknij3</button>
      <button onClick={() => handleClick(4)}>Kliknij4</button>
      <form onSubmit={dodajUsera}>
        Dodaj Usera do obiektu
        <br />
        nazwa
        <input placeholder='nazwa' type='text' id='name' />
        <br />
        <br />
        age
        <input placeholder='age' type='number' id='age' />
        <br />
        <br />
        Info
        <input placeholder='info' type='text' id='info' />
        <br />
        <br />

    

      <button onClick={saveDataToServer}>Zapisz dane na serwerze</button>
      <button onClick={deleteDataFromServer}>usun dane na serwerze</button>
	  </form>
    </div>
  );
};

export default App;
