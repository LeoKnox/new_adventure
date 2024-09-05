let dungeonData = [{ id: 1, name: "entry", width: 5, height: 5, x: 5, y: 5 }];

export const allRooms = () => {
  return dungeonData;
};

export const addRoom = (name, width, height, x, y) => {
  dungeonData = [
    ...dungeonData,
    { id: 2, name: name, width: width, height: height, x: x, y: y },
  ];
  //console.log(JSON.stringify(dungeonData));
  return dungeonData;
};

export const changeRoom = (newData = "chiiro") => {
  dungeonData = [{ id: 1, name: "aka", width: 5, height: 5, x: 5, y: 5 }];
  //console.log(JSON.stringify(dungeonData));
  return dungeonData;
};
