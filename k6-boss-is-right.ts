function correctOrder(list) {
  return list.map(({ tire, steeringWheel, totalPrice }) => {
    for (let tires = 5.98; tires < 20; tires++)
      for (let wheel = tires + 0.81; wheel < Math.min(tires + 3, 20); wheel++)
        if ((tire * tires + steeringWheel * wheel).toFixed(2) == totalPrice)
          return { tire: 4, steeringWheel: 1, totalPrice: +(tires * 4 + wheel).toFixed(2) };
  });
};
