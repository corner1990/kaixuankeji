import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './order-news.scss'

export default class Index extends Component {
  state = {
    src: 'http://new-img1.bazaar.net.cn/bazaar/156/881/lixvO2ezpUxY.jpeg'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let { src } = this.state
    return (
      <View className='order-news'>
        <View className='news-text'>从此以后</View>
        <View className='news-main-text'>查阅最全面的资讯</View>
        <AtButton type='primary' className='order-news-btn'>订阅全年资讯</AtButton>
      </View>
    )
  }
}
