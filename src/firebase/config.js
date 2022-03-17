import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyC0VadJhaUpZJ8f4REEEC0BnhGMQdPwm8I",
	authDomain: "blog-vue-project-911ca.firebaseapp.com",
	projectId: "blog-vue-project-911ca",
	storageBucket: "blog-vue-project-911ca.appspot.com",
	messagingSenderId: "878422118604",
	appId: "1:878422118604:web:9f836e1e9baa5f99317269",
};

firebase.initializeApp(firebaseConfig)

const projectFireStore = firebase.firestore()

export {projectFireStore}