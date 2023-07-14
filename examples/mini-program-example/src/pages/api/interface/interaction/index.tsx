import React from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

/**
 * 界面-交互
 * @returns 
 */

export default class Index extends React.Component {
    state = {
        list: [
            {
                id: 'showToast',
                func: null,
            }, 
            {
                id: 'showModal',
                func: null,
            }, 
            {
                id: 'showLoading',
                func: null,
            }, 
            {
                id: 'showActionSheet',
                func: null,
            }, 
            {
                id: 'hideToast',
                func: null,
            }, 
            {
                id: 'hideLoading',
                func: null,
            }, 
            {
                id: 'enableAlertBeforeUnload',
                func: null,
            }, 
            {
                id: 'disableAlertBeforeUnload',
                func: null,
            }, 
        ], 
    }
    render () {
        return (
            <View className='api-page'>
                {
                    this.state.list.map((item) => {
                        return (
                            <Button
                                className='api-page-btn'
                                type='primary'
                                onClick={item.func == null ? () => {} : item.func}
                            >
                                {item.id}
                                {
                                    item.func == null && (<Text className='navigator-state tag'>未创建Demo</Text>)
                                }
                            </Button>
                        )
                    })
                }
            </View>
        )
    }
}
