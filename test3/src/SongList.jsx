import Song from "./Song";

const SongList = ({ items, setItems, setPlayList, playList }) => {
  return (
    <>
      <h3>song list</h3>
      {items.map((song) => (
        <Song
          key={song.id}
          {...song}
          setItems={setItems}
          setPlayList={setPlayList}
          playList={playList}
        />
      ))}
    </>
  );
}
export default SongList;
