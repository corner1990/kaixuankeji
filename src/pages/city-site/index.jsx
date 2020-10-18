import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheet } from 'taro-ui'
import Taro from '@tarojs/taro'
import CustomNavBar from '../../components/navbar'
import CitySiteMap from './components/city-site-map'
import CitySiteList from './components/city-site-list'

import './index.scss'
/**
 * @desc 城市工作站
 */
class CitySitePage extends React.Component{
  state = {
    isOpened: true
  }
  /**
   * @desc 返回
   */
  backHistory = () => Taro.navigateBack()
  /**
   * @desc 隐藏城市列表
   */
  hideCitySiteList = () => {
    console.log('hideCitySiteList')
    this.setState({
      isOpened: false
    })
  }
  render() {
    return (<View className='CitySitePage'>
      <CustomNavBar
        title='城市工作站'
        clickLeft={this.backHistory}
      />
      <CitySiteMap />
      <AtActionSheet
        isOpened={this.state.isOpened}
        
      >
        <CitySiteList close={this.hideCitySiteList} />
      </AtActionSheet>
    </View>)
  }
}

export default CitySitePage