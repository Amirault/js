const ScoreLevels=
{
  ZERO: "0",
  FIFTEEN: "15",
  THIRTY: "30",
  FOURTY: "40"
}

class Match {
  score1;
  score2;
  constructor(score1 = ScoreLevels.ZERO, score2 = ScoreLevels.ZERO) {
    this.score1 = score1
    this.score2 = score2
  }

  playerOneScore() {
    return new Match(this.compute(this.score1), this.score2);
  }

  playerTwoScore() {
    return new Match(ScoreLevels.ZERO,this.compute(this.score2));
  }

  compute(score) {
    if (score === ScoreLevels.ZERO) {
      return ScoreLevels.FIFTEEN
    } else if (score === ScoreLevels.FIFTEEN) {
      return ScoreLevels.THIRTY
    } else if (score === ScoreLevels.THIRTY) {
      return ScoreLevels.FOURTY
    }
  }

  scores() {
    return `${this.score1}:${this.score2}`;
  }
}

describe("Tennis spec", () => {
  test("initial score should be 0:0", () => {
    // GIVEN
    const initialScore = new Match()
    // WHEN
    const score = initialScore.scores()
    // THEN
    expect(score).toEqual("0:0")
  })

  test("player one score first", () => {
    // GIVEN
    const previousScorePoint = new Match()
    // WHEN
    const score = previousScorePoint.playerOneScore().scores()
    // THEN
    expect(score).toEqual("15:0")
  })

  test("player one score when score is 15:0", () => {
    // GIVEN
    const previousScorePoint = new Match(ScoreLevels.FIFTEEN, ScoreLevels.ZERO)
    // WHEN
    const score = previousScorePoint.playerOneScore().scores()
    // THEN
    expect(score).toEqual("30:0")
  })

  test("player one score when score is 30:0", () => {
    // GIVEN
    const previousScorePoint = new Match(ScoreLevels.THIRTY,ScoreLevels.ZERO)
    // WHEN
    const score = previousScorePoint.playerOneScore().scores()
    // THEN
    expect(score).toEqual("40:0")
  })

  test("player two score first", () => {
    // GIVEN
    const previousScorePoint = new Match(ScoreLevels.ZERO,ScoreLevels.ZERO)
    // WHEN
    const score = previousScorePoint.playerTwoScore().scores()
    // THEN
    expect(score).toEqual("0:15")
  })

  test("player two score when score is 0:15", () => {
    // GIVEN
    const previousScorePoint = new Match(ScoreLevels.ZERO, ScoreLevels.FIFTEEN)
    // WHEN
    const score = previousScorePoint.playerTwoScore().scores()
    // THEN
    expect(score).toEqual("0:30")
  })

  test("player one score when score is 0:30", () => {
    // GIVEN
    const previousScorePoint = new Match(ScoreLevels.ZERO, ScoreLevels.THIRTY)
    // WHEN
    const score = previousScorePoint.playerOneScore().scores()
    // THEN
    expect(score).toEqual("15:30")
  })
})

/*

  Here tennis rules
  le score au debut de la partie est de 0:0
  quand un joueur marque 15 pts
  le score du joueur de tennis



 */
