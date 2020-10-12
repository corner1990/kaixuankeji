import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtTabs, AtTabsPane } from 'taro-ui'
import CustomNavBar from '../../../components/navbar'
import SwiperWrap from './components/swiper'
import IconWrap from './components/icon-wrap'
import Project from './components/project'
import ProjectItem from './components/project-item'
import ActItem from './components/act-item'

import './index.scss'


const mapState = state => state.global
class Mall extends Component {
  state = {
    current: 0,
    actData:[{name:'1'},{name:'1'},{name:'1'},{name:'1'},{name:'1'},{name:'1'}]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getNavBar = () => {
    let title = '积分商城'
    return (<CustomNavBar title={title} />)
  }

  renderAct = ()=>{
    let { actData } = this.state
    return (<View className='act-item-wrap'>
      {actData.map((item, key) => {
        return <ActItem key={key} />
      })}
    </View>)
  }


  render () {
    let { current, tabList } = this.state
    let { tabChange, renderAct } = this

    return (
      <View className='home' >
        { this.getNavBar() }
        <SwiperWrap />
        <IconWrap />
        <Project title='慈善捐助' card={<ProjectItem />} />
        <Project title='优惠活动' card={renderAct()} />
      </View>
    )
  }
}

export default connect(mapState)(Mall)
