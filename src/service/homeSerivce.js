const vehiclesTypeData = [
    {
        id: 'vehicle-0001',
        name: 'Sedan'
    },
    {
        id: 'vehicle-0002',
        name: 'Hatchback'
    },
    {
        id: 'vehicle-0003',
        name: 'SUV'
    },
    {
        id: 'vehicle-0004',
        name: 'Đa dụng'
    },
    {
        id: 'vehicle-0005',
        name: 'Bán tải'
    },
]

const vehicles = [
    {
        idType: 'vehicle-0001',
        vehicleOfType: [
            {
                engVer: 'Động cơ 2.0',
                engNumber: 'Dung tích 1.987 cc',
                carName: 'Camry',
                carPrice: '1.105.000.000',
                carSeat: '5 Chỗ',
                carDes: 'Số tự động vô cấp CVT',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png',
                alt: '',
                herf: '/camry-2-0g'
            },

            {
                engVer: 'Động cơ 1.8',
                engNumber: 'Dung tích 1.798',
                carName: 'Corolla Altis',
                carPrice: '719.000.000',
                carSeat: '5 Chỗ',
                carDes: 'SCVT',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A670445983E5CD5D91AA647A3BDE2F95.png',
                alt: '',
                herf: '/corolla-altis-1-8g'
            },

            {
                engVer: 'Động cơ 1.5',
                engNumber: 'Dung tích 1.496 cc',
                carName: 'Vios',
                carPrice: '489.000.000',
                carSeat: '5 Chỗ',
                carDes: 'Số tay 5 cấp',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/E686F5FF2B31D7E47A2EA60919DA8EEC.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/E686F5FF2B31D7E47A2EA60919DA8EEC.png',
                alt: '',
                herf: '/vios-1-5e-mt'
            }
        ]
    },

    {
        idType: 'vehicle-0002',
        vehicleOfType: [
            {
                engVer: 'Động cơ 1.5',
                engNumber: 'Dung tích 1.496 cc',
                carName: 'Yaris',
                carPrice: '684.000.000',
                carSeat: '5 Chỗ',
                carDes: 'Số tự động vô cấp',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/7BAC1028645009E904340E40AB628EC7.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/55602A483122054C2836FD6346583926.png',
                alt: '',
                herf: '/yaris-1-5g-cvt'
            }
        ]
    },

    {
        idType: 'vehicle-0003',
        vehicleOfType: [
            {
                engVer: 'Động cơ 1.8',
                engNumber: 'Dung tích 1.798 cc',
                carName: 'Corolla Cross',
                carPrice: '755.000.000',
                carSeat: '5 Chỗ',
                carDes: 'Hộp số tự động vô cấp CVT',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/D1169FB589F9EF6122991D894150BCFD.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/DB5C5D661C279C495A9F171014E34F27.png',
                alt: '',
                herf: '/corolla-cross-1-8g'
            },
            {
                engVer: 'Động cơ 2.4',
                engNumber: 'Dung tích 2.393 cc',
                carName: 'Fortuner',
                carPrice: '1.026.000.000',
                carSeat: '7 Chỗ',
                carDes: 'Số sàn 6 cấp/6MT',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/5C8A3E6258EEF088D056327796DDCFF7.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3D86A81BF474C414FD9561C08D35DCA7.png',
                alt: '',
                herf: '/fortuner-2-4mt-4x2'
            },
            {
                engVer: 'Động cơ 3.5',
                engNumber: 'Dung tích 3.445 cc',
                carName: 'Land Cruiser',
                carPrice: '4.286.000.000',
                carSeat: '7 Chỗ',
                carDes: 'Số tự động 10 cấp',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A953B1F43A87DAC9D4D5B0E504F8307C.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/A953B1F43A87DAC9D4D5B0E504F8307C.png',
                alt: '',
                herf: '/land-cruiser-300'
            },
            {
                engVer: 'Động cơ 2.7',
                engNumber: 'Dung tích 2.694 cc',
                carName: 'Land Cruiser Prado',
                carPrice: '2.628.000.000',
                carSeat: '7 Chỗ',
                carDes: 'Số tự động 6 cấp',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/0B390ABCB353F232D8A16C45781D76BC.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/35777952671ACAAF7A826552421EDC9B.png',
                alt: '',
                herf: '/land-cruiser-prado'
            },
            {
                engVer: 'Động cơ 1.0',
                engNumber: 'Dung tích 998 cc',
                carName: 'Raize',
                carPrice: '552.000.000',
                carSeat: '5 Chỗ',
                carDes: 'Vô cấp CVT',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/1052B1A4AE5C2C5809F65C757841A149.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3B49A305103F09535D8827E3F32A849A.png',
                alt: '',
                herf: '/raize'
            },
        ]
    },

    {
        idType: 'vehicle-0004',
        vehicleOfType: [
            {
                engVer: 'Động cơ 3.5',
                engNumber: 'Dung tích 3.456 cc',
                carName: 'Alphard',
                carPrice: '4.370.000.000',
                carSeat: '7 Chỗ',
                carDes: 'Hộp số tự động 8 cấp',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/D4330983565FD6AADDEFC71BDF72B635.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B99E0C5E4BD43080385C56BDAB62BF62.png',
                alt: 'Alphard',
                herf: '/alphard-luxury'
            },
            {
                engVer: 'Động cơ 2.0',
                engNumber: 'Dung tích 1.998 cc',
                carName: 'Innova',
                carPrice: '755.000.000',
                carSeat: '8 Chỗ',
                carDes: 'Số tay 5 cấp',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B1C4482978DB18DA2DB5DB1DA1DFF01F.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/CDFDF5294CC6837FAC8ACC8746810C8E.png',
                alt: 'Innova',
                herf: '/innova-2-0e'
            },
            {
                engVer: 'Động cơ 1.5',
                engNumber: 'Dung tích 1.496 ',
                carName: 'Avanza Premio',
                carPrice: '558.000.000',
                carSeat: '7 Chỗ',
                carDes: 'CVT',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/4C0BCFB9EA9EF8A9D28FCFDA19D83303.jpg',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/16722B0242352FEBA87ADA38835A52D2.jpg',
                alt: 'Avanza Premio',
                herf: '/avanza-premio-mt'
            },
            {
                engVer: 'Động cơ 1.5',
                engNumber: 'Dung tích 1.496 ',
                carName: 'Veloz Cross',
                carPrice: '658.000.000',
                carSeat: '7 Chỗ',
                carDes: 'CVT',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/F791B1892243AF2F56533CE0FDB7FFD5.png',
                alt: 'Veloz Cross',
                herf: '/veloz-cross-cvt'
            },
        ]
    },

    {
        idType: 'vehicle-0005',
        vehicleOfType: [
            {
                engVer: 'Động cơ 2.4',
                engNumber: 'Dung tích 2.393 cc',
                carName: 'Hilux',
                carPrice: '852.000.000',
                carSeat: '5 Chỗ',
                carDes: 'Số tay 6 cấp',
                carImg: 'https://ssa-api.toyotavn.com.vn/Resources/Images/3627E631D614001F4AE35DBCC90CB42B.png',
                carImgHover: 'https://ssa-api.toyotavn.com.vn/Resources/Images/B3E1E057D1B5A2BAE5AA6B8FB5465A44.png',
                herf: '/hilux-2-4l-4x2-at'
            }
        ]
    },

]

export const getMaxLength = (type) => {
    return vehicles.find(vehicle => {
        return vehicle.idType === type
    }).vehicleOfType.length
}

export const getVehicles = (type, from, to) => {
    return vehicles.find(vehicle => {
        return vehicle.idType === type
    }).vehicleOfType.slice(from, to);
}

export const getVehicleTypes = () => {
    return vehiclesTypeData;

}