importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');
const CONFIG_URL = 'https://us-central1-rksplab.cloudfunctions.net/config';
const version = '0.0.2';

const main = async () => {
    console.log(`Service Worker version ${version}`);
    const response = await fetch(CONFIG_URL, {
        method: 'GET'
    });

    const { firebaseConfig } = await response.json();

    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    
    messaging.setBackgroundMessageHandler(function(payload) {
      console.log({payload})
      const image = payload.data.image;
      const summary = payload.data.summary;
      const title = payload.data.title;
      const icon = payload.data.icon;

        const notificationTitle = title;
        const notificationOptions = {
          body: summary,
          icon,
          image
        };
      
        return self.registration.showNotification(notificationTitle, notificationOptions);
    });
}

main();