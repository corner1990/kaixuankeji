import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import Card from './card'
import './index.scss'

/**
 * @desc 城市站点
 */
const CitySite = () => {
  const viewMore = () => {
    Taro.navigateTo({
      url: '/pages/city-site/index'
    })
  }
  return (<View className='CitySiteWrap'>
    <View className='CitySiteTitleWrap'>
      <Text className='CitySiteTitle'>城市站点</Text>
      <View className='CitySiteMore' onClick={viewMore}>
        更多
        <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
      </View>
    </View>
    <Card />
  </View>)
}

export default CitySite 