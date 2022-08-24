/**
 * Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
 * Three 1's => 1000 points
 * Three 6's =>  600 points
 * Three 5's =>  500 points
 * Three 4's =>  400 points
 * Three 3's =>  300 points
 * Three 2's =>  200 points
 * One   1   =>  100 points
 * One   5   =>   50 point
 * @param dice
 */
const score = (dice) => {
  const count = {};
  let score = 0;

  for (const roll of dice) {
    count[roll] = (count[roll] || 0) + 1;
  }

  score += Math.floor((count[1] || 0) / 3) * 1000;
  score += Math.floor((count[6] || 0) / 3) * 600;
  score += Math.floor((count[5] || 0) / 3) * 500;
  score += Math.floor((count[4] || 0) / 3) * 400;
  score += Math.floor((count[3] || 0) / 3) * 300;
  score += Math.floor((count[2] || 0) / 3) * 200;
  score += ((count[1] || 0) % 3) * 100;
  score += ((count[5] || 0) % 3) * 50;
  return score;
};