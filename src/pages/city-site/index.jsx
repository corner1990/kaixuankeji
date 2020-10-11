import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheet } from 'taro-ui'
import CustomNavBar from '../../components/navbar'
import CitySiteMap from './components/city-site-map'
import CitySiteList from './components/city-site-list'

import './index.scss'
/**
 * @desc 城市工作站
 */
class CitySitePage extends React.Component{
  backHistory = () => {}
  render() {
    return (<View className='CitySitePage'>
      <CustomNavBar
        title='城市工作站'
        clickLeft={this.backHistory}
      />
      <CitySiteMap />
      <AtActionSheet isOpened>
        <CitySiteList />
      </AtActionSheet>
    </View>)
  }
}

export default CitySitePage