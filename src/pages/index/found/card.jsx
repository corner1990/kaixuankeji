import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './card.scss'
import { randomRGBColor16 } from '../../../components/utils/utils'

export default class Index extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    value: '',
    src: 'https://ipxcdn.jfshare.com/ipxmall/eb734bde185fe94789288fc7b69365a0'
  }
  componentDidMount () {
  }

  render () {
    const { textTitle, textMark, month, day, index, show } = this.props;
    let { src } = this.state
    return (
      <View className={['found-card']}>
        <View className='icon'>
          <Image src='https://ipxcdn.jfshare.com/ipxmall/eb734bde185fe94789288fc7b69365a0' />
        </View>
        <View className='content-wrap'>
          <View className='name-text'>天生骄傲1</View>
          <View className='content-text'>CCTV某某节目啊啊啊啊这里是内容文本这里是内容文本这里是内容文本这里是内容文本这里是内容文本这里是内容文本这里是内容文本这里是内容文本</View>
          <Image src={src} className='content-img'></Image>
          <View className='time-text'>2分钟前</View>
          <View className='message-wrap'>
            <View className='message-item'>
              <AtIcon value='heart' size='18' color='#D8D8D8' className='heart-icon'></AtIcon>
              <Text className='name-text'>天生骄傲1,</Text>
              <Text className='name-text'>天生骄傲2</Text>
            </View>
            <View className='message-item'>
              <Text className='name-text'>天生骄傲1：</Text>
              <Text>看着好棒呀！</Text>
            </View>
            <View className='message-item'>
              <Text className='name-text'>天生骄傲1</Text>
              <Text>回复</Text>
              <Text className='name-text'>天生骄傲2：</Text>
              <Text>看着好棒呀！看着好棒呀！看着好棒呀！看着好棒呀！看着好棒呀！看着好棒呀！看着好棒呀！看着好棒呀！</Text>
            </View>
          </View>
        </View>
        
      </View>
    )
  }
} 