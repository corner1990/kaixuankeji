import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image,  } from '@tarojs/components'
import {  AtToast } from 'taro-ui'
import { connect } from 'react-redux'
// import CustomNavBar from '../../../components/navbar'
import { setTab } from '../../../store/actions/global'

import HomePageComponents from './components/homePageComponents'
// import Success from './success'
import './index.scss'

const mapState = state => state.global

class Index extends Component {

  state = {
    isOpened: false,
    data: [
      {
        name: '我的预约',
        id: '1',
        click: () => Taro.navigateTo({url: '/pages/my-book/index'})
      },
      {
        name: '收货地址',
        id: '2',
        click: () => Taro.navigateTo({url: '/pages/address/index'})
      },
      {
        name: '在线加盟',
        id: '4',
        click: () => this.props.setTab(5)
      },
      {
        name: '商务合作',
        id: '5',
        click: () => this.props.setTab(4)
      }
    ],
    list: [
      {
        name: '帮助中心',
        id: '1',
      },
      {
        name: '隐私协议',
        id: '2',
      },
      {
        name: '投诉建议',
        id: '3',
      },
      {
        name: '联系我们',
        id: '4',
      },
    ]
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toEndorsement = (item) => {
    this.props.setTab(3)
  }

  toOrderList = ()=>{
    Taro.navigateTo({ url: '/pages/orderList/index'})
  }
  /**
   * @desc 跳转收藏
   */
  toCollection =()=>{
    Taro.navigateTo({ url: '/pages/collection/index'})
  }
  /**
   * @desc 跳转定于
   */
  toSubscribe =()=>{
    Taro.navigateTo({ url: '/pages/subscribe/index'})
  }


  handleToast=()=>{
    this.setState({ isOpened:true })
  }

  
  toMail = (item) => {
    this.props.setTab(2)
  }

  toBusiness = (item) => {
    this.props.setTab(3)
  }

  userClick = e => {
    console.log('123 userClick')
    e.stopPropagation()
  }
  render() {
    let src = 'https://ipxcdn.jfshare.com/ipxmall/eb734bde185fe94789288fc7b69365a0'
    let srcLogo = 'https://ipxcdn.jfshare.com/ipxmall/6ce565e43f93c837395add8da8334012'
    let moneySrc = 'https://ipxcdn.jfshare.com/ipxmall/1dd7818897b73fc9603813ac853d1754'

    let { isOpened, data,list }=this.state;

    return (
      <View className="content-user" onClick={this.userClick}>
        {/* <Success /> */}
        <View className='header'>
          <View className='header-icon-wrap'>
            <Image src={src} className='avatar' />
          </View>
          <View className='header-text-wrap'>
            <View>
              <View className='info-num'>天生骄傲</View>
              <View className='info-level'>LV2</View>
            </View>
            <View>
              <View className='info-num'>设置</View>
            </View>
          </View>
        </View>

       <View className='nav'>
          <View>
            <View className='nav-num'>5320</View>
            <View className='nav-text'>优惠券</View>
          </View>
          <View>
            <View className='nav-num'>218</View>
            <View className='nav-text'>积分</View>
          </View>
          {/* <View>
            <View onClick={this.toMail}>积分商城</View>
          </View> */}
        </View>

        <View style={{textAlign:'center', padding:'0 10px'}}>
          <Image src={moneySrc} style={{width:'100%', height:'50px', }} />
        </View>

        <View className='UserLinkItem'>
          <HomePageComponents data={data}  />
          <HomePageComponents data={list} />
        </View>

        <AtToast isOpened={isOpened} text="功能开发中，敬请期待！"></AtToast>
      </View>
    )
  }
}

export default connect(mapState, { setTab })(Index)