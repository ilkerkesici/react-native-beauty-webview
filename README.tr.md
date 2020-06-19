<p>
  <a href="https://github.com/ilkerkesici/react-native-beauty-webview/blob/master/README.md">
    <img alt="Build Status" src="https://img.shields.io/static/v1?label=lang&message=en&color=yellow" target="_blank" />
 </a>
  <a href="https://yarnpkg.com/package/react-native-beauty-webview">
    <img alt="Documentation" src="https://img.shields.io/static/v1?label=pack&message=yarn&color=blue" target="_blank" />
  </a>
  <a href="https://www.npmjs.com/package/react-native-beauty-webview">
    <img alt="Documentation" src="https://img.shields.io/static/v1?label=pack&message=npm&color=red" target="_blank" />
  </a>
</p>

# Kolay kullanılabilir react-native webview
## :star2: Özellikler
- Kolay kullanım
- Kolay yapılandırma
- Güzel görünüm
- URL kopyalama 
- Tarayıcıda açma
- Web sitesinin başlığını uygulama başlığında görme

## :star: Ekran Görüntüleri

![](./assets/ios.gif)
![](./assets/android.gif)

## :arrow_down: Kurulum

#### react-native-webview paketini kurun
react-native-webview paketinin detaylı kurulumu için, <a href="https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md">tıklayınız</a>.

```sh
$ yarn add react-native-webview

or

$ npm install --save react-native-webview


```

#### @react-native-community/clipboard paketini kurun
Bu paketin detaylı kurulumunu görmek için, lütfen <a href="https://github.com/react-native-community/clipboard">tıklayınız</a>.

```sh
$ yarn add @react-native-community/clipboard

or

$ npm install --save @react-native-community/clipboard


```

#### Yukarıdaki paketlerin native bağımlılıklarını kuralım (IOS için)
@react-native-community/clipboard and @react-native-community/react-native-webview paketlerinin native bağımlılıklarını kurunuz. Eğer react-native versiyonunuz 0.60.x altında ise, paketlerin resmi dökümantasyonunu incelemelisiniz.

```sh

$ cd ios && pod install

```
#### Şimdi paketimizi kuralım
```sh

$ yarn add react-native-beauty-webview

or

$ npm install --save react-native-beauty-webview

```

## :flashlight: Örnek Kullanım
```sh
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import BeautyWebView from './react-native-beauty-webview';

const App = () => {
  const [visible, setVisible] = useState(false);
  const onButtonPress = () => {
    setVisible(true);
  };

  return (
    <>
      <View style={styles.container}>
        <BeautyWebView
          visible={visible} // Reguired for open and close
          onPressClose={() => setVisible(false)} // Reguired for closing the modal
          url={'https://github.com/'}
          extraMenuItems={[
            {
              title: 'Extra Item',
              onPress: () => console.log('Extra Menu Item Clicked'),
            },
          ]}
        />
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.text}>Open</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#2196f3',
    marginHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;


```
## :paperclip: Yapılandırma

| Parametreler | Tip | Varsayılan | Gerekli | Açıklama |
| --- | --- | --- | --- | --- |
| visible | boolean | false | Evet | Ekranın görünürlülüğü |
| onPressClose | function | - | Evet | Kapatma butonuna basınca çalışır (Ekranı kapatmak için 'visible' parametresinin değerini false yapmalısınız) |  
| url | string | - | Evet | Websitenin bağlantısı |
| backgroundColor | string | #fff | - | Ekranın arka plan rengi |
| headerContent | 'dark' or 'light' | 'dark' | - | Başlığın içerik rengi |
| headerBackground | string | #fff | - | Başlığın arka plan rengi |
| progressColor | string | #2196f3 | - | Yüklenme çubuğunun rengi |
| loadingText | string | 'Loading...' | - | Yüklenirken görünen yazı |
| copyLinkTitle | string | 'Copy Link' | - | Bağlantıyı kopyalama butonu yazısı |
| openBrowserTitle | string | 'Open on Browser' | - | Tarayıcı da açma butonunun yazısı |
| extraMenuItems | Array | - | - | Menüye fazladan buton eklenmek isteniyorsa kullanılır (Örneği yukarıda mevcut) |
| animationType | 'slide' or 'fade' | 'slide' | - | Ekranın açılma animasyon tipi |


## :warning: Bağımlılıklar
### @react-native-community/react-native-webview
Paketi kullanmadan önce @react-native-community/react-native-webview paketini kurmanız gerekir. Daha fazla bilgi için, lütfen <a href="https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md">tıklaynız</a>.
### @react-native-community/clipboard
Paketi kullanmadan önce @react-native-community/clipboard paketini kurmanız gerekir. Daha fazla bilgi için, lütfen <a href="https://github.com/react-native-community/clipboard">tıklaynız</a>.

## :clipboard: Referanslar
#### mxck/react-native-material-menu
Menü bileşeni için, bu paketten yararlandım. Daha fazla bilgi almak için, lütfen <a href="https://github.com/mxck/react-native-material-menu">tıklayınız</a>.
