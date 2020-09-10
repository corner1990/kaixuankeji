import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './top-item.scss'

const Index = props =>  {

  /**
   * @desc 查看详情
   */
  const viewDetail = () => {
    Taro.navigateTo({ url: '/pages/teacherInfo/index'})
  }
  let { info: {
    img
  } } = props
  return (
    <View className='top-item' onClick={viewDetail}>
      <Image src={img} alt='img' srcset='' className='top-img' />
      {/* <View class='new-item-text'>2020年8月</View> */}
    </View>
  )
}

export default Index 
