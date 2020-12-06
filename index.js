const admin = require('./node_modules/firebase-admin');

const setup = {
    // REQUIRED: A service worker account is necessary to authenticate the
    // connection between this script and firebase.
    serviceAccount: require(''),

    // REQUIRED: Set the name of your collection here. This is the collection
    // you will be uploading your JSON data to (for example, "Users").
    collectionKey: '',

    // REQUIRED: Include the JSON data you wish to import into your firebase
    // collection.
    data: require(''),

    // REQUIRED: The path to your firebase database,
    // (example: https://mydb-763b0.firebaseio.com)
    databaseURL: '',

    // Firestore settings can be optionally set as needed.
    firestoreSettings: {
        timestampsInSnapshots: true,
    },
}

admin.initializeApp({
    credential: admin.credential.cert(setup.serviceAccount),
    databaseURL: setup.databaseURL,
});

const firestore = admin.firestore();
firestore.settings(setup.settings);

if (data && (typeof data === 'object')) {
    Object.keys(data).forEach(docKey => {
        firestore
            .collection(collectionKey)
            .doc(docKey)
            .set(data[docKey])
            .then(() => {
                console.log('Document ' + docKey + ' successfully written!');
            })
            .catch((error) => {
                console.error('Error writing document: ', error)
            });
    });
}
