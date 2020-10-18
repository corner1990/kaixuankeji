import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import CustomNavBar from '../../components/navbar'
import CitySiteCard from '../index/home/components/card'
// import CitySite from '../city-site/components/city-site-list'

import './index.scss'

class MyBook extends Component {

  state = {}

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  jumpIndex = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  /**
   * @desc 返回
   */
  backHistory = () => {
    Taro.navigateBack()
  }
  render() {
    return (
      <View className='MyBook'>
        <CustomNavBar title='我的预约' clickLeft={this.backHistory} />
        {/* <CitySite /> */}
        <View className='BookList'>
          <CitySiteCard hideBtn />
          <CitySiteCard hideBtn />
          <CitySiteCard hideBtn />
        </View>
      </View>
    )
  }
}

export default MyBook