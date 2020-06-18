import React, {Component} from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { colors } from '../res';

export default class Progress extends Component{

    state = {
        animated: new Animated.Value(0),
    }

    // hello = (progress) => {
    //     console.log(progress);
    //     this.startAnimation(progress);
    // }

    startAnimation = (toValue) => {
        console.log(toValue);
        Animated.timing(
            this.state.animated,
            {
              toValue: toValue,
              duration: this.props.duration || 100,
              useNativeDriver: false
            },
          ).start()
    }

    render(){
        return(
            <View style={[styles.container, {height: this.props.height || 3}]}>
                <Animated.View                 
                style={{
                    ...styles.inner,
                    flex: this.state.animated,
                    backgroundColor: this.props.color || colors.progress
                }}
                >
            </Animated.View>
            </View>
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

