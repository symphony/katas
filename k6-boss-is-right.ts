function correctOrder(list) {
  console.log(list.length);
  return list.map(({ tire, steeringWheel, totalPrice }) => {
    for (let tireCost = 5.98; tireCost < 19.79; tireCost++) {
      const wheelCost = Math.round(((totalPrice - (tireCost * tire)) / steeringWheel) * 100) / 100;;
      if (wheelCost < tireCost || wheelCost > tireCost + 3 || wheelCost > 20) continue;
      console.log(tireCost, wheelCost);
      if (Math.round(wheelCost * 100) % 100 === 79) {
        return { tire: 4, steeringWheel: 1, totalPrice: (tireCost * 4) + wheelCost };
      }
      console.log(tireCost, wheelCost,wheelCost * 100, wheelCost * 100 % 100,(wheelCost * 100 % 100 === 79));
    };
    console.log('didn\' find anything\n\n\n');
  });
};