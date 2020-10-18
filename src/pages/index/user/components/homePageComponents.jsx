import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
 
  
  render () {
    const { data } = this.props;
    
    return (
      <View className='UserCardWrap'>
        {
          data.map((item) => {
            let { click = () => {} } = item
             return (
               <View key={item.id} className='UserCard'>
                <View className='common' onClick={click}>
                  <View className='commonLeft'>
                    <View className='commonLeftHade'>{item.name}</View>
                  </View>
                  <View>
                    <AtIcon  value='chevron-right' size='24' color='#eee'></AtIcon>
                  </View>
                </View>
                <View class='underline'></View>
               </View>
             )
          })
        }
      </View>
    )
  }
}
