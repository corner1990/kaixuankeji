import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.scss'

/**
 * @desc 城市站点
 */
const ActivitieCard = () => {
  let toDetail=()=>{
    Taro.navigateTo({url:'/pages/articleDetail/index'})
  }

  let src = 'https://ipxcdn.jfshare.com/ipxmall/3ee79c2fbb215b8b91f06a640aadffb1'
  return (<View className='ActivitieCard'  onClick={toDetail}>
    <Image src={src} className='CardImg' mode='aspectFill' />
    <View className='CardTitle'>活动名称</View>
    <View className='CardSubTitle'>512 人参与</View>
  </View>)
}

export default ActivitieCard 