import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Card from './card'
import './index.scss'

/**
 * @desc 城市站点
 */
const CitySite = () => {
  return (<View className='CitySiteWrap'>
    <View className='CitySiteTitleWrap'>
      <Text>城市站点</Text>
      <View className='CitySiteMore'>
        更多
        <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
      </View>
    </View>
    <Card />
  </View>)
}

export default CitySite 