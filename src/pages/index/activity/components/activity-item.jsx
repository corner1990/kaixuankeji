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
    let src = 'https://ipxcdn.jfshare.com/ipxmall/b658c5d8a1691da18e5f2074f45d7a46'

    return (
      <View className='activity-list-item' onClick={() => { this.toDetail() }}>
        <Image src={src} className='activity-img'></Image>
      </View>
    )
  }
}
