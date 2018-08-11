cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-datepicker.DatePicker",
        "file": "plugins/cordova-plugin-datepicker/www/android/DatePicker.js",
        "pluginId": "cordova-plugin-datepicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-fcm.FCMPlugin",
        "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
        "pluginId": "cordova-plugin-fcm",
        "clobbers": [
            "FCMPlugin"
        ]
    },
    {
        "id": "cordova-plugin-filepath.FilePath",
        "file": "plugins/cordova-plugin-filepath/www/FilePath.js",
        "pluginId": "cordova-plugin-filepath",
        "clobbers": [
            "window.FilePath"
        ]
    },
    {
        "id": "cordova-plugin-image-picker.ImagePicker",
        "file": "plugins/cordova-plugin-image-picker/www/imagepicker.js",
        "pluginId": "cordova-plugin-image-picker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "id": "cordova-plugin-native-spinner.SpinnerDialog",
        "file": "plugins/cordova-plugin-native-spinner/www/SpinnerDialog.js",
        "pluginId": "cordova-plugin-native-spinner",
        "clobbers": [
            "SpinnerDialog"
        ]
    },
    {
        "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
        "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
        "pluginId": "cordova-plugin-nativegeocoder",
        "clobbers": [
            "nativegeocoder"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.googlemaps.ios": "2.6.0",
    "cordova-plugin-add-swift-support": "1.7.1",
    "cordova-plugin-datepicker": "0.9.3",
    "cordova-plugin-device": "1.1.7",
    "cordova-plugin-fcm": "2.1.2",
    "cordova-plugin-filepath": "1.0.2",
    "cordova-plugin-image-picker": "1.1.1",
    "cordova-plugin-ionic-webview": "1.1.16",
    "cordova-plugin-native-spinner": "1.1.3",
    "cordova-plugin-nativegeocoder": "2.0.5",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.4.1",
    "cordova-plugin-whitelist": "1.3.4-dev",
    "cordova-support-google-services": "1.0.0",
    "ionic-plugin-keyboard": "2.2.1"
};
// BOTTOM OF METADATA
});