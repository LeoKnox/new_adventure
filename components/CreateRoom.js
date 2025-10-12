export default CreateRoom = () => {
  const height = 2;
  const width = 2;
  const tempList = Array.from({ length: 2 }, (v, i) => {
    return Array.from({ length: 3 }, () => {
      return <p>i</p>;
    });
  });
  console.log("create room new");
  console.log(tempList);
  return (
    <>
      <h1>create room map</h1>
      {[...tempList]}
    </>
  );
};
