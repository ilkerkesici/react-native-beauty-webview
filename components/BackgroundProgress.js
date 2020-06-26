import React, {Component} from 'react';
import {View, Animated, StyleSheet, Platform } from 'react-native';

export default class Progress extends Component{

    state = {
        animated: new Animated.Value(0),
        animatedHeight: new Animated.Value(this.props.height || 3),
    }

    startAnimation = (toValue) => {
        const  { animated } = this.state;
        const { duration} = this.props;
        Animated.timing(
            animated,
            {
              toValue: toValue,
              duration: duration || 100,
              useNativeDriver: false
            },
          ).start()
          if(toValue == 1){
              setTimeout(() => {
                this.hide();
              }, duration || 100)
          }
    }

    hide = () => {
        this.state.animated.setValue(0);
    }
    
    render(){
        const { animated} = this.state;
        const { content } = this.props;
        return(
            <View style={[styles.container]}>
                <Animated.View                 
                style={{
                    ...styles.inner,
                    flex: animated,
                    backgroundColor: content === 'light' ? 'rgba(255,255,255,0.2)'  : 'rgba(0,0,0,0.1)',
                }}
                >
            </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        right: 0,
        left: 0,
        top: Platform.OS === 'ios' ? 20 : 0,
        bottom: 0,
        flexDirection: 'row',
        position: 'absolute',
        zIndex: -1
    },
    inner:{
        alignSelf: 'stretch',
    }
});