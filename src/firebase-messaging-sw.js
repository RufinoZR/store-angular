// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: 'AIzaSyB2IsozgNlFLU9lpkNqV6pXFBg4oxExKH4',
	authDomain: 'practices-f3275.firebaseapp.com',
	projectId: 'practices-f3275',
	storageBucket: 'practices-f3275.appspot.com',
	messagingSenderId: '560665895624',
	appId: '1:560665895624:web:dbf9e98b5f73da2492fbfd',
	measurementId: 'G-ML74T0PXJW'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
