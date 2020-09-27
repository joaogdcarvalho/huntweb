import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
  // objeto de estado
  state = {
    products: [],
  }

  // método de ciclo de vida - componentDidMount: executado assim que componente é montado em tela
  componentDidMount() {
    this.loadProducts();
  }

  /* função abaixo precisa ser criada com modelo 'arrow function' para que seja
  possível visualizar escopo variável 'this', não subscrevendo seu valor. */
  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data.docs });
  }

  render() {
    const { products } = this.state;

    // escutou que o estado foi alterado, recalculou o componente, exibindo novo valor do array
    return (
      <div className="product-list">
        { products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="#">Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}