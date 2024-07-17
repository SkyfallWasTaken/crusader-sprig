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
const coinHud = "C"
const spikeStage1 = "z"
const spikeStage2 = "Z"
const spikeGoingDown = ":"
const spikeRetreat = "?"
const spikePermanent = "0"
const background = "b"
const key = "k"
const portalLocked = "@"
const portalUnlocked = "^"

const tick = "t"
const cross = "x"

setLegend(

  [tick, bitmap`
..............DD
.............DD.
.............DD.
............DD..
............DD..
...........DD...
...........DD...
..........DD....
..........DD....
...DD....DD.....
....DD...DD.....
....DD..DD......
.....DD.DD......
......DDD.......
......DDD.......
.......D........`],
  [cross, bitmap`
................
.33..........33.
..33........33..
...33......33...
....33....33....
.....33..33.....
......3333......
.......33.......
......3333......
.....33..33.....
....33....33....
...33......33...
..33........33..
.33..........33.
.3............3.
................`],
  [coinHud, bitmap`
LLLL66666666....
LLL6666666666...
LL666FFFFFF666..
L666FFFFFFFF666.
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

  [portalLocked, bitmap`
.....LLLLLL.....
...LLLLLLLLLL...
..LLLLLLLLLLLL..
..LLHHHHHHHHLL..
.LLHHHHHHHHHHLL.
.LLHHH1111HHHLL.
LLHHHH1HH1HHHHLL
LLHHHH1HH1HHHHLL
LLHHH666666HHHLL
LLHHH666666HHHLL
LLHHH666666HHHLL
LLHHH666666HHHLL
LLHHH666666HHHLL
LLHHH666666HHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL`],
  [portalUnlocked, bitmap`
.....LLLLLL.....
...LLLLLLLLLL...
..LLLLLLLLLLLL..
..LLHHHHHHHHLL..
.LLHHHHHHHHHHLL.
.LLHHHHHHHHHHLL.
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL
LLHHHHHHHHHHHHLL`],

  [spikeStage1, bitmap`
................
................
................
................
................
................
................
................
................
................
................
..33...33...33..
.333..3333..333.
.3333.3333.3333.
3333333333333333
3333333333333333`],
  [spikeStage2, bitmap`
................
................
................
................
................
................
................
................
................
..33...33...33..
..33...33...33..
.3333.3333.3333.
.3333.3333.3333.
.3333.3333.3333.
3333333333333333
3333333333333333`],
  [spikeGoingDown, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
..33...33...33..
.3333.3333.3333.
3333333333333333`],
  [spikeRetreat, bitmap``],
  [spikePermanent, bitmap`
................
................
................
................
................
................
................
................
................
..33...33...33..
..33...33...33..
.3333.3333.3333.
.3333.3333.3333.
.3333.3333.3333.
3333333333333333
9999999999999999`],
  
  [background, bitmap`
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
  [key, bitmap`
................
................
.....9999.......
.....9..9.......
.....9..9.......
.....9999.......
........9.......
........9.......
........9.......
........999.....
........9.......
........9.......
........999.....
................
................
................`],
)

setSolids([stoneWall, player, portalLocked])

let level = 0
const levels = [
  map`
SSSSSSSSSSSSSSS
S.............S
S............@S
S......c...SSSS
Sc.....S......S
SS............S
S.S.......S...S
S...SSSS......S
S.......S.....S
S.........SSSSS
S....p..^z..kcS
SSSSSSSSSSSSSSS`,
  map`
SSSSSSSSSSSSSSS
S.............S
S.............S
S...S..S..S..@S
S.S..........SS
S..S..........S
S....S.......cS
S.........::zkS
S......S..SSSSS
S.p..S........S
S0S00000000000S
SSSSSSSSSSSSSSS`,
]

setBackground(background)
setPushables({
  [player]: []
})

let isJumping = false;
let jumpingGracePeriod = false;

let initialGameState = {
  isDead: false,
  hasKey: false,
  coinsObtained: 0,
  initialCoinCount: null,
}
let gameState = Object.create(initialGameState)
loadLevel()

updateHud()

onInput("a", () => {
  let playerTile = getFirst(player)
  if (!playerTile) return
  if (!gameState.isDead) {
    playerTile.x -= 1
  }
})

onInput("d", () => {
  let playerTile = getFirst(player)
  if (!playerTile) return

  if (!gameState.isDead) {
    playerTile.x += 1
  }
})

onInput("w", () => {
  let playerTile = getFirst(player)
  if (!playerTile) return

  if (!isJumping && !gameState.isDead) {
    isJumping = true
    jumpingGracePeriod = true
    setTimeout(() => {
      jumpingGracePeriod = false
    }, 300)

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
  // Check if dead
  let touchingSpike = isTouchingAny([spikeStage1, spikeStage2, spikeGoingDown, spikePermanent])
  if (touchingSpike !== false) {
    gameState.isDead = true
    addText("You died!", {
      x: 2,
      y: 0,
      color: color`3`
    })
    return
  }

  // Check if at portal
  if (isTouchingAny([portalUnlocked]) !== false) {
    level += 1
    loadLevel()
  }

  // Check for coins
  let touchingCoin = isTouchingAny([coin])
  if (touchingCoin !== false) {
    console.log(touchingCoin.x, touchingCoin.y)
    removeSpriteFromTile(touchingCoin.x, touchingCoin.y, coin)
  }
  gameState.coinsObtained = gameState.initialCoinCount - getAll(coin).length

  // Check for key
  let touchingKey = isTouchingAny([key])
  if (touchingKey !== false) {
    gameState.hasKey = true;
    removeSpriteFromTile(touchingKey.x, touchingKey.y, key)
    getAll(portalLocked).forEach((portal) => portal.type = portalUnlocked)
  }

  // Update HUD
  updateHud()
})

setInterval(() => {
  let playerTile = getFirst(player)
  if (!playerTile) return
  let tile = getTile(playerTile.x, playerTile.y + 1)[0]
  if (tile && tile.type === stoneWall && !jumpingGracePeriod) {
    isJumping = false
  } else {
    if (!jumpingGracePeriod) {
      // Get the instance again to update it
      getFirst(player).y += 1
    }
  }

  let touchingSpike = isTouchingAny([spikeStage1, spikeStage2, spikePermanent])
  if (touchingSpike !== false) {
    gameState.isDead = true
    addText("You died!", {
      x: 2,
      y: 0,
      color: color`3`
    })
    return
  }
}, 250)

setInterval(() => {
  let spikes = [getAll(spikeStage1), getAll(spikeStage2), getAll(spikeGoingDown), getAll(spikeRetreat)].flat()
  spikes.forEach((spike) => {
    if (spike.type === spikeStage1) {
      spike.type = spikeStage2
    } else if (spike.type === spikeStage2) {
      spike.type = spikeGoingDown
    } else if (spike.type === spikeGoingDown) {
      spike.type = spikeRetreat
    } else {
      spike.type = spikeStage1
    }
  })
}, 1500)

function updateHud() {
  // 1 is for the slash, 2 is for extra margin
  const coinTextX = 2
  const coinIconX = gameState.coinsObtained.toString().length + 1 + gameState.initialCoinCount.toString().length + 1;
  const coinY = 0

  const keyIconX = 2
  const keyY = 15

  removeSpriteFromTile(coinIconX, coinY, coinHud)
  removeSpriteFromTile(keyIconX, keyY, key)

  clearText()
  addText(`${gameState.coinsObtained.toString()}/${gameState.initialCoinCount}`, {
    x: coinTextX,
    y: coinY,
    color: gameState.coinsObtained === gameState.initialCoinCount ? color`6` : color`3`
  })
  addSprite(coinIconX, coinY, coinHud)

  addText(gameState.hasKey ? "Got key!" : "No key :(", {
    x: 2,
    y: 15,
    color: gameState.hasKey ? color`D` : color`3`
  })
}

function loadLevel() {
  setMap(levels[level])
  gameState = Object.create(initialGameState)
  gameState.initialCoinCount = getAll(coin).length
}

// Utils

function isTouchingAny(tileTypes) {
  let playerTile = getFirst(player)
  if (!playerTile) return false;

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