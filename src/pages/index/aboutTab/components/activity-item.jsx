import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './activity-item.scss'


export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toDetail = () => {
    Taro.navigateTo({ url: '/pages/articleDetail/index' })
  }

  render() {
    let src = 'https://ipxcdn.jfshare.com/ipxmall/3479f92065fce74cfc8cdad67d05b680'
    let src2 = 'https://ipxcdn.jfshare.com/ipxmall/359890a8d89c2261cedcf04b2820918c'

    return (
      <View className='mediaArticle-list-item' onClick={() => { this.toDetail() }}>
        <View className='article-time'>上午9:15</View>
        <Image src={src} className='article-img'></Image>
        <View className='content-wrap'>
          <View className='content-item'>
            <View className='content-text'>虹膜是位于⼈眼表⾯⿊⾊瞳孔和⽩⾊巩膜之间的圆环状区域，在近红外光下呈现出丰富的纹理，如斑点、条纹、细丝、冠状、隐窝等。找宝⽼年虹膜保护云所使⽤的虹膜识别技术是⽬前国际上公认最先进、最精准的⽣物识别技术</View>
            <Image src={src2} className='content-img'></Image>
          </View>
          <View className='content-item'>
            <View className='content-text'>虹膜是位于⼈眼表⾯⿊⾊瞳孔和⽩⾊巩膜之间的圆环状区域，在近红外光下呈现出丰富的纹理，如斑点、条纹、细丝、冠状、隐窝等。找宝⽼年虹膜保护云所使⽤的虹膜识别技术是⽬前国际上公认最先进、最精准的⽣物识别技术。</View>
            <Image src={src2} className='content-img'></Image>
          </View>
        </View>
      </View>
    )
  }
}
