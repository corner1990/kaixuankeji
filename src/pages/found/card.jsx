import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './card.scss'

export default class Index extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    value: '',
    src: 'https://ipxcdn.jfshare.com/ipxmall/0b44041be7deff3e80561932025a1243'
  }
  
  onChange (value) {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      value
    })
  }
  render () {
    const { textTitle, textMark, month, day } = this.props.data;
    let { src } = this.state
    return (
      <View className='found-card'>  
        <Image src={src} className='found-img' />
         <View className='careHeaderCon'>
           <View className='careHeaderConL'>
            <View className='research'>
              <View className='researchItem1'>{textTitle}</View>
              <View className='researchItem2'>
                 <AtIcon value='message' size='16' color='#ddd'></AtIcon>
                 <AtIcon value='play' size='16' color='#ddd' className='play'></AtIcon>
              </View>
            </View>
            <View className='title'>{textMark}</View>
           </View>
           <View className='careHeaderConR'>
            <View>{month}月</View>
            <View>{day}日</View>
           </View>
         </View>
      </View>
    )
  }
}