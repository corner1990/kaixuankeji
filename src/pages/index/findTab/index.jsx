import React, { Component } from 'react'
import { View } from '@tarojs/components'
import FindItem from './component/find-item'
import './index.scss'


export default class Index extends Component {
  state = {
  }

  componentDidMount () {

  }

  createItem() {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push(<FindItem key={i} />)
    }
    return arr
  }

  render () {
    let { data } = this.state
    return (
      <View className='find-tab-wrap'>
        {this.createItem()}
      </View>
    )
  }
}
