import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },
seeds(server) {
  server.db.loadData({
    transactions: [
      {
        id: 1,
        title: 'Freelance de website',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAt: new Date('2021-02-14 10:22:01'),
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 1100,
        createdAt: new Date('2021-01-31 07:27:01'),
      },
    ]
  })
},

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);