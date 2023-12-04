export class Player {
  constructor({victorys = 0, defeats = 0}) {
    this.victorys = victorys
    this.defeats = defeats
  }

  getVictorys() {
    return this.victorys
  }

  getDefeats() {
    return this.defeats
  }

  getBalance() {
    return this.victorys - this.defeats
  }
}