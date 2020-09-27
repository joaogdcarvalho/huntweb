import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  // método de ciclo de vida - componentDidMount: executado assim que componente é montado em tela
  componentDidMount() {
    this.loadProducts();
  }

  /* função abaixo precisa ser criada com modelo 'arrow function' para que seja
  possível visualizar escopo variável 'this', não subscrevendo seu valor. */
  loadProducts = async () => {
    const response = await api.get('/products');

    console.log(response.data.docs);
  }

  render() {
    return <h1>Hello Rocketseat</h1>;
  }
}