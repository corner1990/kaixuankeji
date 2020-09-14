import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './points-item.scss'


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
    let src2 = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=88834072,722340882&fm=26&gp=0.jpg'

    return (
      <View className='points-item' onClick={() => { this.toDetail() }}>
        <Image src={src2} className='content-img' mode='widthFix'></Image>
        <View className='content-info'>
          <View className='product-name'>海洋燕窝补水面膜</View>
          <View className='points-info'>
            <Text className='points-num'><Text className='color-orange'>4000</Text>积分</Text>
            <Text className=''>10万人兑换</Text>
          </View>
        </View>
      </View>
    )
  }
}

