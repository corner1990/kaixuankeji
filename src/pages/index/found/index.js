import React, { Component } from 'react'
import { View } from '@tarojs/components'
import CustomNavBar from '../../../components/navbar'
// import SearchBar from './found/searchBar'
import Card from './/card'
import './index.scss'


export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  render () {

    const data = [
        {
        textTitle: "名称",
        textMark: "文章描述",
        month: "07",
        day: '03'
      }, {
        textTitle: "名称",
        textMark: "文章描述",
        month: "08",
        day: '08'
    },
    {
      textTitle: "名称",
      textMark: "文章描述",
      month: "01",
      day: '02'
  },
  {
    textTitle: "名称",
    textMark: "文章描述",
    month: "10",
    day: '08'
  },];
    
    return (
      <View className='found' >
        <CustomNavBar title='发现' />
        {/* <SearchBar className='found-search' /> */}
        {
          data.map((item, index)=> 
            ( <Card key={index} data={item} />) 
          )
        }
      </View>
    )
  }
}
