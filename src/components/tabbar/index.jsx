import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux'
import './index.scss'
import { setTab } from '../../store/actions/global'

const mapState = state => state.global

const Index = props => {
  
  const tabList = [
    { title: '首页', iconType: 'home'},
    { title: '发现', iconType: 'eye' },
    { title: '我的', iconType: 'user'}
  ]
  const handleClick =  (value) => {
    props.setTab(value)
  }
  /**
   * @desc 处理tab item
   */
  const getTab = () => {
    let { tabIndex } = props
    return tabList.map((item, key) => {

      if (key !== tabIndex) {
        return (<View
          key={key}
          className='tab-item'
          onClick={() => handleClick(key)} 
        >
          <AtIcon value={item.iconType} size='20' color='#FFF'></AtIcon>
          {tabIndex == 3 && key ==2 ? <View  className='tab-text'>我的</View> : null}
        </View>)
      }

      return (<View
        key={key}
        className='tab-item'
        onClick={() => handleClick(key)} 
      >
        <AtIcon value={item.iconType} size='20' color='#FFF'></AtIcon>
        <View  className='tab-text'>
          { item.title }
        </View>
      </View>)
    })
  }
    return (
      <View className='custom-tabbar-wrap'>
        { getTab() }
      </View>
    )
}

export default connect(mapState, { setTab })(Index)
