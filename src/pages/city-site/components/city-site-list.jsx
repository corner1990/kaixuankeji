import React from 'react'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import CitySiteCard from '../../index/home/components/card'
import './index.scss'

/**
 * @desc 城市工作站
 */
class CitySiteList extends React.Component{

  render() {
    let {
      close = () => {}
    } = this.props
    return (<View className='CitySiteListWrap'>
      <View className='CitySiteListHeader'>
        <View className='CitySiteListTitle'>城市站点</View>
        <AtIcon value='close' size='24' color='#999' onClick={close}></AtIcon>
      </View>
      <CitySiteCard />
      <CitySiteCard />
    </View>)
  }
}

export default CitySiteList