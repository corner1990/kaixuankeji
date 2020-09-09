import React, { Component } from 'react'
import { View } from '@tarojs/components'

import './top-warp.scss'
import TopItem from './top-item'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  createItem() {
    let arr = [
      {
        img: 'https://ipxcdn.jfshare.com/ipxmall/524d44840865e8498b7ed502ef18b195',
        title: '2020年8月刊'
      },
      {
        img: 'https://ipxcdn.jfshare.com/ipxmall/6e023bf2bd069afbc56e66ae8d215e0b',
        title: '2020年7月刊'
      },
      {
        img: 'https://ipxcdn.jfshare.com/ipxmall/6e023bf2bd069afbc56e66ae8d215e0b',
        title: '2020年6月刊'
      }
    ]

    return arr.map((item, key)=> (<TopItem key={key} info={item} />))
  }
  render () {
    return (
      <View className='top-warp'>
        <View className='top-wrap-text'>TOP101</View>
        <View className='top-list-wrap'>
          <View className='top-list'>
            { this.createItem() }
          </View>
        </View>
      </View>
    )
  }
}
