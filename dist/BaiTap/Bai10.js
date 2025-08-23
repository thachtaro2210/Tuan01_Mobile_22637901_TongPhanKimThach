"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaiKhoan {
    constructor(soTaiKhoan, chuTaiKhoan, soDuBanDau) {
        this.soTaiKhoan = soTaiKhoan;
        this.chuTaiKhoan = chuTaiKhoan;
        this.soDu = soDuBanDau;
    }
    xemSoDu() {
        return this.soDu;
    }
}
exports.default = TaiKhoan;
