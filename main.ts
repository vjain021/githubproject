sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    myPlayer.destroy()
    controller.moveSprite(ballPlayer, 50, 50)
    ballPlayer.setPosition(145, position)
})
function setDefenders () {
    obstacle1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `, SpriteKind.Enemy)
    obstacle1.setPosition(55, 5)
    obstacle1.vy = randint(20, 40)
    obstacle1.setBounceOnWall(true)
    obstacle2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `, SpriteKind.Enemy)
    obstacle2.setPosition(85, 105)
    obstacle2.vy = randint(20, 40)
    obstacle2.setBounceOnWall(true)
    obstacle3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `, SpriteKind.Enemy)
    obstacle3.setPosition(120, 5)
    obstacle3.vy = randint(20, 40)
    obstacle3.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let obstacle3: Sprite = null
let obstacle2: Sprite = null
let obstacle1: Sprite = null
let ballPlayer: Sprite = null
let position = 0
let myPlayer: Sprite = null
let name = game.askForString("What is your name?")
info.setScore(0)
setDefenders()
myPlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 8 9 9 9 9 9 . . . . . . . 
    . . 8 9 9 d 9 9 9 9 . . . . . . 
    . . 8 9 9 9 9 9 9 9 8 . . . . . 
    . . 8 9 9 9 9 9 9 9 8 . . . . . 
    c c f f 8 9 9 9 9 9 8 . . . . . 
    c b f f f f 8 9 9 8 8 . . . . . 
    c d f f f b 9 9 8 f 8 8 8 . . . 
    c b 1 1 1 1 9 8 f d 9 9 8 8 . . 
    . . c c c 8 8 8 f d 9 9 8 8 . . 
    . . . . c 8 8 9 9 8 d 1 1 b . . 
    . . . d d f 9 9 d d f f f . . . 
    . . . d d f 8 8 d d f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . f f 8 8 8 . . . . 
    . . . . . . f f 8 8 8 8 . . . . 
    `, SpriteKind.Player)
position = randint(20, 100)
myPlayer.setPosition(145, position)
ballPlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 8 9 9 9 9 9 . . . . . . 
    . . . 8 9 9 d 9 9 9 9 . . . . . 
    . . . 8 9 9 9 9 9 9 9 8 . . . . 
    . . . 8 9 9 9 9 9 9 9 8 . . . . 
    . c c f f 8 9 9 9 9 9 8 . . . . 
    . c b f f f f 8 9 9 8 8 . . . . 
    . c d f f f f 8 8 f 8 8 8 . . . 
    . c b c 4 4 b c f d 9 9 8 8 . . 
    . . . c 4 1 1 4 c b 9 9 8 8 . . 
    . . . c 4 4 4 4 c 8 b 1 1 b . . 
    . . . c b 4 4 4 d d f f f f . . 
    . . . . c c c c d d f f f f f f 
    . . . . . c c c f f f f . f f f 
    . . . . . . . 8 8 8 . . . . f f 
    . . . . . . 8 8 8 8 . . . . . . 
    `, SpriteKind.Player)
ballPlayer.setPosition(200, position)
game.onUpdateInterval(500, function () {
    if (info.score() != 35) {
        if (ballPlayer.x < 25) {
            info.changeScoreBy(7)
            ballPlayer.setPosition(145, position)
        }
    }
})
