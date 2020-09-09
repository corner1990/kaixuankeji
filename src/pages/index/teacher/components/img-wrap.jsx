import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './img-wrap.scss'

export default class Index extends Component {
  state = {
    src: 'http://new-img1.bazaar.net.cn/bazaar/156/881/lixvO2ezpUxY.jpeg'
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let { src } = this.state
    return (
      <View className='teacher-img-wrap'>

      </View>
    )
  }
}
