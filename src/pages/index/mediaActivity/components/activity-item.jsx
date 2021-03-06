import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './activity-item.scss'


export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toDetail = () => {
    Taro.navigateTo({ url: '/pages/articleDetail/index' })
  }

  render() {
    let src = 'https://ipxcdn.jfshare.com/ipxmall/ef2ecf65edec3dbe730eb66e526fc680'
    let src2 = 'https://ipxcdn.jfshare.com/ipxmall/072c61ee9a17fdddd4c8c2f288009aff'

    return (
      <View className='mediaArticle-list-item' onClick={() => { this.toDetail() }}>
        <View className='article-time'>上午9:15</View>
        <Image src={src} className='article-img'></Image>
        <View className='content-wrap'>
          <View className='content-item'>
            <View className='content-text'>进⼊21世纪以来，我国⼈⼝⽼龄化呈现加速发展的态势。截⾄2018年底，我国60岁及以上⽼年⼈⼝数量已达2.49亿，占总⼈⼝的⽐例达到17.9%。65周岁及以上⼈⼝达到1.6亿，占总⼈⼝的11.4%。
</View>
            <Image src={src2} className='content-img'></Image>
          </View>
          <View className='content-item'>
            <View className='content-text'>按这种发展趋势，到2020年，我国⽼龄⼈⼝将增加到1.73亿。全国⽼龄委也预测，到2050年左右，我国⽼年⼈⼝将达到全国⼈⼝的1/3。</View>
            <Image src={src2} className='content-img'></Image>
          </View>
        </View>
      </View>
    )
  }
}
