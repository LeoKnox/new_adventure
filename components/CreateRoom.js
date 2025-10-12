export default CreateRoom = () => {
  const height = 2;
  const width = 2;
  const tempList = (Array.from({ length: 2 }), () => <p>"i"</p>);

  return (
    <>
      <h1>create room map</h1>
      <table>{tempList}</table>
    </>
  );
};
