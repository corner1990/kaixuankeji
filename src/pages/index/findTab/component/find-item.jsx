import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './find-item.scss'


export default class Index extends Component {
  state = {
    value: '',
    src: 'https://ipxcdn.jfshare.com/ipxmall/858e478c4a334fc2d06fbfb5e2ccd474'
  }
  componentDidMount () {
  }

  render () {
    let { src } = this.state
    return (
      <View className='find-item-wrap'>
        <View className='item-title'>济南工作站</View>
        <Image src={src} className='item-img'></Image> 
      </View>
    )
  }
} 