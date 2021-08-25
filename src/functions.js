import React, { useState, useEffect } from 'react';

function App() {
    const handleSubmit = event => {
      event.preventDefault();
      alert ('You have successfully submitted this bug')
    }

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
}