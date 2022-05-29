import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setshort] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/urls", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        longUrl: url
      })
    });
    const data = await response.json();
    console.log(data);
    setshort(data.shortUrl);
  }
  const handleChange = (e) => {
    setUrl(e.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <input type="submit" value="shorten"></input>
      </form>
      <div className="shorten-class">
        {shortenUrl ? (
          <div>{`${shortenUrl}`}</div>) : null}
      </div>
    </div>
  );
}

export default App;
