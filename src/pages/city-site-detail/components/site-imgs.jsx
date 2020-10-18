import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

class SiteImgs extends Component {
  state = {
    imgs: [
      'https://ipxcdn.jfshare.com/ipxmall/858e478c4a334fc2d06fbfb5e2ccd474',
      'https://ipxcdn.jfshare.com/ipxmall/858e478c4a334fc2d06fbfb5e2ccd474',
      'https://ipxcdn.jfshare.com/ipxmall/858e478c4a334fc2d06fbfb5e2ccd474',
    ]
  }
  /**
   * @desc 处理banner
   */
  getItem = () => {
    let { imgs } = this.state
    return imgs.map((item, key) => {
      return (
        <Image
          src={item}
          key={key}
          className='SiteImg'
          mode='scaleToFill'
        />
      )
    })
  }
  render () {
    return (<View className='SiteImgsWrap'>
      <View className='SiteImgsTitle'>工作现场</View>
      <View className='SiteImgs'>
        { this.getItem() }
      </View>
    </View>)
  }
}

export default SiteImgs