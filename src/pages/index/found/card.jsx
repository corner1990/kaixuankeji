import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './card.scss'
import { randomRGBColor16 } from '../../../components/utils/utils'

export default class Index extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    value: '',
    src: 'http://new-img2.bazaar.net.cn/bazaar/985x695/133/607/li2V68RQFq6Y.jpg'
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
        <View className='card-tag' style={{ backgroundColor: randomRGBColor16() }}>
        <Image src='https://ipxcdn.jfshare.com/ipxmall/d26c5d1673f5b58949b9a9b128f09ae1' className='tag-img' />
        </View>
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