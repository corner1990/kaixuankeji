import React from 'react'
import { View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.scss'

/**
 * @desc 城市站点
 */
const CitySiteCard = () => {
  let src = 'https://ipxcdn.jfshare.com/ipxmall/avatar/1124addfcd0cec4ae8db434154d8162a.jpg'
  return (<View className='CitySiteCard'>
    <Image src={src} className='CardImg' mode='aspectFill' />
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