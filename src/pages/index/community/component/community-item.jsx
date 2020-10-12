import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './community.scss'


export default class Index extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    value: '',
    src: 'https://ipxcdn.jfshare.com/ipxmall/avatar/1124addfcd0cec4ae8db434154d8162a.jpg'
  }
  componentDidMount () {
  }

  render () {
    let { src } = this.state
    return (
      <View className={['act-wrap']}>
        <Image src={src} className='content-img'></Image>        
        <View className='act-title'>深圳福永街道社区工作在进行</View>
        <View className='data-wrap'>
          <View>2020-10-11</View>
          <View>
            <Text className='CardLikeCount'>
              <AtIcon value='heart' size='18' color='#D8D8D8'></AtIcon>
              4567
            </Text>
            <Text className='CardMsgCount'>
              <AtIcon value='message' size='18' color='#D8D8D8'></AtIcon>
              67
            </Text>
          </View>

        </View>
      </View>
    )
  }
} 