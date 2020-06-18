import React, {useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import {WebView} from 'react-native-webview';
import {Header} from './components/Header';
import Progress from './components/Progress';
import {colors} from './res';

const BeautyWebView = ({
  visible,
  onPressClose,
  backgroundColor,
  headerContent, // 'dark' || 'light', default 'dark'
  headerBackground, // default #fff
  url, // Required
  progressColor,
  progressHeight,
  loadingText,
  copyLinkTitle,
  openBrowserTitle,
  extraMenuItems,
  animationType
}) => {
  const [progressRef, setProgressRef] = useState(null);
  const [title, setTitle] = useState(loadingText);

  const onProgress = (progress) => {
    progressRef?.startAnimation(progress);
  };

  return (
    <Modal visible={visible} transparent={false} animationType={animationType}>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <Header
          backgroundColor={headerBackground}
          contentType={headerContent}
          title={title}
          url={url}
          onPressClose={onPressClose}
          copyLinkTitle={copyLinkTitle}
          openBrowserTitle={openBrowserTitle}
          extraMenuItems={extraMenuItems}
        />
        <Progress
          height={progressHeight}
          color={progressColor}
          ref={(progress) => setProgressRef(progress)}
        />
        <WebView
          source={{uri: url}}
          onLoadProgress={({nativeEvent}) => {
            let loadingProgress = nativeEvent.progress;
            onProgress(loadingProgress);
          }}
          injectedJavaScript="window.ReactNativeWebView.postMessage(document.title)"
          onMessage={event => setTitle(event.nativeEvent.data)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

BeautyWebView.defaultProps = {
  transparent: true,
  backgroundColor: colors.defaultBackground,
  headerContent: 'dark', 
  headerBackground: colors.defaultBackground,
  progressColor: colors.progress,
  progressHeight: 4,
  loadingText: 'Loading...',
  copyLinkTitle: 'Copy Link',
  openBrowserTitle: 'Open on Browser',
  animationType: "slide"
}

export default BeautyWebView;
