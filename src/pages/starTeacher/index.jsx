'use strict'
import React, { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import BackHistory from '../../components/backhistory'
import './index.scss'

/**
 * @desc 明星导师
 */
class StarTeacher extends Component {
  render() {
    return(<View className='star-teacher-warp'>
      <BackHistory title='明星导师' color='#000' bgColor='tarsparent'  />
      <Swiper
        className='test-h'
        displayMultipleItems={1.2}
        circular
      >
        <SwiperItem>
          <View className='demo-text-1 demo-text'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2 demo-text'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3 demo-text'>3</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-4 demo-text'>4</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-5 demo-text'>5</View>
        </SwiperItem>
      </Swiper>
    </View>)
  }
}

export default StarTeacher
