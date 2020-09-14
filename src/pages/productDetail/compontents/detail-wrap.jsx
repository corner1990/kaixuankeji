import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import './detail-wrap.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    const proImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600064240397&di=39630aee3cb2ff4a221e4bae23cdf644&imgtype=0&src=http%3A%2F%2Fimg30.360buyimg.com%2FpopWaterMark%2Fg15%2FM07%2F00%2F09%2FrBEhWFHpNHYIAAAAAAUeZt48Q4MAABMEwBoxZoABR5-268.gif'

    return (
      <View className='detail-wrap'>
        <View className='title'>商品详情</View>
        <Image src={proImg} mode='widthFix'></Image>
      </View>
    )
  }
}
