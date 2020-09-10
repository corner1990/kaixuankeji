import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './img-wrap.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let imgSrc = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257382072,1201596153&fm=26&gp=0.jpg'

    return (
      <View className='teacher-img-wrap'>
        {/* <View className='banner-wrap'></View> */}
        <View>
          <View className='banner-box'>
            <View className='banner'>
              <Image src={imgSrc} className='banner-img'></Image>
              <Image src={imgSrc} className='banner-img'></Image>
              <Image src={imgSrc} className='banner-img'></Image>
              <Image src={imgSrc} className='banner-img'></Image>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
