/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const stoneWall = "S"
const coin = "c"

setLegend(
  [player, bitmap`
................
................
................
................
.......000......
.....00..00.....
...00.....0.....
...0......0.....
..0..0....0.....
..0..000000.....
..0.............
.0..............
.0..............
.0..............
.0..............
.00000...00.....`],
  [stoneWall, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [coin, bitmap`
....66666666....
...6666666666...
..666FFFFFF666..
.666FFFFFFFF666.
666FFFFFFFFFF666
66FFFFF66FFFFF66
66FFFFF66FFFFF66
66FFFFF66FFFFF66
66FFFFF66FFFFF66
66FFFFF66FFFFF66
66FFFFF66FFFFF66
666FFFFFFFFFF666
.666FFFFFFFF666.
..666FFFFFF666..
...6666666666...
....66666666....`],
)

setSolids([stoneWall, player])

let level = 0
const levels = [
  map`
SSSSSSSSSSSSSSS
S.............S
S.............S
S......c...SSSS
Sc.....S......S
SS............S
S.........S...S
S...SSSS......S
S............cS
S.........SSSSS
S....p........S
SSSSSSSSSSSSSSS`
]

setMap(levels[level])

setPushables({
  [player]: []
})

let isJumping = false;
let jumpingGracePeriod = false;

onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})

onInput("w", () => {
  if (!isJumping) {
    isJumping = true
    jumpingGracePeriod = true
    setTimeout(() => {
      jumpingGracePeriod = false
    }, 300)

    let playerTile = getFirst(player)
    let tile1 = getTile(playerTile.x, playerTile.y - 1)[0]
    let tile2 = getTile(playerTile.x, playerTile.y - 2)[0]
    if (!tile1 && !tile2) {
      getFirst(player).y -= 2
    } else {
      getFirst(player).y -= 1
    }
  }
})

afterInput(() => {
  let playerTile = getFirst(player)
  let coins = getAll(coin)
  coins.forEach((coin) => {
    if ((coin.x == playerTile.x) && (coin.y == playerTile.y)) {
      clearTile(coin.x, coin.y)
      addSprite(coin.x, coin.y, player)
    }
  })

  clearText()
  addText(getAll(coin).length.toString(), {
    x: 2,
    y: 0,
    color: color`3`
  })
})

setInterval(() => {
  let playerTile = getFirst(player)
  let tile = getTile(playerTile.x, playerTile.y + 1)[0]
  if (tile && tile.type === stoneWall && !jumpingGracePeriod) {
    isJumping = false
  } else {
    if (!jumpingGracePeriod) {
      // Get the instance again to update it
      getFirst(player).y += 1
    }
  }
}, 250)