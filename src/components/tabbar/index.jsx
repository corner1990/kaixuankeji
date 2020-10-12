import React from 'react'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux'
import './index.scss'
import { setTab } from '../../store/actions/global'

const mapState = state => state.global

const Index = props => {

  // activelist 数字对应的是index组件中components的标
  const tabList = [
    { title: '首页', iconType: 'home', active: [0, ]},
    { title: '公益活动', iconType: 'eye', active: [1, ]},
    { title: '积分商城', iconType: 'shopping-bag', active: [2, ]},
    { title: '我的', iconType: 'user', active: [ 3, ]}
  ]
  const handleClick =  (value) => {
    props.setTab(value)
  }
  
  /**
   * @desc 处理tab item
   */
  const getTab = () => {
    return tabList.map((item, key) => {
      // 处理返回数据
      return (<View
        key={key}
        className='tab-item'
        onClick={() => handleClick(key)} 
      >
        <AtIcon value={item.iconType} size='20' color='rgba(7,7,7,0.85)'></AtIcon>
        <View  className='tab-text'>{ item.title }</View>
      </View>)

      // return (<View
      //   key={key}
      //   className='tab-item'
      //   onClick={() => handleClick(key)} 
      // >
      //   <AtIcon value={item.iconType} size='20' color='#FFF'></AtIcon>
      //   <View  className='tab-text'>
      //     { item.title }
      //   </View>
      // </View>)
    })
  }
    return (
      <View className='custom-tabbar-wrap' id='custom-tabbar-wrap'>
        { getTab() }
      </View>
    )
}

export default connect(mapState, { setTab })(Index)
