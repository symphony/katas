function correctOrder(list) {
  return list.map(({ tire, steeringWheel, totalPrice }) => {
    for (let tireCost = 5.98; tireCost < 19.79; tireCost++) {
      const wheelCost = (totalPrice - tireCost * tire) / steeringWheel;
      if (wheelCost < tireCost || wheelCost > tireCost + 3 || wheelCost > 20) continue;
      if (wheelCost.toFixed(2).endsWith('.79')) {
        const price = Math.round((tireCost * 4 + wheelCost) * 100) / 100;
        return { tire: 4, steeringWheel: 1, totalPrice: price };
      };
    };
  });
};
