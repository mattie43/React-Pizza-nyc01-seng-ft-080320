import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaList: [],
    id: '',
    topping: '',
    size: '',
    vegetarian: false
  }

  editPizza = (pizzaObj) => {
    this.setState({
      id: pizzaObj.id,
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      vegetarian: pizzaObj.vegetarian
    })
  }

  onChange = (name, value) => {
    this.setState({[name]: value})
  }

  onSubmit = (pizzaObj) => {
    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(pizzaObj)
    }
    fetch(`http://localhost:3000/pizzas/${pizzaObj.id}`, options)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pizzaList: this.state.pizzaList.map(obj => [data].find(o => o.id === obj.id) || obj),
          id: '',
          topping: '',
          size: '',
          vegetarian: false
        })
      })

  }

  onClick = (boolean) => {
    this.setState({vegetarian: boolean})
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(data => this.setState({pizzaList: data}))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state} onChange={this.onChange} onSubmit={this.onSubmit} onClick={this.onClick}/>
        <PizzaList pizzaList={this.state.pizzaList} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
