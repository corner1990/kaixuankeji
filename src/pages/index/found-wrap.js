import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import CustomNavBar from '../../components/navbar'
// import SearchBar from './found/searchBar'
import Found from './found/found' // 朋友圈样式
import Community from './community' 
import Article from './article' // 文章列表页
import Activity from './activity' // 公益活动
import MediaActivity from './mediaActivity' // 公益活动
import AboutTab from './aboutTab' // 关于虹膜
import FindTab from './findTab' // 找宝社区
import Live from './live' //积分列表页
import './index.scss'


export default class Index extends Component {
  state= {
    current: 0,
    tabList: [
      // {
      //   title: '关于虹膜'
      // },
      // {
      //   title: '公益头条'
      // },
      // {
      //   title: '公益活动'
      // },
      {
        title: '找宝吧'
      },
      {
        title: '找宝社区'
      },
      {
        title: '工作站'
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
          scroll
          current={current}
          tabList={tabList}
          onClick={tabChange}
        >
          {/* 关于虹膜 */}
          {/* <AtTabsPane current={this.state.current} index={0} >
            <AboutTab></AboutTab>
          </AtTabsPane> */}

          {/* 公益头条 */}
          {/* <AtTabsPane current={this.state.current} index={1}>
            <Article></Article>
          </AtTabsPane> */}

          {/* 公益活动 */}
          {/* <AtTabsPane current={this.state.current} index={2}>
            <Activity></Activity>
          </AtTabsPane> */}

          <AtTabsPane current={this.state.current} index={0}>
            <FindTab></FindTab>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={1}>
            <FindTab></FindTab>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={2}>
            <Community></Community>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={3}>
            <MediaActivity></MediaActivity>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={4}>
            <Article></Article>
          </AtTabsPane>

        </AtTabs>
      </View>
    )
  }
}
