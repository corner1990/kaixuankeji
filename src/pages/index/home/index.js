import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtTabs, AtTabsPane } from 'taro-ui'
import CustomNavBar from '../../../components/navbar'
import SwiperWrap from './components/swiper'
import CitySite from './components/city-site'

import './home.scss'


const mapState = state => state.global
class Home extends Component {
  state = {
    current: 0,
    tabList: [
      {
        title: '公益头条'
      },
      {
        title: '公益新闻'
      }
    ]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  touchstart = e => {
    e.stopPropagation()
    e.preventDefault()
    let { isTouch } = this.state
    if(isTouch) {
      this.setIsTouch()
    }
  }
  /**
   * @desc 控制是否页面可以滚动
   * @param { number | undefined } val 
   */
  setIsTouch = (isTouch = false) => {
    this.setState({ isTouch })
  }
  /**
   * @desc 动态控制是否显示navBar
   */
  getNavBar = () => {
    let title = '首页'
    return (<CustomNavBar title={title} />)
  }
  /**
   * @desc 切换tab
   * @param {*} current 
   */
  tabChange = current => {
    this.setState({
      current
    })
    
  }
  render () {
    let { current, tabList } = this.state
    let { tabChange } = this
    return (
      <View className='home' >
        { this.getNavBar() }
        <SwiperWrap />
        <CitySite />
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={tabChange}
          className='HomeTabs'
        >
          <AtTabsPane current={this.state.current} index={0} >
            公益头条
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            公益新闻
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default connect(mapState)(Home)
