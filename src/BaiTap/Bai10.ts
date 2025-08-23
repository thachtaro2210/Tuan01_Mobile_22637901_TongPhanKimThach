class TaiKhoan {
    public soTaiKhoan: string;       
    private soDu: number;            
    readonly chuTaiKhoan: string;    

    constructor(soTaiKhoan: string, chuTaiKhoan: string, soDu: number) {
        this.soTaiKhoan = soTaiKhoan;
        this.chuTaiKhoan = chuTaiKhoan;
        this.soDu = soDu;
    }
    xemSoDu(): number {
        return this.soDu;
    }
}

export default TaiKhoan;
