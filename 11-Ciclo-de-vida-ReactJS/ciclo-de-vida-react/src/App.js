import React, { Component } from 'react'

class Ciclos extends Component {

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
      console.log('componentDidUpdate')
  }

  componentDidCatch(){
    console.log('componentDidCatch')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  shoudComponentUpdate(){
    console.log('shoudComponentUpdate')
  }
  
  render () {
    
    return (
      <div>
        teste - exercício finalizado parcialmente
      </div>
    )
  }
}

export default Ciclos;