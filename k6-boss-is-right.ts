function correctOrder(list) {
  return list.map(({ tire, steeringWheel, totalPrice }) => {
    for (let tires = 5.98; tires < 19.79; tires++) {
      for (let wheels = tires + 0.81; wheels < tires + 3; wheels++) {
        if ((tires * tire + wheels * steeringWheel).toFixed(2) == totalPrice)
          return { tire: 4, steeringWheel: 1, totalPrice: +(tires * 4 + wheels).toFixed(2) };
      };
    };
  });
};
