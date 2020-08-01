import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [video, setVideo] = useState([])

  useEffect(() => {

    fetch("/api/videos").then(res => res.json()).then(res => {
      setVideo(res)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {video.map((id, index) => {
          return (<a key={index} href={`https://youtube.com/watch?v=${id}`}>
            <img src={`https://img.youtube.com/vi/${id}/0.jpg`} />
          </a>)
        })}
      </header>
    </div>
  );
}

export default App;
