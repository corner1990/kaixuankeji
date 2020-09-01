import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Backhistory from '../../../components/backhistory'
// import { connect } from 'react-redux'
// import Tabbar from '../../../components/tabbar'
// import CustomNavBar from '../../../components/navbar'

import './index.scss'

export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        let src = 'https://ipxcdn.jfshare.com/ipxmall/avatar/1124addfcd0cec4ae8db434154d8162a.jpg'
        return (
          <View className='endorsement'>
              {/* <CustomNavBar title='我的' /> */}
              <Backhistory title='代言中心'></Backhistory>
              <View className='endorsement-conent'>
              <View className='header'>
                  <View className='header-icon-wrap'>
                      <Image src={src} className='avatar' />
                  </View>
                  <View className='header-text-wrap'>

                  </View>
              </View>

              <View className='money-wrap'>
                  <View className='money-title'>
                      <Text className='my-money'>可提现金额</Text>
                      <Text className='money-num'>￥688.88</Text>
                  </View>
                  <View className='money-btn'>去提现</View>
              </View>

              <View className='income-wrap'>
                  <View className='income-item'>
                      <View>累计收益</View>
                      <View className='income-num'>￥888.88</View>
                  </View>
                  <View className='income-item'>
                      <View>待结算</View>
                      <View className='income-num'>￥888.88</View>
                  </View>
              </View>

              <View>
                  <View className='me'>
                      <View className='bookcase'>
                          <View>66</View>
                          <View>推广订单</View>
                      </View>
                      <View className='line'></View>
                      <View className='magazine'>
                          <View>168</View>
                          <View>绑定客户</View>
                      </View>
                  </View>
              </View>

              <View className='link-wrap'>
                  <AtIcon value='shopping-bag' size='24'></AtIcon>
                  <View className='info-wrap'>
                      <View className='text-title'>推广商品中心</View>
                      <View className='text-des'>对外分享商品，赚取推广提成</View>
                  </View>
                  <AtIcon value='chevron-right' size='22' className='arrow' ></AtIcon>
              </View>

              <View className='link-wrap'>
                  <AtIcon value='shopping-bag' size='24'></AtIcon>
                  <View className='info-wrap'>
                      <View className='text-title'>邀请下级推广员</View>
                      <View className='text-des'>邀请好友成为下级推广员，赚取邀请奖励</View>
                  </View>
                  <AtIcon value='chevron-right' size='22' className='arrow' ></AtIcon>
              </View>
              </View>
              {/* <Tabbar index={2} /> */}
          </View>
        )
    }
}
