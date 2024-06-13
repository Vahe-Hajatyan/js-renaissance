import Song from "./Song";

const PlayList = ({ playList }) => {
  return (
    <>
      <h1>songs {playList.length}</h1>
      {playList.map((song) => (
        <Song key={song.id} {...song} inPlaylist={true} />
      ))}
    </>
  );
}
export default PlayList;
