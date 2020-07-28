"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [new Sejour('Paris', 100), new Sejour('Rio de Janeiro', 800), new Sejour('Tokyo', 1100)];
    }
    // Sejour | null == retourne soit sejour, soit null
    SejourService.prototype.findByNom = function (nom) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var s_1 = _a[_i];
            if (s_1.nom === nom) {
                return s_1;
            }
        }
        return 'non trouvé';
    };
    return SejourService;
}());
var s = new SejourService();
// OK
console.log(s.findByNom('Paris'));
// KO
console.log(s.findByNom('test'));
