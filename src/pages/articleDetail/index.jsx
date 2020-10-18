import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, } from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui'
import CustomNavbar from '../../components/navbar'
import Slogin from '../index/found-article/slogn'

import './index.scss'

/**
 * @desc 文章详情页
 */
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

    let adcSrc = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2723253439,2190704268&fm=26&gp=0.jpg'

    return (
      <View className='article-detail'>
        <CustomNavbar title='发现' color='#333' clickLeft={this.clickLeft}></CustomNavbar>
        <View className='content-wrap'>
          <View className='title'>CCTV2021《超强宝⻉》少⼉春晚扬州选区启动仪式</View>
          <View className='article-info'>
            <View className='tag'>原创</View>
            <Text>济南⼯作站</Text>
            {/* <Text className='red'>技术分享</Text> */}
            <Text>今天</Text>
          </View>
          
          <Image src='https://ipxcdn.jfshare.com/ipxmall/aa139104a1d03a2526938a1daa000f90' className='content-img' style={{ height: 3000 }}></Image>

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

          {/* <View className='adv-wrap'>
            <Image src={adcSrc} className='adv-img'></Image>
            <View>
              <Text className='adv-text'>独立合作品牌</Text>
              <AtButton type='primary' size='small' className='buy-btn'>立即抢购</AtButton>
            </View>
          </View> */}
        </View>

      </View>
    )
  }
}
