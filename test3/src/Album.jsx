function Album({ name, year, children }) {
  return (
    <div className="Album">
      <h1>{name}</h1>
      <p>dursa eke {year}</p>
      {children}
    </div>
  );
}
export default Album;
