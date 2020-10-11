import React, { Component } from 'react'
import { View } from '@tarojs/components'
// import CustomNavBar from '../../../components/navbar'
// import SearchBar from './found/searchBar'
import Card from './card'
import './index.scss'


export default class Index extends Component {
  state = {
  }

  componentDidMount () {

  }

  createItem() {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push(<Card key={i} />)
    }
    return arr
  }

  render () {
    let { data } = this.state
    return (
      <View className='found'>
        {this.createItem()}
      </View>
    )
  }
}
