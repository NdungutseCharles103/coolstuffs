function handleEnemies(deltaTime) {
    if (enemyTimer > enemyInterval + randomEnemyInterval){
        enemies.push(new Enemy(canvas.width, canvas.height));
        randomEnemyInterval = Math.random() * 1000 + 500
        enemyTimer = 0;
    } else{
        enemyTimer += deltaTime;
    }
    // console.log(enemies);
    enemies.forEach(enemy => {
        enemy.draw(ctx);
        enemy.update(deltaTime);
    })
    enemies = enemies.filter(en => !en.markedForDeletion)
}