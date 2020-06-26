import React, {Component} from 'react';
import { Animated, StyleSheet } from 'react-native';
import { colors } from '../res';

export default class Progress extends Component{

    state = {
        animated: new Animated.Value(0),
        animatedHeight: new Animated.Value(this.props.height || 3),
    }

    startAnimation = (toValue) => {
        const  { animated } = this.state;
        const { duration} = this.props;
        if(toValue <= 0.12) this.show();
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

    show = () => {
        const  { animatedHeight } = this.state;
        const { height } = this.props;
        Animated.timing(
            animatedHeight,
            {
              toValue: height || 3 ,
              duration: 50,
              useNativeDriver: false
            },
          ).start();
    }

    hide = () => {
        const  { animatedHeight, animated } = this.state;
        Animated.timing(
            animatedHeight,
            {
              toValue: 0,
              duration: 100,
              useNativeDriver: false
            },
          ).start();

          setTimeout(() => {
            animated.setValue(0);
          },120);
    }

    render(){
        const { animated, animatedHeight } = this.state;
        return(
            <Animated.View style={[styles.container, {height: animatedHeight }]}>
                <Animated.View                 
                style={{
                    ...styles.inner,
                    flex: animated,
                    backgroundColor: this.props.color || colors.progress,
                }}
                >
            </Animated.View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    inner:{
        alignSelf: 'stretch',
    }
});

