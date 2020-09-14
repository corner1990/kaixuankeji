import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './seckill-item.scss'


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
    let src = 'https://wx3.sinaimg.cn/mw690/008b8TwTgy1giboq2g2lmj30qk0aw16s.jpg'
    let src2 = 'https://wx3.sinaimg.cn/mw690/008b8TwTgy1gibp9swnntj302a029jrn.jpg'

    return (
      <View className='seckill-item' onClick={() => { this.toDetail() }}>
        <Image src={src2} className='content-img'></Image>
        <View className='content-info'>
          <View className='product-name'>XXX海洋燕窝补水面膜洋燕窝补水面膜</View>
          <View className='buy-num'><Text className='color-red'>1000+</Text>购买</View>
          <View>
            <Text className='now-price'><Text>￥</Text>66.9</Text>
            <Text className='origin-price'><Text>￥</Text>88.9</Text>
            <View className='buy-btn'>去秒杀</View>
          </View>
        </View>
      </View>
    )
  }
}

