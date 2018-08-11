webpackJsonp([6],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Bookings Service/Provider
 * @author Phani Mahesh Birudukota
 */
var BookingsProvider = (function () {
    function BookingsProvider(db) {
        this.db = db;
    }
    BookingsProvider.prototype.updateBooking = function (stage, booking) {
        booking.stage = stage;
        return this.db.list('/booking').update(booking.key, booking);
    };
    BookingsProvider.prototype.getAllBookingsByUid = function (uid) {
        return this.db.list('/booking', function (ref) { return ref.orderByChild('customerId').equalTo(uid); });
        // return this.db.list('/booking');
    };
    BookingsProvider.prototype.storeBooking = function (data) {
        var book = this.db.list('/booking');
        return book.push(data);
    };
    BookingsProvider.prototype.updateCustomerBooking = function (key, data) {
        var book = this.db.list('/booking');
        book.update(key, data);
    };
    BookingsProvider.prototype.acceptBooking = function (key, json) {
        json.stage = "accepted";
        var book = this.db.list('/booking');
        book.set(key.key, json);
    };
    BookingsProvider.prototype.rejectBooking = function (key, json) {
        var book = this.db.list('/booking');
        json.stage = "rejected";
        book.set(key.key, json);
    };
    BookingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BookingsProvider);
    return BookingsProvider;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(db) {
        this.db = db;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getAllServices = function (key) {
        return this.db.object('/service/' + key).valueChanges();
    };
    ServiceProvider.prototype.getAllPartnerServices = function (puid) {
        return this.db.list('/service', function (ref) { return ref.orderByChild('puid').equalTo(puid); }).valueChanges();
    };
    ServiceProvider.prototype.getAllServicesByName = function (name) {
        return this.db.list('/service', function (ref) { return ref.orderByChild('speciality').equalTo(name); }).snapshotChanges();
    };
    ServiceProvider.prototype.getServices = function () {
        return this.db.list('/service').snapshotChanges();
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_start_start__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(nav, navParams, _auth, alertCtrl, loadingCtrl, fb, http, profileService, inAppBrowser, _authService, camera, DomSanitizer) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this._auth = _auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.http = http;
        this.profileService = profileService;
        this.inAppBrowser = inAppBrowser;
        this._authService = _authService;
        this.camera = camera;
        this.DomSanitizer = DomSanitizer;
        this.form_valid = true;
        this.zip_error = '';
        this.address_save = true;
        this.model = {
            partnerFirstName: '',
            partnerLastName: '',
            partnerGender: 'male',
            partnerEmail: '',
            partnerPhone: '',
            partnerBio: '',
            partnerFromTime: '',
            partnerToTime: ''
        };
        this.deposit = {
            account_number: '',
            routing_number: '',
            account_type: ''
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00'
        };
        this.flag = false;
        this.categories = [];
        this.sub_categories = [];
        this.addresses = [];
        this.services = [];
        this.file_name = '';
        this.profile_editable = true;
        this.deposit_editable = true;
        this.category_data = ["Haircuts", "Color Services", "Hair Treatments", "Hair Styling", "Hands", "Feet"];
        this.sub_category_data = {
            "Haircuts": [
                { "name": "Men's Haircut" },
                { "name": "Women's Haircut" },
                { "name": "Men's Barber" }
            ], "Color Services": [
                {
                    "name": "Retouch"
                },
                {
                    "name": "Highlights/Balayage"
                },
                {
                    "name": "Ombre"
                },
                {
                    "name": "All over coloring "
                },
                {
                    "name": "Color Correction "
                }
            ], "Hair Treatments": [
                {
                    "name": "Deep Conditioning"
                },
                {
                    "name": "Brazilian Blowout"
                },
                {
                    "name": "Keratin"
                },
                {
                    "name": "Perms"
                }
            ], "Hair Styling": [
                {
                    "name": "Blow outs"
                },
                {
                    "name": "Up/Down Dos"
                },
                {
                    "name": "Hair Extensions "
                }
            ], "Hands": [
                {
                    "name": "Manicure"
                },
                {
                    "name": "Acrylic"
                },
                {
                    "name": "Dip Powder"
                },
                {
                    "name": "Gel"
                }
            ], "Feet": [
                {
                    "name": "Basic Pedicure"
                },
                {
                    "name": "Spa Pedicure"
                }
            ], "Makeup Artist": [
                {
                    "name": "Special Occasion"
                },
                {
                    "name": "Bridal"
                }
            ], "Waxing Technician": [
                {
                    "name": "Facial"
                },
                {
                    "name": "Arms"
                },
                {
                    "name": "Legs"
                },
                {
                    "name": "Brazilian"
                },
                {
                    "name": "Back"
                }
            ]
        };
        this.service_radius = [5, 10, 15, 20, 25];
        this.serviceKeys = [];
        this.profileKeys = [];
        this.adressPage = true;
        this.profilePage = false;
        this.servicePage = true;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        this.model = {
            partnerFirstName: '',
            partnerLastName: '',
            partnerBio: '',
            partnerFromTime: '',
            partnerToTime: '',
            partnerGender: 'male',
            partnerEmail: this.navParams.get('email'),
            partnerPhone: ''
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00',
        };
        this.profile_pic = this.navParams.get('photo');
        if (this.profile_pic == undefined || this.profile_pic == null || this.profile_pic == '') {
            this.profile_pic = "assets/profile_icon.png";
        }
        this.stripeUrl = 'https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://us-central1-mobilestyler-dev.cloudfunctions.net/stripeConnectCallback&client_id=ca_C43Pb2cbOsFdeelqzwwsJ3xzcSWKxmLv&state=';
        this.stripeRedirectUrl = 'https://us-central1-mobilestyler-dev.cloudfunctions.net/stripeConnectCallback';
        this.stripeDashboard = 'http://us-central1-mobilestyler-dev.cloudfunctions.net/stripeDashboard';
        profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
    }
    RegisterPage_1 = RegisterPage;
    RegisterPage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 50
        }).then(function (imageData) {
            console.log(imageData);
            _this.file_src = 'data:image/jpeg;base64,' + imageData;
            _this.file_name = 'Drivers_License.png';
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.uploadProfilePic = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            quality: 50
        }).then(function (imageData) {
            console.log(imageData);
            _this.profile_pic = 'data:image/jpeg;base64,' + imageData;
            console.log('::::::::::::::ProfilePic:::::::');
            console.log(_this.profile_pic);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.loadProfileKeys = function (json) {
        this.profileKeys = JSON.parse(JSON.stringify(json));
        this.loading.dismiss();
    };
    RegisterPage.prototype.loadServiceDataKeys = function (json) {
        this.serviceKeys = JSON.parse(JSON.stringify(json));
    };
    RegisterPage.prototype.loadProfileDataOnUI = function (json) {
        console.log(json);
        json = (JSON.parse(JSON.stringify(json)));
        if (json.addresses)
            if (json.addresses.length)
                this.addresses = json.addresses;
        if (json.partnerEmail)
            this.model.partnerEmail = json.partnerEmail;
        if (json.partnerGender)
            this.model.partnerGender = json.partnerGender;
        if (json.partnerFirstName)
            this.model.partnerFirstName = json.partnerFirstName;
        if (json.partnerLastName)
            this.model.partnerLastName = json.partnerLastName;
        if (json.profilePicture)
            this.profile_pic = json.profilePicture;
        if (json.partnerPhone)
            this.model.partnerPhone = json.partnerPhone;
        if (json.partnerFromTime)
            this.model.partnerFromTime = json.partnerFromTime;
        if (json.partnerToTime)
            this.model.partnerToTime = json.partnerToTime;
        if (json.partnerBio)
            this.model.partnerBio = json.partnerBio;
        if (json.idCard.name)
            this.file_name = json.idCard.name;
        if (json.idCard.picture)
            this.file_src = json.idCard.picture;
        if (json.createdAt)
            this.createdAt = json.createdAt;
        if (json.stripe.isStripeActivated)
            this.isStripeActivated = json.stripe.isStripeActivated;
        if (json.stripe.stripeAccountId)
            this.stripeAccountId = json.stripe.stripeAccountId;
    };
    RegisterPage.prototype.loadServiceData = function (json) {
        console.log(json);
        this.services = [];
        json = JSON.parse(JSON.stringify(json));
        for (var i = 0; i < json.length; i++) {
            this.services[i] = json[i];
            this.services[i].key = this.serviceKeys[i].key;
            if (json[i].status)
                this.services[i].status = json[i].status;
            else
                this.services[i].status = false;
            if (json[i].service == "") {
                this.services[i].status = true;
            }
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    /* functions to handle address data */
    RegisterPage.prototype.validateAddress = function (address) {
        this.name_error = '';
        this.address_error = '';
        this.address2_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        var addressPattern = new RegExp("/^s*S+(?:s+S+){2}/");
        var zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        var valid = 1;
        if (!(namePattern.test(address.name))) {
            this.name_error = 'enter valid name without spaces';
            valid = 0;
        }
        /*if(!(addressPattern.test(address.address1))){
            this.address_error='enter valid address';
            valid=0;
        }
        if(!(addressPattern.test(address.address2))){
           this.address2_error='enter valid address';
           valid=0;
        }*/
        return valid;
    };
    RegisterPage.prototype.checkFirstName = function (name) {
        // this.firstname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.firstname_error = 'Please enter a valid first name';
            this.form_valid = true;
        }
        else
            // this.form_valid = false;
            this.firstname_error = '';
    };
    RegisterPage.prototype.checkLastName = function (name) {
        // this.lastname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.lastname_error = 'Please enter a valid last name';
            this.form_valid = true;
        }
        else
            // this.form_valid = false;
            this.lastname_error = '';
    };
    RegisterPage.prototype.checkEmail = function (email) {
        // this.email_error = '';
        var emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!(emailPattern.test(email))) {
            this.email_error = 'Please enter a valid email';
            this.form_valid = true;
        }
        else
            // this.form_valid = false;
            this.email_error = '';
    };
    RegisterPage.prototype.checkPhone = function (phone) {
        var phonePattern = new RegExp("^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*$");
        // this.phone_error = '';
        if (phone == null || phone == undefined || !(phone.length == 10)) {
            this.phone_error = 'Please enter a valid mobile number';
            this.form_valid = true;
        }
        else
            // this.form_valid = false;
            this.phone_error = '';
    };
    RegisterPage.prototype.addAddress = function (addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
            geofire: false,
            status: false
        };
        console.log(json);
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_1 = arrayOfKeys; _i < arrayOfKeys_1.length; _i++) {
            var obj = arrayOfKeys_1[_i];
            if (obj == 'address2' || obj == 'geofire' || obj == 'status') {
            }
            else if (!(json[obj]) || json[obj] == "" || json[obj].length < 2) {
                error = true;
                this.loadError("please provide valid " + obj);
                break;
            }
        }
        if (this.validateAddress(addressData)) {
            if (!error) {
                this.addresses.push(json);
                this.showAddress();
            }
        }
    };
    RegisterPage.prototype.showAddress = function () {
        this.address.index = null;
        this.address.name = "";
        this.address.address1 = "";
        this.address.address2 = "";
        this.address.city = "";
        this.address.state = "";
        this.address.zip = "";
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    RegisterPage.prototype.showUpdateAddress = function () {
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    /* get values into popup for edit*/
    RegisterPage.prototype.updateAddress = function (i, addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        this.address = json;
        this.address.index = i;
    };
    /*store updated address data */
    RegisterPage.prototype.saveUpdatedAddress = function (addressData) {
        console.log(addressData);
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        this.addresses[addressData.index - 1] = json;
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.showAddress();
        this.save();
    };
    /*remove address from stack*/
    RegisterPage.prototype.removeAddress = function (index) {
        console.log(index);
        index = index - 1;
        console.log("updted" + index);
        var temp = [];
        for (var j = 0; j < this.addresses.length; j++) {
            if (j != index) {
                var json = {
                    name: this.addresses[j].name,
                    address1: this.addresses[j].address1,
                    address2: this.addresses[j].address2,
                    city: this.addresses[j].city,
                    zip: this.addresses[j].zip,
                    state: this.addresses[j].state
                };
                temp.push(json);
            }
        }
        this.addresses = temp;
        this.showAddress();
        this.save();
    };
    /*functions to handle service data */
    RegisterPage.prototype.saveUpdatedService = function (service) {
        //alert('entered')
        console.log(service.index);
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            partnerEmail: this.model.partnerEmail,
            partnerGender: this.model.partnerGender,
            partnerFirstName: this.model.partnerFirstName,
            partnerLastName: this.model.partnerLastName,
            partnerFromTime: this.model.partnerFromTime,
            partnerToTime: this.model.partnerToTime,
            partnerBio: this.model.partnerBio,
            profilePicture: this.profile_pic,
            puid: service.puid
        };
        if (service.key) {
            console.log('entered');
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
            json['updatedAt'] = new Date().toISOString();
        }
        console.log(json);
        this.services[service.index - 1] = json;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '',
        };
        this.showUpdateServiceCard();
        this.save();
    };
    RegisterPage.prototype.showService = function () {
        this.service.index = null;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '0.00'
        };
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    RegisterPage.prototype.showUpdateServiceCard = function () {
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    RegisterPage.prototype.addService = function (service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false
        };
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_2 = arrayOfKeys; _i < arrayOfKeys_2.length; _i++) {
            var obj = arrayOfKeys_2[_i];
            if (obj == 'status') { }
            else if (!(json[obj]) || json[obj] == "") {
                error = true;
                this.loadError("please provide valid " + obj);
                break;
            }
        }
        if (!error) {
            this.services.push(json);
            console.log(this.services);
            this.showService();
            this.save();
        }
    };
    RegisterPage.prototype.findAddressIndex = function (name) {
        // console.log(this.addresses)
        for (var i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].name == name) {
                return i;
            }
        }
    };
    RegisterPage.prototype.updateService = function (i, service) {
        console.log(service);
        console.log(service.location.name);
        console.log(this.findAddressIndex(service.location.name));
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.findAddressIndex(service.location.name),
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            puid: service.puid
        };
        console.log(service.key);
        if (service.key) {
            console.log('entered');
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
        }
        this.service = json;
        console.log(this.service);
        this.service.index = i + 1;
        this.getSubCategories();
    };
    RegisterPage.prototype.removeService = function (index) {
        index = index - 1;
        this.services[index].status = true;
        this.showService();
        this.save();
    };
    /*normal services */
    RegisterPage.prototype.getSubCategories = function () {
        this.sub_categories = this.sub_category_data[this.service.service];
    };
    RegisterPage.prototype.clearForm = function () {
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '',
        };
    };
    /*function to handle phone number*/
    RegisterPage.prototype.saverange = function ($e, d) {
        if (this.model.phone) {
            var x = this.model.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.model.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    };
    RegisterPage.prototype.imageChange = function ($event) {
        this.readThis($event.target);
    };
    RegisterPage.prototype.profileImageChange = function ($event) {
        this.readProfileImage($event.target);
    };
    RegisterPage.prototype.readProfileImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.profile_pic = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    RegisterPage.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        this.file_name = file.name;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.file_src = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    RegisterPage.prototype.validate = function () {
        // let isOK:boolean = false;
        // debugger
        console.log(this.model.partnerFirstName);
        this.firstname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(this.model.partnerFirstName))) {
            this.firstname_error = 'Please enter a valid first name';
            return false;
        }
        this.lastname_error = '';
        // let namePattern = new RegExp(`^[a-zA-Z][a-zA-Z\\s]+$`);
        if (!(namePattern.test(this.model.partnerLastName))) {
            this.lastname_error = 'Please enter a valid last name';
            return false;
        }
        this.email_error = '';
        var emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!(emailPattern.test(this.model.partnerEmail))) {
            this.email_error = 'Please enter a valid email';
            return false;
        }
        var phonePattern = new RegExp("^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*$");
        this.phone_error = '';
        if (this.model.partnerPhone == null || this.model.partnerPhone == undefined || !(this.model.partnerPhone.length == 10)) {
            this.phone_error = 'Please enter a valid mobile number';
            return false;
        }
        if (this.addresses.length == 0) {
            this.address_error = 'Please add minimum one address';
            return false;
        }
        this.register();
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait'
        });
        loading.present();
        var d = new Date();
        var n = d.toISOString();
        var json = this.model;
        json.services = this.services;
        json.address = this.addresses;
        json.profilePicture = this.profile_pic;
        json.partnerPhone = this.model.partnerPhone;
        json.idCard = {
            'name': this.file_name,
            'picture': this.file_src
        };
        if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
            delete json.idCard;
        }
        json.createdAt = n;
        json.cuid = localStorage.getItem('uid');
        this.flag = false;
        var arrayOfKeys = Object.keys(this.model);
        var error = false;
        /* for(let obj of arrayOfKeys){
            if(!(this.model[obj])){
                 error=true;
                 this.loadError("please provide "+obj);
                if(loading){
                    loading.dismiss();
                    loading=null;
                }
                 break;
            }
         }*/
        // if(!error){
        if (1) {
            // if(this.file_src=='' || this.file_src==' ' || !(this.file_src)){
            if (0) {
                this.loadError("please provide id proof");
                if (loading) {
                    loading.dismiss();
                    loading = null;
                }
            }
            else {
                if (this.navParams.get('socialLogin')) {
                    this.profileService.saveProfile(json).then(function (resolve) {
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                        }
                    }, function (reject) {
                        console.log('error while storing data. please try again');
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                            _this.loadError('Something went wrong. Try again');
                        }
                    });
                }
                else {
                    this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                        }
                        _this.loadSuccess();
                    }, function (reject) {
                        console.log('error while storing data. please try again');
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                            _this.loadError('Something went wrong. Try again');
                        }
                    });
                }
            }
        }
    };
    RegisterPage.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait'
        });
        loading.present();
        var d = new Date();
        var n = d.toISOString();
        var json = this.model;
        json.services = this.services;
        json.address = this.addresses;
        json.profilePicture = this.profile_pic;
        json.partnerPhone = this.model.partnerPhone;
        json.idCard = {
            'name': this.file_name,
            'picture': this.file_src
        };
        if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
            delete json.idCard;
        }
        json.createdAt = n;
        json.cuid = localStorage.getItem('uid');
        this.flag = false;
        var arrayOfKeys = Object.keys(this.model);
        var error = false;
        /* for(let obj of arrayOfKeys){
            if(!(this.model[obj])){
                 error=true;
                 this.loadError("please provide "+obj);
                if(loading){
                    loading.dismiss();
                    loading=null;
                }
                 break;
            }
         }*/
        // if(!error){
        if (1) {
            // if(this.file_src=='' || this.file_src==' ' || !(this.file_src)){
            if (0) {
                this.loadError("please provide id proof");
                if (loading) {
                    loading.dismiss();
                    loading = null;
                }
            }
            else {
                if (this.navParams.get('socialLogin')) {
                    this.profileService.saveProfile(json).then(function (resolve) {
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                        }
                        _this.reloadCompleteData();
                    }, function (reject) {
                        console.log('error while storing data. please try again');
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                            _this.loadError('Something went wrong. Try again');
                        }
                    });
                }
                else {
                    this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                        }
                        _this.reloadCompleteData();
                    }, function (reject) {
                        console.log('error while storing data. please try again');
                        if (loading) {
                            loading.dismiss();
                            loading = null;
                        }
                    });
                }
            }
        }
    };
    RegisterPage.prototype.reloadPage = function (loading, ref) {
        this.loadServiceDataKeys(ref);
        if (loading) {
            loading.dismiss();
            loading = null;
        }
    };
    RegisterPage.prototype.reloadCompleteData = function () {
        var _this = this;
        this.profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        this.profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        this.profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        this.profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
        /*let alert = this.alertCtrl.create({
            message: 'Congratulations Profile Updated Successfully',
            buttons: [{
                text: 'OK',
                role: 'cancel',
                handler: data => {
    
                }
              }]
          });
          alert.present();*/
    };
    RegisterPage.prototype.getCityState = function (zipcode) {
        var _this = this;
        if (zipcode) {
            if (zipcode.length == 5) {
                this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDUQtXZv6J5LFrnNFQNTlg-QRXU6f20Nfk&address=' + zipcode).subscribe(function (data) {
                    var response = data.json();
                    if (response.results[0].address_components[1] && response.results[0].address_components[3]) {
                        //console.log(response.results[0].address_components[1].long_name)
                        _this.address.city = response.results[0].address_components[1].long_name;
                        //console.log(response.results[0].address_components[3].short_name)
                        _this.address.state = response.results[0].address_components[3].short_name;
                        _this.zip_error = '';
                    }
                });
            }
            else {
                this.zip_error = 'Enter valid zip code';
            }
        }
        else {
            this.zip_error = 'Enter valid zip code';
        }
    };
    RegisterPage.prototype.createLoader = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        this.loading = this.loadingCtrl.create({
            content: message
        });
    };
    RegisterPage.prototype.loadError = function (message) {
        var alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.loadSuccess = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Thank you for registering. Please login.',
            buttons: [{
                    text: 'OK',
                    role: 'cancel',
                    handler: function (data) {
                        _this.goToLogin();
                    }
                }]
        });
        alert.present();
    };
    RegisterPage.prototype.goToLogin = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this._auth.signoutUser().then(function (res) {
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */]);
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    RegisterPage.prototype.connectStripe = function () {
        var _this = this;
        var options = {
            zoom: 'no',
            location: 'no'
        };
        var browser = this.inAppBrowser.create(this.stripeUrl + this.profileKeys[0].key, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            if ((event.url).indexOf(_this.stripeRedirectUrl) === 0) {
                browser.hide();
                browser.close();
                _this.nav.setRoot(RegisterPage_1);
            }
        });
    };
    RegisterPage.prototype.openPaymentsDashBoard = function () {
        var options = {
            zoom: 'no',
            location: 'no'
        };
        var browser = this.inAppBrowser.create(this.stripeDashboard + '?accId=' + this.stripeAccountId, '_blank', options);
    };
    RegisterPage = RegisterPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\pages\register\register.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="grey">\n  <ion-navbar color="grey">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n\n  <ion-card style="padding:0px;width:100%; margin-left: auto; " [hidden]="adressPage">\n\n    <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n      <div class="row" style="padding-top: 10px">\n        <div class="col-xs-2">\n          <ion-icon (click)="showAddress()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n        </div>\n        <div style="padding:0px">\n          <div class="row">\n            Add Address\n          </div>\n        </div>\n      </div>\n      <hr style="margin-top: 0px; ">\n    </ion-card-header>\n    <ion-card-content>\n      <div class="row">\n\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Name your address (Ex. Home, Office etc.)</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.name" (keyup)="validateAddress(address)"> {{name_error}}\n\n          </div>\n        </div>\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Address Line 1</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address1" (keyup)="validateAddress(address)">{{address_error}}\n          </div>\n        </div>\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Address Line 2</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address2" (keyup)="validateAddress(address)">{{address2_error}}\n          </div>\n        </div>\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Zip</label>\n          <div>\n            <input class="form-control round " pattern="[0-9]{5}" type="text" name="Email" [(ngModel)]="address.zip" (keyup)="getCityState(address.zip)">\n          </div>\n        </div>\n\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-6" style="text-align:left">\n          <label for="name2" class="control-label">City</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.city" readonly>\n          </div>\n        </div>\n        <div class="form-group col-xs-6" style="text-align:left">\n          <label for="name2" class="control-label">State</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.state" readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class="footer text-center" (click)="addAddress(address)" *ngIf="!address.index">\n        Save\n      </div>\n      <div class="footer text-center" (click)="saveUpdatedAddress(address)" *ngIf="address.index">\n        Edit\n      </div>\n      <div class="footer text-center danger" *ngIf="address.index" (click)="removeAddress(address.index)" style="margin-top:10px;background:#f44336 !important">\n        Remove\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- services popup -->\n  <ion-card style="padding:0px;width:100%;margin-left: auto" [hidden]="servicePage">\n\n    <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n      <div class="row">\n        <div class="col-xs-2">\n          <ion-icon (click)="showUpdateServiceCard()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey"\n            style="font-size:25px;font-weight:bold"></ion-icon>\n        </div>\n        <div style="padding:0px">\n          <div class="row">\n            Add Service\n          </div>\n        </div>\n      </div>\n      <hr style="margin-top: 0px">\n    </ion-card-header>\n    <ion-card-content>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Category</label>\n            <ion-select [(ngModel)]="service.service" class="form-control round" (ngModelChange)="getSubCategories()" style="max-width:100%">\n              <ion-option *ngFor="let category of category_data" value="{{category}}">{{category}}</ion-option>\n\n            </ion-select>\n\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Speciality</label>\n            <ion-select [(ngModel)]="service.speciality" class="form-control round " style="max-width:100%">\n              <ion-option *ngFor="let category of sub_categories" value="{{category.name}}">{{category.name}}</ion-option>\n\n            </ion-select>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Location</label>\n            <ion-select [(ngModel)]="service.location" class="form-control round " style="max-width:100%">\n              <ion-option *ngFor="let addr of addresses;let j=index" value="{{j}}">{{addr.name}}</ion-option>\n\n            </ion-select>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Service Radius</label>\n            <ion-select [(ngModel)]="service.serverRadius" class="form-control round " style="max-width:100%">\n              <ion-option *ngFor="let radius of service_radius" value="{{radius}}">{{radius}}</ion-option>\n\n            </ion-select>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Price</label>\n            <div>\n              <div class="inner-addon left-addon">\n\n                <i class="fa fa-usd" aria-hidden="true" color="grey"></i>\n                <input type="number" min="0.00" max="10000.00" step="0.01" [(ngModel)]="service.amount" class="form-control round">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="footer text-center" (click)="addService(service)" *ngIf="!service.index">\n        Save\n      </div>\n      <div class="footer text-center" (click)="saveUpdatedService(service)" *ngIf="service.index">\n        Edit\n      </div>\n      <div class="footer text-center danger" *ngIf="service.index" (click)="removeService(service.index)" style="margin-top:10px;background:#f44336 !important">\n        Remove\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- services popup end -->\n\n  <div id="backdrop" [hidden]="profilePage">\n    <ion-card style="padding:0px;width:100%;margin-left:auto;" class="rounded-card">\n\n      <ion-card-header style="padding:0px">\n\n        <div class="row" style="margin-bottom:5px">\n\n          <div class="col-xs-12" style="padding:0px">\n            <div class="row">\n              <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                Profile\n\n                <img (click)="uploadProfilePic()" class="img-circle profile_pic" [src]="DomSanitizer.bypassSecurityTrustUrl(profile_pic)">\n\n                <!--<input type="file" id="BtnBrowseHidden" accept="image/*" (change)="profileImageChange($event)" #image hidden>-->\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <hr>\n      </ion-card-header>\n      <ion-card-content>\n        <div class="row row-bottom" style="width:100% ">\n\n          <div class="row">\n\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">First Name</label>\n              <div>\n                <input class="form-control round " type="text" name="firstName" [(ngModel)]="model.partnerFirstName" (keyup)="checkFirstName(model.partnerFirstName)"> {{firstname_error}}\n              </div>\n            </div>\n          </div>\n\n          <div class="row">\n\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Last Name</label>\n              <div>\n                <input class="form-control round " type="text" name="lastName" [(ngModel)]="model.partnerLastName" (keyup)="checkLastName(model.partnerLastName)"> {{lastname_error}}\n              </div>\n            </div>\n          </div>\n\n          <div class="row" style="width:100% ">\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Email Address</label>\n              <div>\n                <input class="form-control round " type="email" name="Email" [(ngModel)]="model.partnerEmail" (keyup)="checkEmail(model.partnerEmail)"> {{email_error}}\n              </div>\n            </div>\n          </div>\n          <div class="row" style="width:100% ">\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Gender</label>\n              <ion-select [(ngModel)]="model.partnerGender" class="form-control round " style="max-width:100%">\n                <ion-option value="male">Male</ion-option>\n                <ion-option value="female">Female</ion-option>\n                <ion-option value="transgender">Transgender</ion-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class="row" style="width:100% ">\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Phone Number</label>\n              <div>\n                <input class="form-control round " type="tel" name="Email" [(ngModel)]="model.partnerPhone" (keyup)="checkPhone(model.partnerPhone)" > {{phone_error}}\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card">\n\n      <ion-card-header style="padding:0px">\n\n        <div class="row" style="margin-bottom:5px">\n\n          <div class="col-xs-12" style="padding:0px">\n            <div class="row">\n              <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                Address\n\n                <ion-icon ios="ios-add" md="md-add" class="pull-right" (click)="showAddress()" style="font-size:20px;font-weight: bolder;margin-right: 10px;margin-top:0px"></ion-icon>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <hr>\n      </ion-card-header>\n      <ion-card-content style="height:150px;overflow:auto">\n          {{address_error}}\n        <ion-list>\n          <ul class="list-inline">\n            <li class="list-inline-item bold" *ngFor="let item_address of addresses; let i = index">\n\n              {{item_address.name}}\n              <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="showUpdateAddress();updateAddress(i+1,item_address)"></ion-icon>\n            </li>\n          </ul>\n\n        </ion-list>\n\n\n      </ion-card-content>\n    </ion-card>\n\n\n\n\n    <button text-center class="footer" (click)="validate()"  style="width:100%;margin-top:10px;background: #27ae60;border-radius: 6px;">\n\n      Register\n\n    </button>\n\n\n  </div>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */]])
    ], RegisterPage);
    return RegisterPage;
    var RegisterPage_1;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__ = __webpack_require__(23);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, notificationService, loadingCtrl, alertCtrl, _authService, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notificationService = notificationService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this._authService = _authService;
        this.menu = menu;
        this.notificationsRef = [];
        this.notifications = [];
        this.menu.enable(true);
        var loading = this.loadingCtrl.create({
            content: 'Loading notifications Please Wait...'
        });
        loading.present();
        this.notificationsRef = this.notificationService
            .getInAppNotificationsByUid(this._authService.getUserData().uid);
        this.notifications = this.notificationsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        loading.dismiss();
    }
    NotificationsPage.prototype.removeNotification = function (notificationKey) {
        var loading = this.loadingCtrl.create({
            content: 'Loading notifications Please Wait...'
        });
        this.notificationsRef.remove(notificationKey);
        loading.present();
        this.notificationsRef = this.notificationService
            .getInAppNotificationsByUid(this._authService.getUserData().uid);
        this.notifications = this.notificationsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        loading.dismiss();
    };
    NotificationsPage.prototype.presentConfirm = function (notification) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: notification.title,
            message: notification.description,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        console.log('Remove clicked');
                        _this.removeNotification(notification.key);
                    }
                }
            ]
        });
        alert.present();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\pages\notifications\notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="grey">\n    <ion-navbar color="grey">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n    <ion-list class="login-sliding-demo">\n        <ion-item style="height: 60px;border-radius:10px;" class="no-padding" *ngIf="notifications.length<1">\n            <p>Sorry No Notifications found</p>\n        </ion-item>\n        <ion-item-sliding *ngFor="let notification of notifications | async" style="margin-bottom: 10px; border-radius: 12px" #item>\n            <ion-item no-lines style="height: 90px" class="no-padding" (click)="presentConfirm(notification)">\n                <ion-icon name="home" class="expand-hide"></ion-icon>\n                <div class="text-left pull-top">\n                    <div class="pull-right">\n                        <h5 class="text">{{notification.createdAt | date}}</h5>\n                        <h5 class="text">{{notification.createdAt | date:\'shortTime\'}}</h5>\n                    </div>\n                    <h4 class="text bolder slight-up">{{notification.title}}</h4>\n                    <br>\n                    <p class="text text-left description" style="margin-top:5px">\n                        <span>{{notification.description}}</span>\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item-options side="right">\n                <button style="background: red;color: wheat;" (click)="removeNotification(notification.key)">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__["a" /* MenuController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_start__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_app_menu_controller__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(nav, navParams, _auth, alertCtrl, loadingCtrl, fb, http, profileService, inAppBrowser, _authService, camera, DomSanitizer, menu) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this._auth = _auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.http = http;
        this.profileService = profileService;
        this.inAppBrowser = inAppBrowser;
        this._authService = _authService;
        this.camera = camera;
        this.DomSanitizer = DomSanitizer;
        this.menu = menu;
        this.form_valid = true;
        this.zip_error = '';
        this.address_save = true;
        this.model = {
            partnerFirstName: '',
            partnerLastName: '',
            partnerGender: 'male',
            partnerEmail: '',
            partnerPhone: ''
        };
        this.deposit = {
            account_number: '',
            routing_number: '',
            account_type: ''
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00'
        };
        this.flag = false;
        this.categories = [];
        this.sub_categories = [];
        this.addresses = [];
        this.services = [];
        this.file_name = '';
        this.profile_editable = true;
        this.deposit_editable = true;
        this.category_data = ["Haircuts", "Color Services", "Hair Treatments", "Hair Styling", "Hands", "Feet"];
        this.sub_category_data = {
            "Haircuts": [
                { "name": "Men's Haircut" },
                { "name": "Women's Haircut" },
                { "name": "Men's Barber" }
            ], "Color Services": [
                {
                    "name": "Retouch"
                },
                {
                    "name": "Highlights/Balayage"
                },
                {
                    "name": "Ombre"
                },
                {
                    "name": "All over coloring "
                },
                {
                    "name": "Color Correction "
                }
            ], "Hair Treatments": [
                {
                    "name": "Deep Conditioning"
                },
                {
                    "name": "Brazilian Blowout"
                },
                {
                    "name": "Keratin"
                },
                {
                    "name": "Perms"
                }
            ], "Hair Styling": [
                {
                    "name": "Blow outs"
                },
                {
                    "name": "Up/Down Dos"
                },
                {
                    "name": "Hair Extensions "
                }
            ], "Hands": [
                {
                    "name": "Manicure"
                },
                {
                    "name": "Acrylic"
                },
                {
                    "name": "Dip Powder"
                },
                {
                    "name": "Gel"
                }
            ], "Feet": [
                {
                    "name": "Basic Pedicure"
                },
                {
                    "name": "Spa Pedicure"
                }
            ], "Makeup Artist": [
                {
                    "name": "Special Occasion"
                },
                {
                    "name": "Bridal"
                }
            ], "Waxing Technician": [
                {
                    "name": "Facial"
                },
                {
                    "name": "Arms"
                },
                {
                    "name": "Legs"
                },
                {
                    "name": "Brazilian"
                },
                {
                    "name": "Back"
                }
            ]
        };
        this.service_radius = [5, 10, 15, 20, 25];
        this.serviceKeys = [];
        this.profileKeys = [];
        this.adressPage = true;
        this.profilePage = false;
        this.servicePage = true;
        this.menu.enable(true);
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        this.model = {
            partnerFirstName: this.navParams.get('name'),
            partnerLastName: '',
            partnerGender: 'male',
            partnerEmail: this.navParams.get('email'),
            partnerPhone: this.navParams.get('phoneNumber')
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00',
        };
        this.profile_pic = this.navParams.get('photo');
        if (this.profile_pic == undefined || this.profile_pic == null || this.profile_pic == '') {
            this.profile_pic = "assets/profile_icon.png";
        }
        this.stripeUrl = 'https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://us-central1-mobilestyler-dev.cloudfunctions.net/stripeConnectCallback&client_id=ca_C43Pb2cbOsFdeelqzwwsJ3xzcSWKxmLv&state=';
        this.stripeRedirectUrl = 'https://us-central1-mobilestyler-dev.cloudfunctions.net/stripeConnectCallback';
        this.stripeDashboard = 'http://us-central1-mobilestyler-dev.cloudfunctions.net/stripeDashboard';
        profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
    }
    ProfilePage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 50
        }).then(function (imageData) {
            console.log(imageData);
            _this.file_src = 'data:image/jpeg;base64,' + imageData;
            _this.file_name = 'Drivers_License.png';
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.uploadProfilePic = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            quality: 50
        }).then(function (imageData) {
            console.log(imageData);
            _this.profile_pic = 'data:image/jpeg;base64,' + imageData;
            console.log('::::::::::::::ProfilePic:::::::');
            console.log(_this.profile_pic);
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.loadProfileKeys = function (json) {
        this.profileKeys = JSON.parse(JSON.stringify(json));
        this.loading.dismiss();
    };
    ProfilePage.prototype.loadServiceDataKeys = function (json) {
        this.serviceKeys = JSON.parse(JSON.stringify(json));
    };
    ProfilePage.prototype.loadProfileDataOnUI = function (json) {
        console.log(json);
        json = (JSON.parse(JSON.stringify(json)));
        if (json.addresses)
            if (json.addresses.length)
                this.addresses = json.addresses;
        if (json.partnerEmail)
            this.model.partnerEmail = json.partnerEmail;
        if (json.partnerGender)
            this.model.partnerGender = json.partnerGender;
        if (json.partnerFirstName)
            this.model.partnerFirstName = json.partnerFirstName;
        if (json.partnerLastName)
            this.model.partnerLastName = json.partnerLastName;
        if (json.profilePicture)
            this.profile_pic = json.profilePicture;
        if (json.partnerPhone)
            this.model.partnerPhone = json.partnerPhone;
        if (json.idCard.name)
            this.file_name = json.idCard.name;
        if (json.idCard.picture)
            this.file_src = json.idCard.picture;
        if (json.createdAt)
            this.createdAt = json.createdAt;
        if (json.stripe.isStripeActivated)
            this.isStripeActivated = json.stripe.isStripeActivated;
        if (json.stripe.stripeAccountId)
            this.stripeAccountId = json.stripe.stripeAccountId;
    };
    ProfilePage.prototype.loadServiceData = function (json) {
        console.log(json);
        this.services = [];
        json = JSON.parse(JSON.stringify(json));
        for (var i = 0; i < json.length; i++) {
            this.services[i] = json[i];
            this.services[i].key = this.serviceKeys[i].key;
            if (json[i].status)
                this.services[i].status = json[i].status;
            else
                this.services[i].status = false;
            if (json[i].service == "") {
                this.services[i].status = true;
            }
        }
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.validateAddress = function (address) {
        this.name_error = '';
        this.address_error = '';
        this.address2_error = '';
        var namePattern = new RegExp("^[a-zA-Z0-9 @$]|[^&;  ,\"'%!.()]$");
        var addressPattern = new RegExp("/^s*S+(?:s+S+){2}/");
        var zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        var valid = 1;
        if (!(namePattern.test(address.name))) {
            this.name_error = 'Please enter a valid name';
            valid = 0;
        }
        /*if(!(addressPattern.test(address.address1))){
            this.address_error='enter valid address';
            valid=0;
        }
        if(!(addressPattern.test(address.address2))){
           this.address2_error='enter valid address';
           valid=0;
        }*/
        return valid;
    };
    ProfilePage.prototype.checkFirstName = function (name) {
        this.firstname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.firstname_error = 'Please enter a valid first name';
            this.form_valid = true;
        }
        else
            this.form_valid = false;
    };
    ProfilePage.prototype.checkLastName = function (name) {
        this.lastname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.lastname_error = 'Please enter a valid last name';
            this.form_valid = true;
        }
        else
            this.form_valid = false;
    };
    ProfilePage.prototype.checkEmail = function (email) {
        this.email_error = '';
        var emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!(emailPattern.test(email))) {
            this.email_error = 'Please enter a valid email';
            this.form_valid = true;
        }
        else
            this.form_valid = false;
    };
    ProfilePage.prototype.checkPhone = function (phone) {
        var phonePattern = new RegExp("^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*$");
        this.phone_error = '';
        if (!(phone.length == 10)) {
            this.phone_error = 'Please enter a valid mobile number';
            this.form_valid = true;
        }
        else
            this.form_valid = false;
    };
    ProfilePage.prototype.addAddress = function (addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
            geofire: false,
            status: false
        };
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_1 = arrayOfKeys; _i < arrayOfKeys_1.length; _i++) {
            var obj = arrayOfKeys_1[_i];
            if (obj == 'address2' || obj == 'geofire' || obj == 'status') {
            }
            else if (!(json[obj]) || json[obj] == "" || json[obj].length < 2) {
                error = true;
                this.loadError("please provide valid " + obj);
                break;
            }
        }
        if (this.validateAddress(addressData)) {
            if (!error) {
                this.addresses.push(json);
                this.showAddress();
            }
        }
    };
    ProfilePage.prototype.showAddress = function () {
        this.address.index = null;
        this.address.name = "";
        this.address.address1 = "";
        this.address.address2 = "";
        this.address.city = "";
        this.address.state = "";
        this.address.zip = "";
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    ProfilePage.prototype.showUpdateAddress = function () {
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    /* get values into popup for edit*/
    ProfilePage.prototype.updateAddress = function (i, addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        this.address = json;
        this.address.index = i;
    };
    /*store updated address data */
    ProfilePage.prototype.saveUpdatedAddress = function (addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        this.addresses[addressData.index - 1] = json;
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.showAddress();
    };
    /*remove address from stack*/
    ProfilePage.prototype.removeAddress = function (index) {
        console.log(index);
        index = index - 1;
        console.log("updted" + index);
        var temp = [];
        for (var j = 0; j < this.addresses.length; j++) {
            if (j != index) {
                var json = {
                    name: this.addresses[j].name,
                    address1: this.addresses[j].address1,
                    address2: this.addresses[j].address2,
                    city: this.addresses[j].city,
                    zip: this.addresses[j].zip,
                    state: this.addresses[j].state
                };
                temp.push(json);
            }
        }
        this.addresses = temp;
        this.showAddress();
    };
    /*functions to handle service data */
    ProfilePage.prototype.saveUpdatedService = function (service) {
        //alert('entered')
        console.log(service.index);
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            partnerEmail: this.model.partnerEmail,
            partnerGender: this.model.partnerGender,
            partnerFirstName: this.model.partnerFirstName,
            partnerLastName: this.model.partnerLastName,
            profilePicture: this.profile_pic,
            puid: service.puid
        };
        if (service.key) {
            console.log('entered');
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
            json['updatedAt'] = new Date().toISOString();
        }
        console.log(json);
        this.services[service.index - 1] = json;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '',
        };
        this.showUpdateServiceCard();
        this.save();
    };
    ProfilePage.prototype.showService = function () {
        this.service.index = null;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '0.00'
        };
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    ProfilePage.prototype.showUpdateServiceCard = function () {
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    ProfilePage.prototype.addService = function (service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false
        };
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_2 = arrayOfKeys; _i < arrayOfKeys_2.length; _i++) {
            var obj = arrayOfKeys_2[_i];
            if (obj == 'status') { }
            else if (!(json[obj]) || json[obj] == "") {
                error = true;
                this.loadError("please provide valid " + obj);
                break;
            }
        }
        if (!error) {
            this.services.push(json);
            console.log(this.services);
            this.showService();
            this.save();
        }
    };
    ProfilePage.prototype.findAddressIndex = function (name) {
        // console.log(this.addresses)
        for (var i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].name == name) {
                return i;
            }
        }
    };
    ProfilePage.prototype.updateService = function (i, service) {
        console.log(service);
        console.log(service.location.name);
        console.log(this.findAddressIndex(service.location.name));
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.findAddressIndex(service.location.name),
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            puid: service.puid
        };
        console.log(service.key);
        if (service.key) {
            console.log('entered');
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
        }
        this.service = json;
        console.log(this.service);
        this.service.index = i + 1;
        this.getSubCategories();
    };
    ProfilePage.prototype.removeService = function (index) {
        index = index - 1;
        this.services[index].status = true;
        this.showService();
        this.save();
    };
    /*normal services */
    ProfilePage.prototype.getSubCategories = function () {
        this.sub_categories = this.sub_category_data[this.service.service];
    };
    ProfilePage.prototype.clearForm = function () {
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '',
        };
    };
    /*function to handle phone number*/
    ProfilePage.prototype.saverange = function ($e, d) {
        if (this.model.phone) {
            var x = this.model.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.model.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    };
    ProfilePage.prototype.imageChange = function ($event) {
        this.readThis($event.target);
    };
    ProfilePage.prototype.profileImageChange = function ($event) {
        this.readProfileImage($event.target);
    };
    ProfilePage.prototype.readProfileImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.profile_pic = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ProfilePage.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        this.file_name = file.name;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.file_src = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ProfilePage.prototype.validate = function () {
        // let isOK:boolean = false;
        // debugger
        console.log(this.model.partnerFirstName);
        this.firstname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(this.model.partnerFirstName))) {
            this.firstname_error = 'Please enter a valid first name';
            return false;
        }
        this.lastname_error = '';
        // let namePattern = new RegExp(`^[a-zA-Z][a-zA-Z\\s]+$`);
        if (!(namePattern.test(this.model.partnerLastName))) {
            this.lastname_error = 'Please enter a valid last name';
            return false;
        }
        this.email_error = '';
        var emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!(emailPattern.test(this.model.partnerEmail))) {
            this.email_error = 'Please enter a valid email';
            return false;
        }
        var phonePattern = new RegExp("^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*$");
        this.phone_error = '';
        if (this.model.partnerPhone == null || this.model.partnerPhone == undefined || !(this.model.partnerPhone.length == 10)) {
            this.phone_error = 'Please enter a valid mobile number';
            return false;
        }
        if (this.addresses.length == 0) {
            this.address_error = 'Please add minimum one address';
            return false;
        }
        this.saveProfile();
    };
    ProfilePage.prototype.saveProfile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait'
        });
        loading.present();
        var d = new Date();
        var n = d.toISOString();
        var json = this.model;
        json.services = this.services;
        json.address = this.addresses;
        json.profilePicture = this.profile_pic;
        json.partnerPhone = this.model.partnerPhone;
        json.idCard = {
            'name': this.file_name,
            'picture': this.file_src
        };
        if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
            delete json.idCard;
        }
        json.createdAt = n;
        json.cuid = localStorage.getItem('uid');
        this.flag = false;
        var arrayOfKeys = Object.keys(this.model);
        var error = false;
        /* for(let obj of arrayOfKeys){
            if(!(this.model[obj])){
                 error=true;
                 this.loadError("please provide "+obj);
                if(loading){
                    loading.dismiss();
                    loading=null;
                }
                 break;
            }
         }*/
        if (!error) {
            // if (1) {
            // if(this.file_src=='' || this.file_src==' ' || !(this.file_src)){
            if (0) {
                this.loadError("please provide id proof");
                if (loading) {
                    loading.dismiss();
                    loading = null;
                }
            }
            else {
                this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                    }
                    _this.loadSuccess();
                }, function (reject) {
                    console.log('error while storing data. please try again');
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                        _this.loadError('Something went wrong. Try again');
                    }
                });
            }
        }
    };
    ProfilePage.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait'
        });
        loading.present();
        var d = new Date();
        var n = d.toISOString();
        var json = this.model;
        json.services = this.services;
        json.address = this.addresses;
        json.profilePicture = this.profile_pic;
        json.partnerPhone = this.model.partnerPhone;
        json.idCard = {
            'name': this.file_name,
            'picture': this.file_src
        };
        if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
            delete json.idCard;
        }
        json.createdAt = n;
        json.cuid = localStorage.getItem('uid');
        this.flag = false;
        var arrayOfKeys = Object.keys(this.model);
        var error = false;
        /* for(let obj of arrayOfKeys){
            if(!(this.model[obj])){
                 error=true;
                 this.loadError("please provide "+obj);
                if(loading){
                    loading.dismiss();
                    loading=null;
                }
                 break;
            }
         }*/
        if (!error) {
            // if (1) {
            // if(this.file_src=='' || this.file_src==' ' || !(this.file_src)){
            if (0) {
                this.loadError("please provide id proof");
                if (loading) {
                    loading.dismiss();
                    loading = null;
                }
            }
            else {
                this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                    }
                    _this.reloadCompleteData();
                }, function (reject) {
                    console.log('error while storing data. please try again');
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                    }
                });
            }
        }
    };
    ProfilePage.prototype.reloadPage = function (loading, ref) {
        this.loadServiceDataKeys(ref);
        if (loading) {
            loading.dismiss();
            loading = null;
        }
    };
    ProfilePage.prototype.reloadCompleteData = function () {
        var _this = this;
        this.profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        this.profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        this.profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        this.profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
        /*let alert = this.alertCtrl.create({
            message: 'Congratulations Profile Updated Successfully',
            buttons: [{
                text: 'OK',
                role: 'cancel',
                handler: data => {
                  
                }
              }]
          });
          alert.present();*/
    };
    ProfilePage.prototype.getCityState = function (zipcode) {
        var _this = this;
        if (zipcode) {
            if (zipcode.length == 5) {
                this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDUQtXZv6J5LFrnNFQNTlg-QRXU6f20Nfk&address=' + zipcode).subscribe(function (data) {
                    var response = data.json();
                    if (response.results[0].address_components[1] && response.results[0].address_components[3]) {
                        //console.log(response.results[0].address_components[1].long_name)
                        _this.address.city = response.results[0].address_components[1].long_name;
                        //console.log(response.results[0].address_components[3].short_name)
                        _this.address.state = response.results[0].address_components[3].short_name;
                        _this.zip_error = '';
                    }
                });
            }
            else {
                this.zip_error = 'Enter valid zip code';
            }
        }
        else {
            this.zip_error = 'Enter valid zip code';
        }
    };
    ProfilePage.prototype.createLoader = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        this.loading = this.loadingCtrl.create({
            content: message
        });
    };
    ProfilePage.prototype.loadError = function (message) {
        var alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage.prototype.loadSuccess = function () {
        var alert = this.alertCtrl.create({
            message: 'Thank you, profile has been updated.',
            buttons: [{
                    text: 'OK',
                    role: 'cancel',
                    handler: function (data) {
                        // this.goToLogin();
                    }
                }]
        });
        alert.present();
    };
    ProfilePage.prototype.goToLogin = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this._auth.signoutUser().then(function (res) {
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__start_start__["a" /* StartPage */]);
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ProfilePage.prototype.connectStripe = function () {
        var _this = this;
        var options = {
            zoom: 'no',
            location: 'no'
        };
        var browser = this.inAppBrowser.create(this.stripeUrl + this.profileKeys[0].key, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            if ((event.url).indexOf(_this.stripeRedirectUrl) === 0) {
                browser.hide();
                browser.close();
            }
        });
    };
    ProfilePage.prototype.openPaymentsDashBoard = function () {
        var options = {
            zoom: 'no',
            location: 'no'
        };
        var browser = this.inAppBrowser.create(this.stripeDashboard + '?accId=' + this.stripeAccountId, '_blank', options);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\pages\profile\profile.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="grey">\n  <ion-navbar color="grey">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n\n\n  <ion-card style="padding:0px;width:100%; margin-left: auto; " [hidden]="adressPage">\n\n    <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n      <div class="row" style="padding-top: 10px">\n        <div class="col-xs-2">\n          <ion-icon (click)="showAddress()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n        </div>\n        <div style="padding:0px">\n          <div class="row">\n            Add Address\n          </div>\n        </div>\n      </div>\n      <hr style="margin-top: 0px; ">\n    </ion-card-header>\n    <ion-card-content>\n      <div class="row">\n\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Name your address (Ex. Home, Office etc.)</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.name" (keyup)="validateAddress(address)"> {{name_error}}\n\n          </div>\n        </div>\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Address Line 1</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address1" (keyup)="validateAddress(address)">{{address_error}}\n          </div>\n        </div>\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Address Line 2</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address2" (keyup)="validateAddress(address)">{{address2_error}}\n          </div>\n        </div>\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-12" style="text-align:left">\n          <label for="name2" class="control-label">Zip</label>\n          <div>\n            <input class="form-control round " pattern="[0-9]{5}" type="text" name="Email" [(ngModel)]="address.zip" (keyup)="getCityState(address.zip)">\n          </div>\n        </div>\n\n      </div>\n      <div class="row" style="width:100% ">\n        <div class="form-group col-xs-6" style="text-align:left">\n          <label for="name2" class="control-label">City</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.city" readonly>\n          </div>\n        </div>\n        <div class="form-group col-xs-6" style="text-align:left">\n          <label for="name2" class="control-label">State</label>\n          <div>\n            <input class="form-control round " type="text" name="Email" [(ngModel)]="address.state" readonly>\n          </div>\n        </div>\n      </div>\n      <div class="footer text-center" (click)="addAddress(address)" *ngIf="!address.index">\n        Save\n      </div>\n      <div class="footer text-center" (click)="saveUpdatedAddress(address)" *ngIf="address.index">\n        Done\n      </div>\n      <div class="footer text-center danger" *ngIf="address.index" (click)="removeAddress(address.index)" style="margin-top:10px;background:#f44336 !important">\n        Remove\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- services popup -->\n  <ion-card style="padding:0px;width:100%;margin-left: auto" [hidden]="servicePage">\n\n    <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n      <div class="row">\n        <div class="col-xs-2">\n          <ion-icon (click)="showUpdateServiceCard()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey"\n            style="font-size:25px;font-weight:bold"></ion-icon>\n        </div>\n        <div style="padding:0px">\n          <div class="row">\n            Add Service\n          </div>\n        </div>\n      </div>\n      <hr style="margin-top: 0px">\n    </ion-card-header>\n    <ion-card-content>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Category</label>\n            <ion-select [(ngModel)]="service.service" class="form-control round" (ngModelChange)="getSubCategories()" style="max-width:100%">\n              <ion-option *ngFor="let category of category_data" value="{{category}}">{{category}}</ion-option>\n\n            </ion-select>\n\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Speciality</label>\n            <ion-select [(ngModel)]="service.speciality" class="form-control round " style="max-width:100%">\n              <ion-option *ngFor="let category of sub_categories" value="{{category.name}}">{{category.name}}</ion-option>\n\n            </ion-select>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Location</label>\n            <ion-select [(ngModel)]="service.location" class="form-control round " style="max-width:100%">\n              <ion-option *ngFor="let addr of addresses;let j=index" value="{{j}}">{{addr.name}}</ion-option>\n\n            </ion-select>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Service Radius</label>\n            <ion-select [(ngModel)]="service.serverRadius" class="form-control round " style="max-width:100%">\n              <ion-option *ngFor="let radius of service_radius" value="{{radius}}">{{radius}}</ion-option>\n\n            </ion-select>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-xs-12">\n          <div class="form-group text-left">\n            <label for="name2" class="control-label">Price</label>\n            <div>\n              <div class="inner-addon left-addon">\n\n                <i class="fa fa-usd" aria-hidden="true" color="grey"></i>\n                <input type="number" min="0.00" max="10000.00" step="0.01" [(ngModel)]="service.amount" class="form-control round">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="footer text-center" (click)="addService(service)" *ngIf="!service.index">\n        Save\n      </div>\n      <div class="footer text-center" (click)="saveUpdatedService(service)" *ngIf="service.index">\n        Edit\n      </div>\n      <div class="footer text-center danger" *ngIf="service.index" (click)="removeService(service.index)" style="margin-top:10px;background:#f44336 !important">\n        Remove\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- services popup end -->\n\n  <div id="backdrop" [hidden]="profilePage">\n    <ion-card style="padding:0px;width:100%;margin-left:auto;" class="rounded-card">\n\n      <ion-card-header style="padding:0px">\n\n        <div class="row" style="margin-bottom:5px">\n\n          <div class="col-xs-12" style="padding:0px">\n            <div class="row">\n              <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                Profile\n\n                <img (click)="uploadProfilePic()" class="img-circle profile_pic" [src]="DomSanitizer.bypassSecurityTrustUrl(profile_pic)">\n\n                <!--<input type="file" id="BtnBrowseHidden" accept="image/*" (change)="profileImageChange($event)" #image hidden>-->\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <hr>\n      </ion-card-header>\n      <ion-card-content>\n        <div class="row row-bottom" style="width:100% ">\n\n          <div class="row">\n\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">First Name</label>\n              <div>\n                <input class="form-control round " type="text" name="firstName" [(ngModel)]="model.partnerFirstName" (keyup)="checkFirstName(model.partnerFirstName)"> {{firstname_error}}\n              </div>\n            </div>\n          </div>\n\n          <div class="row">\n\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Last Name</label>\n              <div>\n                <input class="form-control round " type="text" name="lastName" [(ngModel)]="model.partnerLastName" (keyup)="checkLastName(model.partnerLastName)"> {{lastname_error}}\n              </div>\n            </div>\n          </div>\n\n          <div class="row" style="width:100% ">\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Email Address</label>\n              <div>\n                <input class="form-control round " type="email" name="Email" [(ngModel)]="model.partnerEmail" (keyup)="checkEmail(model.partnerEmail)"> {{email_error}}\n              </div>\n            </div>\n          </div>\n          <div class="row" style="width:100% ">\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Gender</label>\n              <ion-select [(ngModel)]="model.partnerGender" class="form-control round " style="max-width:100%">\n                <ion-option value="male">Male</ion-option>\n                <ion-option value="female">Female</ion-option>\n                <ion-option value="transgender">Transgender</ion-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class="row" style="width:100% ">\n            <div class="form-group col-xs-12" style="text-align:left">\n              <label for="name2" class="control-label">Phone Number</label>\n              <div>\n                <input class="form-control round " type="tel" name="Email" [(ngModel)]="model.partnerPhone" (keyup)="checkPhone(model.partnerPhone)"> {{phone_error}}\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card">\n\n      <ion-card-header style="padding:0px">\n\n        <div class="row" style="margin-bottom:5px">\n\n          <div class="col-xs-12" style="padding:0px">\n            <div class="row">\n              <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                Address\n\n                <ion-icon ios="ios-add" md="md-add" class="pull-right" (click)="showAddress()" style="font-size:20px;font-weight: bolder;margin-right: 10px;margin-top:0px"></ion-icon>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <hr>\n      </ion-card-header>\n      <ion-card-content style="height:150px;overflow:auto">\n        <ion-list>\n          {{address_error}}\n          <ul class="list-inline">\n            <li class="list-inline-item bold" *ngFor="let item_address of addresses; let i = index">\n\n              {{item_address.name}}\n              <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="showUpdateAddress();updateAddress(i+1,item_address)"></ion-icon>\n            </li>\n          </ul>\n\n        </ion-list>\n\n\n      </ion-card-content>\n    </ion-card>\n\n\n    <!-- [disabled]="firstname_error!=\'\'||lastname_error!=\'\'||email_error!=\'\'||phone_error!=\'\' " -->\n\n    <button text-center class="footer" (click)="validate()"  style="width:100%;margin-top:10px;background: #27ae60;border-radius: 6px;">\n\n      Save Profile\n\n    </button>\n\n  </div>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_app_menu_controller__["a" /* MenuController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bookings/bookings.module": [
		474,
		5
	],
	"../pages/login/login.module": [
		475,
		4
	],
	"../pages/notifications/notifications.module": [
		476,
		3
	],
	"../pages/profile/profile.module": [
		477,
		2
	],
	"../pages/register/register.module": [
		478,
		1
	],
	"../pages/start/start.module": [
		479,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PaymentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PaymentsProvider = (function () {
    function PaymentsProvider(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth)
                _this.userId = auth.uid;
        });
    }
    PaymentsProvider.prototype.processPayment = function (token, amount, bookingKey, paymentStatus) {
        var payment = { token: token, amount: amount, paymentStatus: paymentStatus };
        return this.db.list('/booking').update(bookingKey, payment);
    };
    PaymentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PaymentsProvider);
    return PaymentsProvider;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsProvider = (function () {
    function NotificationsProvider(db) {
        this.db = db;
        console.log('Hello NotificationsProvider Provider');
    }
    NotificationsProvider.prototype.getInAppNotificationsByUid = function (uid) {
        return this.db.list('/notification', function (ref) { return ref.orderByChild('uid').equalTo(uid); });
    };
    NotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NotificationsProvider);
    return NotificationsProvider;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(328);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth, db, googleplus, platform, facebook) {
        this.afAuth = afAuth;
        this.db = db;
        this.googleplus = googleplus;
        this.platform = platform;
        this.facebook = facebook;
    }
    // get current user data from firebase
    AuthProvider.prototype.getUserData = function () {
        return this.afAuth.auth.currentUser;
    };
    AuthProvider.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.register = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (authData) {
                // set up initial data
                localStorage.setItem('uid', authData.uid);
                _this.updateUserProfile(authData);
                observer.next();
            }).catch(function (error) {
                if (error) {
                    observer.error(error);
                }
            });
        });
    };
    // update user display name and photo
    AuthProvider.prototype.updateUserProfile = function (user) {
        var name = user.name ? user.name : user.email;
        var photoUrl = user.photoURL;
        this.getUserData().updateProfile({
            displayName: name,
            photoURL: photoUrl
        });
        // create or update passenger
        this.db.object('partners/' + user.uid).update({
            name: name,
            photoURL: photoUrl,
            email: user.email,
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.signoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.loginWithSocialNetwork = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var clientid = '603375740986-41g69md2laq28lfotvvtk3n7qeof3kdj.apps.googleusercontent.com';
            var config = {
                'webClientId': clientid,
                'offline': false
            };
            if (token == 'google') {
                if (_this.platform.is('cordova')) {
                    console.log('Trying to connect to social site for auth key');
                    _this.googleplus.login(config).then(function (res) {
                        var firecreds = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken);
                        resolve(_this.afAuth.auth.signInWithCredential(firecreds));
                    }).catch(function (err) {
                        console.log('Google Error - ' + err);
                        reject(err);
                    });
                }
                else {
                    resolve(_this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider));
                }
            }
            else {
                if (_this.platform.is('cordova')) {
                    _this.facebook.login(['email']).then(function (response) {
                        var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                        resolve(_this.afAuth.auth.signInWithCredential(facebookCredential));
                    }).catch(function (error) {
                        console.log('Facebook Error - ' + JSON.stringify(error));
                        reject(error);
                    });
                }
                else {
                    resolve(_this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider));
                }
            }
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_start_start__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bookings_bookings__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_geocoder_geocoder__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_notifications_notifications__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_bookings_bookings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_service_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_geo_geo__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_payments_payments__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_geolocation__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_geolocation__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// Import the AF2 Module


















// AF2 DEV Settings
var firebaseConfig = {
    // ----------> FIREBASE DEV <----------------
    //apiKey: "AIzaSyDlPbZ-q-OkzvskSj4-jbZCfNezyu74gZk",
    //authDomain: "mobilestyler-dev.firebaseapp.com",
    //databaseURL: "https://mobilestyler-dev.firebaseio.com",
    // projectId: "mobilestyler-dev",
    //storageBucket: "mobilestyler-dev.appspot.com",
    // messagingSenderId: "603375740986"
    // -------------> FIREBASE PROD <-------------------
    apiKey: "AIzaSyAZUbCr5oI9z0o89MtaU5urznlGsx5jujg",
    authDomain: "mobilestyler-prod.firebaseapp.com",
    databaseURL: "https://mobilestyler-prod.firebaseio.com",
    projectId: "mobilestyler-prod",
    storageBucket: "mobilestyler-prod.appspot.com",
    messagingSenderId: "896950829266"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bookings/bookings.module#BookingsPageModule', name: 'BookingsPage', segment: 'bookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["a" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_23__providers_notifications_notifications__["a" /* NotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_bookings_bookings__["a" /* BookingsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_geo_geo__["a" /* GeoProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_32__providers_payments_payments__["a" /* PaymentsProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_fcm__["a" /* FCM */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(nav, navParams, authService, alertCtrl, loadingCtrl, fb, menu, profile, platform) {
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.menu = menu;
        this.profile = profile;
        this.platform = platform;
        this.loginPage = false;
        this.forgotPage = true;
        this.registerPage = true;
        this.rForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email],
            'password': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            'validate': ''
        });
        this.registrationForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email],
            'password': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            'confirmPassword': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
        this.forgotForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email]
        });
        this.menu.enable(false);
        this.loginPage = false;
        this.forgotPage = true;
        this.registerPage = true;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.showForgot = function () {
        this.loginPage = true;
        this.forgotPage = false;
    };
    LoginPage.prototype.showLogin = function () {
        this.loginPage = !this.loginPage;
        this.forgotPage = !this.forgotPage;
    };
    LoginPage.prototype.showRegister = function () {
        this.loginPage = !this.loginPage;
        this.registerPage = !this.registerPage;
    };
    LoginPage.prototype.skip = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.email || !this.password) {
            var alert_1 = this.alertCtrl.create({
                message: 'Please provide email and password',
                buttons: ['OK']
            });
            return alert_1.present();
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.login(this.email, this.password).then(function (authData) {
            /* if (this.isCustomer(authData.uid))
       
             {
                 localStorage.setItem('uid', authData.uid)
                 loading.dismiss();
                 this.nav.setRoot(HomePage);
             }
             else {
                 loading.dismiss();
                 let alert = this.alertCtrl.create({
                     message: "EmailId already registered as a Cosmetologist",
                     buttons: ['OK']
                 });
                 alert.present();
             }
             localStorage.setItem('uid', authData.uid)
             loading.dismiss();
       
             this.nav.setRoot(HomePage);*/
            _this.profile.getProfileData(authData.uid).subscribe(function (res) {
                if (res.length > 0) {
                    localStorage.setItem('email', _this.email); //autologin
                    localStorage.setItem('password', _this.password); //autologin
                    localStorage.setItem('uid', authData.uid);
                    loading.dismiss();
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    loading.dismiss();
                    var alert_2 = _this.alertCtrl.create({
                        message: "EmailId already registered as a Cosmetologist",
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
        //this.nav.setRoot(HomePage);
    };
    // go to register page
    LoginPage.prototype.register = function () {
        var _this = this;
        // debugger
        if (!this.email || !this.password) {
            var alert_3 = this.alertCtrl.create({
                message: 'Please provide email and password',
                buttons: ['OK']
            });
            return alert_3.present();
        }
        if (this.password != this.confirmPassword) {
            var alert_4 = this.alertCtrl.create({
                message: 'password and confirm password must be same',
                buttons: ['OK']
            });
            return alert_4.present();
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.register(this.email, this.password).subscribe(function (authData) {
            loading.dismiss();
            var json = {
                'partnerEmail': _this.email,
                'uid': localStorage.getItem('uid')
            };
            _this.profile.registerUser(json);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */], { 'auth': authData, 'email': _this.email });
            /*this.profile.registerUser(json).then(
                ref=> {
                    console.log(ref)
                   // this.nav.setRoot(RegisterPage, {'auth':authData,'email':this.email})
                }
            )*/
            // this.nav.setRoot(RegisterPage, {'auth':authData,'email':this.email});
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        var _this = this;
        if (!this.email) {
            var alert_5 = this.alertCtrl.create({
                message: 'Please provide the email address',
                buttons: ['OK']
            });
            return alert_5.present();
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.resetPassword(this.email).then(function (res) {
            loading.dismiss();
            _this.nav.setRoot(LoginPage_1);
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.loginwithgoogle = function (token) {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var self = this;
        this.authService.loginWithSocialNetwork(token).then(function (data) {
            if (data) {
                console.log('Got token from firebase');
                var uid = '';
                var email_1 = '';
                var photo_1 = '';
                var name_1 = '';
                var phoneNumber_1 = '';
                if (self.platform.is('cordova') && token == 'google') {
                    uid = data.uid;
                    email_1 = data.email;
                    photo_1 = data.photoURL;
                    name_1 = data.displayName;
                    phoneNumber_1 = data.phoneNumber;
                }
                else if (self.platform.is('cordova') && token == 'facebook') {
                }
                else {
                    uid = data.user.uid;
                    email_1 = data.user.email;
                    photo_1 = data.user.photoURL;
                    name_1 = data.user.displayName;
                    phoneNumber_1 = data.user.phoneNumber;
                }
                localStorage.setItem('uid', uid);
                self.profile.getProfileDataKeys(uid).subscribe(function (user) {
                    if (user.length > 0) {
                        console.log('Send to Home page');
                        self.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        console.log('Send to Register page');
                        // let json = {
                        //     'partnerEmail': email,
                        //     'uid': localStorage.getItem('uid')
                        // };
                        // self.profile.registerUser(json);
                        self.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */], { 'email': email_1, 'photo': photo_1, 'name': name_1, 'phoneNumber': phoneNumber_1, 'socialLogin': true });
                    }
                    loading.dismiss();
                });
            }
            else {
                console.log('Failed to get token from firebase');
                alert('Login Failed / Cancelled');
            }
        }).catch(function (err) {
            console.log('Failed to connect to Firebase - ' + err);
            loading.dismiss();
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\pages\login\login.html"*/'<ion-content>\n    <ion-card style="padding:0px;width:100%;height:100% " [hidden]="registerPage">\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n            <div class="row">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showRegister()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Registration\n                    </div>\n                </div>\n            </div>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n\n            <form [formGroup]="registrationForm">\n                <br>\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label for="email" class="control-label">Email Id</label>\n                    <div>\n\n                        <input class="form-control round" id="email" [(ngModel)]="email" formControlName="email" />\n                        <div class="text" *ngIf="!registrationForm.controls[\'email\'].valid && registrationForm.controls[\'email\'].touched">Please enter a valid email address</div>\n\n                    </div>\n                </div>\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label for="password" class="control-label">Password</label>\n                    <div>\n                        <input type="password" class="form-control round" id="password" [(ngModel)]="password" formControlName="password" />\n                        <div class="text" *ngIf="!registrationForm.controls[\'password\'].valid && registrationForm.controls[\'password\'].touched">Please enter a valid password</div>\n                    </div>\n                </div>\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label for="password" class="control-label">Confirm Password</label>\n                    <div>\n                        <input type="password" class="form-control round" id="confirmPassword" [(ngModel)]="confirmPassword" formControlName="confirmPassword" />\n                        <div class="text" *ngIf="!registrationForm.controls[\'confirmPassword\'].valid && registrationForm.controls[\'confirmPassword\'].touched">Please enter a valid confirm password</div>\n                    </div>\n                </div>\n                <br>\n            </form>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card style="padding:0px;width:100%;height:100% " [hidden]="forgotPage">\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n            <div class="row">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showLogin()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Reset Password\n                    </div>\n                </div>\n            </div>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <form [formGroup]="forgotForm">\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label for="resetEmail" class="control-label">Email ID</label>\n                    <div>\n                        <input class="form-control round" id="resetEmail" [(ngModel)]="email" formControlName="email" />\n                        <div class="text" *ngIf="!forgotForm.controls[\'email\'].valid && rForm.controls[\'email\'].touched">Please enter valid email address</div>\n                    </div>\n                </div>\n            </form>\n        </ion-card-content>\n    </ion-card>\n    <div class="page" [hidden]="loginPage">\n        <div padding class="no-padding-top">\n            <div class="social-login" text-center>\n                <!-- <button class="loginBtn loginBtn--facebook" [disabled]="true" (click)="loginwithgoogle(\'facebook\')">\n                    Login with Facebook\n                </button> -->\n                <ion-card class="google-button">\n                    <img src="assets/imgs/google.png" style="width:20px;float:left" />\n                    <div (click)="loginwithgoogle(\'google\')" style="font-size:16px;width:200px">\n                        Log in with Google\n                    </div>\n                </ion-card>\n\n            </div>\n        </div>\n        <hr class="no-margin">\n        <div padding>\n            <form (ngSubmit)="login()" [formGroup]="rForm">\n                <br>\n                <br>\n                <div class="form-group col-sm-12">\n                    <label for="emailLogin" class="control-label">Email ID</label>\n                    <div>\n                        <input type="email" class="form-control round" [(ngModel)]="email" id="emailLogin" formControlName="email" style=\'height:50px\' />\n                        <!-- This goes underneath the Name label -->\n\n                        <div class="text" *ngIf="!rForm.controls[\'email\'].valid && rForm.controls[\'email\'].touched">Please enter valid email address</div>\n                    </div>\n                </div>\n                <div class="form-group col-sm-12">\n                    <label for="password" class="control-label">Password</label>\n                    <div>\n                        <input type="password" [(ngModel)]="password" formControlName="password" class="form-control round" />\n                        <div class="text" *ngIf="!rForm.controls[\'password\'].valid && rForm.controls[\'password\'].touched">Please enter password</div>\n                    </div>\n                </div>\n                <br>\n                <div full text-center class="text">\n                    <span (click)="showRegister()">Sign Up as a User</span>\n                    <br>\n                    <br>\n                    <span (click)="showForgot()">Forgot Password</span>\n                    <br>\n                    <br>\n                    <span (click)="skip()"> Skip Login</span>\n                </div>\n            </form>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer text-center class="footer" (click)="login()" [hidden]="loginPage">\n    Sign In\n</ion-footer>\n<ion-footer text-center class="footer" (click)="register()" [hidden]="registerPage">\n    Next\n</ion-footer>\n<ion-footer text-center class="footer" (click)="forgotPassword()" [hidden]="forgotPage">\n    Reset\n</ion-footer>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bookings_bookings__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_start_start__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, alertCtrl, _auth, statusBar, splashScreen, menuCtrl, fcm, keyboard) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this._auth = _auth;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.fcm = fcm;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_start_start__["a" /* StartPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Bookings', component: __WEBPACK_IMPORTED_MODULE_4__pages_bookings_bookings__["a" /* BookingsPage */] },
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] }
        ];
        this.enable = false;
        /*if (this.platform.is('ios')) {
            this.keyboard.disableScroll(true);
        }*/
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.statusBar.backgroundColorByHexString('#34495e');
            _this.splashScreen.hide();
            _this.keyboard.disableScroll(true);
            _this.fcm.subscribeToTopic('customers');
            _this.fcm.subscribeToTopic('broadcast');
            _this.fcm.getToken().then(function (token) {
                // backend.registerToken(token);
            });
            _this.fcm.onNotification().subscribe(function (data) {
                alert(data.aps.alert.body);
                if (data.wasTapped) {
                    console.info("Received in background");
                }
                else {
                    console.info("Received in foreground");
                }
                ;
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                // backend.registerToken(token);
            });
        });
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        this._auth.signoutUser().then(function (res) {
            localStorage.removeItem('uid');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_start_start__["a" /* StartPage */]);
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (localStorage.getItem('uid') == null) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        }
        else if (page == 'signOut') {
            this.signOut();
        }
        else {
            this.nav.setRoot(this.pages[page].component);
            this.closeMenu();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\app\app.html"*/'<ion-menu [content]="content" color="grey">\n    <ion-header color="grey">\n        <ion-toolbar color="grey">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="grey-background">\n        <ion-list class="grey-background">\n            <p class="menu-item" (click)="openPage(0)">Home</p>\n            <p class="menu-item" (click)="openPage(2)">Bookings</p>\n            <p class="menu-item" (click)="openPage(1)">Profile</p>\n            <p class="menu-item" (click)="openPage(3)">Notifications</p>\n            <p class="menu-item" (click)="openPage(\'signOut\')">Sign out</p>\n\n        </ion-list>\n        <p class="menu-item footer-item">\n            <img src="assets/ms-logo.png" style="width:60%"></p>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeocoderProvider = (function () {
    function GeocoderProvider(_GEOCODE) {
        this._GEOCODE = _GEOCODE;
    }
    /**
     *
     * Perform reverseGeocoding operation and return address details
     *
     * @public
     * @method reverseGeocode
     * @return {Promise}
     *
     */
    GeocoderProvider.prototype.reverseGeocode = function (lat, lng) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.reverseGeocode(lat, lng)
                .then(function (result) {
                var str = "The reverseGeocode address is " + result['street'] + " in " + result['countryCode'];
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    /**
     *
     * Perform forwardGeocode operation and return latitude/longitude details
     *
     * @public
     * @method forwardGeocode
     * @return {Promise}
     *
     */
    GeocoderProvider.prototype.forwardGeocode = function (keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.forwardGeocode(keyword)
                .then(function (coordinates) {
                var str = "The coordinates are latitude=" + coordinates['latitude'] + " and longitude=" + coordinates['longitude'];
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    GeocoderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], GeocoderProvider);
    return GeocoderProvider;
}());

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GeoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeoProvider = (function () {
    function GeoProvider(zone) {
        this.zone = zone;
        this.lat = 0;
        this.lng = 0;
        console.log('Hello GeoProvider Provider');
    }
    GeoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], GeoProvider);
    return GeoProvider;
}());

//# sourceMappingURL=geo.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = (function () {
    function ProfileProvider(db) {
        this.db = db;
    }
    ProfileProvider.prototype.getProfileData = function (uid) {
        return this.db.list('/customer', function (ref) { return ref.orderByChild('uid').equalTo(uid); }).valueChanges();
    };
    ProfileProvider.prototype.getPartnerProfile = function (id) {
        return this.db.list('/partner', function (ref) { return ref.orderByChild('uid').equalTo(id); }).valueChanges();
    };
    ProfileProvider.prototype.getProfileDataKeys = function (uid) {
        return this.db.list('/customer', function (ref) { return ref.orderByChild('uid').equalTo(uid); }).snapshotChanges();
    };
    ProfileProvider.prototype.getProfileServices = function (uid) {
        return this.db.list('/service', function (ref) { return ref.orderByChild('puid').equalTo(uid); }).valueChanges();
    };
    ProfileProvider.prototype.getProfileServicesKeys = function (uid) {
        return this.db.list('/service', function (ref) { return ref.orderByChild('puid').equalTo(uid); }).snapshotChanges();
    };
    ProfileProvider.prototype.registerUser = function (json) {
        var partner_profile = {
            'partnerEmail': json.partnerEmail,
            'uid': json.uid
        };
        var data = this.db.list('/customer');
        data.push(partner_profile);
    };
    ProfileProvider.prototype.saveProfile = function (json) {
        if (!json.address) {
            json.address = [];
        }
        if (!json.createdAt) {
            json.createdAt = '';
        }
        if (!json.partnerEmail) {
            json.partnerEmail = '';
        }
        if (!json.partnerGender) {
            json.partnerGender = '';
        }
        if (!json.idCard) {
            json.idCard = '';
        }
        if (!json.partnerFirstName) {
            json.partnerFirstName = '';
        }
        if (!json.partnerLastName) {
            json.partnerLastName = '';
        }
        if (!json.profilePicture) {
            json.profilePicture = '';
        }
        if (!json.partnerPhone) {
            json.partnerPhone = '';
        }
        if (!json.partnerFromTime) {
            json.partnerFromTime = '';
        }
        if (!json.partnerToTime) {
            json.partnerToTime = '';
        }
        if (!json.partnerBio) {
            json.partnerBio = '';
        }
        var partner_profile = {
            'addresses': json.address,
            'createdAt': json.createdAt,
            'partnerEmail': json.partnerEmail,
            'partnerGender': json.partnerGender,
            'partnerFirstName': json.partnerFirstName,
            'partnerLastName': json.partnerLastName,
            'profilePicture': json.profilePicture,
            'partnerPhone': json.partnerPhone,
            'partnerFromTime': json.partnerFromTime,
            'partnerToTime': json.partnerToTime,
            'partnerBio': json.partnerBio,
            'uid': json.cuid
        };
        return this.db.list('/customer').push(partner_profile);
    };
    ProfileProvider.prototype.updateProfile = function (arr1, json) {
        if (!json.address) {
            json.address = [];
        }
        if (!json.createdAt) {
            json.createdAt = '';
        }
        if (!json.partnerEmail) {
            json.partnerEmail = '';
        }
        if (!json.partnerGender) {
            json.partnerGender = '';
        }
        if (!json.idCard) {
            json.idCard = '';
        }
        if (!json.partnerFirstName) {
            json.partnerFirstName = '';
        }
        if (!json.partnerLastName) {
            json.partnerLastName = '';
        }
        if (!json.profilePicture) {
            json.profilePicture = '';
        }
        if (!json.partnerPhone) {
            json.partnerPhone = '';
        }
        if (!json.partnerFromTime) {
            json.partnerFromTime = '';
        }
        if (!json.partnerToTime) {
            json.partnerToTime = '';
        }
        if (!json.partnerBio) {
            json.partnerBio = '';
        }
        var partner_profile = {
            'addresses': json.address,
            'createdAt': json.createdAt,
            'partnerEmail': json.partnerEmail,
            'partnerGender': json.partnerGender,
            'partnerFirstName': json.partnerFirstName,
            'partnerLastName': json.partnerLastName,
            'profilePicture': json.profilePicture,
            'partnerPhone': json.partnerPhone,
            'partnerFromTime': json.partnerFromTime,
            'partnerToTime': json.partnerToTime,
            'partnerBio': json.partnerBio,
            'uid': json.cuid
        };
        return this.db.list('/customer').update(arr1[0].key, partner_profile);
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_menu_controller__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = (function () {
    function StartPage(authService, loadingCtrl, navCtrl, navParams, menu) {
        var _this = this;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(false);
        if (localStorage.getItem('uid') !== null) {
            if (localStorage.getItem('email') !== null) {
                var loading_1 = this.loadingCtrl.create({
                    content: 'Please wait while we are signing you back in.'
                });
                loading_1.present();
                this.authService.login(localStorage.getItem('email'), localStorage.getItem('password')).then(function (authData) {
                    loading_1.dismiss();
                    // this.navCtrl.setRoot(BookingsPage);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }
        }
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.start = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\pages\start\start.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content text-center style="overflow:hidden" style="background:black">\n    <!--<div class="position" style="margin-top: 5%">\n\n        <ion-avatar>\n            <span class="avatar-title">Hair Stylists</span>\n            <img src="assets/4.jpg" class="image">\n        </ion-avatar>\n\n\n        <ion-avatar>\n            <span class="avatar-title">Nail Technicians</span>\n            <img src="assets/3.jpg" class="image">\n        </ion-avatar>\n\n        <ion-avatar>\n            <span class="avatar-title">Wax Technicians</span>\n            <img src="assets/1.jpg" class="image">\n        </ion-avatar>\n\n        <ion-avatar>\n            <span class="avatar-title">Makeup Artists</span>\n            <img src="assets/2.jpg" class="image">\n        </ion-avatar>\n    </div>-->\n    <div class="bottom-button">\n      <!--  <img src="assets/ms-logo.png" style="width:50%">-->\n        <h5 style="padding-left:10%;padding-right:10%;color:#fff">We Come To You</h5>\n        <h5 style="padding-left:10%;padding-right:10%;color:#fff">Wherever You Are</h5>\n        <button ion-button round color="grey" (click)="start()" style="text-transform:none; border: #fff 2px solid;">Get Started</button>\n    </div>\n\n\n   <!-- <video autoplay playsinline muted loop id="video-background" preload="true" style="width:50%;background:black;opacity:0.6">\n        <source src="assets/video.mp4">\n    </video>-->\n   <!-- <div id="image-background"></div>-->\n\n    <img src="assets/client.jpg" style="position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto; background-repeat: no-repeat;\n    background-size: cover;\n    z-index: -100;" />\n\n</ion-content>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\pages\start\start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_menu_controller__["a" /* MenuController */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bookings_bookings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bookings_bookings__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_payments_payments__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(31);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(alertCtrl, navCtrl, geolocation, loadingCtrl, zone, menu, nativeGeocoder, serviceDB, profileService, bookingService, paymentSvc, fcm, authService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.menu = menu;
        this.nativeGeocoder = nativeGeocoder;
        this.serviceDB = serviceDB;
        this.profileService = profileService;
        this.bookingService = bookingService;
        this.paymentSvc = paymentSvc;
        this.fcm = fcm;
        this.authService = authService;
        this.bookpagedata = {};
        this.showfilter = false;
        this.hideFilterBtn = false;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.distance = '15';
        this.price = '';
        this.rating = '';
        this.autocompleteItems = [];
        this.nearbyItems = new Array();
        /* end of location variables */
        /*to handle dropdown data*/
        this.category_data = [];
        this.sub_category_data = []; // all sub categories structure
        this.sub_categories = []; // filtered sub categories based on category selection
        this.header_address = 'fetching address';
        this.xyz = "fetching";
        this.showCard = true;
        this.paymentStatus = "false";
        this.added_services = []; //for listing selected services in booking popup
        /*model data for selected service data */
        this.details = {
            service: '',
            price: '',
            expertise: '',
            category: ''
        };
        this.selected_services = [];
        this.selected_category = "";
        /* card top profile information*/
        this.profile_data = {
            'profilePicture': 'assets/profile_icon.png',
            'puid': '',
            'name': ''
        };
        this.customerName = '';
        this.addresses = []; // addresses in customer profile data
        this.amount = 0; // to caluclate total amount client to pay for selected services
        this.selected_name = "";
        this.markers = [];
        this.all_services = [];
        this.filteredlist = [];
        this.Listview = false;
        this.menu.enable(true);
        var date_today = new Date();
        var year = "" + date_today.getFullYear();
        if ((date_today.getMonth() + 1) < 10)
            var month = "0" + (date_today.getMonth() + 1);
        else
            month = "" + (date_today.getMonth() + 1);
        if (date_today.getDate() < 10)
            var date = "0" + (date_today.getDate());
        else
            var date = "" + date_today.getDate();
        this.myDate = year + '-' + month + '-' + date;
        console.log(this.myDate);
        // this.myDate = new Date();
        this.arrow_flag = 0;
        this.bookDiv = true;
        this.bookPage = true;
        this.locationPage = true;
        this.listPage = false;
        this.autocomplete = {
            input: ''
        };
        if (this.authService.getUserData())
            if (this.authService.getUserData().uid)
                this.fcm.subscribeToTopic(this.authService.getUserData().uid);
        //this.profileService.getProfileData(localStorage.getItem('uid'))
        // .subscribe(
        //   ref => this.loadMyAddress(ref[0])
        // );
        this.xyz = "fetching adress..";
        this.services = [
            {
                "name": "Haircuts",
                "children": [
                    {
                        "name": "Men's Haircut"
                    },
                    {
                        "name": "Men's Barber"
                    },
                    {
                        "name": "Women's Haircut"
                    }
                ]
            },
            {
                "name": "Color Services",
                "children": [
                    {
                        "name": "Retouch"
                    },
                    {
                        "name": "Highlights/Balayage"
                    },
                    {
                        "name": "Ombre"
                    },
                    {
                        "name": "All over coloring "
                    },
                    {
                        "name": "Color Correction "
                    }
                ]
            },
            {
                "name": "Hair Treatments",
                "children": [
                    {
                        "name": "Deep Conditioning"
                    },
                    {
                        "name": "Brazilian Blowout"
                    },
                    {
                        "name": "Keratin"
                    },
                    {
                        "name": "Perms"
                    }
                ]
            },
            {
                "name": "Hair Styling",
                "children": [
                    {
                        "name": "Blow outs"
                    },
                    {
                        "name": "Up/Down Dos"
                    },
                    {
                        "name": "Hair Extensions "
                    }
                ]
            },
            {
                "name": "Manicure",
                "children": [
                    {
                        "name": "Manicure"
                    },
                    {
                        "name": "Acrylic"
                    },
                    {
                        "name": "Dip Powder"
                    },
                    {
                        "name": "Gel"
                    }
                ]
            },
            {
                "name": "Pedicure",
                "children": [
                    {
                        "name": "Basic Pedicure"
                    },
                    {
                        "name": "Spa Pedicure"
                    }
                ]
            },
            {
                "name": "Makeup Artist",
                "children": [
                    {
                        "name": "Special Occasion"
                    },
                    {
                        "name": "Bridal"
                    }
                ]
            },
            {
                "name": "Wax Technician",
                "children": [
                    {
                        "name": "Facial"
                    },
                    {
                        "name": "Arms"
                    },
                    {
                        "name": "Legs"
                    },
                    {
                        "name": "Brazilian"
                    },
                    {
                        "name": "Back"
                    }
                ]
            }
        ];
        this.items = this.services;
        this.menu.enable(true);
        this.current_location = {};
        this.current_location.latitude = "";
        this.current_location.longitude = "";
        this.current_location.address = "";
        this.loading = this.loadingCtrl.create({
            content: 'Fetching Current Location...'
        });
        /*this.loading.present();
        var self = this;
        var posOptions = {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 0
        };
        this.geolocation.getCurrentPosition(posOptions).then((position) => {
            this.current_location.latitude = position.coords.latitude;
            this.current_location.longitude = position.coords.longitude;
    
            this.GetAddress({lat: position.coords.latitude, lng: position.coords.longitude}, function (data) {
                self.loading.dismiss();
                if (data) {
                    // console.log('aa')
                    self.current_location.address = data;
                    self.getAllPartners();
    
                } else {
                    self.alertCtrl.create({
                        message: "Something went wrong, Please close and re-open the app.",
                        buttons: ["OK"]
                    }).present();
                }
            });
    
            let zoomLevel = this.getZoomLevel(this.distance);
            // console.log(this.getZoomLevel(5))
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: this.getZoomLevel(5),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            }
    
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
            this.marker = new google.maps.Marker({
                map: this.map,
                position: latLng,
                icon: '/assets/loc_marker.png',
                draggable: true
            });
    
            this.map.setCenter(latLng);
            this.marker.setPosition(latLng);
            this.map.setZoom(this.getZoomLevel(this.distance));
            
            //Marker Drag Listner
            google.maps.event.addListener(this.marker, 'dragend', function (position) {
                self.ChangeInLocation(position);
            });
    
        }, (err) => {
            console.log(err);
            this.alertCtrl.create({
                message: "Failed to get Current Location. Choose manually",
                buttons: ["OK"]
            }).present();
            this.GetLatlong('Austin, TX, USA');
        });*/
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadMyAddress(ref[0]); });
        // console.log('1')
        this.loading.present();
        var self = this;
        var posOptions = {
            enableHighAccuracy: false,
            timeout: 9000,
            maximumAge: 0
        };
        this.geolocation.getCurrentPosition(posOptions).then(function (position) {
            _this.current_location.latitude = position.coords.latitude;
            _this.current_location.longitude = position.coords.longitude;
            // console.log('2')
            _this.GetAddress({ lat: position.coords.latitude, lng: position.coords.longitude }, function (data, city, state) {
                self.loading.dismiss();
                if (data) {
                    self.city = city;
                    self.state = state;
                    // console.log('3')
                    console.log(city);
                    console.log(state);
                    self.current_location.address = data;
                    self.getAllPartners();
                }
                else {
                    // console.log('4')
                    self.alertCtrl.create({
                        message: "Something went wrong, Please close and re-open the app.",
                        buttons: ["OK"]
                    }).present();
                }
            });
            var zoomLevel = _this.getZoomLevel(_this.distance);
            // console.log(this.getZoomLevel(5))
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: _this.getZoomLevel(15),
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                disableDefaultUI: true
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.marker = new google.maps.Marker({
                map: _this.map,
                position: latLng,
                //icon: '/assets/loc_marker.png',
                //icon: 'https://firebasestorage.googleapis.com/v0/b/my-restro.appspot.com/o/loc_marker.png?alt=media&token=49c993f1-aa34-4085-9f61-6edcf5dc0a8b',
                icon: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Marker-Outside-Azure-icon.png',
                animation: google.maps.Animation.BOUNCE,
                draggable: true
            });
            _this.map.setCenter(latLng);
            _this.marker.setPosition(latLng);
            _this.map.setZoom(_this.getZoomLevel(_this.distance));
            //Marker Drag Listner
            google.maps.event.addListener(_this.marker, 'dragend', function (position) {
                self.ChangeInLocation(position);
            });
        }, function (err) {
            console.log(err);
            _this.alertCtrl.create({
                message: "Failed to get Current Location. Choose manually",
                buttons: ["OK"]
            }).present();
            _this.GetLatlong('Austin, TX, USA');
        });
    };
    HomePage.prototype.loadMyAddress = function (data) {
        this.addresses = data.addresses;
        this.customerName = data.partnerFirstName + " " + data.partnerLastName;
    };
    HomePage.prototype.addService = function () {
        var json = {
            'serviceName': this.details.category,
            'price': this.details.price,
            'speciality': this.sub_categories[this.details.speciality].name
        };
        this.amount += this.details.price;
        this.added_services.push(json);
        console.log(this.added_services);
    };
    /* to remove selected service from added services list in booking popup*/
    HomePage.prototype.removeService = function (index) {
        console.log(index);
        index = index;
        // let temp = [];
        this.amount = 0;
        this.added_services.splice(index, 1);
        for (var j = 0; j < this.added_services.length; j++) {
            this.amount += this.added_services[j].price;
        }
        console.log(this.added_services);
    };
    HomePage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            if (predictions) {
                _this.autocompleteItems = predictions;
            }
        });
    };
    HomePage.prototype.updateMapWithCurrentLocation = function (latitude, longitude) {
        console.log('updateMapWithCurrentLocation');
        var self = this;
        var latLng = new google.maps.LatLng(latitude, longitude);
        if (this.marker) {
            // this.marker.position = latLng;
            this.map.setCenter(latLng);
            this.marker.setPosition(latLng);
        }
        else {
            var latLng_1 = new google.maps.LatLng(latitude, longitude);
            var mapOptions = {
                center: latLng_1,
                zoom: this.getZoomLevel(this.distance),
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                disableDefaultUI: true
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.marker = new google.maps.Marker({
                map: this.map,
                position: latLng_1,
                // icon: '/assets/loc_marker.png',
                // icon: 'https://firebasestorage.googleapis.com/v0/b/my-restro.appspot.com/o/loc_marker.png?alt=media&token=49c993f1-aa34-4085-9f61-6edcf5dc0a8b',
                icon: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Marker-Outside-Azure-icon.png',
                animation: google.maps.Animation.BOUNCE,
                draggable: true
            });
            this.map.setCenter(latLng_1);
            this.marker.setPosition(latLng_1);
            this.map.setZoom(this.getZoomLevel(this.distance)); //this is default distance code
            //Marker Drag Listner
            var self_1 = this;
            google.maps.event.addListener(this.marker, 'dragend', function (position) {
                self_1.ChangeInLocation(position);
            });
            this.loading.dismiss();
        }
        this.GetAddress(latLng, function (data, city, state) {
            if (data) {
                self.current_location.address = data;
                self.city = city;
                self.state = state;
                console.log(city);
                console.log(state);
            }
            else {
                self.alertCtrl.create({
                    message: "Something went wrong, Please close and re-open the app.",
                    buttons: ["OK"]
                }).present();
            }
            self.loading.dismiss();
        });
        this.autocompleteItems = [];
        this.autocomplete.input = '';
    };
    HomePage.prototype.ChangeInLocation = function (position) {
        this.loading = this.loadingCtrl.create({
            content: 'Updating Location ...'
        });
        this.loading.present();
        var self = this;
        this.current_location.latitude = position.latLng.lat();
        this.current_location.longitude = position.latLng.lng();
        this.GetAddress(position.latLng, function (data, city, state) {
            if (data) {
                self.current_location.address = data;
                self.city = city;
                self.state = state;
                console.log(city);
                console.log(state);
            }
            else {
                self.alertCtrl.create({
                    message: "Something went wrong, Please close and re-open the app.",
                    buttons: ["OK"]
                }).present();
            }
            self.loading.dismiss();
        });
        this.map.setCenter(position.latLng);
        this.marker.setPosition(position.latLng);
    };
    HomePage.prototype.GetLatlong = function (address) {
        var geocoder = new google.maps.Geocoder();
        var address = address;
        var self = this;
        geocoder.geocode({ 'address': address }, function (results, status) {
            // console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                self.current_location.latitude = latitude;
                self.current_location.longitude = longitude;
                self.current_location.address = results[0].formatted_address;
                self.updateMapWithCurrentLocation(latitude, longitude);
                self.locationPage = true;
                self.listPage = false;
                // console.log(latitude)
                // console.log(longitude)
            }
        });
    };
    HomePage.prototype.GetAddress = function (latlng, callback) {
        var geocoder = new google.maps.Geocoder();
        var address = address;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (results.length > 0) {
                var city = results[0].address_components[3].long_name;
                var state = results[0].address_components[5].short_name;
                callback(results[0].formatted_address, city, state);
            }
            else {
                callback(null);
            }
        });
    };
    HomePage.prototype.getAllPartners = function () {
        var _this = this;
        // var dat = JSON.parse(ref);
        // ref.map()
        // let data={location:{lat:0,lng:0}};
        // console.log(ref[0].location.lat);
        // console.log("ref end");
        this.serviceDB.getServices()
            .subscribe(function (ref) {
            for (var _i = 0, ref_1 = ref; _i < ref_1.length; _i++) {
                var data = ref_1[_i];
                var snap = data.payload.val();
                snap.key = data.key;
                // snap.partnerFromTime = new Date("2010-10-20 " + snap["partnerFromTime"]);
                // snap.partnerToTime = new Date("2010-10-20 " + snap["partnerToTime"]);
                _this.filteredlist.push(snap);
            }
            //   console.log(this.filteredlist);
            _this.checkList(_this.filteredlist);
            _this.filteringdata = _this.filteredlist;
        });
    };
    HomePage.prototype.itemArrow = function (item, index) {
        if (this.arrow_flag) {
            console.log(item);
            this.selected_name = item.name;
            this.clearMarkers();
            // //commenting the please wait...
            this.addMarkersToMap();
        }
        else {
            this.selected_category = item.name;
            this.arrow_flag = 1;
            this.items = this.services[index].children;
        }
    };
    HomePage.prototype.customClearFilter = function () {
        var _this = this;
        console.log("customClearFilter");
        // console.log(this.gender);
        // debuggerdebugger
        // console.log("inside customclear filter");
        // this.loading=false;
        this.serviceDB.getServices()
            .subscribe(function (ref) {
            //console.log(ref);
            if (_this.gender != "") {
                for (var _i = 0, ref_2 = ref; _i < ref_2.length; _i++) {
                    var data = ref_2[_i];
                    var snap = data.payload.val();
                    // var lat = snap["location"].lat;
                    // var lng = snap["location"].lng;
                    // var content = data.key;
                    //var pkey=Object.keys(data);
                    //console.log("key"+pkey);
                    if (snap["partnerGender"] === _this.gender) {
                        if (snap["status"] === _this.status || _this.status === "") {
                            //    console.log(this.gender);
                            //    console.log(snap["partnerGender"]);
                            var lat = snap["location"].lat;
                            var lng = snap["location"].lng;
                            var content = data.key;
                            //var img = data.thumbnailImage;
                            _this.addMarker(lat, lng, content);
                        }
                    }
                }
            }
            else {
                alert("choose a service");
            }
        });
    };
    HomePage.prototype.changeGender = function () {
        //change the filter here
        // let list = [];
        // this.all_services.forEach(element => {
        //     if (this.gender == element.partnerGender) {
        //         list.push(element);
        //         this.addMarker(element.location.lat, element.location.lng, element.key)
        //     }
        // });
        // this.all_services = list;
        // console.log(list)
        // this.clearMarkers();
        // this.checkList(this.filteredlist);
        // this.checkList(list)
        this.customClearFilter();
    };
    HomePage.prototype.changeDistance = function () {
        // this.checkList(this.filteredlist);
        this.map.setZoom(this.getZoomLevel(this.distance));
    };
    HomePage.prototype.changeRating = function () {
        this.checkList(this.filteredlist);
    };
    HomePage.prototype.changePrice = function () {
        this.checkList(this.filteredlist);
    };
    HomePage.prototype.hidePartnerModal = function () {
        this.showCard = true;
    };
    /*changeStatus() {
        let list = [];
        this.all_services.forEach(element => {
            if (this.status == element.status) {
                list.push(element);
            }
        });
        this.all_services = list;
        this.clearMarkers();
        this.checkList(this.filteredlist);
    }*/
    HomePage.prototype.changeStatus = function () {
        this.clearMarkers();
        // this.checkList(this.filteredlist);
        // debugger
        this.checkList(this.filteredlist);
    };
    HomePage.prototype.backToMain = function () {
        this.items = this.services;
        this.arrow_flag = 0;
        this.showCard = true;
        // this.clearMarkers();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.geocoder = new google.maps.Geocoder;
        this.GooglePlaces = new google.maps.places.PlacesService(this.mapElement.nativeElement);
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = {
            input: ''
        };
        this.autocompleteItems = [];
        var latLng = new google.maps.LatLng(0, 0);
        var mapOptions = {
            center: latLng,
            zoom: this.getZoomLevel(15),
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    HomePage.prototype.showBookDiv = function () {
        if (this.bookDiv) {
            this.bookDiv = false;
        }
        else {
            this.bookDiv = true;
        }
    };
    HomePage.prototype.showLocationPage = function () {
        if (this.locationPage) {
            this.listPage = true;
            this.locationPage = false;
        }
        else {
            this.bookPage = true;
            this.listPage = false;
            this.locationPage = true;
        }
    };
    HomePage.prototype.removeDuplicates = function (arr, prop) {
        console.log('removeDuplicates');
        var new_arr = [];
        var lookup = {};
        for (var i in arr) {
            lookup[arr[i][prop]] = arr[i];
        }
        for (i in lookup) {
            new_arr.push(lookup[i]);
        }
        return new_arr;
    };
    HomePage.prototype.getSubCategories = function (service) {
        // this.sub_categories = this.removeDuplicates(this.sub_category_data[this.details.category],'name');
    };
    HomePage.prototype.getAmount = function (data) {
        if (data == undefined) {
            return;
        }
        this.selected_services.push(this.sub_categories[data]);
        console.log(this.sub_categories[data].price);
        this.details.price = this.sub_categories[data].price;
        console.log(this.selected_services);
    };
    HomePage.prototype.ArrNoDupe = function (a) {
        return a;
    };
    /*get cateogry and sub cateogries of partner */
    HomePage.prototype.checkSubServiceExist = function (services, service) {
        var flag = 1;
        for (var i = 0; i < services.length; i++) {
            // alert(services[service.service].name)
            //alert(service.speciality)
            if (services[service.service].name == service.speciality) {
                flag = 0;
                break;
            }
        }
        return flag;
    };
    /*get cateogry and sub cateogries of partner */
    HomePage.prototype.getServices = function (services) {
        this.category_data = [];
        this.sub_category_data = [];
        this.bookpagedata = {};
        this.bookpagedata["partnerFirstName"] = services[0].partnerFirstName;
        this.bookpagedata["partnerLastName"] = services[0].partnerLastName;
        this.bookpagedata["profiePicture"] = services[0].profiePicture;
        console.log(services);
        for (var i = 0; i < services.length; i++) {
            if (services[i].service) {
                //alert(this.category_data.indexOf(services[i].service))
                if (this.sub_category_data.indexOf(services[i].service) < 0)
                    //     this.category_data.push(services[i].service);
                    this.sub_category_data.push({
                        "serviceName": services[i].service, "speciality": services[i].speciality,
                        "price": services[i].amount, "quantity": "0", "clicked": false
                    });
                // if (this.sub_category_data[services[i].service]) {
                //     // let flag=1;
                //     //alert(this.checkSubServiceExist(this.sub_category_data,services[i]))
                //     if(this.checkSubServiceExist(this.sub_category_data,services[i])){
                //         this.sub_category_data[services[i].service].push({
                //             "name": services[i].speciality,
                //             "price": services[i].amount
                //         })
                //     }
                // } else {
                //     this.sub_category_data[services[i].service] = [];
                //     this.sub_category_data[services[i].service].push({
                //         "name": services[i].speciality,
                //         "price": services[i].amount
                //     })
                // }
            }
        }
        console.log(this.sub_category_data);
    };
    HomePage.prototype.calculate_sum = function () {
        var total = 0.0;
        for (var i = 0; i < this.sub_category_data.length; i++) {
            if (this.sub_category_data[i].quantity == "")
                this.sub_category_data[i].quantity = "0";
            else if (parseInt(this.sub_category_data[i].quantity) < 0)
                this.sub_category_data[i].quantity = "0";
            var ttl = this.sub_category_data[i].price * parseInt(this.sub_category_data[i].quantity);
            // console.log(ttl);
            total += ttl;
        }
        this.amount = total;
    };
    /*function to get selected partner id and get information on to booking card*/
    HomePage.prototype.showBookPage = function (puid) {
        var _this = this;
        var self = this;
        if (localStorage.getItem('uid') == null) {
            this.alertCtrl.create({
                message: "please login to book!",
                buttons: [
                    {
                        text: "OK",
                        handler: function () {
                            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            }).present();
        }
        else {
            // getPartnerProfile
            this.profileService.getPartnerProfile(puid)
                .subscribe(function (ref) {
                _this.partner_fromtime = ref[0]['partnerFromTime'];
                _this.partner_totime = ref[0]['partnerToTime'];
                _this.partner_bio = ref[0]['partnerBio'];
                console.log(ref);
                console.log(_this.partner_fromtime);
                console.log(_this.partner_totime);
            });
            console.log(puid);
            this.amount = 0.0;
            this.serviceDB.getAllPartnerServices(puid)
                .subscribe(function (ref) {
                // if(ref.)
                _this.getServices(ref);
            });
            if (this.bookPage) {
                this.bookPage = false;
                this.listPage = true;
            }
            else {
                this.bookPage = true;
                this.listPage = false;
            }
        }
    };
    HomePage.prototype.hideBookPage = function () {
        // this.details = undefined;
        this.details.myDate = '';
        this.details.myTime = '';
        this.details.address = '';
        this.details.notes = '';
        this.bookPage = true;
        this.listPage = false;
    };
    HomePage.prototype.setHeaderAddress = function (address) {
        this.header_address = address.locality + ',' + address.countryCode;
    };
    HomePage.prototype.addMarkersToMap = function () {
        var _this = this;
        // this.map.setZoom(this.getZoomLevel(this.distance));
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        var services = this.serviceDB.getAllServicesByName(this.selected_name).map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        services.subscribe(function (ref) {
            _this.filteredlist = ref;
            console.log(_this.filteredlist);
            ref.map(function (data) { return _this.filterdata(data); });
            // this.filterdata(this.filteredlist)
        });
        this.loading.dismiss();
    };
    // pinMarkersToMap() {
    //     this.map.setZoom(this.getZoomLevel(this.distance));
    //     this.loading = this.loadingCtrl.create({
    //         content: 'Please wait...'
    //     });
    //     this.loading.present();
    //     let services = this.serviceDB.getAllServicesByName(this.selected_name).map(changes => {
    //         return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    //     });
    //     services.subscribe(ref => this.checkList(ref));
    //     this.loading.dismiss();
    // }
    HomePage.prototype.checkGender = function (data) {
        if (this.gender == data.partnerGender) {
            return true;
        }
        else {
            return false;
        }
    };
    HomePage.prototype.checkDistance = function (data) {
        return true;
    };
    HomePage.prototype.checkRating = function (data) {
        return true;
    };
    HomePage.prototype.checkPrice = function (data) {
        return true;
    };
    /*checkList(data) {
        for (let service of data) {
            if (this.checkGender(service)) { //&& this.checkDistance(service) && this.checkRating(service)) {
                this.all_services.push(service);
                this.addMarker(service.location.lat, service.location.lng, service.key)
            }
        }
        console.log(this.all_services);
    } */
    HomePage.prototype.checkStatus = function (data) {
        // debugger
        if (data.status) {
            if (this.status == data.status) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HomePage.prototype.checkList = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var service = data_1[_i];
            // console.log(service);
            // debugger
            if (this.gender) {
                // var a = this.checkStatus(service);
                // var b = this.checkGender(service);
                if (this.checkGender(service) && this.checkStatus(service)) {
                    //     this.all_services.push(service);
                    this.addMarker(service.location.lat, service.location.lng, service.key);
                }
            }
            else
                this.addMarker(service.location.lat, service.location.lng, service.key);
            /* if (this.checkStatus(service)) { //&& this.checkDistance(service) && this.checkRating(service)) {
                 this.all_services.push(service);
                 this.addMarker(service.location.lat, service.location.lng, service.key)
             }*/
        }
    };
    HomePage.prototype.addToList = function (latitude, longitude, key) {
        var _this = this;
        console.log(latitude, longitude, key);
        var data = this.serviceDB.getAllServices(key);
        data.subscribe(function (item) { return _this.addMarker(latitude, longitude, key); });
    };
    HomePage.prototype.getZoomLevel = function (radius) {
        return Math.round(14 - Math.log(radius) / Math.LN2);
    };
    HomePage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    HomePage.prototype.clearMarkers = function () {
        console.log("clear");
        this.setMapOnAll(null);
    };
    HomePage.prototype.addMarker = function (lat, lng, content) {
        var _this = this;
        if (lat && lng && content) {
            var latLng = new google.maps.LatLng(lat, lng);
            var marker_1 = new google.maps.Marker({
                map: this.map,
                position: latLng
            });
            this.markers.push(marker_1);
            //marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
            marker_1.setIcon('http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Bubble-Pink-icon.png');
            marker_1.setMap(this.map);
            google.maps.event.addListener(marker_1, 'click', (function (data) { return _this.showBookingDiv(marker_1, content); }));
        }
    };
    HomePage.prototype.showBookingDiv = function (marker, content) {
        var _this = this;
        for (var i = 0; i < this.markers.length; i++) {
            // this.markers[i].setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
            this.markers[i].setIcon('http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Bubble-Pink-icon.png');
        }
        //marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
        marker.setIcon('http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Bubble-Chartreuse-icon.png');
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        console.log("marker triggered");
        var data = this.serviceDB.getAllServices(content);
        data.subscribe(function (item) { return _this.showPartnerCard(item); });
        this.showfilter = false;
        this.hideFilterBtn = false;
    };
    // showPartnerCard(data) {
    //     console.log(data)
    //     // console.log(data[0]);
    //     this.profile_data = data;
    //     this.showCard = false;
    //     this.loading.dismiss();
    // }
    HomePage.prototype.showPartnerCard = function (data) {
        data.city = data["location"].city;
        // data.partnerFromTime = new Date("2010-10-20 "+ data["partnerFromTime"]);
        // data.partnerToTime = new Date("2010-10-20 "+ data["partnerToTime"]);
        //data.partnerFromTime = data["partnerFromTime"];
        // data.partnerToTime = data["partnerToTime"];
        // var fromdt = new Date(data["partnerFromTime"])
        // var todate = new Date(data["partnerToTime"])
        // console.log(data)
        // console.log(data[0]);
        // for(var i=0;i<data.length;i++){
        //     data[i].bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae velit semper, dapibus nibh at, tempor eros. Integer in nibh eu est ultrices viverra. Nunc ac efficitur elit. Sed ut magna vitae urna mollis venenatis non a mi. Duis auctor egestas augue et scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        // }
        //data.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae velit semper, dapibus nibh at, tempor eros. Integer in nibh eu est ultrices viverra. Nunc ac efficitur elit. Sed ut magna vitae urna mollis venenatis non a mi. Duis auctor egestas augue et scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        //data.available = "9:00 AM to 6:00 PM";
        this.profile_data = data;
        this.showCard = false;
        console.log(data);
        console.log(data.partnerFromTime);
        data.partnerFromTime = this.convertTo12hr(data.partnerFromTime);
        console.log(data.partnerFromTime);
        console.log(data.partnerToTime);
        data.partnerToTime = this.convertTo12hr(data.partnerToTime);
        console.log(data.partnerToTime);
        // var twelvehrfrtime;
        // var twelvehrtotime;
        // var partner_from = data.partnerFromTime.split(':');
        // if (parseInt(partner_from[0]) < 12) {
        //   if (parseInt(partner_from[0]) == 0)
        //   twelvehrfrtime = "12:" + partner_from[1] + " AM";
        //   else
        //   twelvehrfrtime = partner_from[0] + ":" + partner_from[1] + " AM";
        // }
        // else {
        //   twelvehrfrtime = (parseInt(partner_from[0]) % 12) + ":" + partner_from[1] + " PM";
        // }
        // var partner_to = data.partnerToTime.split(':');
        // if (parseInt(partner_to[0]) < 12) {
        //   if (parseInt(partner_to[0]) == 0)
        //   twelvehrtotime = "12:" + partner_to[1] + " AM";
        //   else
        //   twelvehrtotime = partner_to[0] + ":" + partner_to[1] + " AM";
        // }
        // else {
        //   twelvehrtotime = (parseInt(partner_to[0]) % 12) + ":" + partner_to[1] + " PM";
        // }
        // console.log(twelvehrfrtime);
        // console.log(twelvehrtotime);
        // data.partnerFromTime = twelvehrfrtime;
        // data.partnerToTime = twelvehrtotime;
        // data.partnerFromTime = new Date("2010-10-20 " + data.partnerFromTime);
        // data.partnerToTime = new Date("2010-10-20 " + data.partnerToTime);
        this.loading.dismiss();
    };
    HomePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    HomePage.prototype.book = function () {
        var _this = this;
        console.log(this.sub_category_data);
        if (localStorage.getItem('uid') === null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
        else {
            if (localStorage.getItem('uid')) {
                this.loading = this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                this.details.amount = this.amount;
                this.details.selectedServices = this.added_services;
                var services_selected = [];
                for (var i = 0; i < this.sub_category_data.length; i++) {
                    //console.log("handlepayment444444***********")
                    if (this.sub_category_data[i].clicked)
                        if (this.sub_category_data[i].quantity != "0" && this.sub_category_data[i].quantity != "") {
                            //console.log("handlepayment***********88888")
                            //this.sub_category_data[i].clicked = undefined;
                            services_selected.push(this.sub_category_data[i]);
                            // console.log("handlepayment666666666***********")
                        }
                }
                var json = {
                    bookingSchedule: {
                        date: this.details.myDate,
                        time: this.details.myTime
                    },
                    customerAddress: this.addresses[this.details.address],
                    customerId: localStorage.getItem('uid'),
                    createdAt: new Date().toISOString(),
                    partnerId: this.profile_data.puid,
                    services: services_selected,
                    stage: 'pending',
                    totalAmount: this.amount,
                    customerName: this.customerName,
                    notes: this.details.notes
                };
                console.log("Book()***********" + json);
                // let arrayOfKeys = Object.keys(json);
                var error = false;
                // for (let obj of arrayOfKeys) {
                //   if (obj == 'address2' || obj == 'geofire' || obj == 'status') { }
                //   else {
                //     if (!(json[obj]) || json[obj] == "") {
                //       error = true;
                //       this.loadError("please provide valid " + obj);
                //       break;
                //     }
                //   }
                // }
                if (json.services.length == 0) {
                    error = true;
                    this.loadError("please choose atleast one service");
                    return;
                }
                if (json.bookingSchedule.date == undefined || json.bookingSchedule.date == '') {
                    error = true;
                    this.loadError("please provide valid date");
                    return;
                }
                if (json.bookingSchedule.time == undefined || json.bookingSchedule.time == '') {
                    error = true;
                    this.loadError("please provide valid time");
                    return;
                }
                var schedule_hour = json.bookingSchedule.time.split(':');
                console.log('from' + this.partner_fromtime);
                console.log('to' + this.partner_totime);
                console.log(json.bookingSchedule.time);
                console.log(json.bookingSchedule.time >= this.partner_fromtime && json.bookingSchedule.time <= this.partner_totime);
                var partner_from = this.partner_fromtime.split(':');
                var partner_to = this.partner_totime.split(':');
                // var isafter = moment(json.bookingSchedule.date+'T'+json.bookingSchedule.time).isAfter(json.bookingSchedule.date+'T'+this.partner_fromtime);
                // var isbefore = moment(json.bookingSchedule.date+'T'+this.partner_totime).isAfter(json.bookingSchedule.date+'T'+json.bookingSchedule.time);
                // console.log(isbefore);
                // console.log(isafter);
                var isafter = json.bookingSchedule.time >= this.partner_fromtime;
                var isbefore = json.bookingSchedule.time <= this.partner_totime;
                if (this.partner_fromtime < this.partner_totime) {
                    if (!isafter || !isbefore) {
                        error = true;
                        var fromtime, totime;
                        if (parseInt(partner_from[0]) < 12) {
                            if (parseInt(partner_from[0]) == 0)
                                fromtime = "12:" + partner_from[1] + " AM";
                            else
                                fromtime = partner_from[0] + ":" + partner_from[1] + " AM";
                        }
                        else {
                            fromtime = (parseInt(partner_from[0]) % 12) + ":" + partner_from[1] + " PM";
                        }
                        if (parseInt(partner_to[0]) < 12) {
                            if (parseInt(partner_to[0]) == 0)
                                totime = "12:" + partner_to[1] + " AM";
                            else
                                totime = partner_to[0] + ":" + partner_to[1] + " AM";
                        }
                        else {
                            totime = (parseInt(partner_to[0]) % 12) + ":" + partner_to[1] + " PM";
                        }
                        // var fromtime = partner_from[0]>12?partner_from[0] %12:partner_from[0];
                        // fromtime = "" + fromtime + partner_from[1];
                        // var totime=partner_to[0]>12?partner_to[0] %12:partner_to[0] ;
                        var msg = this.bookpagedata["partnerFirstName"] + ' ' + this.bookpagedata["partnerLastName"] + " available from " + fromtime + " to " + totime + " .Please select time";
                        // var msg = "Cosmotologist available from "+fromtime+" to " +totime + "";
                        this.loadError(msg);
                        console.log("False");
                        return;
                    }
                }
                else {
                    if (isafter && isbefore) {
                        error = true;
                        var fromtime, totime;
                        if (parseInt(partner_from[0]) < 12) {
                            if (parseInt(partner_from[0]) == 0)
                                fromtime = "12:" + partner_from[1] + " AM";
                            else
                                fromtime = partner_from[0] + ":" + partner_from[1] + " AM";
                        }
                        else {
                            fromtime = (parseInt(partner_from[0]) % 12) + ":" + partner_from[1] + " PM";
                        }
                        if (parseInt(partner_to[0]) < 12) {
                            if (parseInt(partner_to[0]) == 0)
                                totime = "12:" + partner_to[1] + " AM";
                            else
                                totime = partner_to[0] + ":" + partner_to[1] + " AM";
                        }
                        else {
                            totime = (parseInt(partner_to[0]) % 12) + ":" + partner_to[1] + " PM";
                        }
                        // var fromtime = partner_from[0]>12?partner_from[0] %12:partner_from[0];
                        // fromtime = "" + fromtime + partner_from[1];
                        // var totime=partner_to[0]>12?partner_to[0] %12:partner_to[0] ;
                        var msg = " available from " + fromtime + " to " + totime + "";
                        // var msg = "Cosmotologist available from "+fromtime+" to " +totime + "";
                        this.loadError(msg);
                        console.log("False");
                        return;
                    }
                }
                // if (!isafter || !isbefore)
                //   if (parseInt(schedule_hour[0]) < parseInt(partner_from[0]) || parseInt(schedule_hour[0]) > parseInt(partner_to[0]))
                //     if (parseInt(schedule_hour[1]) < parseInt(partner_from[1]) || parseInt(schedule_hour[1]) > parseInt(partner_to[1])) {
                //       error = true;
                //       var fromtime, totime;
                //       if (parseInt(partner_from[0]) < 12) {
                //         if (parseInt(partner_from[0]) == 0)
                //           fromtime = "12:" + partner_from[1] + " AM";
                //         else
                //           fromtime = partner_from[0] + ":" + partner_from[1] + " AM";
                //       }
                //       else {
                //         fromtime = (parseInt(partner_from[0]) % 12) + ":" + partner_from[1] + " PM";
                //       }
                //       if (parseInt(partner_to[0]) < 12) {
                //         if (parseInt(partner_to[0]) == 0)
                //           totime = "12:" + partner_to[1] + " AM";
                //         else
                //           totime = partner_to[0] + ":" + partner_to[1] + " AM";
                //       }
                //       else {
                //         totime = (parseInt(partner_to[0]) % 12) + ":" + partner_to[1] + " PM";
                //       }
                //       // var fromtime = partner_from[0]>12?partner_from[0] %12:partner_from[0];
                //       // fromtime = "" + fromtime + partner_from[1];
                //       // var totime=partner_to[0]>12?partner_to[0] %12:partner_to[0] ;
                //       var msg = "Cosmotologist available from " + fromtime + " to " + totime + "";
                //       // var msg = "Cosmotologist available from "+fromtime+" to " +totime + "";
                //       this.loadError(msg);
                //       console.log("False");
                //       return;
                //     }
                if (json.customerAddress == undefined) {
                    error = true;
                    this.loadError("please provide service address");
                    return;
                }
                if (json.notes == undefined) {
                    error = true;
                    this.loadError("please provide notes or type nothing");
                    return;
                }
                if (!error) {
                    this.loading.present().then(function () {
                        _this.bookingService.storeBooking(json).then(function (res) {
                            //console.log("handlepayment***********")
                            _this.bookingKey = res['key'];
                            _this.paymentStatus = 'true';
                            _this.loading.dismiss();
                            _this.handlePayment();
                        });
                    });
                }
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
        }
    };
    HomePage.prototype.loadError = function (message) {
        var alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.changeSegment = function () {
        console.log("Change Segment");
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.handler = StripeCheckout.configure({
            key: 'pk_live_9PL3Hdq7zK3QRjgbZ8cq8Xz2',
            image: '',
            locale: 'auto',
            paymentStatus: 'true',
            token: function (token) {
                _this.paymentSvc.processPayment(token, _this.amount, _this.bookingKey, _this.paymentStatus).then(function (res) {
                    var alert = _this.alertCtrl.create({
                        message: 'Thank you, booking successful.',
                        buttons: [{
                                text: 'OK',
                                role: 'cancel',
                                handler: function (data) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__bookings_bookings__["a" /* BookingsPage */]);
                                }
                            }]
                    });
                    alert.present();
                });
            }
        });
    };
    HomePage.prototype.handlePayment = function () {
        this.handler.open({
            name: 'MobileStyler',
            excerpt: 'Payment',
            amount: this.amount * 100,
            paymentStatus: this.paymentStatus = 'true'
        });
    };
    HomePage.prototype.onPopstate = function () {
        this.handler.close();
    };
    HomePage.prototype.stylechange = function (cat) {
        // console.log(cat);
        if (cat.quantity != "" && cat.quantity != "0")
            cat.clicked = true;
        else {
            cat.clicked = false;
        }
        this.calculate_sum();
    };
    //filters all the datas fetched from cloud service
    HomePage.prototype.filterall = function () {
        this.filteringdata = [];
        this.clearMarkers();
        for (var _i = 0, _a = this.filteredlist; _i < _a.length; _i++) {
            var data = _a[_i];
            this.filterdata(data);
        }
    };
    //filter funtion for above
    HomePage.prototype.filterdata = function (data) {
        if (this.gender && this.status) {
            if (this.checkStatus(data) && this.checkGender(data)) {
                console.log(data);
                this.filteringdata.push(data);
                this.addMarker(data["location"].lat, data["location"].lng, data.key);
            }
        }
        else if (this.gender == undefined && this.status == undefined) {
            this.addMarker(data["location"].lat, data["location"].lng, data.key);
            this.filteringdata.push(data);
        }
        else {
            if (this.checkStatus(data)) {
                console.log(data);
                this.addMarker(data["location"].lat, data["location"].lng, data.key);
                this.filteringdata.push(data);
            }
            if (this.checkGender(data)) {
                console.log(data);
                this.addMarker(data["location"].lat, data["location"].lng, data.key);
                this.filteringdata.push(data);
            }
        }
    };
    //reset Filter datas
    HomePage.prototype.resetFilter = function () {
        // alert('Ook')
        this.gender = '';
        this.distance = '15';
        this.status = '';
        this.getAllPartners();
    };
    HomePage.prototype.hideFilter = function () {
        this.hideFilterBtn = true;
        this.showCard = true;
    };
    HomePage.prototype.showFilterBtn = function () {
        this.hideFilterBtn = false;
    };
    // showList(status) {
    //  if (status == '0') {
    //     this.Listview = false;
    //     this.hideFilterBtn = false;
    //     console.log(this.filteredlist);
    //   }
    //   else {
    //     this.listdatas = [];
    //     this.hideFilterBtn = true;
    //     for (var i = 0; i < this.filteredlist.length; i++) {
    //       if (this.filteredlist[i].location.city == this.city && this.filteredlist[i].location.lat!=undefined 
    //         && this.filteredlist[i].location.lng!=undefined)
    //         this.listdatas.push(this.filteredlist[i]);
    //       // console.log(this.filteredlist[i].location.city);
    //     }
    //     if (this.listdatas.length == 0)
    //       this.filtered_data = false;
    //     else  
    //       this.filtered_data = true;
    //     this.Listview = true
    //   }
    //   console.log(this.listdatas);
    // }
    HomePage.prototype.showList = function (status) {
        // this.hideBookPage();
        this.showCard = true;
        this.showfilter = false;
        this.hideFilter();
        // debugger
        if (status == '0') {
            this.Listview = false;
            this.hideFilterBtn = false;
            console.log(this.filteredlist);
        }
        else {
            this.listdatas = [];
            this.listdatas1 = [];
            this.hideFilterBtn = true;
            for (var i = 0; i < this.filteredlist.length; i++) {
                this.filteredlist[i].partnerFrom = this.convertTo12hr(this.filteredlist[i].partnerFromTime);
                this.filteredlist[i].partnerTo = this.convertTo12hr(this.filteredlist[i].partnerToTime);
                if (this.filteredlist[i].location.city == this.city && this.filteredlist[i].location.lat != undefined
                    && this.filteredlist[i].location.lng != undefined) {
                    this.filteredlist[i].state = this.filteredlist[i].location.state;
                    this.filteredlist[i].city = this.filteredlist[i].location.city;
                    console.log(this.filteredlist[i]);
                    this.listdatas.push(this.filteredlist[i]);
                }
                if (this.filteredlist[i].location.state == this.state && this.filteredlist[i].location.city != this.city && this.filteredlist[i].location.lat != undefined
                    && this.filteredlist[i].location.lng != undefined) {
                    // this.filteredlist[i].state = this.filteredlist[i].location.state;
                    this.filteredlist[i].city = this.filteredlist[i].location.city;
                    console.log(this.filteredlist[i]);
                    this.listdatas1.push(this.filteredlist[i]);
                }
                // console.log(this.filteredlist[i].location.city);
            }
            if (this.listdatas.length == 0 && this.listdatas1.length == 0)
                this.filtered_data = false;
            else
                this.filtered_data = true;
            this.Listview = true;
        }
        this.listdatas = this.removeDuplicates(this.listdatas, 'puid');
        this.listdatas1 = this.removeDuplicates(this.listdatas1, 'puid');
        console.log(this.listdatas);
        console.log(this.listdatas1);
        //this.showfilter = false;
        //this.showFilterBtn();
    };
    HomePage.prototype.convertTo12hr = function (time) {
        var partner_to = time.split(':');
        var temp;
        if (parseInt(partner_to[0]) < 12) {
            if (parseInt(partner_to[0]) == 0)
                temp = "12:" + partner_to[1] + " AM";
            else
                temp = partner_to[0] + ":" + partner_to[1] + " AM";
        }
        else {
            temp = (parseInt(partner_to[0]) % 12) + ":" + partner_to[1] + " PM";
        }
        return temp;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:popstate'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomePage.prototype, "onPopstate", null);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\pages\home\home.html"*/'\n<ion-header color="grey">\n  <ion-navbar color="grey">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <span end style="margin-right:10px;color:#fff;float:right" (click)="showLocationPage()">\n      {{current_location.address}}{{header_string}}\n\n      <ion-icon ios="ios-compass" md="md-compass"></ion-icon>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n\n\n  <ion-card style="padding:0px;width:100%;height:100%" [hidden]="locationPage" class="card-round">\n\n    <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n      <div class="row">\n        <div class="col-xs-2">\n          <ion-icon (click)="showLocationPage()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n        </div>\n        <div style="padding:0px">\n          <div class="row">\n            <div class="col-xs-4 text" style="text-align:left;padding:0px;font-weight:bold">\n              Location\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr style="margin-top: 0px">\n    </ion-card-header>\n    <ion-card-content>\n      <div class="col-xs-12 text">\n\n        <ion-searchbar [(ngModel)]="autocomplete.input" (ionInput)="updateSearchResults()" placeholder="Search for a place"></ion-searchbar>\n\n        <ul class="list-inline" [hidden]="autocompleteItems.length == 0">\n          <li class="list-inline-item bold" *ngFor="let item of autocompleteItems" tappable (click)="GetLatlong(item.description)">\n            {{ item.description }}\n          </li>\n        </ul>\n\n\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <div [hidden]="listPage" style="height:100%;width:100%;padding:0px;" [ngClass]="(Listview==false)?\'notist\':\'listshow\'">\n\n    <!--Bikram <ion-segment-button (click)="showfilter=!showfilter" style="border:1px solid black;width:20%;margin:10px auto;position: absolute;z-index: 999;left: 40%;border-radius: 10px; border: 1px solid #34495e; color: #fff;background-color: #34495e;" *ngIf="!showfilter">\n      filter \n    </ion-segment-button> -->\n    <div align="center" *ngIf="!showfilter">\n      <!--brahmi <ion-segment-button [hidden]="hideFilterBtn"  (click)="showfilter=!showfilter; hideFilter();" style="border: 1px solid #34495e;width: 100px;margin: 0 auto;display: inline-block;color: #fff;border-radius: 0px 6px;background: linear-gradient(to bottom right, #1a70b3, #cad6f3);text-transform: uppercase;font-weight: bold;font-size: 13px;"> -->\n      <ion-segment-button [hidden]="hideFilterBtn" (click)="showfilter=!showfilter; hideFilter();" style="border:1px solid black;width:20%;margin:11px auto;position: absolute;z-index: 999;left: 40%;border-radius: 10px; border: 1px solid #34495e; color: #fff;background-color: #34495e;font-weight: bold;">\n        FILTER\n      </ion-segment-button>\n    </div>\n\n    <!-- <ion-grid style="width:98%;position: absolute;z-index: 100;top:15px;" *ngIf="showfilter"> -->\n    <ion-grid style="width:102%;position: absolute;z-index: 100; margin-top:-100%;transition-duration: 2s ;" [ngClass]="(showfilter==true)?\'mybtn\':\'nwbtn\'">\n      <ion-row style="margin-right: 0px;">\n        <ion-col class="left-col no-padding" style="width:101%">\n          <ion-card class="left-col-content card-round">\n            <ul class="list-inline">\n              <li *ngIf="arrow_flag==1">\n                <ion-icon ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" (click)="backToMain()" style="font-size:25px;font-weight:bold;margin-right:15px;"></ion-icon>\n              </li>\n              <li class="list-inline-item bold" *ngFor="let item of items;\n                                let j=index" [class.active]="item.name === selected_name || item.name===selected_category"\n                (click)="itemArrow(item,j)">\n                <!-- <ion-icon ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" (click)="backToMain()" style="font-size:25px;font-weight:bold;margin-right:15px;"\n                                              *ngIf="arrow_flag==1 && j==0"></ion-icon>-->\n\n                {{item.name}}\n              </li>\n            </ul>\n          </ion-card>\n        </ion-col>\n        <ion-col class="right-col no-padding">\n          <ion-card class="left-col-content right-content centered card-round">\n            <ion-grid class="no-bottom-padding push-left-3">\n              <ion-row>\n                <label for="name2" class="control-label">Styler\'s Gender</label>\n              </ion-row>\n              <ion-row text-center>\n\n\n                <ion-segment color="grey" [(ngModel)]="gender" (ngModelChange)="filterall()">\n                  <ion-segment-button value="male">\n                    <!-- <ion-icon ios="ios-male" md="md-male"></ion-icon> -->\n\n\n                    Male\n                  </ion-segment-button>\n                  <ion-segment-button value="female">\n                    <!-- <ion-icon ios="ios-female" md="md-female"> </ion-icon>-->\n\n                    Female\n\n                  </ion-segment-button>\n\n                    <!--<ion-icon ios="ios-transgender" md="md-transgender"></ion-icon>-->\n                 <!-- <ion-segment-button value="transgender">\n                    transg.\n                  </ion-segment-button> -->\n\n                </ion-segment>\n\n              </ion-row>\n            </ion-grid>\n\n            <ion-grid class="no-bottom-padding push-left-3" style="margin-top: 25px">\n              <ion-row>\n                <label for="name2" class="control-label">Distance - Miles</label>\n              </ion-row>\n              <ion-row>\n\n                <!--<span class="segmented">\n                                    <label style="width:25%;margin-left:-4px">\n                                        <input type="radio" name="distance" value="5" checked [(ngModel)]="distance" (ngModelChange)="changeDistance()">\n                                        <span class="label">5</span>\n                                    </label>\n                                    <label style="margin-left:-4px;width:25%">\n                                        <input type="radio" name="distance" value="10" [(ngModel)]="distance" (ngModelChange)="changeDistance()">\n                                        <span class="label">10</span>\n                                    </label>\n                                    <label style="margin-left:-4px;width:25%">\n                                        <input type="radio" name="distance" value="15" [(ngModel)]="distance" (ngModelChange)="changeDistance()">\n                                        <span class="label">15</span>\n                                    </label>\n                                    <label style="margin-left:-4px;width:25%">\n                                        <input type="radio" name="distance" value="20" [(ngModel)]="distance" (ngModelChange)="changeDistance()">\n                                        <span class="label">20</span>\n                                    </label>\n                                </span>-->\n\n                <ion-segment color="grey" [(ngModel)]="distance" (ngModelChange)="changeDistance()">\n                  <ion-segment-button value="5">\n                    5\n                  </ion-segment-button>\n                  <ion-segment-button value="15">\n                    15\n                  </ion-segment-button>\n                  <ion-segment-button value="25">\n                    25\n                  </ion-segment-button>\n                </ion-segment>\n\n              </ion-row>\n            </ion-grid>\n\n            <ion-grid class="no-bottom-padding push-left-3" style="margin-top: 25px">\n              <ion-row>\n                <label for="name2" class="control-label">Status</label>\n              </ion-row>\n              <ion-row>\n                <!--<span class="segmented">\n                                    <label style="width:50%">\n                                        <input type="radio" name="price" value="high" checked [(ngModel)]="price" (ngModelChange)="changePrice()">\n                                        <span class="label">\$\$</span>\n                                    </label>\n                                    <label style="margin-left:-4px;width:50%">\n                                        <input type="radio" name="price" value="low" [(ngModel)]="price" (ngModelChange)="changePrice()">\n                                        <span class="label">$</span>\n                                    </label>\n\n                                </span>-->\n                <ion-segment color="grey" [(ngModel)]="status" (ngModelChange)="filterall()">\n                  <ion-segment-button value="active">\n                    Online\n                  </ion-segment-button>\n                  <ion-segment-button value="inactive">\n                    Offline\n                  </ion-segment-button>\n\n                </ion-segment>\n              </ion-row>\n            </ion-grid>\n\n            <!-- <ion-grid class="no-bottom-padding push-left-3" style="margin-top: 10px">\n                            <ion-row>\n                                <label for="name2" class="control-label">Price</label>\n                            </ion-row>\n                            <ion-row>\n                                <!-/-<span class="segmented">\n                                    <label style="width:50%">\n                                        <input type="radio" name="price" value="high" checked [(ngModel)]="price" (ngModelChange)="changePrice()">\n                                        <span class="label">\$\$</span>\n                                    </label>\n                                    <label style="margin-left:-4px;width:50%">\n                                        <input type="radio" name="price" value="low" [(ngModel)]="price" (ngModelChange)="changePrice()">\n                                        <span class="label">$</span>\n                                    </label>\n\n                                </span>/-/->\n                                <ion-segment color="grey" [(ngModel)]="price" (ngModelChange)="changePrice()">\n                                    <ion-segment-button value="high">\n                                        $\$\n                                    </ion-segment-button>\n                                    <ion-segment-button value="low">\n                                        $\n                                    </ion-segment-button>\n\n                                </ion-segment>\n                            </ion-row>\n                        </ion-grid> -->\n            <!-- 1 <ion-grid class="no-bottom-padding push-left-3" style="margin-top: 10px">\n              <ion-row>\n                <label for="name2" class="control-label">Rating</label>\n              </ion-row>\n              <ion-row> 1-->\n                <!--old <span class="segmented">\n                                    <label style="width:33%">\n                                        <input type="radio" name="rating" value="high" checked [(ngModel)]="rating" (ngModelChange)="changeRating()">\n                                        <span class="label">High</span>\n                                    </label>\n                                    <label style="margin-left:-4px;width:33%">\n                                        <input type="radio" name="rating" value="medium" [(ngModel)]="rating" (ngModelChange)="changeRating()">\n                                        <span class="label">Medium</span>\n                                    </label>\n                                    <label style="margin-left:-4px;width:33%">\n                                        <input type="radio" name="rating" value="low" [(ngModel)]="rating" (ngModelChange)="changeRating()">\n                                        <span class="label">Low</span>\n                                    </label>\n\n                                </span>-->\n            <!-- 2 <ion-segment [(ngModel)]="rating" color="grey" (ngModelChange)="changeRating()">\n                <ion-segment-button value="high">\n                  High\n                </ion-segment-button>\n                <ion-segment-button value="medium">\n                  Medium\n                </ion-segment-button> 2-->\n                <!-- <ion-segment-button value="low">\n                                      Low\n                                  </ion-segment-button> -->\n               <!--3 </ion-segment>\n              </ion-row>\n            </ion-grid> 3-->\n\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-segment-button style="overflow: unset !important;margin-top: -6px;">\n        <!-- <img src="assets/imgs/button.png" height="25px" style="margin-right: 52px;" (click)="showfilter=!showfilter" /> -->\n        <ion-badge item-start class="pull-left" style=" margin-top: 4px;background-color: #ec6c8b; height: 20px;" (click)="resetFilter()">Reset</ion-badge>\n        <ion-segment-button (click)="showfilter=!showfilter; showFilterBtn();" style="border:1px solid black;width:20%;margin:0 auto;    position: absolute;\n    z-index: 999;left: 40%;border-radius: 10px;    border: 1px solid #34495e;    color: #fff;\n    background-color: #34495e;">\n          Done\n        </ion-segment-button>\n        <!-- <input type="button" class="ion-badge pull-left" value="Reset" (click)="resetFilter()"/> -->\n      </ion-segment-button>\n      <!-- <ion-segment-button (click)="resetFilter()" class="pull-left" style="text-align: left !important; width:40%">\n                        Reset\n                    </ion-segment-button> -->\n\n    </ion-grid>\n    <!-- <ion-card style="width:100%;margin-top:2px;margin-bottom:3px;position: absolute; left: 0px; top: 45px;\n    z-index: 99;" class="card-round" [hidden]="showCard">\n      <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="hidePartnerModal()"></ion-icon>\n      <ion-card-content style="padding:3px;">\n       \n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-9>\n              <ion-grid>\n\n                <ion-row>\n                  <ion-col col-12>\n                    <img class="img-circle" style="float:left;width:40px;margin-right:12px" src="{{profile_data.profilePicture}}"> {{profile_data.partnerFirstName +\' \'+ profile_data.partnerLastName}}\n\n                    <p text-left>{{profile_data.service}}</p>\n                    <div class="star-rating1" style="text-align:left;margin-top:-1px">\n                      <span class="fa fa-star checked"></span>\n                      <span class="fa fa-star checked"></span>\n                      <span class="fa fa-star checked"></span>\n                      <span class="fa fa-star"></span>\n                      <span class="fa fa-star"></span>\n                    </div>\n                  </ion-col>\n\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button class="round" color="grey" style="margin-right:5px;margin-left:-10px;text-transform:capitalize" [disabled]="this.profile_data.status!=\'active\'" (click)="showBookPage(profile_data.puid)">Book</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n\n    </ion-card> -->\n    <!-- <div style="position: absolute; bottom: 0px; width: 100%">\n                <div style="text-align: center">\n                  <p>Bottom</p>\n                </div>\n            </div> -->\n    <ion-card style="width:100%;margin-top:4px;margin-bottom:3px;color: #9e0505;font-weight: bolder;" class="card-round" [hidden]="showCard">\n      <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="hidePartnerModal()" style="font-weight: bold;\n      font-size: 25px; right: 6px;"></ion-icon>\n      <ion-card-content style="padding:3px;">\n        <!-- Add card content here! -->\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12>\n              <ion-grid>\n\n                <ion-row>\n                  <ion-col col-12>\n                    <div col-4 style="height: 100%;position: absolute;">\n                      <img class="img-circle" style="float:left;margin-right:12px" src="{{profile_data.profilePicture}}">\n                    </div>\n                    <div col-8 style="    float: right;">\n                      <p text-left>Name: {{profile_data.partnerFirstName +\' \'+ profile_data.partnerLastName}}</p>\n                      <p text-left>Spl: {{profile_data.service}}</p>\n                      <p text-left>City: {{profile_data.city}}</p>\n                     <p text-left *ngIf="profile_data.partnerBio!=\'\'">Bio: {{profile_data.partnerBio | slice: 0:20 }}</p>\n                     <p text-left  *ngIf="!(profile_data.partnerFromTime==\'\' || profile_data.partnerToTime==\'\')">Availability: {{profile_data.partnerFromTime}}  to  {{profile_data.partnerToTime}}</p>\n                            \n                      <div class="star-rating1" style="text-align:left;margin-top:-1px">\n                        <span class="fa fa-star checked"></span>\n                        <span class="fa fa-star checked"></span>\n                        <span class="fa fa-star checked"></span>\n                        <span class="fa fa-star"></span>\n                        <span class="fa fa-star"></span> \n                      </div>\n\n                    </div>\n                  </ion-col>\n\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n            <ion-col col-12 class="pull-right">\n              <button ion-button class="round pull-right" color="grey" [disabled]="this.profile_data.status!=\'active\'" style="margin-right:5px;margin-left:-10px;position: relative;"\n                (click)="showBookPage(profile_data.puid)">Book</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n\n    </ion-card>\n    <!-- <div style="position: absolute; bottom: 0px; width: 100%">\n                <div style="text-align: center">\n                  <p>Bottom</p>\n                </div>\n            </div> -->\n    <div #map id="map" [hidden]="Listview" [ngClass]="(Listview==false)?\'addcustcss\':\'rmvcustcss\'"></div>\n\n    <div [hidden]="!Listview" [ngClass]="(Listview==false)?\'addcustcss\':\'rmvcustcss\'" style="height: 100%;margin-bottom: 40px;">\n      <div *ngIf="filtered_data;else errmsg">\n\n        <div class="grid1 mb10" *ngFor="let profile_data of listdatas">\n\n          <ion-card style="width:100%;margin-top:4px;margin-bottom:3px;font-weight: bolder;" class="card-round">\n            <ion-card-content style="padding:3px;">\n              <!-- Add card content here! -->\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-12>\n                    <ion-grid>\n\n                      <ion-row>\n                        <ion-col col-12>\n                          <div col-3 style="height: 100%;position: absolute;">\n                            <img class="img-circle" style="float:left;margin-right:12px" src="{{profile_data.profilePicture}}">\n                          </div>\n                          <div col-9 style="    float: right;">\n                            <p text-left>Name: {{profile_data.partnerFirstName +\' \'+ profile_data.partnerLastName}}</p>\n                            <p text-left>Spl: {{profile_data.service}}</p>\n                           <p text-left *ngIf="profile_data.partnerBio!=\'\'">Bio: {{profile_data.partnerBio | slice: 0:20 }}</p>\n                           <p text-left *ngIf="!(profile_data.partnerFromTime==\'\' || profile_data.partnerToTime==\'\')">Availability: {{profile_data.partnerFrom}}  to  {{profile_data.partnerTo}}</p>\n                           <p text-left>City: {{profile_data.city}}</p>\n\n                           <div class="star-rating1" style="text-align:left;margin-top:-1px">\n                             <span class="fa fa-star checked"></span>\n                             <span class="fa fa-star checked"></span>\n                             <span class="fa fa-star checked"></span>\n                             <span class="fa fa-star"></span>\n                             <span class="fa fa-star"></span>\n                           </div>\n\n                         </div>\n                       </ion-col>\n\n                     </ion-row>\n                   </ion-grid>\n                 </ion-col>\n                 <ion-col col-12 class="pull-right">\n                   <button ion-button class="round pull-right" color="grey" [disabled]="this.profile_data.status!=\'active\'" style="margin-right:5px;margin-left:-10px;position: relative;"\n                     (click)="showBookPage(profile_data.puid)">Book</button>\n                 </ion-col>\n               </ion-row>\n             </ion-grid>\n           </ion-card-content>\n\n         </ion-card>\n\n\n       </div>\n       <div class="grid1 mb10" *ngFor="let profile_data of listdatas1">\n\n         <ion-card style="width:100%;margin-top:4px;margin-bottom:3px;font-weight: bolder;" class="card-round">\n           <ion-card-content style="padding:3px;">\n             <!-- Add card content here! -->\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-12>\n                    <ion-grid>\n\n                      <ion-row>\n                        <ion-col col-12>\n                          <div col-3 style="height: 100%;position: absolute;">\n                            <img class="img-circle" style="float:left;margin-right:12px;" src="{{profile_data.profilePicture}}">\n                          </div>\n                          <div col-9 style="    float: right;">\n                            <p text-left> Name: {{profile_data.partnerFirstName +\' \'+ profile_data.partnerLastName}}</p>\n                            <p text-left>Spl: {{profile_data.service}}</p>\n                            <p text-left *ngIf="profile_data.partnerBio!=\'\'">Bio: {{profile_data.partnerBio | slice: 0:20 }}</p>\n                            <p text-left *ngIf="!(profile_data.partnerFromTime==\'\' || profile_data.partnerToTime==\'\')">Availability: {{profile_data.partnerFrom}}  to  {{profile_data.partnerTo}}</p>\n                            <p text-left>City: {{profile_data.city}}</p>\n\n                            <div class="star-rating1" style="text-align:left;margin-top:-1px">\n                              <span class="fa fa-star checked"></span>\n                              <span class="fa fa-star checked"></span>\n                              <span class="fa fa-star checked"></span>\n                              <span class="fa fa-star"></span>\n                              <span class="fa fa-star"></span>\n                            </div>\n\n                          </div>\n                        </ion-col>\n\n                      </ion-row>\n                    </ion-grid>\n                  </ion-col>\n                  <ion-col col-12 class="pull-right">\n                    <button ion-button class="round pull-right" color="grey" [disabled]="this.profile_data.status!=\'active\'" style="margin-right:5px;margin-left:-10px;position: relative;"\n                      (click)="showBookPage(profile_data.puid)">Book</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n\n          </ion-card>\n\n\n        </div>\n      </div>\n      <ng-template #errmsg ><p style="position: absolute;top: 45%;">We are sorry, there isn’t a styler available in your area at this moment.</p></ng-template>\n\n\n\n\n    </div>\n\n  </div>\n\n  <div ion-fixed style="bottom: -2px;z-index: 500000000;padding: 7px;margin: -2px;height: 40px;width: 103%;background-color: #34495e;" [hidden]="!bookPage">\n    <div class="pull-left" (click)="showList(\'1\')" style="width:20%;z-index: 999;border-radius: 10px; border: 1px solid #34495e; color: #fff;background-color: #34495e;text-align: center;font-weight: bold;">LIST</div>\n    <div class="pull-right" (click)="showList(\'0\')" style="width:20%;z-index: 999;border-radius: 10px; border: 1px solid #34495e; color: #fff;background-color: #34495e;text-align: center;font-weight: bold;">MAP</div>\n  </div>\n\n  <!-- </div> -->\n  <!-- booking page card -->\n  <ion-card style="padding:0px;width:100%;height:100%;overflow-y: scroll; border-radius: 10px" [hidden]="bookPage">\n    <ion-card-header style="padding:8px;height:64px">\n\n      <div class="row">\n        <div class="col-xs-2">\n          <ion-icon (click)="hideBookPage()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n        </div>\n\n        <div style="padding:0px">\n          <div class="row">\n            <div class="col-xs-6 text" style="text-align:left;padding:0px;font-weight:bold">\n              {{bookpagedata.partnerFirstName +\' \'+ bookpagedata.partnerLastName}}\n              <!-- <div class="star-rating1" style="text-align:left;margin-top:-1px">\n                                <span class="fa fa-star checked"></span>\n                                <span class="fa fa-star checked"></span>\n                                <span class="fa fa-star checked"></span>\n                                <span class="fa fa-star"></span>\n                                <span class="fa fa-star"></span>\n                            </div> -->\n            </div>\n            <div class="col-xs-6" style="text-align:left;padding:0px">\n\n            </div>\n\n          </div>\n          <img class="img-circle" style="top:0px;float:right;width:65px;right:10px;position:absolute" [src]="DomSanitizer.bypassSecurityTrustUrl(bookpagedata.profilePicture)"\n            *ngIf="bookpagedata.profiePicture">\n        </div>\n      </div>\n      <hr>\n    </ion-card-header>\n    <ion-card-content style="margin-top:-14px;">\n      <ion-row>\n        <ion-col col-5>\n          <div class="form-group" style="margin-left: 10px;">\n            <label class="form-control-static txtlabel">Service</label>\n\n            <!--  <label for="name2" class="control-label">Service</label>\n                        <div>\n                            <ion-select [(ngModel)]="details.category" class="form-control round" (ngModelChange)="getSubCategories()" style="max-width:100%">\n                                <ion-option *ngFor="let category of category_data" value="{{category}}">{{category}}</ion-option>\n\n                            </ion-select>\n\n                        </div> -->\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="form-group" style="margin-left: 10px;">\n            <label class="form-control-static txtlabel">Price</label>\n\n            <!--    <div>\n                            <input class="form-control round" value="$ 25.00" [(ngModel)]="details.price" readonly />\n                        </div>-->\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="form-group" style="margin-left: 10px;">\n            <label class="form-control-static txtlabel">Qty.</label>\n\n            <!--  <div>\n\n                               <ion-select [(ngModel)]="details.speciality" (ngModelChange)="getAmount(details.speciality)" class="form-control round "\n                                   style="max-width:100%">\n                                   <ion-option *ngFor="let category of sub_categories;let i=index" value="{{i}}">{{category.name}}</ion-option>\n\n                               </ion-select>\n\n                           </div>-->\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-scroll scrollY="false" style="width: 100%;min-height: 100px;max-height: 200px;border: 3px solid #aaa;">\n        <ion-grid>\n\n          <ion-row *ngFor="let category of sub_category_data">\n\n            <ion-col col-5 style="width: 100%;overflow: hidden;overflow-x:scroll;white-space: nowrap;">\n              <!-- <div class="form-group" text-right> -->\n              <!-- <input type="text" class="form-control height20" value="{{category.speciality}}" (click)="category.clicked=!category.clicked"\n                  [class.selected]="category.clicked"> -->\n              <label class="form-control-static height20" style="width: 100%;text-align: left;" [class.selected]="category.clicked">{{category.speciality}}</label>\n              <!-- </div> -->\n            </ion-col>\n            <ion-col col-3>\n              <!-- <div class="form-group" text-right> -->\n              <!-- <input type="text" class="form-control height20" value="{{category.price}}" (click)="category.clicked=!category.clicked"\n                  [class.selected]="category.clicked"> -->\n              <label class="form-control-static height20" style="width: 100%;text-align: center" [class.selected]="category.clicked">{{category.price}}</label>\n\n              <!-- </div> -->\n            </ion-col>\n            <ion-col col-3>\n              <!-- <div class="form-group" text-right> -->\n              <input type="num" min=0 class="form-control height20" [(ngModel)]="category.quantity" (ngModelChange)="stylechange(category)"\n                [class.selected]="category.clicked">\n\n              <!-- </div> -->\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n                    <ion-col col-12>\n                        <ion-card style="padding: 0px;margin: 0px;width: 100%;" class="round bordered">\n                            <ion-card-content style="height:100px;overflow:auto">\n                                <ion-list>\n                                    <ul class="list-inline">\n                                        <li class="list-inline-item bold" *ngFor="let item_address of added_services; let i = index">\n\n                                            {{item_address.serviceName}}\n                                            <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="removeService(i)"></ion-icon>\n                                        </li>\n                                    </ul>\n\n                                </ion-list>\n\n\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                </ion-row> -->\n        </ion-grid>\n      </ion-scroll>\n      <ion-grid>\n\n        <ion-row>\n          <ion-col col-6>\n            <div class="form-group">\n              <label for="name2" class="control-label">Schedule</label>\n              <div>\n                <div class="left-inner-addon">\n                  <ion-icon ios="ios-calendar" md="md-calendar" color="grey"></ion-icon>\n\n                  <ion-datetime class="form-control round text-right" style="padding-top: 8px;" [(ngModel)]="details.myDate" placeholder="Date"\n                    min="{{myDate}}" max="2020-10-31" displayFormat="MMM DD, YYYY"></ion-datetime>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col col-5>\n            <div class="form-group">\n              <label for="name2" class="control-label">&nbsp;</label>\n              <div>\n                <div class="left-inner-addon">\n                  <ion-icon ios="ios-time" md="md-time" color="grey"></ion-icon>\n                  <ion-datetime class="form-control round text-right" displayFormat="hh:mm a" [(ngModel)]="details.myTime" style="padding-top: 8px;"\n                    placeholder="Time"></ion-datetime>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="form-group ">\n              <label for="name2 " class="control-label ">Notes</label>\n              <div>\n                <textarea class="form-control small-round " style="height:70px !important" [(ngModel)]="details.notes"></textarea>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="form-group ">\n              <label for="name2 " class="control-label ">Address</label>\n              <div>\n                <ion-select [(ngModel)]="details.address" (ngModelChange)="getAmount(details.speciality)" class="form-control round " style="max-width:100%">\n                  <ion-option *ngFor="let address of addresses;let i=index" value="{{i}}">{{address.name}}</ion-option>\n\n                </ion-select>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <div class="footer" style="width:100%; border-radius: 6px;" (click)="book()">\n\n        Book\n        <span class="pull-right">{{amount | currency}}</span>\n\n      </div>\n    </ion-card-content>\n\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_bookings_bookings__["a" /* BookingsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_payments_payments__["a" /* PaymentsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bookings_bookings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_menu_controller__ = __webpack_require__(23);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookingsPage = (function () {
    function BookingsPage(navCtrl, navParams, bookingService, loadingCtrl, serviceDB, alertCtrl, profileService, authService, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.serviceDB = serviceDB;
        this.alertCtrl = alertCtrl;
        this.profileService = profileService;
        this.authService = authService;
        this.menu = menu;
        this.bookings = [];
        this.booking_data = [];
        this.keys = [];
        this.index = 0;
        this.pastBookingsList = [];
        this.bookingList = false; //variable to handle show hide for bookings tab
        this.bookingPage = true;
        this.bookPage = true; // model to handle edit booking popup
        /*to handle dropdown data*/
        this.category_data = [];
        this.sub_category_data = []; // all sub categories structure
        this.sub_categories = []; // filtered sub categories based on category selection
        this.profile_data = {};
        this.reviewPage = true;
        this.addresses = [];
        this.customerName = '';
        /*model data for selected service data */
        this.details = {
            service: '',
            price: '',
            expertise: '',
            category: ''
        };
        this.added_services = []; //for listing selected services in booking popup
        this.amount = 0; // to caluclate total amount client to pay for selected services
        this.menu.enable(true);
        this.rating = "1";
        /*model data for selected service data */
        this.details = {
            service: '',
            price: '',
            expertise: '',
            category: ''
        };
        this.startClass = [
            "fa fa-star checked",
            "fa fa-star non-checked-star",
            "fa fa-star non-checked-star",
            "fa fa-star non-checked-star",
            "fa fa-star non-checked-star",
        ];
        // console.log(this.startClass)
        if (localStorage.getItem('uid') === null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.profileService.getProfileData(localStorage.getItem('uid'))
                .subscribe(function (ref) { return _this.loadMyAddress(ref[0]); });
            this.loading.present();
            this.bookingsRef = bookingService.getAllBookingsByUid(localStorage.getItem('uid'));
            this.bookings = this.bookingsRef.snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            });
            this.bookings.subscribe(function (ref) {
                _this.categorizeBookings(ref);
                _this.loading.dismiss();
                console.log(ref);
            });
            //date
            var date_today = new Date();
            this.myDate = "" + date_today.getFullYear() + '-';
            if ((date_today.getMonth() + 1) < 10)
                this.myDate += "0" + (date_today.getMonth() + 1) + '-';
            else
                this.myDate += date_today.getMonth() + 1 + '-';
            if (date_today.getDate() < 10)
                this.myDate += "0" + (date_today.getDate());
            else
                this.myDate += date_today.getDate();
            // this.myDate = date_today.getFullYear() + '-' + (date_today.getMonth()+1) + '-' + date_today.getDate();
            //date
            this.pet = 'kittens';
        }
    }
    BookingsPage.prototype.resetRating = function () {
        this.startClass = [
            "fa fa-star checked",
            "fa fa-star non-checked-star",
            "fa fa-star non-checked-star",
            "fa fa-star non-checked-star",
            "fa fa-star non-checked-star",
        ];
    };
    BookingsPage.prototype.changeRating = function (rating) {
        this.rating = rating + 1;
        this.resetRating();
        for (var i = 0; i <= rating; i++) {
            this.startClass[i] = "fa fa-star checked";
        }
    };
    BookingsPage.prototype.showReviewPage = function (bookingData) {
        // console.log(bookingData);
        this.reviewPage = !this.reviewPage;
        this.bookingList = !this.bookingList;
        this.booking_data = bookingData;
    };
    BookingsPage.prototype.hideReviewPage = function () {
        this.reviewPage = !this.reviewPage;
        this.bookingList = !this.bookingList;
    };
    BookingsPage.prototype.addService = function () {
        var json = {
            'serviceName': this.details.category,
            'price': this.details.price,
            'speciality': this.sub_categories[this.details.expertise].name
        };
        if (this.details.price >= 0) {
            this.amount += this.details.price;
        }
        this.added_services.push(json);
        // console.log(this.added_services)
    };
    /* to remove selected service from added services list in booking popup*/
    BookingsPage.prototype.removeService = function (index) {
        // console.log(index)
        this.added_services.splice(index, 1);
        this.caluclatePrice();
    };
    BookingsPage.prototype.getSubCategories = function (service) {
        this.sub_categories = this.sub_category_data[this.details.category];
    };
    BookingsPage.prototype.getAmount = function (data) {
        if (data == undefined) {
            return;
        }
        // console.log(this.sub_categories[data].price)
        this.details.price = this.sub_categories[data].price;
    };
    BookingsPage.prototype.caluclatePrice = function () {
        var price = 0;
        for (var _i = 0, _a = this.added_services; _i < _a.length; _i++) {
            var x = _a[_i];
            price += x.price;
        }
        this.amount = price;
    };
    BookingsPage.prototype.loadMyAddress = function (data) {
        this.addresses = data.addresses;
        this.customerName = data.name;
    };
    BookingsPage.prototype.categorizeBookings = function (bookingsList) {
        // console.log(bookingsList)
        var _this = this;
        this.pastBookingsList = [];
        this.upcomingBookingsList = [];
        var _loop_1 = function (i) {
            if (bookingsList[i].stage.toLowerCase() == 'completed' || bookingsList[i].stage.toLowerCase() == 'reject') {
                /*var date = new Date(bookingsList[i].bookingSchedule.date);
                 console.log(date)
                 var day = date.getDate(); //Date of the month: 2 in our example
                 var month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
                 var year = date.getFullYear() //Year: 2013
                 var hours = date.getHours();
                 var Minutes = date.getMinutes();
                 var seconds = date.getSeconds();
                 bookingsList[i].dates = day + '-' + month + '-' + year;
                 bookingsList[i].times = hours + ':' + Minutes + ':' + seconds;*/
                time = bookingsList[i].bookingSchedule.time;
                temp = time.split(':');
                num = parseInt(temp[0]);
                temp[0] = (num > 12) ? num % 12 : temp[0];
                time = "" + temp[0] + ":" + temp[1];
                if (num < 12)
                    time += "AM";
                else
                    time += "PM";
                bookingsList[i].bookingSchedule.time = time;
                this_1.serviceDB.getAllPartnerServices(bookingsList[i].partnerId).subscribe(function (data) {
                    var partner = data[0];
                    console.log(partner["partnerFirstName"] + " " + partner["partnerLastName"]);
                    bookingsList[i].partnerName = partner["partnerFirstName"] + " " + partner["partnerLastName"];
                    _this.upcomingBookingsList.push(bookingsList[i]);
                });
                this_1.pastBookingsList.push(bookingsList[i]);
                //this.pastBookingsList.push(bookingsList[i]);
            }
            else if (bookingsList[i].paymentStatus == 'true') {
                /* date = new Date(bookingsList[i].bookingSchedule.date);
                 day = date.getDate(); //Date of the month: 2 in our example
                 month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
                 year = date.getFullYear() //Year: 2013
                 hours = date.getHours();
                 Minutes = date.getMinutes();
                 seconds = date.getSeconds();
                 bookingsList[i].dates = day + '-' + month + '-' + year;
                 bookingsList[i].times = hours + ':' + Minutes + ':' + seconds;*/
                time = bookingsList[i].bookingSchedule.time;
                // console.log(time);
                temp = time.split(':');
                num = parseInt(temp[0]);
                temp[0] = (num > 12) ? num % 12 : temp[0];
                time = "" + temp[0] + ":" + temp[1];
                if (num < 12)
                    time += "AM";
                else
                    time += "PM";
                // console.log(time);
                bookingsList[i].bookingSchedule.time = time;
                //  console.log(date);
                /* day = date.getDate(); //Date of the month: 2 in our example
                 month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
                 year = date.getFullYear() //Year: 2013
                 hours = date.getHours();
                 Minutes = date.getMinutes();
                 seconds = date.getSeconds();
                 bookingsList[i].dates = day + '-' + month + '-' + year;
                 bookingsList[i].times = hours + ':' + Minutes + ':' + seconds;*/
                this_1.serviceDB.getAllPartnerServices(bookingsList[i].partnerId).subscribe(function (data) {
                    var partner = data[0];
                    console.log(partner["partnerFirstName"] + " " + partner["partnerLastName"]);
                    bookingsList[i].partnerName = partner["partnerFirstName"] + " " + partner["partnerLastName"];
                    _this.upcomingBookingsList.push(bookingsList[i]);
                });
                // this.upcomingBookingsList.push(bookingsList[i]);
            }
        };
        var this_1 = this, time, temp, num, time, temp, num;
        for (var i = 0; i < bookingsList.length; i++) {
            _loop_1(i);
        }
        //changes
        this.upcomingBookingsList.reverse();
        this.pastBookingsList.reverse();
    };
    BookingsPage.prototype.showBookingDetails = function (booking) {
        var date = new Date(booking.bookingSchedule.date);
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var Minutes = date.getMinutes();
        var seconds = date.getSeconds();
        booking.dates = day + '-' + month + '-' + year;
        booking.times = hours + ':' + Minutes + ':' + seconds;
        this.booking_data = booking;
        this.togglePopUp();
    };
    BookingsPage.prototype.togglePopUp = function () {
        this.bookingList = !this.bookingList;
        this.bookingPage = !this.bookingPage;
    };
    BookingsPage.prototype.ArrNoDupe = function (a) {
        var temp = {};
        for (var i = 0; i < a.length; i++)
            temp[a[i]] = true;
        return Object.keys(temp);
    };
    // getServices(services, data) {
    //     // console.log(services);
    //     // console.log(services.length)
    //     for (let i = 0; i < services.length; i++) {
    //         if (services[i].service) {
    //             if (this.category_data.indexOf(services[i].service) == -1)
    //                 this.category_data.push(services[i].service);
    //             if (this.sub_category_data[services[i].service]) {
    //                 /* this.sub_category_data[services[i].service].push({
    //                  "name": services[i].speciality,
    //                  "price": services[i].amount
    //                  })*/
    //             } else {
    //                 this.sub_category_data[services[i].service] = [];
    //                 this.sub_category_data[services[i].service].push({
    //                     "name": services[i].speciality,
    //                     "price": services[i].amount
    //                 })
    //             }
    //         }
    //         // console.log(this.sub_category_data);
    //         // console.log(data);
    //         this.details = data;
    //         this.added_services = data.services;
    //         this.amount = data.totalAmount;
    //         this.details.myTime = data.bookingSchedule.time;
    //         this.details.myDate = data.bookingSchedule.date;
    //         this.details.address = this.findAddressIndex(data.customerAddress.name);
    //         this.bookPage = false;
    //         this.bookingPage = true;
    //     }
    // }
    //changes
    BookingsPage.prototype.getServices = function (services, node) {
        // console.log(node);
        this.category_data = [];
        this.sub_category_data = [];
        var data = node.services;
        var amt = 0.0;
        this.amount = 0.0;
        for (var i = 0; i < services.length; i++) {
            if (services[i].service) {
                var quantity = "0";
                var clicked = false;
                //alert(this.category_data.indexOf(services[i].service))
                if (this.sub_category_data.indexOf(services[i].service) < 0) {
                    for (var j = 0; j < data.length; j++) {
                        if (services[i].speciality == data[j].speciality) {
                            quantity = data[j].quantity;
                            // console.log(data[j].quantity,data[j].price);
                            amt = parseInt(data[j].quantity) * parseInt(data[j].price);
                            this.amount += amt;
                            clicked = true;
                        }
                    }
                }
                this.sub_category_data.push({ "serviceName": services[i].service, "speciality": services[i].speciality,
                    "price": services[i].amount, "quantity": quantity, "clicked": clicked });
                // console.log(this.amount,amt);
                // if (this.sub_category_data[services[i].service]) {
                //     // let flag=1;
                //     //alert(this.checkSubServiceExist(this.sub_category_data,services[i]))
                //     if(this.checkSubServiceExist(this.sub_category_data,services[i])){
                //         this.sub_category_data[services[i].service].push({
                //             "name": services[i].speciality,
                //             "price": services[i].amount
                //         })
                //     }
                // } else {
                //     this.sub_category_data[services[i].service] = [];
                //     this.sub_category_data[services[i].service].push({
                //         "name": services[i].speciality,
                //         "price": services[i].amount
                //     })
                // }
            }
        }
        console.log(node);
        this.details.myDate = node.bookingSchedule.date;
        this.details.myTime = node.bookingSchedule.time;
        this.details.notes = node.notes;
        this.details.address = this.findAddressIndex(node.customerAddress.name);
        this.details.customerName = node.customerName;
        this.bookPage = false;
        this.bookingPage = true;
        this.calculate_sum();
    };
    BookingsPage.prototype.stylechange = function (cat) {
        // console.log(cat);
        if (cat.quantity != "" && cat.quantity != "0")
            cat.clicked = true;
        else {
            cat.clicked = false;
        }
        this.calculate_sum();
    };
    BookingsPage.prototype.calculate_sum = function () {
        var total = 0.0;
        for (var i = 0; i < this.sub_category_data.length; i++) {
            if (this.sub_category_data[i].quantity == "")
                this.sub_category_data[i].quantity = "0";
            else if (parseInt(this.sub_category_data[i].quantity) < 0)
                this.sub_category_data[i].quantity = "0";
            var ttl = this.sub_category_data[i].price * parseInt(this.sub_category_data[i].quantity);
            // console.log(ttl);
            total += ttl;
        }
        this.amount = total;
    };
    BookingsPage.prototype.findAddressIndex = function (name) {
        // console.log(this.addresses)
        for (var i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].name == name) {
                return i;
            }
        }
    };
    BookingsPage.prototype.showBookPage = function (data) {
        var _this = this;
        // console.log(data)
        this.profileService.getPartnerProfile(data.partnerId).subscribe(function (ref) {
            // console.log(ref)
            _this.profile_data = ref[0];
        });
        this.serviceDB.getAllPartnerServices(data.partnerId)
            .subscribe(function (ref) { return _this.getServices(ref, data); });
    };
    BookingsPage.prototype.editBooking = function (data) {
        // console.log(data);
        this.details = {
            service: '',
            price: '',
            expertise: '',
            category: ''
        };
        this.editable_booking_data = data;
        this.showBookPage(data);
    };
    //changes
    BookingsPage.prototype.updateBooking = function (details) {
        if (this.details.address == undefined)
            this.details.address = 0;
        if (localStorage.getItem('uid') === null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else if (localStorage.getItem('uid')) {
            var services_selected = [];
            for (var i = 0; i < this.sub_category_data.length; i++) {
                //if(this.sub_category_data[i].clicked)
                if (this.sub_category_data[i].quantity != "0" && this.sub_category_data[i].quantity != "") {
                    // this.sub_category_data[i].clicked = undefined;
                    services_selected.push(this.sub_category_data[i]);
                }
            }
            var json = {
                bookingSchedule: {
                    date: details.myDate,
                    time: details.myTime
                },
                customerAddress: this.addresses[details.address],
                customerId: localStorage.getItem('uid'),
                createdAt: this.editable_booking_data.createdAt,
                updatedAt: new Date().toISOString(),
                partnerId: this.editable_booking_data.partnerId,
                services: services_selected,
                stage: 'pending',
                totalAmount: this.amount,
                customerName: details.customerName,
                notes: details.notes,
            };
            if (json.notes == undefined) {
                json.notes = "";
            }
            // console.log(json)
            var arrayOfKeys = Object.keys(json);
            var error = false;
            for (var _i = 0, arrayOfKeys_1 = arrayOfKeys; _i < arrayOfKeys_1.length; _i++) {
                var obj = arrayOfKeys_1[_i];
                if (obj == 'address2' || obj == 'geofire' || obj == 'status') {
                }
                else if (!(json[obj]) || json[obj] == "") {
                    error = true;
                    this.loadError("please provide valid " + obj);
                    break;
                }
            }
            if (!error) {
                // console.log(json)
                this.details.address = undefined;
                this.hideBookPage();
                this.bookingService.updateCustomerBooking(this.editable_booking_data.key, json);
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
    };
    BookingsPage.prototype.loadError = function (message) {
        var alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    BookingsPage.prototype.hideBookPage = function () {
        this.bookPage = true;
        this.bookingList = false;
        this.bookingPage = true;
    };
    BookingsPage.prototype.updateReview = function (rating, notes) {
        var _this = this;
        if (notes == undefined) {
            notes = "";
        }
        this.booking_data.rating = rating;
        this.booking_data.feedbackNotes = notes;
        // console.log(this.booking_data)
        if (this.loading != undefined) {
            this.loading.dismiss();
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present().then(function () {
            _this.bookingService.updateBooking('completed', _this.booking_data).then(function () {
                _this.loading.dismiss();
                var alert = _this.alertCtrl.create({
                    message: 'Thanks for submitting review',
                    buttons: ['OK']
                });
                alert.present();
                _this.hideReviewPage();
            });
        });
    };
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"C:\Ionic\MobileStylerClient\src\pages\bookings\bookings.html"*/'<!--\n   Generated template for the BookingsPage page.\n   \n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n   <ion-header color="grey">\n    <ion-navbar color="grey" style="color:#fff">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n  <ion-content style="background:#EDF0F3" padding>\n    <ion-card style="padding:0px;width:100%;height:70%;overflow:auto;border-radius:10px" [hidden]="reviewPage">\n  \n      <ion-card-header style="padding:8px">\n  \n        <div class="row">\n          <div class="col-xs-2">\n            <ion-icon (click)="hideReviewPage()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n          </div>\n          <div class="col-xs-10" style="padding:0px">\n            <div class="row">\n              <div class="col-xs-6 text" style="text-align:left;padding:0px;font-weight:bold">\n                Submit Review\n  \n              </div>\n              <div class="col-xs-6" style="text-align:left;padding:0px">\n  \n              </div>\n  \n            </div>\n            <img class="img-circle" style="top:0px;float:right;width:65px;right:10px;position:absolute" src="{{profile_data.profilePicture}}">\n          </div>\n        </div>\n        <hr>\n      </ion-card-header>\n      <ion-card-content style="margin-top:-14px;padding:0px">\n  \n        <div padding>\n          <ion-grid style="margin-left:5px;padding:8px">\n  \n            <ion-row>\n              <ion-col col-12>\n                <div class="form-group ">\n                  <label for="name2 " class="control-label ">Select Rating</label>\n                  <div class="star-rating1" style="text-align:left;margin-top:-1px;font-size:28px">\n  \n                    <span *ngFor="let class of startClass;let i=index" [class]="class" (click)="changeRating(i)"></span>\n  \n                    <span> ({{rating}}/5)</span>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12>\n                <div class="form-group ">\n                  <label for="name2 " class="control-label ">Notes</label>\n                  <div>\n                    <textarea class="form-control small-round " style="height:100px !important" [(ngModel)]="notes"></textarea>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n  \n        </div>\n        <div class="footer" style="width:100%;text-align:center" (click)="updateReview(rating,notes)">\n  \n          Submit\n  \n  \n        </div>\n      </ion-card-content>\n  \n  \n  \n    </ion-card>\n    <ion-card style="padding:0px;width:100%;height:100%;overflow:auto; border-radius: 10px" [hidden]="bookPage">\n  \n      <ion-card-header style="padding:8px;height:64px">\n  \n        <div class="row">\n          <div class="col-xs-2">\n            <ion-icon (click)="hideBookPage()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n          </div>\n          <div style="padding:0px">\n            <div class="row">\n              <div class="col-xs-6 text" style="text-align:left;padding:0px;font-weight:bold">\n                {{profile_data.partnerFirstName +\' \'+ profile_data.partnerLastName}}\n                <!--<div class="star-rating1" style="text-align:left;margin-top:-1px">\n                                  <span class="fa fa-star checked"></span>\n                                  <span class="fa fa-star checked"></span>\n                                  <span class="fa fa-star checked"></span>\n                                  <span class="fa fa-star"></span>\n                                  <span class="fa fa-star"></span>\n                              </div>-->\n              </div>\n              <div class="col-xs-6" style="text-align:left;padding:0px">\n  \n              </div>\n  \n            </div>\n            <!--<img class="img-circle" style="top:0px;float:right;width:65px;right:10px;position:absolute" src="{{profile_data.profilePicture}}">-->\n          </div>\n        </div>\n        <hr style="margin-top: 0px">\n      </ion-card-header>\n      <!-- <ion-card-content style="margin-top:-14px;">\n  \n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <div class="form-group">\n                <label for="name2" class="control-label">Service</label>\n                <div>\n                  <ion-select [(ngModel)]="details.category" class="form-control round" (ngModelChange)="getSubCategories()" style="max-width:100%">\n                    <ion-option *ngFor="let category of category_data" value="{{category}}">{{category}}</ion-option>\n  \n                  </ion-select>\n  \n                </div>\n              </div>\n  \n            </ion-col>\n            <ion-col col-5>\n              <div class="form-group">\n                <label for="name2" class="control-label">Price</label>\n                <div>\n                  <input class="form-control round" value="$ 25.00" [(ngModel)]="details.price" readonly />\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <div class="form-group">\n                <label for="name2" class="control-label">Expertise</label>\n                <div>\n  \n                  <ion-select [(ngModel)]="details.expertise" (ngModelChange)="getAmount(details.expertise)" class="form-control round " style="max-width:100%">\n                    <ion-option *ngFor="let category of sub_categories;let i=index" value="{{i}}">{{category.name}}</ion-option>\n  \n                  </ion-select>\n  \n                </div>\n              </div>\n            </ion-col>\n            <ion-col col-5>\n              <div class="form-group" text-right>\n                <button [disabled]="details.price ? false : true" ion-button round color="grey" style="margin-top:17px; margin-right: 22px; width: 93%;"\n                  (click)="addService()">Select</button>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <ion-card style="padding: 0px;margin: 0px;width: 100%;" class="round bordered">\n                <ion-card-content style="height:100px;overflow:auto">\n                  <ion-list>\n                    <ul class="list-inline">\n                      <li class="list-inline-item bold" *ngFor="let item_address of added_services; let i = index">\n  \n                        {{item_address.serviceName}}\n                        <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="removeService(i)"></ion-icon>\n                      </li>\n                    </ul>\n  \n                  </ion-list>\n  \n  \n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <div class="form-group">\n                <label for="name2" class="control-label">Schedule</label>\n                <div>\n                  <div class="left-inner-addon">\n                    <ion-icon ios="ios-calendar" md="md-calendar" color="grey"></ion-icon>\n  \n                    <ion-datetime class="form-control round text-right" style="padding-top: 8px;" [(ngModel)]="details.myDate" placeholder="Dec 24, 2017"\n                      displayFormat="MMM DD, YYYY" [(ngModel)]="myDate"></ion-datetime>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col col-5>\n              <div class="form-group">\n                <label for="name2" class="control-label">&nbsp;</label>\n                <div>\n                  <div class="left-inner-addon">\n                    <ion-icon ios="ios-time" md="md-time" color="grey"></ion-icon>\n                    <ion-datetime class="form-control round text-right" displayFormat="hh:mm:a" [(ngModel)]="details.myTime" style="padding-top: 8px;"></ion-datetime>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <div class="form-group ">\n                <label for="name2 " class="control-label ">Address</label>\n                <div>\n                  <ion-select [(ngModel)]="details.address" (ngModelChange)="getAmount(details.speciality)" class="form-control round " style="max-width:100%">\n                    <ion-option *ngFor="let address of addresses;let i=index" value="{{i}}">{{address.name}}</ion-option>\n  \n                  </ion-select>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <div class="form-group ">\n                <label for="name2 " class="control-label ">Notes</label>\n                <div>\n                  <textarea class="form-control small-round " style="height:100px !important" [(ngModel)]="details.notes"></textarea>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n  \n        <div class="footer" style="width:100%; border-radius: 6px" (click)="updateBooking(details)">\n  \n          Update Booking\n          <span class="pull-right">{{amount}}</span>\n  \n        </div>\n      </ion-card-content> -->\n    <!-- new booking edit view start   -->\n    <ion-card-content style="margin-top:-14px;">\n      <ion-row>\n        <ion-col col-6>\n          <div class="form-group" style="margin-left: 10px;">\n            <label class="form-control-static txtlabel">Service</label>\n  \n            <!--  <label for="name2" class="control-label">Service</label>\n                        <div>\n                            <ion-select [(ngModel)]="details.category" class="form-control round" (ngModelChange)="getSubCategories()" style="max-width:100%">\n                                <ion-option *ngFor="let category of category_data" value="{{category}}">{{category}}</ion-option>\n  \n                            </ion-select>\n  \n                        </div> -->\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="form-group" style="margin-left: 10px;">\n            <label class="form-control-static txtlabel">Price</label>\n  \n            <!--    <div>\n                            <input class="form-control round" value="$ 25.00" [(ngModel)]="details.price" readonly />\n                        </div>-->\n          </div>\n        </ion-col>\n        <ion-col col-2>\n          <div class="form-group" style="margin-left: 10px;">\n            <label class="form-control-static txtlabel">Qty.</label>\n  \n            <!--  <div>\n  \n                               <ion-select [(ngModel)]="details.speciality" (ngModelChange)="getAmount(details.speciality)" class="form-control round "\n                                   style="max-width:100%">\n                                   <ion-option *ngFor="let category of sub_categories;let i=index" value="{{i}}">{{category.name}}</ion-option>\n  \n                               </ion-select>\n  \n                           </div>-->\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-scroll scrollY="false" style="width: 100%;min-height: 100px;max-height: 200px;border: 3px solid #aaa;">\n        <ion-grid>\n  \n          <ion-row *ngFor="let category of sub_category_data">\n  \n            <ion-col col-6 style="width: 100%;overflow: hidden;overflow-x:scroll;white-space: nowrap;">\n              <!-- <div class="form-group" text-right> -->\n              <!-- <input type="text" class="form-control height20" value="{{category.speciality}}" (click)="category.clicked=!category.clicked"\n                  [class.selected]="category.clicked"> -->\n              <label class="form-control-static height20" style="width: 100%;text-align: left;" [class.selected]="category.clicked">{{category.speciality}}</label>\n              <!-- </div> -->\n            </ion-col>\n            <ion-col col-3>\n              <!-- <div class="form-group" text-right> -->\n              <!-- <input type="text" class="form-control height20" value="{{category.price}}" (click)="category.clicked=!category.clicked"\n                  [class.selected]="category.clicked"> -->\n              <label class="form-control-static height20" style="width: 100%;text-align: center" [class.selected]="category.clicked">{{category.price}}</label>\n  \n              <!-- </div> -->\n            </ion-col>\n            <ion-col col-2>\n              <!-- <div class="form-group" text-right> -->\n              <input type="num" min=0 class="form-control height20" [(ngModel)]="category.quantity" (ngModelChange)="stylechange(category)"\n                [class.selected]="category.clicked">\n  \n              <!-- </div> -->\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n                    <ion-col col-12>\n                        <ion-card style="padding: 0px;margin: 0px;width: 100%;" class="round bordered">\n                            <ion-card-content style="height:100px;overflow:auto">\n                                <ion-list>\n                                    <ul class="list-inline">\n                                        <li class="list-inline-item bold" *ngFor="let item_address of added_services; let i = index">\n  \n                                            {{item_address.serviceName}}\n                                            <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="removeService(i)"></ion-icon>\n                                        </li>\n                                    </ul>\n  \n                                </ion-list>\n  \n  \n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                </ion-row> -->\n        </ion-grid>\n      </ion-scroll>\n      <ion-grid>\n  \n        <ion-row>\n          <ion-col col-6>\n            <div class="form-group">\n              <label for="name2" class="control-label">Schedule</label>\n              <div>\n                <div class="left-inner-addon">\n                  <ion-icon ios="ios-calendar" md="md-calendar" color="grey"></ion-icon>\n  \n                  <ion-datetime class="form-control round text-right" style="padding-top: 8px;" [(ngModel)]="details.myDate" placeholder="Date"\n                    min="{{myDate}}" max="2020-10-31" displayFormat="MMM DD, YYYY"></ion-datetime>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col col-5>\n            <div class="form-group">\n              <label for="name2" class="control-label">&nbsp;</label>\n              <div>\n                <div class="left-inner-addon">\n                  <ion-icon ios="ios-time" md="md-time" color="grey"></ion-icon>\n                  <ion-datetime class="form-control round text-right" displayFormat="hh:mm:a" [(ngModel)]="details.myTime"\n                    style="padding-top: 8px;" placeholder="Time"></ion-datetime>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="form-group ">\n              <label for="name2 " class="control-label ">Notes</label>\n              <div>\n                <textarea class="form-control small-round " style="height:70px !important" [(ngModel)]="details.notes"></textarea>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="form-group ">\n              <label for="name2 " class="control-label ">Address</label>\n              <div>\n                <ion-select [(ngModel)]="details.address" (ngModelChange)="getAmount(details.speciality)"   class="form-control round " style="max-width:100%"><!--(ngModelChange)="getAmount(details.speciality)"-->\n                  <ion-option *ngFor="let address of addresses;let i=index" value="{{i}}">{{address.name}}</ion-option>\n  \n                </ion-select>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n  \n  \n      <div class="footer" style="width:100%; border-radius: 6px;" (click)="updateBooking(details)">\n  \n        Update Booking\n        <span class="pull-right">{{amount | currency}}</span>\n  \n      </div>\n    </ion-card-content>\n    <!-- new booking edit view end   -->\n    </ion-card>\n    <ion-card [hidden]="bookingPage" *ngIf="booking_data.bookingSchedule" class="centered">\n  \n      <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n  \n        <div class="row">\n          <div class="col-xs-2">\n            <ion-icon (click)="togglePopUp()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n          </div>\n          <div style="padding:0px">\n            <div class="row">\n              Booking Details\n            </div>\n          </div>\n        </div>\n        <hr style="margin-top:0px; margin-bottom:0px">\n      </ion-card-header>\n      <ion-card-content>\n        <br>\n  \n  \n  \n        <div class="container text-left">\n          <div class="pull-right text-right">\n            <p class="text bolder no-margin">{{booking_data.bookingSchedule.time}}</p>\n            <p class="text no-margin">{{booking_data.bookingSchedule.date}}</p>\n          </div>\n          <h4 class="text bolder" *ngFor="let service of booking_data.services">{{service.serviceName}} - {{service.speciality}}\n            <br>\n          </h4>\n  \n          <p class="text text-left" style="margin:0px;margin-top:60px">\n            <span>{{booking_data.customerName}}</span>\n            <br>\n            <span> {{booking_data.customerAddress.address1}}</span>\n            <br>\n            <span> {{booking_data.customerAddress.address2}}</span>\n            <br>\n            <span> {{booking_data.customerAddress.city}},{{booking_data.customerAddress.state}},{{booking_data.customerAddress.zip}}</span>\n          </p>\n          <p class="text text-left" style="margin:0px;margin-top:60px">\n            <span class="font-weight-bold">Amount</span>\n            <br> {{booking_data.totalAmount}}\n          </p>\n  \n          <div class="pull-right control-buttons" style="margin-top:60px" *ngIf="booking_data.stage==\'pending\' || booking_data.stage==\'accept\'">\n            <button type="button" class="btn bt-default round grey-background control-button" (click)="editBooking(booking_data);">Edit\n            </button>\n  \n          </div>\n          <br>\n          <br>\n        </div>\n  \n  \n      </ion-card-content>\n    </ion-card>\n    <div [hidden]="bookingList">\n      <div style="background:#fff;">\n        <ion-segment [(ngModel)]="pet" color="grey" style="font-weight:bold">\n          <ion-segment-button value="kittens">\n            Upcoming\n          </ion-segment-button>\n          <ion-segment-button value="puppies">\n            Past\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      <div [ngSwitch]="pet" style="margin-top:10px">\n        <ion-list *ngSwitchCase="\'puppies\'">\n          <ion-item *ngIf="pastBookingsList.length<1">\n            <p>No Past Items Found</p>\n          </ion-item>\n          <ion-item class="no-padding rounded-card" *ngFor="let booking of pastBookingsList ;let i=index" style="margin-bottom:5px">\n            <div class="container text-left">\n              <div class="pull-right">\n  \n                <h4 class="text bolder">{{booking.bookingSchedule.time}}</h4>\n                <h5 class="text">{{booking.bookingSchedule.date}}</h5>\n              </div>\n              <br>\n              <h4 class="text bolder" *ngFor="let service of booking.services">{{service.serviceName}} - {{service.speciality}}\n                <br>\n              </h4>\n              <h4 class="text bolder">\n              </h4>\n              <br>\n              <p class="text text-left">\n                <span>{{booking.customerName}}</span>\n                <br>\n                <span> {{booking.customerAddress.address1}}</span>\n                <br>\n                <span>{{booking.customerAddress.address2}}</span>\n                <br>\n                <span>{{booking.customerAddress.city}},{{booking.customerAddress.state}},{{booking.customerAddress.zip}}</span>\n                <br>\n                <span>Total amount: {{booking.totalAmount}}</span>\n              </p>\n  \n              <ion-badge item-start style="background:green;margin-top:10px">{{booking.stage}}</ion-badge>\n  \n              <div class="pull-right control-buttons">\n  \n                <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" (click)="showBookingDetails(booking)"\n                  class="btn bt-default round grey-background control-button" style="margin-left:10px" color="grey">Details\n                </button>\n  \n              </div>\n  \n            </div>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'kittens\'">\n          <ion-item *ngIf="upcomingBookingsList && upcomingBookingsList.length<1">\n            <p>No Upcoming Items found</p>\n          </ion-item>\n          <ion-item class="no-padding rounded-card" *ngFor="let booking of upcomingBookingsList;let i=index" style="margin-bottom:5px">\n            <div class="container text-left">\n              <div class="pull-right text-right right-time-space">\n                <h4 class="text bolder">{{booking.bookingSchedule.time}}</h4>\n                <h5 class="text">{{booking.bookingSchedule.date}}</h5>\n              </div>\n              <h4 class="text bolder" *ngFor="let service of booking.services">{{service.serviceName}} - {{service.speciality}}\n                <br>\n              </h4>\n              <br>\n              <p class="text text-left">\n                <span>Customer : {{booking.customerName}}</span>\n                <br>\n                <span>Partner : {{booking.partnerName}}</span>\n                <br>\n                <span> {{booking.customerAddress.address1}}</span>\n                <br>\n                <span>{{booking.customerAddress.address2}}</span>\n                <br>\n                <span>{{booking.customerAddress.city}},{{booking.customerAddress.state}},{{booking.customerAddress.zip}}</span>\n                <br>\n                <span>Amount: {{booking.totalAmount | currency:\'$\'}}</span>\n              </p>\n  \n              <ion-badge item-start style="background:green;margin-top:10px">{{booking.stage}}</ion-badge>\n  \n              <div class="pull-right control-buttons">\n  \n                <button (click)="showReviewPage(booking)" class="btn bt-default round grey-background control-button" *ngIf="booking.stage==\'end\'">Review</button>\n                <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" (click)="showBookingDetails(booking)"\n                  class="btn bt-default round grey-background control-button" style="margin-left:10px;width:120px" color="grey">Open Booking</button>\n  \n              </div>\n            </div>\n          </ion-item>\n        </ion-list>\n  \n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"C:\Ionic\MobileStylerClient\src\pages\bookings\bookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bookings_bookings__["a" /* BookingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_menu_controller__["a" /* MenuController */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map