"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SanPham {
    constructor(ten, gia) {
        this.ten = ten;
        this.gia = gia;
    }
    hienThi() {
        console.log(`Tên: ${this.ten}, Giá: ${this.gia}`);
    }
    sosanh() {
        const danhSachSanPham = [
            new SanPham("Áo thun", 80),
            new SanPham("Quần jean", 120),
            new SanPham("Giày thể thao", 200),
            new SanPham("Nón lưỡi trai", 60),
            new SanPham("Balo", 150),
        ];
        const sanPhamGiaCao = danhSachSanPham.filter(sp => sp.gia > 100);
        console.log("Các sản phẩm có giá > 100:");
        sanPhamGiaCao.forEach(sp => sp.hienThi());
    }
}
exports.default = SanPham;
