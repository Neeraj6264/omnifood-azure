module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: [
      { id: 1, name: "Healthy Veg Bowl", price: 199 },
      { id: 2, name: "Chicken Protein Meal", price: 299 },
      { id: 3, name: "Vegan Delight", price: 249 }
    ]
  };
};
