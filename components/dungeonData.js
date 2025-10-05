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

export const addRoom = (newRoom) => {
  console.log("add room");
  /*newId = dungeonData.length
    ? dungeonData[dungeonData.length - 1].id + 1
    : (newId = 1);
  dungeonData = [
    ...dungeonData,
    { id: newId, name: name, width: width, height: height, x: x, y: y },
  ];*/
  let temp = { ...newRoom, id: 3 };
  dungeonData.push(temp);
  console.log(dungeonData);
};

export const changeRoomDD = (newRoom, newId) => {
  console.log("change room dd");
  console.log(newId);
  console.log(newRoom);
  dungeonData[newId - 1] = newRoom;
  console.log(dungeonData);
};

export const deleteMonsterDD = (monsterId, roomId) => {
  console.log("delete monster");
  delete dungeonData[roomId - 1].monsters[monsterId];
};

export const addMonsterDD = (roomId, newMonsterID, mobSelect) => {
  console.log("add monster");
  dungeonData[roomId - 1].monsters[`${newMonsterID[1]}:${newMonsterID[0]}`] =
    mobSelect;
};

export const editMonsterDD = (mobValues, roomId) => {
  console.log("edit Monster");
  let temp = Object.fromEntries(mobValues);
  dungeonData[roomId - 1].monsters = temp;
};

export const allRooms = () => {
  console.log("all rooms");
  console.log(dungeonData);
  return dungeonData;
};

export const changeRoom = (newData = "chiiro") => {
  dungeonData = dungeonData.map((room) => (room.id == 1 ? newData : room));
  return dungeonData;
};

export const deleteRoom = (id = 1) => {
  console.log("delete room");
  dungeonData = dungeonData.filter((room) => room.id != id);
  return dungeonData;
};
export const singleRoom = (id) => {
  return dungeonData.find((room) => room.id == id);
};
