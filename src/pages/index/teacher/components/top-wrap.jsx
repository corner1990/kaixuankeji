import React, { Component } from 'react'
import { View } from '@tarojs/components'

import './top-warp.scss'
import TopItem from './top-item'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  createItem() {
    let arr = [
      {
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257382072,1201596153&fm=26&gp=0.jpg',
        title: '2020年7月刊'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599725714192&di=b61054e0ca10a67ea5522c3bba7f9036&imgtype=0&src=http%3A%2F%2Fcdn053.yun-img.com%2Fstatic%2Fupload%2Fhzdrpet%2Falbum%2F20180330163835_93337.jpg',
        title: '2020年8月刊'
      },
      {
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257382072,1201596153&fm=26&gp=0.jpg',
        title: '2020年7月刊'
      },
    ]

    return arr.map((item, key)=> (<TopItem key={key} info={item} />))
  }
  render () {
    return (
      <View className='top-warp'>
        <View className='top-wrap-text'>TOP101</View>
        <View className='top-list-wrap'>
          <View className='top-list'>
            { this.createItem() }
          </View>
        </View>
      </View>
    )
  }
}
