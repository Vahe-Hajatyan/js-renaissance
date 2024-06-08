import React, { useState } from "react";
import "./App.css";
function App(props) {
  const [photos, setPhotos] = useState([
    {
      id: 101,
      url: "https://wallpapers.com/images/featured/prague-l8aujv2epf7ojy0r.jpg",
    },
    { id: 102, url: "https://images8.alphacoders.com/374/374028.jpg" },
    {
      id: 103,
      url: "https://images7.alphacoders.com/487/thumb-1920-487159.jpg",
    },
    {
      id: 104,
      url: "https://wallpapers.com/images/hd/prague-church-at-dawn-500ebpx4fnhzqxni.jpg",
    },
    {
      id: 105,
      url: "https://wallpapers.com/images/hd/prague-churches-and-spires-kr2ll9pmha86r9tt.jpg",
    },
    {
      id: 106,
      url: "https://c4.wallpaperflare.com/wallpaper/150/315/757/prague-czechia-czech-republic-europe-wallpaper-preview.jpg",
    },
    { id: 107, url: "https://wallpapers-hub.art/wallpaper-images/41279.jpg" },
    { id: 108, url: "https://wallpaper.dog/large/20388524.jpg" },
  ]);
  const [indx, setIndx] = useState(0);
  function handleNext() {
    setIndx(indx < photos.length - 1 ? indx + 1 : 0);
  }
  function handlePrev() {
    setIndx(indx > 0 ? indx - 1 : photos.length - 1);
  }
  function handleClick(i) {
    setIndx(i);
  }
  return (
    <div>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img id="main" src={photos[indx].url} alt="img" />
      <div>
        <button onClick={() => handlePrev()}>prev</button>
        <button onClick={() => handleNext()}>next</button>
      </div>
      <div id="timer">
        {photos.map((elem, i) => {
          let style = indx === i ? "active" : "";
          return (
            <img
              src={elem.url}
              className={style}
              onClick={() => handleClick(i)}
              alt="img"
              key={elem.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
