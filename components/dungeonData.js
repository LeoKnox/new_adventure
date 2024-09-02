let dungeonData = [{ id: 1, name: "entry", width: 5, height: 5, x: 5, y: 5 }];

export const allRooms = () => {
  return dungeonData;
};

export const addRoom = () => {
  dungeonData = [
    ...dungeonData,
    { id: 2, name: "chiiro", width: 5, height: 5, x: 5, y: 5 },
  ];
  return dungeonData;
};

export const changeRoom = (newData = "chiiro") => {
  dungeonData = [{ id: 1, name: "aka", width: 5, height: 5, x: 5, y: 5 }];
  console.log(JSON.stringify(dungeonData));
  return dungeonData;
};
