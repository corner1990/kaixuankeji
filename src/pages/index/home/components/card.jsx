import React from 'react'
import { View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.scss'

/**
 * @desc 城市站点
 */
const CitySiteCard = () => {
  let src = 'https://ipxcdn.jfshare.com/ipxmall/694b422c540412a87eaeb17e65cb3a0f'
  return (<View className='CitySiteCard'>
    <Image srcc={src} className='CardImg' mode='aspectFill' />
    <View className='RightBox'>
      <View className='CardTitle'>站点名称</View>
      <View className='CardInfo'>地点：北京市东城区冬直门东冠英胡同26号</View>
      <View className='CardOperation'>
        <View className='CardOperationText'>020-1234567</View>
        <View className='CardOperationBtn'>预约</View>
      </View>
    </View>
  </View>)
}

export default CitySiteCard 