import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import Tabbar from '../../components/tabbar'
import Home from './home' // 首页
import Found from './found-wrap' // 公益活动
import User from './user' // 我的页面
import Mall from './mall' // 积分商城
import Business from './business' // 商务合作
import Join from './join' // 在线加盟

// import Endorsement from './endorsement' // 代言中心
// import FoundArticle from './found-article' // 发现文章页
// import Teacher from './teacher' // 发现文章页
// import Article from './article' // 文章列表页

import './index.scss'

const mapState = state => state.global
class Index extends Component {
  state = {
    // tab只有三个，当下标大于2的组件在内页跳转的时候需要在global中配置当前组件的坐标到对应的tab active 中
    // 如Endorsement下标为3, 我需要他展示我的，那么我需要3 配置到tabbar里{ title: '我的', iconType: 'user', active: [ 2, 3]} 中
    components: [Home, Found, Mall, User, Business, Join]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    let { tabIndex } = this.props
    let { components } = this.state
    let Com = components[tabIndex]
    
    return (
      <View className='layout'>
        <Com />
        <Tabbar />
      </View>
    )
  }
}

export default connect(mapState)(Index)
