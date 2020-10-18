import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from 'react-redux'
import { setTab } from '../../../store/actions/global'
import CustomNavBar from '../../../components/navbar'

import './index.scss'

const mapState = state => state.global
class Index extends Component {

  toUser = (item) => {
    this.props.setTab(3)
  }

    render() {
      let src='https://ipxcdn.jfshare.com/ipxmall/90390d13728d0d32fb849855cd6fb6c6'
        
        return (
          <View className='business-wrap'>
            <CustomNavBar title={'商业合作'} clickLeft={this.toUser}/>
            <Image src={src} className='img'></Image>
          </View>
        )
    }
}

export default connect(mapState, { setTab })(Index)
