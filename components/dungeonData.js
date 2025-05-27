let dungeonData = [
  {
    id: 1,
    name: "entry",
    width: 9,
    height: 5,
    x: 5,
    y: 5,
  },
  {
    id: 2,
    name: "entry",
    width: 7,
    height: 8,
    x: 6,
    y: 6,
  },
];

export const allRooms = () => {
  return dungeonData;
};

export const addRoom = (name, width, height, x, y) => {
  newId = dungeonData.length
    ? dungeonData[dungeonData.length - 1].id + 1
    : (newId = 1);
  dungeonData = [
    ...dungeonData,
    { id: newId, name: name, width: width, height: height, x: x, y: y },
  ];
  return dungeonData;
};

export const changeRoom = (newData = "chiiro") => {
  dungeonData = dungeonData.map((room) => (room.id == 1 ? newData : room));
  return dungeonData;
};

export const deleteRoom = (id = 1) => {
  dungeonData = dungeonData.filter((room) => room.id != id);
  return dungeonData;
};
export const singleRoom = (id = 1) => {
  return dungeonData.find((room) => room.id == id);
};
