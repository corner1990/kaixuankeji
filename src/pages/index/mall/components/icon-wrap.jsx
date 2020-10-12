import React, { Component } from 'react'
import { View,  Image } from '@tarojs/components'
import './icon-wrap.scss'

class IconWrap extends Component {
  state = {
    iconData:[{
      name:'分类导航'
    },{
      name:'分类导航'
    },{
      name:'优惠活动'
    },{
      name:'积分兑换'
    }]
  }
  /**
   * @desc 处理banner
   */
  getItem = () => {
    let { iconData } = this.state
    return iconData.map((item, key) => {
      return (<View className='icon-item' key={key}>
        <View className='icon-img'></View>
        <View className='icon-text'>{item.name}</View>
      </View>)
    })
  }
  render () {
    return (<View className='icon-wrap'>
      { this.getItem() }
    </View>)
  }
}

export default IconWrap