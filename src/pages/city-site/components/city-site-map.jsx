import React from 'react'
import { View, Map } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.scss'
/**
 * @desc 城市工作站地图
 */
class CitySiteMap extends React.Component{
  state = {
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: false,
      showScale: false,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    longitude: 0,
    latitude: 0
  }
  componentDidMount() {
    this.initMap()
  }
  map = null
  backHistory = () => {}
  /**
   * @desc 初始化地图
   */
  initMap = () => {
    //container是地图显示模块id
    this.map = Taro.createMapContext('CitySiteMap')
    const success = res => {
      let { latitude, longitude } = res
      this.setState({ latitude, longitude })
      //移动到定位到的位置
    　this.map.moveToLocation()
    }
    Taro.getLocation({
      type: 'wgs84',
      success
    })
  }
  render() {
    let { setting, latitude, longitude } = this.state
    return (<View className='CitySiteMapWrap'>
      <Map
        id='CitySiteMap'
        longitude={longitude}
        latitude={latitude}
        {...setting}
        className='CitySiteMap'
      ></Map>
    </View>)
  }
}

export default CitySiteMap