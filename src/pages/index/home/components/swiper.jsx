import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

class SwiperWarp extends Component {
  state = {
    imgs: [
      'https://ipxcdn.jfshare.com/ipxmall/1a68424649873adeb7bea5b84b387988',
      'https://ipxcdn.jfshare.com/ipxmall/fd6c4004a7f58d8cae58a2ec78fdd3d4',
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
    return (<View className='SwiperWarp'>
      <Swiper>
        { this.getItem() }
      </Swiper>
    </View>)
  }
}

export default SwiperWarp