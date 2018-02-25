export const countFruit = inventory => {
  const modifiedData = {};
  this.data.forEach(element => {
    let fruitName = element[0];
    let quantity = element[1];
    if (modifiedData[fruitName]) {
      modifiedData[fruitName] = modifiedData[fruitName] + quantity;
    } else {
      modifiedData[fruitName] = quantity;
    }
  });
  return modifiedData;
};

export const stockUp = (fruitList, count) => {
  for (let key in fruitList) {
    fruitList[key] += count;
  }
  return fruitList;
};
export const explain = fruitList => {
  return Object.keys(fruits)
    .map(fruit => `${fruits[fruit]} ${fruit}`)
    .join(', ');
};
