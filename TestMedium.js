process.stdin.resume();
process.stdin.setEncoding('utf8');

//funtion to read line by line
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

//Declare variables used
firstLine = 0;
columns = 5;
rows = 5;
generateTime = 100;
numLine = 0;
numTest = 0;
currTest = 0;
innerGrid = [];
outerGrid = [];

rl.on('line', function(line){
    //Check number of tests on first line
    if(firstLine == 0){
        numTest = parseInt(line);
        if(!Number.isInteger(numTest)){
            process.exit();
        }
        if(numTest > 100){
            process.exit();
        }
        firstLine++;
    }else{
        //Split each number up into an array e.g [0, 0, 0, 0, 0]
        innerGrid.push(line.split(""));
        numLine++;
        //Check if reach required number of rows
        if(numLine == rows){
            //Nested array to contain all my tests
            outerGrid.push(innerGrid);
            //Reset current test
            innerGrid = [];
            numLine = 0;
            currTest++;
        }
    }

    //When all test are stored into array run
    if(currTest == numTest){
        for(u=0; u<numTest; u++){
            //Generate Game of Life output
            newGrid = generate(outerGrid[u]);
            //Check for life cells in grid
            finalAnswer = checkLive(newGrid);
            if(finalAnswer){
                process.stdout.write("YES")
                if(u < numTest-1){
                    process.stdout.write("\n")
                }
            }else{
                process.stdout.write("NO")
                if(u < numTest-1){
                    process.stdout.write("\n")
                }
            }
            newGrid = [];
        }
        process.exit();
    }
})

function generate(grid){
    //Loop to set time frame
    for(w=0; w<generateTime; w++){
        //Generate empty future grid
        futureGrid = [];
        for(i=0; i<rows; i++){
            futureGrid[i] = [];
        }
        //Loop through each spot of the grid
        for(x=0; x<columns; x++){
            for(y=0; y<rows; y++){
                //Add up all life cells in a 3x3 grid
                neighbours = 0;
                for(i = -1; i<=1; i++){
                    for(j=-1; j<=1; j++){
                        neighbours += parseInt(grid[(x+i+columns)%columns][(y+j+rows)%rows]);
                    }
                }
                //Subtract current cell's state
                neighbours -= grid[x][y]
                //Game of life rules
                if((grid[x][y] == 1)&&(neighbours < 2)){
                    futureGrid[x][y] = 0;
                }else if((grid[x][y] == 1)&&(neighbours > 3)){
                    futureGrid[x][y] = 0;
                }else if((grid[x][y] == 0)&&(neighbours == 3)){
                    futureGrid[x][y] = 1;
                }else{
                    futureGrid[x][y] = grid[x][y];
                }
            }
        }
        grid = futureGrid
    }
    return grid;
}

function checkLive(grid){
    positiveLive = false;
    //Loop through each spot of the grid
    for(d=0; d<columns; d++){
        for(e=0; e<rows; e++){
            //Check if there is a life cell
            if(parseInt(grid[d][e]) == 1){
                positiveLive = true;
            }
        }
    }
    return positiveLive;
}

process.stdin.on('end', function() {
//   console.log("");
});

/*
Test Sets

1
00000
11001
00000
00000
00000

1
00000
01000
00000
00000
00001

2
00000
11001
00000
00000
00000
00000
01000
00000
00000
00001

4
00000
11001
00000
00000
00000
00000
01000
00000
00000
00001
00000
01000
00000
00000
00001
00000
11001
00000
00000
00000
*/