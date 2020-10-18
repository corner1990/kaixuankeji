import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import FindItem from './component/find-item'
import './index.scss'


export default class Index extends Component {
  state = {
  }

  componentDidMount () {

  }

  toDetail(){
    Taro.navigateTo({url:'/pages/city-site-detail/index'})
  }

  createItem() {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push(<FindItem key={i}  />)
    }
    return arr
  }

  render () {
    let { data } = this.state
    return (
      <View className='find-tab-wrap' onClick={this.toDetail}>
        {this.createItem()}
      </View>
    )
  }
}
