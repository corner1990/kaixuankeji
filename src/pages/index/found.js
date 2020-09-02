import React, { Component } from 'react'
import { View } from '@tarojs/components'
import CustomNavBar from '../../components/navbar'
// import SearchBar from './found/searchBar'
import Found from './found'


export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  render () {

   
    
    return (
      <View className='found-wrap' >
        <CustomNavBar title='发现' />
        {/* <SearchBar className='found-search' /> */}
        <Found></Found>
      </View>
    )
  }
}
