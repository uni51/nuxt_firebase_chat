import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import config from './../firebaseConfig.json'

// 以下で firebase に firebase.json に定義してある設定値をセットしています。
if (!firebase.apps.length) {
  firebase.initializeApp({ ...config })
}

// 以下で firebase の今回使用する機能を Vue インスタンスの Context に注入しています。
// これで各vueファイルで毎回 import しなくても firebase の機能が使用できるようになります。
export default ({ app }, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('fireAuth', firebase.auth())
  inject('fireStorage', firebase.storage())
}