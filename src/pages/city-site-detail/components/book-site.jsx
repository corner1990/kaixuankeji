import React, { Component } from 'react'
import { View, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.scss'

class BookSite extends Component {
  /**
   * @desc 取消预约
   */
  cancel = () => {
    let { update } = this.props
    update('bookShow', false)
  }
  /**
   * @desc 预约
   */
  book = () => {
    this.cancel()
    Taro.navigateTo({
      url: '/pages/book-result/index'
    })
  }
  render () {
    return (<View className='BookSiteWrap'>
      <View className='BookSiteTitle'>预约站点</View>
      <View className='line'>
        <View className='label'>姓名</View>
        <Input type='text' placeholder='请输入您的称呼' />
      </View>
      <View className='line'>
        <View className='label'>电话</View>
        <Input type='text' placeholder='请输入电话号码' />
      </View>
      <View className='BtnWrap'>
        <AtButton size='small' onClick={this.cancel}>取消</AtButton>
        <AtButton type='primary' size='small' onClick={this.book}>预约</AtButton>
      </View>
    </View>)
  }
}

export default BookSite