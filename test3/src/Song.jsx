function Song(props) {
  function deleteSong() {
    if (props.inPlaylist) {
      props.setPlayList((items) =>
        items.filter((item) => item.id !== props.id)
      );
    } else {
      props.setItems((items) => items.filter((item) => item.id !== props.id));
    }
  }
  function moveSong() {
    let findItem = props.playList.some((item) => item.id === props.id);
    if (!findItem) {
      props.setPlayList((items) => {
        return [...items, props];
      });
    }
  }
  return (
    <div className="song">
      <h1>{props.name}</h1>
      <p>{props.artist}</p>
      <p>{props.duraction}</p>
      <button onClick={() => deleteSong()}>delete</button>
      {!props.inPlaylist && <button onClick={() => moveSong()}>move</button>}
    </div>
  );
}
export default Song;
