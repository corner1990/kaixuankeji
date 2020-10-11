import React from 'react'
import { View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.scss'

/**
 * @desc 城市站点
 */
const ActivitieCard = () => {
  let src = 'https://ipxcdn.jfshare.com/ipxmall/avatar/1124addfcd0cec4ae8db434154d8162a.jpg'
  return (<View className='ActivitieCard'>
    <Image src={src} className='CardImg' mode='aspectFill' />
    <View className='CardTitle'>活动名称</View>
    <View className='CardSubTitle'>512 人参与</View>
  </View>)
}

export default ActivitieCard 