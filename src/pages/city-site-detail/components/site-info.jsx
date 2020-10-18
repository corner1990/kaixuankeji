import React, { Component } from 'react'
import { View, } from '@tarojs/components'
import './index.scss'

class SiteInfo extends Component {
  /**
   * @desc 预约
   */
  book = () => {
    let { update } = this.props
    update('bookShow', true)
  }
  render () {
    return (<View className='SiteInfoWrap'>
      <View className='SiteInfoTitle'>站点名称</View>
      <View className='SiteInfoLine'>
        <View className='CardInfo'>地点：北京市东城区冬直门东冠英胡同26号</View>
        <View className='SiteDistance'>距您 1.2km</View>
      </View>
      <View className='SitePhone'>电话: 020-1234567</View>
      <View className='CardOperation'>
        <View className='CardOperationText'>营业时间: 10:00 - 18:00 </View>
        <View className='CardOperationBtn' onClick={this.book}>预约</View>
      </View>
    </View>)
  }
}

export default SiteInfo