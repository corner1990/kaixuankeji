import React, { Component } from 'react'
import { View } from '@tarojs/components'
import CommunityItem from './component/community-item'
import './index.scss'


export default class Index extends Component {
  state = {
  }

  componentDidMount () {

  }

  createItem() {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push(<CommunityItem key={i} />)
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
