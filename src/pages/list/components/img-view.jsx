import React, { Component } from 'react'
// import "taro-ui/dist/style/components/icon.scss";
import { View, Image } from '@tarojs/components'
import './img-view.scss'

export default class Index extends Component {
  state = {
    style: {}
  }
  imgLoad = async e => {
    let style = e.detail
    let res = wx.getSystemInfoSync()
    let width = res.screenWidth
    let height = width/style.width * style.height
    this.setState({ style: {width, height} })
  }
  render () {
    // let src = 'http://mcdn.jfshare.com/image/default/B231953790204DB4AA731D8B3BF50262-6-2.jpeg'
    let { img, showslider } = this.props
    let { style } = this.state
    return (
      <View className='img-view'>
        <Image
          src={img}
          className={['img-material', (showslider ? 'mb400' : '')]}
          mode='widthFix'
          style={style}
          onLoad={this.imgLoad}
        />
      </View>
    )
  }
}
