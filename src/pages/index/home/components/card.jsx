import React from 'react'
import { View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.scss'
/**
 * @desc 跳转详情
 */
const toDetail = () => {
  Taro.navigateTo({ url: '/pages/city-site-detail/index' })
}

/**
 * @desc 城市站点
 */
const CitySiteCard = props => {
  let {
    hideBtn=false
  } = props
  let src = 'https://ipxcdn.jfshare.com/ipxmall/65dc1d11bf5325caa5cf5692d29c472d'
  return (<View className='CitySiteCard' onClick={()=>{toDetail()}}>
    <Image src={src} className='CardImg' mode='aspectFill' />
    <View className='RightBox'>
      <View className='CardTitle'>站点名称</View>
      <View className='CardInfo'>地点：北京市东城区冬直门东冠英胡同26号</View>
      <View className='CardOperation'>
        <View className='CardOperationText'>020-1234567</View>
        {hideBtn ? '' : <View className='CardOperationBtn'>预约</View>}
      </View>
    </View>
  </View>)
}

export default CitySiteCard 