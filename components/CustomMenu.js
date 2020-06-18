import React, {useState} from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';
import { StyleSheet, Image, TouchableOpacity, Linking, View } from 'react-native';
import { images } from '../res';
import Clipboard from "@react-native-community/clipboard";

export const CutomMenu = ({contentType, openBrowserTitle, copyLinkTitle, url, extraMenuItems}) => {
    const [menu, setMenu] = useState(null);

    const hideMenu = () => {
        if(menu) menu.hide();
    }

    const onPressCopy =  () => {
        Clipboard.setString(url);
        hideMenu();
    }

    const onPressOpenBrowser = () => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              alert("Don't know how to open URI: " + url);
            }
          });
        hideMenu();
    }

    const openMenu = () => {
        if(menu) menu.show();
    }

    const isFunction = (functionToCheck) => {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }

    const onPressExtraButton = (customOnPress) => {
        isFunction(customOnPress) ? customOnPress() : console.warn('onPress is not a function');
        hideMenu();
    }

    const renderExtraMenuItems = (res, i) => {
        return(
            <View key={i}>
                <MenuDivider  />
                <MenuItem onPress={() => onPressExtraButton(res.onPress)}>{res.title}</MenuItem>
            </View>
        );
    }

    return(
        <Menu
          ref={setMenu}
          button={<MenuButton onPress={openMenu} contentType={contentType} />}
        >
          <MenuItem onPress={onPressOpenBrowser}>{openBrowserTitle}</MenuItem>
          <MenuDivider />
          <MenuItem onPress={onPressCopy}>{copyLinkTitle}</MenuItem>
          {
              (extraMenuItems && extraMenuItems.length > 0) &&
              extraMenuItems.map(renderExtraMenuItems)
          }
        </Menu>
    );
}

const MenuButton = ({onPress, contentType}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.iconButton}>
          <Image
            source={contentType == 'light' ? images.menuLight:  images.menuDark }
            style={styles.icon}
          />
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
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
  });