"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var angular2_jwt_1 = require("angular2-jwt");
var authentication_config_1 = require("../configurations/authentication.config");
/**
 * ROPC Authentication service.
 */
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        /**
         * User's data.
         */
        this.user = {};
        // On bootstrap or refresh, tries to get the user's data.  
        this.decodeToken();
        // Creates header for post requests.  
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    /**
     * Tries to sign in the user.
     *
     * @param username
     * @param password
     * @return The user's data
     */
    AuthenticationService.prototype.signin = function (username, password) {
        var _this = this;
        // Token endpoint & params.  
        var tokenEndpoint = authentication_config_1.ConfigurationService.TOKEN_ENDPOINT;
        var params = {
            client_id: authentication_config_1.ConfigurationService.CLIENT_ID,
            grant_type: authentication_config_1.ConfigurationService.GRANT_TYPE,
            username: username,
            password: password,
            scope: authentication_config_1.ConfigurationService.SCOPE
        };
        // Encodes the parameters.  
        var body = this.encodeParams(params);
        return this.http.post(tokenEndpoint, body, this.options)
            .map(function (res) {
            var body = res.json();
            // Sign in successful if there's an access token in the response.  
            if (typeof body.access_token !== 'undefined') {
                // Stores access token & refresh token.  
                _this.store(body);
            }
        }).catch(function (error) {
            // Error on post request.  
            return Observable_1.Observable.throw(error);
        });
    };
    /**
     * Tries to get a new token using refresh token.
     */
    AuthenticationService.prototype.getNewToken = function () {
        var _this = this;
        var refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken != null) {
            // Token endpoint & params.  
            var tokenEndpoint = authentication_config_1.ConfigurationService.TOKEN_ENDPOINT;
            var params = {
                client_id: authentication_config_1.ConfigurationService.CLIENT_ID,
                grant_type: "refresh_token",
                refresh_token: refreshToken
            };
            // Encodes the parameters.  
            var body = this.encodeParams(params);
            this.http.post(tokenEndpoint, body, this.options)
                .subscribe(function (res) {
                var body = res.json();
                // Successful if there's an access token in the response.  
                if (typeof body.access_token !== 'undefined') {
                    // Stores access token & refresh token.  
                    _this.store(body);
                }
            });
        }
    };
    /**
     * Revokes token.
     */
    AuthenticationService.prototype.revokeToken = function () {
        var token = localStorage.getItem('id_token');
        if (token != null) {
            // Revocation endpoint & params.  
            var revocationEndpoint = authentication_config_1.ConfigurationService.REVOCATION_ENDPOINT;
            var params = {
                client_id: authentication_config_1.ConfigurationService.CLIENT_ID,
                token_type_hint: "access_token",
                token: token
            };
            // Encodes the parameters.  
            var body = this.encodeParams(params);
            this.http.post(revocationEndpoint, body, this.options)
                .subscribe(function () {
                localStorage.removeItem('id_token');
            });
        }
    };
    /**
     * Revokes refresh token.
     */
    AuthenticationService.prototype.revokeRefreshToken = function () {
        var refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken != null) {
            // Revocation endpoint & params.  
            var revocationEndpoint = authentication_config_1.ConfigurationService.REVOCATION_ENDPOINT;
            var params = {
                client_id: authentication_config_1.ConfigurationService.CLIENT_ID,
                token_type_hint: "refresh_token",
                token: refreshToken
            };
            // Encodes the parameters.  
            var body = this.encodeParams(params);
            this.http.post(revocationEndpoint, body, this.options)
                .subscribe(function () {
                localStorage.removeItem('refresh_token');
            });
        }
    };
    /**
     * Removes user and revokes tokens.
     */
    AuthenticationService.prototype.signout = function () {
        this.redirectUrl = null;
        this.user = {};
        // Revokes token.  
        this.revokeToken();
        // Revokes refresh token.  
        this.revokeRefreshToken();
    };
    /**
     * Gets user's data.
     *
     * @return The user's data
     */
    AuthenticationService.prototype.getUser = function () {
        return this.user;
    };
    /**
     * Decodes token through JwtHelper.
     */
    AuthenticationService.prototype.decodeToken = function () {
        if (angular2_jwt_1.tokenNotExpired()) {
            var token = localStorage.getItem('id_token');
            var jwtHelper = new angular2_jwt_1.JwtHelper();
            this.user = jwtHelper.decodeToken(token);
        }
    };
    /**
     * // Encodes the parameters.
     *
     * @param params The parameters to be encoded
     * @return The encoded parameters
     */
    AuthenticationService.prototype.encodeParams = function (params) {
        var body = "";
        for (var key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }
        return body;
    };
    /**
     * Stores access token & refresh token.
     *
     * @param body The response of the request to the token endpoint
     */
    AuthenticationService.prototype.store = function (body) {
        // Stores access token in local storage to keep user signed in.  
        localStorage.setItem('id_token', body.access_token);
        // Stores refresh token in local storage.  
        localStorage.setItem('refresh_token', body.refresh_token);
        // Decodes the token.  
        this.decodeToken();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map