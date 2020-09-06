import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import Backhistory from '../../components/backhistory'
import ProductItem from './components/product-item'
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
    const proImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598964919281&di=a67a76d014ac37cfb3b1d675cbed0358&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69352f5442326170746d6d4e4849384b4a6a79317a6258586178647058615f2121323537323137353736312e6a7067.jpg'
    const tabList = [{ title: '收藏书架' }, { title: '收藏商品' }]
    return (
      <View className='my'>
        <Backhistory clickLeft={this.clickLeft}></Backhistory>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className='magazine-wrap'>
              {this.createMagazineItem()}
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            {this.createItem()}
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
