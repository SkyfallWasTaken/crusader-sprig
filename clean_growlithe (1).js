/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const lgSquare = "g"
const dgSquare = "G"
const ball = "b"
const wall = "~"
const topbarBackground = "/"
const hole = "@"
const powerIndicatorLine = "{"
const powerIndicatorArrowLeft = "<"
const powerIndicatorArrowRight = ">"

const ballStartingPositions = [
  [0, 0],
  [2, 6],
  [2, 6]
]
const holeStartingPositions = [
  [0, 0],
  [12, 6],
  [2, 6]
]

setLegend(
  [topbarBackground, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [ball, bitmap`
....11111111....
...1222222221...
..122222222221..
.12222222222221.
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
1222222222222221
.12222222222221.
..122222222221..
...1222222221...
....11111111....`],
  [hole, bitmap`
....11111111....
...1LLLLLLLL1...
..1LLLLLLLLLL1..
.1LLLLLLLLLLLL1.
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
.1LLLLLLLLLLLL1.
..1LLLLLLLLLL1..
...1LLLLLLLL1...
....11111111....`],
  [wall, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],

  [powerIndicatorLine, bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999`],
  [powerIndicatorArrowLeft, bitmap`
...............9
.............999
...........99999
.........9999999
.......999999999
.....99999999999
...9999999999999
.999999999999999
9999999999999999
..99999999999999
....999999999999
......9999999999
........99999999
..........999999
............9999
..............99`],
  [powerIndicatorArrowRight, bitmap`
9...............
999.............
99999...........
9999999.........
999999999.......
99999999999.....
9999999999999...
999999999999999.
9999999999999999
99999999999999..
999999999999....
9999999999......
99999999........
999999..........
9999............
99..............`],

  [lgSquare, bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`],
  [dgSquare, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`],
)

setSolids([])

let levelCounter = 0 // Instructions
let isTutorial = true
const levels = [
  // Instructions
  {
    map: map`
///////////////
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG
GGGGGGGGGGGGGGG`,
    handler: () => {
      addText("Instructions:", {
        color: color`2`
      })
      addText("a and d to adjust", {
        color: color`2`,
        x: 1,
        y: 2
      })
      addText("power", {
        color: color`2`,
        x: 1,
        y: 3
      })
      addText("k to shoot", {
        color: color`2`,
        x: 1,
        y: 5
      })

      addText("press k to start!", {
        color: color`2`,
        x: 1,
        y: 7
      })
    }
  },

  // Level 1
  {
    map: map`
///////////////
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg`
  },

  {
    map: map`
///////////////
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg
GgGgGg~gGgGgGgG
gGgGgG~GgGgGgGg
GgGgGg~gGgGgGgG
gGgGgG~GgGgGgGg
GgGgGg~gGgGgGgG
gGgGgG~GgG~~~~g
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg
GgGgGgGgGgGgGgG
gGgGgGgGgGgGgGg`
  }
]

// In milliseconds
let initialGameState = {
  level: 0,
  timeTaken: 0,
  timerInterval: null,

  power: 0,
  direction: null
}
let gameState = initialGameState
const MIN_POWER = -9
const MAX_POWER = 9

loadLevel(gameState.level)

onInput("a", () => {
  if (isTutorial) return;
  if (gameState.direction != "right") {
    gameState.direction = "right"
    gameState.power = 1
    return
  }
  if (gameState.power + 1 <= MAX_POWER) {
    gameState.power += 1
  }
})

onInput("d", () => {
  if (isTutorial) return;
  if (gameState.direction != "left") {
    gameState.direction = "left"
    gameState.power = -1
    return
  }
  if (gameState.power + 1 >= MIN_POWER) {
    gameState.power -= 1
  }
})

onInput("k", () => {
  // If this is tutorial level, go to level 1
  if (isTutorial) {
    return loadLevel(1)
  }
  getFirst(ball).x += gameState.power
  gameState.power = 0
})

afterInput(() => {
  if (isTutorial) return;
  
  let holeTile = getFirst(hole)
  let ballTile = getFirst(ball)
  if (holeTile && ballTile && holeTile.x === ballTile.x && holeTile.y === ballTile.y) {
    return loadLevel(levelCounter + 1)
  }
  updateHud()
})

function updateHud() {
  if (isTutorial) return;
  
  const powerIndicatorStartX = 2
  const powerIndicatorStartY = 11
  const powerArrowX = 7
  const powerArrowY = powerIndicatorStartY + 1

  // Remove previous stuff
  clearText()
  getAll(powerIndicatorLine).forEach((indicator) => indicator.remove())
  removeSpriteFromTile(powerArrowX, powerArrowY, powerIndicatorArrowLeft)
  removeSpriteFromTile(powerArrowX, powerArrowY, powerIndicatorArrowRight)

  // Topbar
  const date = new Date(gameState.timeTaken);
  const mmssRemaining = date.toISOString().slice(14, 22)
  addText(`Level ${levelCounter}`, {
    x: 1,
    y: 0,
    color: color`2`
  })
  addText(mmssRemaining, {
    x: 11,
    y: 0,
    color: color`2`
  })

  // Power indicator
  if (gameState.power !== 0) {
    for (let x = 0; x <= Math.abs(gameState.power) + (gameState.direction === "right" ? 1 : -1); x++) {
      addSprite(powerIndicatorStartX + x, powerIndicatorStartY, powerIndicatorLine)
    }
    if (gameState.direction == "left") {
      addSprite(powerArrowX, powerArrowY, powerIndicatorArrowLeft)
    } else {
      addSprite(powerArrowX, powerArrowY, powerIndicatorArrowRight)
    }
  }
}

function loadLevel(level) {
  levelCounter = level
  isTutorial = levelCounter === 0;
  clearText()
  
  const timerTick = 50
  setMap(levels[level].map)

  if (!isTutorial) {
    const [bx, by] = ballStartingPositions[level]
    addSprite(bx, by, ball)
    const [hx, hy] = holeStartingPositions[level]
    addSprite(hx, hy, hole)
  }

  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval)
  }
  gameState = Object.create(initialGameState)
  if (!isTutorial) {
    gameState.timerInterval = setInterval(() => {
      gameState.timeTaken += timerTick
      updateHud()
    }, timerTick)
  }

  timeTaken = 0

  if (levels[level].handler) {
    levels[level].handler()
  }
}

// Utils
function isTouchingAny(tileTypes) {
  let playerTile = getFirst(player)
  let tiles = tileTypes.map((tileType) => getAll(tileType)).flat()
  let result = false

  tiles.forEach((tile) => {
    if ((tile.x == playerTile.x) && (tile.y == playerTile.y)) {
      // Doesn't work without a variable for some reason. It should!
      result = {
        x: tile.x,
        y: tile.y,
      }
    }
  })
  return result
}

function removeSpriteFromTile(x, y, spriteType) {
  let spritesToRemove = getTile(x, y).filter(sprite => sprite.type === spriteType)
  spritesToRemove.forEach(sprite => sprite.remove())
}