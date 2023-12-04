import { getRank } from './getRank.js'
import { Player } from './player.js'
import { ranks } from './ranks.js'

const player = new Player({
  victorys: 245,
  defeats: 160
})

console.log(`O Herói tem saldo de ${player.getBalance()} e está no nível ${getRank(player, ranks)}`)