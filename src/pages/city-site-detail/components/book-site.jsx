import React, { Component } from 'react'
import { View, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

class BookSite extends Component {
 
  
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
        <AtButton size='small'>取消</AtButton>
        <AtButton type='primary' size='small'>预约</AtButton>
      </View>
    </View>)
  }
}

export default BookSite