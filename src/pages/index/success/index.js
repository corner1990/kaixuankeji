import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

class Success extends Component {

  state = {
    information: {
        address: "中国深圳市南山区",
        phone: "020-12345678",
        time: "10: 00 - 18: 00"
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let srcLogo = 'https://ipxcdn.jfshare.com/ipxmall/6ce565e43f93c837395add8da8334012'
    const { information } = this.state;
    return (
      <View className="content-success">
          <View className="hader">
            <Text className="header-h1">预约成功</Text>
            <Image src={srcLogo} className='logo' />
            <Text className="header-text">请于预约当日到工作站出示二维码给工作人员，避免排队！</Text>
         </View>
         <View className="section">
            <Text className="section-h4">预约站点名称</Text>
            <Text className="section-h5">地址： {information.address}</Text>
            <Text className="section-h5">电话： {information.phone}</Text>
            <Text className="section-h5">营业时间： {information.time}</Text>
         </View>
         <View className="footer">
            返回首页
         </View>
      </View>
    )
  }
}

export default Success