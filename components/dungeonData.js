import { DemonSVG } from "./svgData";

let dungeonData = [
  {
    id: 1,
    name: "entry",
    width: 9,
    height: 5,
    x: 5,
    y: 5,
    monsters: {
      [`2:4`]: 1,
      [`3:5`]: 1,
    },
  },
  {
    id: 2,
    name: "entry",
    width: 7,
    height: 8,
    x: 6,
    y: 6,
    monsters: {
      [`1:4`]: 1,
      [`1:5`]: 1,
    },
  },
];

export const deleteMonsterDD = (monsterId, roomId) => {
  console.log("delete monster");
  delete dungeonData[roomId - 1].monsters[monsterId];
  console.log(dungeonData);
};

export const addMonsterDD = (roomId, newMonsterID, newMonsterValue) => {
  console.log("add monster");
  dungeonData[roomId - 1].monsters[`${newMonsterID[1]}:${newMonsterID[0]}`] =
    newMonsterValue;
};

export const editMonsterDD = (value, key, roomId) => {
  console.log("edit Monster");
  let newId = `${value[0].split(":")[0]}:${value[0].split(":")[1]}`;
  //console.log(dungeonData.monsters[key]);
  let temp = { ...dungeonData[1] };
  let tempMob = { ...temp.monsters };
  //console.log(dungeonData[roomId - 1].monsters[key]);
  delete dungeonData[roomId].monsters[key];
  tempMob[newId] = value[1];
  dungeonData[1].monsters = tempMob;
};

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
