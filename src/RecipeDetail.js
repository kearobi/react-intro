import React, { Component } from 'react'
import recipesStore from './store/recipes';
import {Link} from 'react-router-dom'

class RecipeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: recipesStore
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({recipeId: id})
    let recipe = this.state.recipes.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(recipe){
      this.setState({recipe: recipe})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.recipe.name}</h2>
        <h5>{this.state.recipe.content}</h5>
      </div>
    );
  }
}

export default RecipeDetail;
