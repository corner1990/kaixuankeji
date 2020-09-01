import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import Backhistory from '../../components/backhistory'

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

  render() {
    const proImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598964919281&di=a67a76d014ac37cfb3b1d675cbed0358&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69352f5442326170746d6d4e4849384b4a6a79317a6258586178647058615f2121323537323137353736312e6a7067.jpg'
    const tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待发货' }, { title: '待收货' }, { title: '待评价' }]
    return (
      <View className='my'>
        <Backhistory title='我的订单' clickLeft={this.clickLeft}></Backhistory>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className='order-item'>
              <View className='order-info-wrap'>
                <Text className='order-time'>2020.06.06 13:01:01</Text>
                <Text className='order-status red'>待付款</Text>
              </View>
              <View className='product-wrap'>
                <Image src={proImg} className='product-img'></Image>
                <View className='product-info-wrap'>
                  <View className='product-name'>新百伦新款男鞋 时尚男鞋</View>
                  <View className='product-detail'>规格：37码</View>
                  <View className='price-wrap'>
                    <Text className='price-num'>￥399×1</Text>
                    <Text className='total-price'>￥399</Text>
                  </View>
                </View>
              </View>
              <View className='operateion-wrap'>
                <View className='price-text'>
                  <Text className='fs-24'>总计</Text>
                  <Text className='fs-24 red'>￥</Text>
                  <Text className='all-total-price red'>399</Text>
                </View>
                <View className='btn-wrap'>
                  <AtButton type='primary' size='small' className='common-btn grey-btn'>取消订单</AtButton>
                  <AtButton type='primary' size='small' className='common-btn red-btn'>去付款</AtButton>
                </View>
              </View>
            </View>
            <View className='order-item'>
              <View className='order-info-wrap'>
                <Text className='order-time'>2020.06.06 13:01:01</Text>
                <Text className='order-status red'>待付款</Text>
              </View>
              <View className='product-wrap'>
                <Image src={proImg} className='product-img'></Image>
                <View className='product-info-wrap'>
                  <View className='product-name'>新百伦新款男鞋 时尚男鞋</View>
                  <View className='product-detail'>规格：37码</View>
                  <View className='price-wrap'>
                    <Text className='price-num'>￥399×1</Text>
                    <Text className='total-price'>￥399</Text>
                  </View>
                </View>
              </View>
              <View className='operateion-wrap'>
                <View className='price-text'>
                  <Text className='fs-24'>总计</Text>
                  <Text className='fs-24 red'>￥</Text>
                  <Text className='all-total-price red'>399</Text>
                </View>
                <View className='btn-wrap'>
                  <AtButton type='primary' size='small' className='common-btn grey-btn'>取消订单</AtButton>
                  <AtButton type='primary' size='small' className='common-btn red-btn'>去付款</AtButton>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className='order-item'>
              <View className='order-info-wrap'>
                <Text className='order-time'>2020.06.06 13:01:01</Text>
                <Text className='order-status red'>待付款</Text>
              </View>
              <View className='product-wrap'>
                <Image src={proImg} className='product-img'></Image>
                <View className='product-info-wrap'>
                  <View className='product-name'>新百伦新款男鞋 时尚男鞋</View>
                  <View className='product-detail'>规格：37码</View>
                  <View className='price-wrap'>
                    <Text className='price-num'>￥399×1</Text>
                    <Text className='total-price'>￥399</Text>
                  </View>
                </View>
              </View>
              <View className='operateion-wrap'>
                <View className='price-text'>
                  <Text className='fs-24'>总计</Text>
                  <Text className='fs-24 red'>￥</Text>
                  <Text className='all-total-price red'>399</Text>
                </View>
                <View className='btn-wrap'>
                  <AtButton type='primary' size='small' className='common-btn grey-btn'>取消订单</AtButton>
                  <AtButton type='primary' size='small' className='common-btn red-btn'>去付款</AtButton>
                </View>
              </View>
            </View>
            
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className='order-item'>
              <View className='order-info-wrap'>
                <Text className='order-time'>2020.06.06 13:01:01</Text>
                <Text className='order-status red'>待付款</Text>
              </View>
              <View className='product-wrap'>
                <Image src={proImg} className='product-img'></Image>
                <View className='product-info-wrap'>
                  <View className='product-name'>新百伦新款男鞋 时尚男鞋</View>
                  <View className='product-detail'>规格：37码</View>
                  <View className='price-wrap'>
                    <Text className='price-num'>￥399×1</Text>
                    <Text className='total-price'>￥399</Text>
                  </View>
                </View>
              </View>
              <View className='operateion-wrap'>
                <View className='price-text'>
                  <Text className='fs-24'>总计</Text>
                  <Text className='fs-24 red'>￥</Text>
                  <Text className='all-total-price red'>399</Text>
                </View>
                <View className='btn-wrap'>
                  <AtButton type='primary' size='small' className='common-btn grey-btn'>取消订单</AtButton>
                  <AtButton type='primary' size='small' className='common-btn red-btn'>去付款</AtButton>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View className='order-item'>
              <View className='order-info-wrap'>
                <Text className='order-time'>2020.06.06 13:01:01</Text>
                <Text className='order-status red'>待付款</Text>
              </View>
              <View className='product-wrap'>
                <Image src={proImg} className='product-img'></Image>
                <View className='product-info-wrap'>
                  <View className='product-name'>新百伦新款男鞋 时尚男鞋</View>
                  <View className='product-detail'>规格：37码</View>
                  <View className='price-wrap'>
                    <Text className='price-num'>￥399×1</Text>
                    <Text className='total-price'>￥399</Text>
                  </View>
                </View>
              </View>
              <View className='operateion-wrap'>
                <View className='price-text'>
                  <Text className='fs-24'>总计</Text>
                  <Text className='fs-24 red'>￥</Text>
                  <Text className='all-total-price red'>399</Text>
                </View>
                <View className='btn-wrap'>
                  <AtButton type='primary' size='small' className='common-btn grey-btn'>取消订单</AtButton>
                  <AtButton type='primary' size='small' className='common-btn red-btn'>去付款</AtButton>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View className='order-item'>
              <View className='order-info-wrap'>
                <Text className='order-time'>2020.06.06 13:01:01</Text>
                <Text className='order-status red'>待付款</Text>
              </View>
              <View className='product-wrap'>
                <Image src={proImg} className='product-img'></Image>
                <View className='product-info-wrap'>
                  <View className='product-name'>新百伦新款男鞋 时尚男鞋</View>
                  <View className='product-detail'>规格：37码</View>
                  <View className='price-wrap'>
                    <Text className='price-num'>￥399×1</Text>
                    <Text className='total-price'>￥399</Text>
                  </View>
                </View>
              </View>
              <View className='operateion-wrap'>
                <View className='price-text'>
                  <Text className='fs-24'>总计</Text>
                  <Text className='fs-24 red'>￥</Text>
                  <Text className='all-total-price red'>399</Text>
                </View>
                <View className='btn-wrap'>
                  <AtButton type='primary' size='small' className='common-btn grey-btn'>取消订单</AtButton>
                  <AtButton type='primary' size='small' className='common-btn red-btn'>去付款</AtButton>
                </View>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
