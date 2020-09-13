import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import './banner-wrap.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    const proImg = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3558004629,2960673834&fm=26&gp=0.jpg'

    return (
      <Swiper
        className='product-banner'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <Image src={proImg} className='banner-img'></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={proImg} className='banner-img'></Image>
        </SwiperItem>
      </Swiper>
    )
  }
}
