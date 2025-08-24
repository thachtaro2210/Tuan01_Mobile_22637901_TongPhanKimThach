"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaiKhoan {
    constructor(soTaiKhoan, chuTaiKhoan, soDu) {
        this.soTaiKhoan = soTaiKhoan;
        this.chuTaiKhoan = chuTaiKhoan;
        this.soDu = soDu;
    }
    xemSoDu() {
        return this.soDu;
    }
}
exports.default = TaiKhoan;
