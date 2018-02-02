import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  state = {
    filters: [],
    fruit: [],
    currentFilter: null
  }

  updateFilterCallback = e => {
    this.setState({ selectedFilter: e.target.value });
  }

  getFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  getFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  componentDidMount() {
    this.getFruit()
    this.getFilters()
  }

  render() {
    return(
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilterCallback}
      />
    )
  }
}


export default App;
