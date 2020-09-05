import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from 'react-redux'
// import CustomNavBar from '../../../components/navbar'
import { setTab } from '../../../store/actions/global'


import './index.scss'

const mapState = state => state.global
class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    clickLeft = () => {
      this.props.setTab(2)
    }

    toDetail = () => {
      Taro.navigateTo({ url: '/pages/articleDetail/index'})
    }

    render() {
        let src = 'https://wx3.sinaimg.cn/mw690/008b8TwTgy1giboq2g2lmj30qk0aw16s.jpg'
        let src2 = 'https://wx3.sinaimg.cn/mw690/008b8TwTgy1gibp9swnntj302a029jrn.jpg'
        
        return (
          <View className='article'>
            {/* <CustomNavBar title='发现' /> */}
            <View className='article-list-item' onClick={()=>{this.toDetail()}}>
              <View className='article-time'>上午9:15</View>
              <Image src={src} className='article-img'></Image>
              <View className='content-wrap'>
                <View className='content-item'>
                  <View className='content-text'>品项:多维点染眉⽴体野⽣眉 绒⽑织补术,⽑发还原术⾯部磁场能量数字调整。</View>
                  <Image src={src2} className='content-img'></Image>
                </View>
                <View className='content-item'>
                  <View className='content-text'>品项:多维点染眉⽴体野⽣眉 绒⽑织补术,⽑发还原术⾯部磁场能量数字调整。</View>
                  <Image src={src2} className='content-img'></Image>
                </View>
              </View>
            </View>

            <View className='article-list-item' onClick={()=>{this.toDetail()}}>
              <View className='article-time'>上午9:15</View>
              <Image src={src} className='article-img'></Image>
              <View className='content-wrap'>
                <View className='content-item'>
                  <View className='content-text'>品项:多维点染眉⽴体野⽣眉 绒⽑织补术,⽑发还原术⾯部磁场能量数字调整。</View>
                  <Image src={src2} className='content-img'></Image>
                </View>
              </View>
            </View>

            <View className='article-list-item' onClick={()=>{this.toDetail()}}>
              <View className='article-time'>上午9:15</View>
              <Image src={src} className='article-img'></Image>
              <View className='content-wrap'>
                <View className='content-item'>
                  <View className='content-text'>品项:多维点染眉⽴体野⽣眉 绒⽑织补术,⽑发还原术⾯部磁场能量数字调整。</View>
                  <Image src={src2} className='content-img'></Image>
                </View>
                <View className='content-item'>
                  <View className='content-text'>品项:多维点染眉⽴体野⽣眉 绒⽑织补术,⽑发还原术⾯部磁场能量数字调整。</View>
                  <Image src={src2} className='content-img'></Image>
                </View>
              </View>
            </View>
          </View>
        )
    }
}

export default connect(mapState, { setTab })(Index)
