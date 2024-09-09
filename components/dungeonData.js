let dungeonData = [{ id: 1, name: "entry", width: 5, height: 5, x: 5, y: 5 }];

export const allRooms = () => {
  return dungeonData;
};

export const addRoom = (name, width, height, x, y) => {
  console.log(dungeonData[dungeonData.length - 1].id);
  newId = dungeonData[dungeonData.length - 1].id + 1;
  dungeonData = [
    ...dungeonData,
    { id: newId, name: name, width: width, height: height, x: x, y: y },
  ];
  //console.log(JSON.stringify(dungeonData));
  return dungeonData;
};

export const changeRoom = (newData = "chiiro") => {
  //dungeonData = [{ id: 1, name: "aka", width: 5, height: 5, x: 5, y: 5 }];
  dungeonData = dungeonData.map((room) => (room.id == 1 ? newData : room));
  //console.log(JSON.stringify(dungeonData));
  return dungeonData;
};

export const singleRoom = (id = 1) => {
  console.log(dungeonData.find((room) => room.id === 2));
  return dungeonData.find((room) => room.id == id);
};
