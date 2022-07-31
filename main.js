const data = {
  products: [
      {
          id: 1,
          name: 'Product 1',
          price: 350,
          currency: 'UAH',
          amount: 5
      },
      {
          id: 2,
          name: 'Product 2',
          price: 100,
          currency: 'EUR',
          amount: 2
      },
      {
          id: 3,
          name: 'Product 3',
          price: 5,
          currency: 'USD',
          amount: 1
      },
      {
          id: 4,
          name: 'Product 4',
          price: 120,
          currency: 'EUR',
          amount: 52
      }
  ],
  services: [
      {
          id: 1,
          name: 'Service 1',
          totalPrice: 50,
          currency: 'UAH',
          subservices: [
              {
                  id: 55,
                  name: 'Subservice 1',
                  price: 10,
                  currency: 'UAH',
              },
              {
                  id: 56,
                  name: 'Subservice 2',
                  price: 25,
                  currency: 'UAH',
              },
              {
                  id: 57,
                  name: 'Subservice 3',
                  price: 15,
                  currency: 'UAH',
              }
          ]
      },
      {
          id: 2,
          name: 'Service 2',
          totalPrice: 75,
          currency: 'UAH',
          subservices: [
              {
                  id: 58,
                  name: 'Subservice 1',
                  price: 15,
                  currency: 'UAH',
              },
              {
                  id: 59,
                  name: 'Subservice 2',
                  price: 20,
                  currency: 'UAH',
              },
              {
                  id: 60,
                  name: 'Subservice 3',
                  price: 30,
                  currency: 'UAH',
              }
          ]
      },
  ],
  currencyToUAH: {
      'UAH': 1,
      'USD': 36,
      'EUR': 37
  }
}

const totalSumUAH = data.products.reduce((sum, product) => {
  const price = product.price * data.currencyToUAH[product.currency];
  const total = product.amount * price;
  return sum + total;
}, 0);

console.log(totalSumUAH);

const findIndexUncorrectServiceSum = () => {
  return data.services.indexOf(data.services.find(service => 
   service.totalPrice !== service.subservices.reduce((sum, subservice) =>
   sum + subservice.price, 0)))
};

console.log(findIndexUncorrectServiceSum());
