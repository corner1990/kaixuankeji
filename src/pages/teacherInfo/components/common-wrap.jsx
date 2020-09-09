import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './common-wrap.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  clickLeft = () => {
    Taro.navigateBack()
  }

  render() {
    let {title}=this.props;
    let itemImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599670661829&di=01d03144ae9ae613b2ec541db6bcab53&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fpop%2Fjfs%2Ft25087%2F130%2F226806847%2F20299%2F9b450114%2F5b6964a3Nc3991763.jpg'

    return (
      <View className='teacher-common-wrap'>
        <View className='common-title'>{title}</View>
        <View className='common-item'>
          <Image src={itemImg} className='item-img'></Image>
          <View className='item-content'>
            <View className='item-title'>这里是文字主题</View>
            <View className='item-des'>这里是描述这里是描述这里是描述这里是描述这里是描述</View>
          </View>
        </View>
        <View className='common-item'>
          <Image src={itemImg} className='item-img'></Image>
          <View className='item-content'>
            <View className='item-title'>这里是文字主题</View>
            <View className='item-des'>这里是描述这里是描述这里是描述这里是描述这里是描述</View>
          </View>
        </View>
      </View>
    )
  }
}
