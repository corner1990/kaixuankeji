import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

class Success extends Component {

  state = {
    information: {
        address: '中国深圳市南山区',
        phone: '020-12345678',
        time: '10: 00 - 18: 00'
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  jumpIndex = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  render() {
    let srcLogo = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603011054419&di=83c22ffdf1aad9f63c3b3af45e72765a&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F42%2F51%2F90573d7eb6115f6.jpg'
    const { information } = this.state;
    return (
      <View className='book-result'>
          <View className='hader'>
            <Text className='header-h1'>预约成功</Text>
            <Image src={srcLogo} className='logo' />
            <Text className='header-text'>请于预约当日到工作站出示二维码给工作人员，避免排队！</Text>
         </View>
         <View className='section'>
            <Text className='section-h4'>预约站点名称</Text>
            <Text className='section-h5'>地址： {information.address}</Text>
            <Text className='section-h5'>电话： {information.phone}</Text>
            <Text className='section-h5'>营业时间： {information.time}</Text>
         </View>
         <View className='footer' onClick={this.jumpIndex}>
            返回首页
         </View>
      </View>
    )
  }
}

export default Success