export function getRank(player, rank) {
  const balance = player.getBalance()
  const rankNames = Object.keys(rank)

  for (let i = 0; i < rankNames.length; i++) {
    const rankName = rankNames[i]
    const rankValue = rank[rankName]

    if (balance >= rankValue.min && balance <= rankValue.max) {
      return rankName
    }
  }
}