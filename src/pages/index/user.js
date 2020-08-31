import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import CustomNavBar from '../../components/navbar'

import HomePageComponents from './user/homePageComponents'
import './user/index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toEndorsement() {
    Taro.navigateTo({ url: '/pages/endorsement/index'})
  }

  render() {
    let src = 'https://ipxcdn.jfshare.com/ipxmall/avatar/1124addfcd0cec4ae8db434154d8162a.jpg'
    return (
      <View className='my'>
        <CustomNavBar title='我的' />
        <View className='header'>
          <View className='header-icon-wrap'>
            <Image src={src} className='avatar' />
          </View>
          <View className='header-text-wrap'>
            <View>
              <View className='info-num'>110</View>
              <View className='info-text'>代言</View>
            </View>
            <View>
              <View className='info-num'>4000</View>
              <View className='info-text'>积分</View>
            </View>
            <View>
              <View className='info-num'>0.00</View>
              <View className='info-text'>钱包</View>
            </View>
          </View>
        </View>

        <View className='order-wrap'>
          <View className='order-title'>
            <Text className='my-order'>我的订单</Text>
            <Text className='my-wallet'>我的钱包 ></Text>
          </View>
          <View className='order-centent'>
            <View className='icon-wrap'>
              <AtIcon value='shopping-bag' size='24' ></AtIcon>
              <View className='info-title'>积分兑换</View>
            </View>
            <View className='icon-wrap'>
              <AtIcon value='shopping-bag' size='24' ></AtIcon>
              <View className='info-title'>积分支付</View>
            </View>
            <View className='icon-wrap'>
              <AtIcon value='shopping-bag' size='24' ></AtIcon>
              <View className='info-title'>店内活动</View>
            </View>
            <View className='icon-wrap'>
              <AtIcon value='shopping-bag' size='24' ></AtIcon>
              <View className='info-title'>商场订单</View>
            </View>
          </View>
        </View>

        <View>
          <View className='me'>
            <View className='bookcase'>
              <AtIcon value='shopping-bag' size='24' ></AtIcon>
              <View>我的收藏</View>
            </View>
            <View className='line'></View>
            <View className='magazine'>
              <AtIcon value='folder' size='24' ></AtIcon>
              <View>我的订阅</View>
            </View>
          </View>
        </View>

        <HomePageComponents icon1='iphone' icon2='message' title1='代言中心' title2='系统设置' click1={this.toEndorsement} />
      </View>
    )
  }
}
