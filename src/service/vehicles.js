const vehiclesTypeData = [
    {
        id: 'Sedan',
        name: 'Sedan'
    },
    {
        id: 'Hatchback',
        name: 'Hatchback'
    },
    {
        id: 'SUV',
        name: 'SUV'
    },
    {
        id: 'Đa dụng',
        name: 'Đa dụng'
    },
    {
        id: 'Bán tải',
        name: 'Bán tải'
    },
]



const priceRank = [
    {
        idPrice: 'rank1',
        des: '300 triệu - 500 triệu'
    },
    {
        idPrice: 'rank2',
        des: '500 triệu - 1 tỷ'
    },
    {
        idPrice: 'rank3',
        des: '1 tỷ - 2 tỷ'
    },
    {
        idPrice: 'rank4',
        des: '2 tỷ - 3 tỷ'
    },
    {
        idPrice: 'rank5',
        des: 'Trên 4 tỷ'
    },

]

const vehiclesCategory = [
    'Alphard',
    'Camry',
    'Corolla Altis',
    'Corolla Cross',
    'Fortuner',
    'Hilux',
    'Innova',
    'Land Cruiser',
    'Land Cruiser Prado',
    'Raize',
    'Vios',
    'Yaris',
    'Avanza Premio',
    'Veloz Cross'
]

const vehicles = [
    {
        category: 'Alphard',
        carName: 'ALPHARD LUXURY',
        carPrice: '4.370.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Nhật Bản',
        carDes: 'Hộp số tự động 8 cấp',
        carEngDes: 'Động cơ Xăng dung tích 3456 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/D4330983565FD6AADDEFC71BDF72B635.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B99E0C5E4BD43080385C56BDAB62BF62.png'
    },
    {
        category: 'Camry',
        carName: 'Camry 2.0G',
        carPrice: '1.105.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động vô cấp CVT',
        carEngDes: 'Động cơ Xăng dung tích 1987 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png'
    },
    {
        category: 'Camry',
        carName: 'Camry 2.0Q',
        carPrice: '1.220.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động vô cấp CVT',
        carEngDes: 'Động cơ Xăng dung tích 1987 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png'
    },
    {
        category: 'Camry',
        carName: 'Camry 2.5Q',
        carPrice: '1.405.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động 8 cấp',
        carEngDes: 'Động cơ Xăng dung tích 2487 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png'
    },
    {
        category: 'Camry',
        carName: 'Camry 2.5HV',
        carPrice: '1.495.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng + Điện',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động vô cấp E-CVT',
        carEngDes: 'Động cơ Xăng dung tích 2487 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png'
    },
    {
        category: 'Corolla Altis',
        carName: 'Corolla Altis 1.8V',
        carPrice: '765.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'CVT',
        carEngDes: 'Động cơ Xăng dung tích 1798cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png'
    },
    {
        category: 'Corolla Altis',
        carName: 'Corolla Altis 1.8HEV',
        carPrice: '860.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'CVT',
        carEngDes: 'Động cơ Xăng dung tích 1798cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png'
    },
    {
        category: 'Corolla Altis',
        carName: 'Corolla Altis 1.8G',
        carPrice: '719.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'CVT',
        carEngDes: 'Động cơ Xăng dung tích 1798cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png'
    },

    {
        category: 'Corolla Cross',
        carName: 'COROLLA CROSS 1.8G',
        carPrice: '755.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động vô cấp/CVT',
        carEngDes: 'Động cơ Xăng dung tích 1798 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/D1169FB589F9EF6122991D894150BCFD.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/DB5C5D661C279C495A9F171014E34F27.png'
    },

    {
        category: 'Corolla Cross',
        carName: 'COROLLA CROSS 1.8HEV',
        carPrice: '955.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng + Điện',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động vô cấp/CVT',
        carEngDes: 'Động cơ Xăng dung tích 1798 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/D1169FB589F9EF6122991D894150BCFD.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/DB5C5D661C279C495A9F171014E34F27.png'
    },

    {
        category: 'Corolla Cross',
        carName: 'COROLLA CROSS 1.8V',
        carPrice: '860.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động vô cấp/CVT',
        carEngDes: 'Động cơ Xăng dung tích 1798 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/D1169FB589F9EF6122991D894150BCFD.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/DB5C5D661C279C495A9F171014E34F27.png'
    },
    {
        category: 'Fortuner',
        carName: 'FORTUNER 2.4MT 4x2',
        carPrice: '1.026.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Dầu',
        carOrigin: 'Việt Nam',
        carDes: 'Số sàn 6 cấp/6MT',
        carEngDes: 'Động cơ Dầu dung tích 2393 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png'
    },

    {
        category: 'Fortuner',
        carName: 'FORTUNER 2.8AT 4x4',
        carPrice: '1.434.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Dầu',
        carOrigin: 'Việt Nam',
        carDes: 'Số sàn 6 cấp/6MT',
        carEngDes: 'Động cơ Dầu dung tích 2755 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png'
    },

    {
        category: 'Fortuner',
        carName: 'FORTUNER LEGENDER 2.8AT 4X4',
        carPrice: '1.470.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Dầu',
        carOrigin: 'Việt Nam',
        carDes: 'Số sàn 6 cấp/6MT',
        carEngDes: 'Động cơ Dầu dung tích 2755 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png'
    },


    {
        category: 'Fortuner',
        carName: 'FORTUNER 2.4AT 4x2',
        carPrice: '1.118.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Dầu',
        carOrigin: 'Việt Nam',
        carDes: 'Hộp số tự động 6 cấp',
        carEngDes: 'Động cơ Dầu dung tích 2393 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png'
    },


    {
        category: 'Fortuner',
        carName: 'FORTUNER LEGENDER 2.4AT 4X2',
        carPrice: '1.259.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Dầu',
        carOrigin: 'Việt Nam',
        carDes: 'Số sàn 6 cấp/6MT',
        carEngDes: 'Động cơ Dầu dung tích 2393 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png'
    },

    {
        category: 'Fortuner',
        carName: 'FORTUNER 2.7AT 4x4 2022',
        carPrice: '1.319.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Indonesia',
        carDes: 'Hộp số tự động 6 cấp',
        carEngDes: 'Động cơ Dầu dung tích 2694 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png'
    },


    {
        category: 'Fortuner',
        carName: 'FORTUNER 2.7AT4x2 2022',
        carPrice: '1.229.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Indonesia',
        carDes: 'Hộp số tự động 6 cấp',
        carEngDes: 'Động cơ Dầu dung tích 2694 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png'
    },



    {
        category: 'Hilux',
        carName: 'HILUX 2.4L 4x2 AT',
        carPrice: '852.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Bán tải',
        carFuel: 'Dầu',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động 6 cấp/6AT',
        carEngDes: 'Động cơ Dầu dung tích 2393 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3627E631D614001F4AE35DBCC90CB42B.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B3E1E057D1B5A2BAE5AA6B8FB5465A44.png'
    },

    {
        category: 'Innova',
        carName: 'INNOVA 2.0V',
        carPrice: '995.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'Số tự động 6 cấp',
        carEngDes: 'Động cơ Xăng dung tích 1998 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B1C4482978DB18DA2DB5DB1DA1DFF01F.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/CDFDF5294CC6837FAC8ACC8746810C8E.png'
    },
    {
        category: 'Innova',
        carName: 'INNOVA 2.0 VENTURER',
        carPrice: '885.000.000',
        carSeat: '8 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'Số tự động 6 cấp',
        carEngDes: 'Động cơ Xăng dung tích 1998 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B1C4482978DB18DA2DB5DB1DA1DFF01F.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/CDFDF5294CC6837FAC8ACC8746810C8E.png'
    },
    {
        category: 'Innova',
        carName: 'INNOVA 2.0G',
        carPrice: '870.000.000',
        carSeat: '8 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'Số tự động 6 cấp',
        carEngDes: 'Động cơ Xăng dung tích 1998 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B1C4482978DB18DA2DB5DB1DA1DFF01F.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/CDFDF5294CC6837FAC8ACC8746810C8E.png'
    },

    {
        category: 'Innova',
        carName: 'INNOVA 2.0E',
        carPrice: '755.000.000',
        carSeat: '8 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'Số tự động 5 cấp',
        carEngDes: 'Động cơ Xăng dung tích 1998 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B1C4482978DB18DA2DB5DB1DA1DFF01F.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/CDFDF5294CC6837FAC8ACC8746810C8E.png'
    },

    {
        category: 'Land Cruiser',
        carName: 'LAND CRUISER 300',
        carPrice: '4.286.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Nhật Bản',
        carDes: 'Số tự động 10 cấp',
        carEngDes: 'Động cơ Xăng dung tích 3445 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A953B1F43A87DAC9D4D5B0E504F8307C.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A953B1F43A87DAC9D4D5B0E504F8307C.png'
    },

    {
        category: 'Land Cruiser Prado',
        carName: 'LAND CRUISER PRADO',
        carPrice: '2.628.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Nhật Bản',
        carDes: 'Số tự động 6 cấp',
        carEngDes: 'Động cơ Xăng dung tích 2694 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/0B390ABCB353F232D8A16C45781D76BC.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/35777952671ACAAF7A826552421EDC9B.png'
    },


    {
        category: 'Raize',
        carName: 'Raize',
        carPrice: '552.000.000',
        carSeat: '5 chỗ',
        carFuction: 'SUV',
        carFuel: 'Xăng',
        carOrigin: 'Indonesia',
        carDes: 'Vô cấp CVT',
        carEngDes: 'Động cơ Xăng dung tích 998 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/1052B1A4AE5C2C5809F65C757841A149.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3B49A305103F09535D8827E3F32A849A.png'
    },


    {
        category: 'Vios',
        carName: 'VIOS 1.5E-CVT',
        carPrice: '528.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'Số tự động vô cấp',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/BCF393FA9AFEC309E1F2A98CF5A57CEB.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/8A95111EF37782660621B37172A99E0E.png'
    },


    {
        category: 'Vios',
        carName: 'VIOS 1.5E-MT',
        carPrice: '479.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'Số tay 5 cấp',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/BCF393FA9AFEC309E1F2A98CF5A57CEB.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/8A95111EF37782660621B37172A99E0E.png'
    },

    {
        category: 'Vios',
        carName: 'VIOS 1.5G-CVT',
        carPrice: '592.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Sedan',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'Số tự động vô cấp',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/BCF393FA9AFEC309E1F2A98CF5A57CEB.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/8A95111EF37782660621B37172A99E0E.png'
    },

    {
        category: 'Yaris',
        carName: 'YARIS 1.5G CVT',
        carPrice: '684.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Hatchback',
        carFuel: 'Xăng',
        carOrigin: 'Thái Lan',
        carDes: 'Số tự động vô cấp',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/7BAC1028645009E904340E40AB628EC7.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/55602A483122054C2836FD6346583926.png'
    },

    {
        category: 'Avanza Premio',
        carName: 'AVANZA PREMIO CVT',
        carPrice: '598.000.000',
        carSeat: '5 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'CVT',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/4C0BCFB9EA9EF8A9D28FCFDA19D83303.jpg',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/16722B0242352FEBA87ADA38835A52D2.jpg'
    },

    {
        category: 'Avanza Premio',
        carName: 'AVANZA PREMIO MT',
        carPrice: '558.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'MT',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/4C0BCFB9EA9EF8A9D28FCFDA19D83303.jpg',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/16722B0242352FEBA87ADA38835A52D2.jpg'
    },

    {
        category: 'Veloz Cross',
        carName: 'VELOZ CROSS CVT TOP',
        carPrice: '698.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'CVT',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/F791B1892243AF2F56533CE0FDB7FFD5.png'
    },
    {
        category: 'Veloz Cross',
        carName: 'VELOZ CROSS CVT',
        carPrice: '658.000.000',
        carSeat: '7 chỗ',
        carFuction: 'Đa dụng',
        carFuel: 'Xăng',
        carOrigin: 'Việt Nam',
        carDes: 'CVT',
        carEngDes: 'Động cơ Xăng dung tích 1496 cc',
        carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png',
        carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/F791B1892243AF2F56533CE0FDB7FFD5.png'
    },

]

export const getVehicleTypes = () => {
    return vehiclesTypeData;
}

export const getVehicleCategory = () => {
    return vehiclesCategory;
}

export const getVehicles = (style, category, price, order) => {
    let vehiclesFilter = vehicles.filter((vehicle) => {
        return (vehicle.carFuction === style || style === 'all') && (vehicle.category === category || category === 'all')
    });
    if (order === 'asc') {
        vehiclesFilter.sort((a, b) => {
            return parseInt(a.carPrice.replace(/[^\d]/g, '')) > parseInt(b.carPrice.replace(/[^\d]/g, '')) ? 1 : -1
        })
    }

    if (order === 'desc') {
        vehiclesFilter.sort((a, b) => { 
            return parseInt(a.carPrice.replace(/[^\d]/g, '')) > parseInt(b.carPrice.replace(/[^\d]/g, '')) ? -1 : 1 })
    }
    return vehiclesFilter
}

export const getCarPriceRank = () => {
    return priceRank;
}