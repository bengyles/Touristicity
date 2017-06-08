// This section sets up some basic app metadata, the entire section is optional.
App.info({
    id: 'be.nebit.touristicity',
    name: 'Touristicity',
    description: 'See Cannes',
    author: 'Nebit',
    email: 'info@nebit.be',
    website: 'http://nebit.be'
});
// Set up resources such as icons and launch screens.
App.icons({
    'android_mdpi': 'public/icons/android/icon-48-mdpi.png',
    'android_hdpi': 'public/icons/android/icon-72-hdpi.png',
    'android_xhdpi': 'public/icons/android/icon-96-xhdpi.png',
    'android_xxhdpi': 'public/icons/android/icon-144-xxhdpi.png',
    'android_xxxhdpi': 'public/icons/android/icon-192-xxxhdpi.png',

    // More screen sizes and platforms...
});
App.launchScreens({
    'android_mdpi_portrait': 'public/screens/android/screen-mdpi-portrait.png',
    'android_mdpi_landscape': 'public/screens/android/screen-mdpi-landscape.png',
    'android_hdpi_portrait': 'public/screens/android/screen-hdpi-portrait.png',
    'android_hdpi_landscape': 'public/screens/android/screen-hdpi-landscape.png',
    'android_xhdpi_portrait': 'public/screens/android/screen-xhdpi-portrait.png',
    'android_xhdpi_landscape': 'public/screens/android/screen-xhdpi-landscape.png',
    'android_xxhdpi_portrait': 'public/screens/android/screen-xxhdpi-portrait.png',
    'android_xxhdpi_landscape': 'public/screens/android/screen-xxhdpi-landscape.png',
    // More screen sizes and platforms...
});
// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff5f255f');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.accessRule('http://*', {type: 'intent'});
App.accessRule('https://*', {type: 'intent'});
App.accessRule('mailto:*', {type: 'intent'});
