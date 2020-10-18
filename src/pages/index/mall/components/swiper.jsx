import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './swiper.scss'

class SwiperWarp extends Component {
  state = {
    imgs: [
      'https://ipxcdn.jfshare.com/ipxmall/694b422c540412a87eaeb17e65cb3a0f',
      'https://ipxcdn.jfshare.com/system/admin/5f62116f9dc0713ab1ec3795614b38a8.png',
      'https://ipxcdn.jfshare.com/ipxmall/9a15d6c8175c847bae90b3dadad49275'
    ]
  }
  /**
   * @desc 处理banner
   */
  getItem = () => {
    let { imgs } = this.state
    return imgs.map((item, key) => {
      return (<SwiperItem key={key}>
        <Image
          src={item}
          className='SwiperImg'
          mode='aspectFill'
        />
      </SwiperItem>)
    })
  }
  render () {
    return (<View className='MallSwiperWarp'>
      <Swiper>
        { this.getItem() }
      </Swiper>
    </View>)
  }
}

export default SwiperWarp