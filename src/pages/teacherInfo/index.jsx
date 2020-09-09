import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import {AtButton } from 'taro-ui'
import Backhistory from '../../components/backhistory'
import CommonWrap from './components/common-wrap'

import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  
  clickLeft = () => {
    Taro.navigateBack()
  }

  render() {
    let teacherImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599665773191&di=f3e1ed909c7d24da95b83a8aa27554aa&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2196668131%2C1109281611%26fm%3D214%26gp%3D0.jpg'
    let iconImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599668659666&di=b0055ecca72558b421b4ff271bf01014&imgtype=0&src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg%2F0'
    let itemImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599670661829&di=01d03144ae9ae613b2ec541db6bcab53&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fpop%2Fjfs%2Ft25087%2F130%2F226806847%2F20299%2F9b450114%2F5b6964a3Nc3991763.jpg'


    return (
      <View className='teacher-info-wrap'>
       <Backhistory title='' clickLeft={this.clickLeft}></Backhistory>
        <Image src={teacherImg} className='teacher-img'></Image>
        <View className='contact-wrap'>
          <AtButton size='small' className='common-btn'>拨打电话</AtButton>
          <AtButton size='small' className='common-btn'>交换微信</AtButton>
          <AtButton size='small' className='common-btn'>邮箱</AtButton>
        </View>
        <View className='person-wrap'>
          <Image src={iconImg} className='icon-img'></Image>
          <Image src={iconImg} className='icon-img'></Image>
          <Image src={iconImg} className='icon-img'></Image>
          <Image src={iconImg} className='icon-img'></Image>
          <Text className='person-text'>1150人浏览</Text>
        </View>
        {/* <View className='teacher-common-wrap'>
          <View className='common-title'>专业推荐</View>
          <View className='common-item'>
            <Image src={itemImg} className='item-img'></Image>
            <View className='item-content'>
              <View className='item-title'>这里是文字主题</View>
              <View className='item-des'>这里是描述这里是描述这里是描述这里是描述这里是描述</View>
            </View>
          </View>
        </View> */}
        <CommonWrap title="专业推荐"></CommonWrap>
        <CommonWrap title="最新动态"></CommonWrap>
      </View>
    )
  }
}
