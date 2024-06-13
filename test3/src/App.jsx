import { useState } from "react";
import Album from "./Album";
import "./App.css";
import Song from "./Song";
import SongList from "./SongList";
import PlayList from "./PlayList";

const App = () => {
  const [playList, setPlayList] = useState([]);
  const [songs, setSong] = useState([
    {
      id: 1,
      name: "song1",
      artist: "artist1",
      duraction: 5,
    },
    {
      id: 2,
      name: "song2",
      artist: "artist2",
      duraction: 5,
    },
    {
      id: 3,
      name: "song3",
      artist: "artist3",
      duraction: 5,
    },
  ]);
  return (
    <>
      <h1>hello props</h1>
      <SongList
        items={songs}
        setItems={setSong}
        playList={playList}
        setPlayList={setPlayList}
      />
      <PlayList playList={playList} />
    </>
  );
}

export default App;
