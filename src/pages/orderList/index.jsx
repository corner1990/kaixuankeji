import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import Backhistory from '../../components/backhistory'
import ProductItem from './components/product-item'

import './index.scss'

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

  clickLeft = ()=>{
    Taro.navigateBack()
  }

  createItem() {
    let arr = []
    for (let i =0; i < 5; i++) {
      arr.push(<ProductItem key={i} />)
    }
    return arr
  }

  render() {
    const proImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598964919281&di=a67a76d014ac37cfb3b1d675cbed0358&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69352f5442326170746d6d4e4849384b4a6a79317a6258586178647058615f2121323537323137353736312e6a7067.jpg'
    const tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待发货' }, { title: '待收货' }, { title: '待评价' }]
    return (
      <View className='my'>
        <Backhistory title='我的订单' clickLeft={this.clickLeft}></Backhistory>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
          { this.createItem() }

          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
          { this.createItem() }
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
          { this.createItem() }
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
          { this.createItem() }
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
          { this.createItem() }
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
