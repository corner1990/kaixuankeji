import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import Backhistory from '../../components/backhistory'
import MagazineItem from './components/magazine-item'

import './index.scss'

/**
 * @desc 我的收藏
 */
export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  clickLeft = () => {
    Taro.navigateBack()
  }

  createItem() {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push(<ProductItem key={i} />)
    }
    return arr
  }

  createMagazineItem() {
    let arr = [
      {
        img: 'https://ipxcdn.jfshare.com/ipxmall/524d44840865e8498b7ed502ef18b195',
        title: '2020年8月刊'
      },
      {
        img: 'https://ipxcdn.jfshare.com/ipxmall/6e023bf2bd069afbc56e66ae8d215e0b',
        title: '2020年7月刊'
      },
      {
        img: 'https://ipxcdn.jfshare.com/ipxmall/6e023bf2bd069afbc56e66ae8d215e0b',
        title: '2020年6月刊'
      }
    ]

    return arr.map((item, key) => (<MagazineItem key={key} info={item} />))
  }

  render() {

    return (
      <View className='my'>
        <Backhistory clickLeft={this.clickLeft}></Backhistory>

        <View className='magazine-wrap'>
          {this.createMagazineItem()}
        </View>
      </View>
    )
  }
}
