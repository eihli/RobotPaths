var countPaths = function(grid){
  /*
   *  With the grid as the input, count the total number of paths from the upper left to bottom right corner.
   *  Extra credit:  can you generalize this to work even if there are obstacles in the way? (obstacles will be represented by 0's)
   *  Extra extra credit:  can you make your solution work for extremely large grids  (say, greater than 100x100?)
   */

   // var row = row || 0;
   // var column = column || 0;
   // var count = 0;

   // if (row === grid.length - 1 && column == grid[0].length - 1) {
   //  return 1;
   // } else {
   //  if (row + 1 < grid.length) {
   //    count += countPaths(grid, row+1, column);
   //  }
   //  if (column + 1 < grid[0].length) {
   //    count += countPaths(grid, row, column + 1);
   //  }
   // }

   // return count;

   grid[0][0] = 1;
   console.log(grid);
   for (var row = 0; row < grid.length; row++) {
    for (var column = 0; column < grid[0].length; column++) {
      if (grid[row][column] !== undefined) continue;
      var above = row > 0 ? grid[row - 1][column] : 0;
      var left = column > 0 ? grid[row][column - 1] : 0;
      grid[row][column] = above + left;
    }
   }
   return grid[grid.length - 1][grid[0].length - 1];
};

var grid = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
var count = countPaths(grid);
console.log(count);


