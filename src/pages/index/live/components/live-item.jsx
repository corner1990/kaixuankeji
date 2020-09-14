import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './live-item.scss'


export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toDetail = () => {
    Taro.navigateTo({ url: '/pages/productDetail/index' })
  }

  render() {
    let src2 = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=252866835,2765615797&fm=26&gp=0.jpg'

    return (
      <View className='live-item' onClick={() => { this.toDetail() }}>
        <Image src={src2} className='content-img' mode='widthFix'></Image>
        <View className='content-info'>
          <View className='product-name'>夏日搭配秀场</View>
          <View className='points-info'>
            <Text className='points-num'>正在直播</Text>
            <Text className=''>6666人</Text>
          </View>
        </View>
      </View>
    )
  }
}

