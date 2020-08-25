importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');
const CONFIG_URL = 'https://us-central1-rksplab.cloudfunctions.net/config';

const main = async () => {
    
    const response = await fetch(CONFIG_URL, {
        method: 'GET'
    });

    const { firebaseConfig } = await response.json();

    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    
    messaging.setBackgroundMessageHandler(function(payload) {
        const notificationTitle = 'Background Message Title';
        const notificationOptions = {
          body: 'Background Message body.',
          icon: '/firebase-logo.png'
        };
      
        return self.registration.showNotification(notificationTitle, notificationOptions);
    });
}

main();