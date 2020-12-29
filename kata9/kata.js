const cakes = (recipe, available) => {
    return Object.keys(recipe).reduce((val, ingredient) => {
        return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
      }, Infinity)
}




console.log( cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
