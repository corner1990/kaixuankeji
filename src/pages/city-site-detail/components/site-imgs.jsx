import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

class SiteImgs extends Component {
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