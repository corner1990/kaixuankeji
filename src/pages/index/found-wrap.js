import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import CustomNavBar from '../../components/navbar'
// import SearchBar from './found/searchBar'
import Found from './found/found'
import Community from './community'
import Article from './article' // 文章列表页
import Seckill from './seckill' // 秒杀列表页
import Points from './points' //积分列表页
import Live from './live' //积分列表页


export default class Index extends Component {
  state= {
    current: 0,
    tabList: [
      {
        title: '找宝吧'
      },
      {
        title: '找宝社区'
      },
      {
        title: '媒体行动'
      },
      {
        title: '社会行动'
      },
    ]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
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
      <View className='found-wrap'>
        <CustomNavBar title='发现' />
        {/* <SearchBar className='found-search' /> */}
        
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={tabChange}
        >
          <AtTabsPane current={this.state.current} index={0} >
            <Found></Found>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <Community></Community>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <Live></Live>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <Article></Article>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
