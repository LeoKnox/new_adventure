×
←→1 of 2 errors on the page
TypeError
mapState[index] is not iterable
modifyTable
/src/components/DrawMap.js:123:28
  120 | let newGrid = [...mapState];
  121 | let newRow = [];
  122 | for (index in objMove) {
> 123 |   newRow = [...mapState[index]];
      |                        ^
  124 |   objMove[index].map((child) => {
  125 |     newRow[child.oldx] = floorSVG();
  126 |     newRow[child.newx] = child.tile;
View compiled
eval
/src/components/DrawMap.js:98:6
   95 |        ),
   96 |      },
   97 |    ]),
>  98 |      modifyTable(mobs);
      |     ^
   99 |  }, []);
  100 | 
  101 |  const moveMob = () => {
View compiled
▶ 11 stack frames were collapsed.
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error.
This error overlay is powered by `react-error-overlay` used in `create-react-app`.
