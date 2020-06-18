import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {images, colors} from '../res';
import {CutomMenu} from './CustomMenu';

export const Header = ({
  backgroundColor,
  title,
  contentType,
  onPressClose,
  url,
  openBrowserTitle,
  copyLinkTitle,
  extraMenuItems,
}) => {
  copyClipBoard = async () => {};
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor},
      ]}>
      <TouchableOpacity onPress={onPressClose} style={styles.iconButton}>
        <Image
          source={
            contentType === 'light' ? images.closeLight : images.closeDark
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.body}>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            {
              color:
                contentType === 'light'
                  ? colors.defaultBackground
                  : colors.dark,
            },
          ]}>
          {title}
        </Text>
        <Text numberOfLines={1} style={[styles.subtitle]}>
          {url}
        </Text>
      </View>
      <View>
        <CutomMenu
          extraMenuItems={extraMenuItems}
          contentType={contentType}
          openBrowserTitle={openBrowserTitle}
          copyLinkTitle={copyLinkTitle}
          url={url}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: Platform.OS == 'android' ? 50 : 60,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    //backgroundColor: colors.defaultBackground,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  body: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    color: colors.lightGray,
    fontWeight: 'bold',
  },
});
