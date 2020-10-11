import React from 'react'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import CitySiteCard from '../../index/home/components/card'
import './index.scss'

/**
 * @desc 城市工作站
 */
class CitySiteList extends React.Component{
  backHistory = () => {}
  render() {
    return (<View className='CitySiteListWrap'>
      <View className='CitySiteListHeader'>
        <View className='CitySiteListTitle'>城市站点</View>
        <AtIcon value='close' size='24' color='#999'></AtIcon>
      </View>
      <CitySiteCard />
      <CitySiteCard />
    </View>)
  }
}

export default CitySiteList