let playData = [{ charId: 1, x: 1, y: 1 }];

export const charLocation = (id=1) => {
    return {charX: playData[0].x, charY: playData[0].y}
}
