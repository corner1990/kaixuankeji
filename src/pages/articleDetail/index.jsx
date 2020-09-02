import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import CustomNavbar from '../../components/navbar'
import Slogin from '../index/found-article/slogn'

import './index.scss'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  clickLeft = () => {
    Taro.navigateBack()
  }


  render() {

    return (
      <View className='article-detail'>
        <CustomNavbar title='发现' color='#333' clickLeft={this.clickLeft}></CustomNavbar>
        <View className='content-wrap'>
          <View className='title'>明星导师-技术分享</View>
          <View className='article-info'>
            <View className='tag'>原创</View>
            <Text>时尚融缘</Text>
            <Text className='red'>技术分享</Text>
            <Text>今天</Text>
          </View>
          <Slogin></Slogin>
          <Image src='https://wx4.sinaimg.cn/mw690/008b8TwTgy1gic4pxxgqhj30hw0nikb7.jpg' className='content-img'></Image>
          <Image src='https://wx4.sinaimg.cn/mw690/008b8TwTgy1gic4pxvjiwj30ht0nhdjh.jpg' className='content-img'></Image>
          <View className='share-wrap'>
            <View className='num-wrap'>阅读1220</View>
            <View className='icon-wrap'>
              <View><AtIcon value='share-2' size='12'></AtIcon>分享</View>
              <View className='good-wrap'>
                <View className='common-good'><AtIcon value='heart' size='12'></AtIcon>赞</View>
                <View className='common-good'><AtIcon value='star' size='12'></AtIcon>在看</View>
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
