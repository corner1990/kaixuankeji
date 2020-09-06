import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'

import '../index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    const proImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598964919281&di=a67a76d014ac37cfb3b1d675cbed0358&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69352f5442326170746d6d4e4849384b4a6a79317a6258586178647058615f2121323537323137353736312e6a7067.jpg'

    return (
      <View className='order-item'>
        <View className='product-wrap'>
          <Image src={proImg} className='product-img'></Image>
          <View className='product-info-wrap'>
            <View className='product-name'>新百伦新款男鞋 时尚男鞋</View>
            <View className='product-detail'>新百伦新款男鞋新百伦新款男鞋新百伦新鞋</View>
            <View className='price-wrap'>
              <Text className='price-num'>￥399×1</Text>
              <Text className='total-price'>￥399</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
