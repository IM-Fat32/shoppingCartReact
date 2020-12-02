//Productslist, poniewaz nie mam backednu ani api 

import Huawei_P30_Pro_128GB_Opal1 from "./productImages/Huawei_P30_Pro_128GB_Opal1.jpg";
import Huawei_P30_Pro_128GB_Opal2 from "./productImages/Huawei_P30_Pro_128GB_Opal2.jpg";
import Huawei_P30_Pro_128GB_Opal3 from "./productImages/Huawei_P30_Pro_128GB_Opal3.jpg";

import Apple_iPhone_SE_64GB_Black1 from "./productImages/Apple_iPhone_SE_64GB_Black1.jpg";
import Apple_iPhone_SE_64GB_Black2 from "./productImages/Apple_iPhone_SE_64GB_Black2.jpg";
import Apple_iPhone_SE_64GB_Black3 from "./productImages/Apple_iPhone_SE_64GB_Black3.jpg";

import Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri1 from "./productImages/Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri1.jpg";
import Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri2 from "./productImages/Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri2.jpg";
import Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri3 from "./productImages/Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri3.jpg";

import Huawei_Y5_2019_czarny1 from "./productImages/Huawei_Y5_2019_czarny1.jpg";
import Huawei_Y5_2019_czarny2 from "./productImages/Huawei_Y5_2019_czarny2.jpg";
import Huawei_Y5_2019_czarny3 from "./productImages/Huawei_Y5_2019_czarny3.jpg";

import Xiaomi_Redmi_Note_9_128GB_Midnight_Grey1 from "./productImages/Xiaomi_Redmi_Note_9_128GB_Midnight_Grey1.jpg";
import Xiaomi_Redmi_Note_9_128GB_Midnight_Grey2 from "./productImages/Xiaomi_Redmi_Note_9_128GB_Midnight_Grey2.jpg";
import Xiaomi_Redmi_Note_9_128GB_Midnight_Grey3 from "./productImages/Xiaomi_Redmi_Note_9_128GB_Midnight_Grey3.jpg";

import Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey1 from "./productImages/Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey1.jpg";
import Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey2 from "./productImages/Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey2.jpg";
import Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey3 from "./productImages/Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey3.jpg";

import Apple_iPhone_8_64GB_Gold1 from "./productImages/Apple_iPhone_8_64GB_Gold1.jpg";
import Apple_iPhone_8_64GB_Gold2 from "./productImages/Apple_iPhone_8_64GB_Gold2.jpg";
import Apple_iPhone_8_64GB_Gold3 from "./productImages/Apple_iPhone_8_64GB_Gold3.jpg";

//creating images object to current phones
const Huawei_P30_Pro_128GB_Images = {showImage: Huawei_P30_Pro_128GB_Opal1, frontImage:Huawei_P30_Pro_128GB_Opal2,backImage: Huawei_P30_Pro_128GB_Opal3};

const Apple_iPhone_SE_64GB_Black_Images = {showImage: Apple_iPhone_SE_64GB_Black1, frontImage:Apple_iPhone_SE_64GB_Black2,backImage: Apple_iPhone_SE_64GB_Black3};

const Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri_Images = {showImage: Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri1, frontImage:Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri2,backImage: Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri3};

const Huawei_Y5_2019_czarny_Images = {showImage: Huawei_Y5_2019_czarny1, frontImage:Huawei_Y5_2019_czarny2,backImage: Huawei_Y5_2019_czarny3};

const Xiaomi_Redmi_Note_9_128GB_Midnight_Grey_Images = {showImage: Xiaomi_Redmi_Note_9_128GB_Midnight_Grey1, frontImage:Xiaomi_Redmi_Note_9_128GB_Midnight_Grey2,backImage: Xiaomi_Redmi_Note_9_128GB_Midnight_Grey3};

const Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey_Images = {showImage: Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey1, frontImage:Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey2,backImage: Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey3};

const Apple_iPhone_8_64GB_Gold_Images = {showImage: Apple_iPhone_8_64GB_Gold1, frontImage:Apple_iPhone_8_64GB_Gold2,backImage: Apple_iPhone_8_64GB_Gold3};
//creating productList
const productsInitList = [
  {nameOfProduct: "Huawei P30 Pro 128GB Opal", price : 2400, id: 101, magazine: 10 , images: Huawei_P30_Pro_128GB_Images,screen: 6.47, processor: "Kirin 980", memory: 128, system: "Android 9.0 Pie", color: "Opal"},
  {nameOfProduct: "Apple iPhone SE 64GB Black", price : 2080, id: 102, magazine: 10 , images: Apple_iPhone_SE_64GB_Black_Images,screen: 4.7, processor: "Apple A13 Bionic", memory: 64 , system: "iOS 13", color: "Czarny"},
  {nameOfProduct: "Motorola Moto G8 Power 4/64GB Dual SIM Capri Blue", price : 799, id: 103, magazine: 10 , images: Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri_Images,screen: 6.4, processor: "Qualcomm Snapdragon 665", memory: 64 , system: "Android 10", color: "Niebieski"},
  {nameOfProduct: "Huawei Y5 2019 czarny", price : 499, id: 104, magazine: 10 , images: Huawei_Y5_2019_czarny_Images,screen: 5.7, processor: "MediaTek MT6761", memory: 16 , system: "Android 9.0 Pie", color: "Czarny"},
  {nameOfProduct: "Xiaomi Redmi Note 9 4/128GB Midnight Grey", price : 799, id: 105, magazine: 10 , images: Xiaomi_Redmi_Note_9_128GB_Midnight_Grey_Images,screen: 6.53, processor: "MediaTek Helio G85", memory: 128  , system: "Android 10", color: "Szary"},
  {nameOfProduct: "Xiaomi Redmi Note 8 PRO 6/64GB Mineral Grey", price : 1099, id: 106, magazine: 10 , images: Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey_Images,screen: 6.53, processor: "MediaTek Helio G90T", memory: 64  , system: "Android 9.0 Pie", color: "Szary"},
  {nameOfProduct: "Apple iPhone 8 64GB Gold", price : 1899, id: 107, magazine: 10 , images: Apple_iPhone_8_64GB_Gold_Images,screen: 4.7, processor: "Apple A11 Bionic z koprocesorem M11", memory: 64  , system: "ty", color: "Szary"},
  {nameOfProduct: "Huawei P30 Pro 128GB Opal Copy", price : 2400, id: 201, magazine: 10 , images: Huawei_P30_Pro_128GB_Images,screen: 6.47, processor: "Kirin 980", memory: 128, system: "Android 9.0 Pie", color: "Opal"},
  {nameOfProduct: "Apple iPhone SE 64GB Black Copy", price : 2080, id: 202, magazine: 10 , images: Apple_iPhone_SE_64GB_Black_Images,screen: 4.7, processor: "Apple A13 Bionic", memory: 64 , system: "iOS 13", color: "Czarny"},
  {nameOfProduct: "Motorola Moto G8 Power 4/64GB Dual SIM Capri Blue Copy", price : 799, id: 203, magazine: 10 , images: Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri_Images,screen: 6.4, processor: "Qualcomm Snapdragon 665", memory: 64 , system: "Android 10", color: "Niebieski"},
  {nameOfProduct: "Huawei Y5 2019 czarny Copy", price : 499, id: 204, magazine: 10 , images: Huawei_Y5_2019_czarny_Images,screen: 5.7, processor: "MediaTek MT6761", memory: 16 , system: "Android 9.0 Pie", color: "Czarny"},
  {nameOfProduct: "Xiaomi Redmi Note 9 4/128GB Midnight Grey Copy", price : 799, id: 205, magazine: 10 , images: Xiaomi_Redmi_Note_9_128GB_Midnight_Grey_Images,screen: 6.53, processor: "MediaTek Helio G85", memory: 128  , system: "Android 10", color: "Szary"},
  {nameOfProduct: "Xiaomi Redmi Note 8 PRO 6/64GB Mineral Grey Copy", price : 1099, id: 206, magazine: 10 , images: Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey_Images,screen: 6.53, processor: "MediaTek Helio G90T", memory: 64  , system: "Android 9.0 Pie", color: "Szary"},
  {nameOfProduct: "Apple iPhone 8 64GB Gold Copy", price : 1899, id: 207, magazine: 10 , images: Apple_iPhone_8_64GB_Gold_Images,screen: 4.7, processor: "Apple A11 Bionic z koprocesorem M11", memory: 64  , system: "ty", color: "Szary"},
  {nameOfProduct: "Huawei P30 Pro 128GB Opal Copy2", price : 2400, id: 301, magazine: 10 , images: Huawei_P30_Pro_128GB_Images,screen: 6.47, processor: "Kirin 980", memory: 128, system: "Android 9.0 Pie", color: "Opal"},
  {nameOfProduct: "Apple iPhone SE 64GB Black Copy2", price : 2080, id: 302, magazine: 10 , images: Apple_iPhone_SE_64GB_Black_Images,screen: 4.7, processor: "Apple A13 Bionic", memory: 64 , system: "iOS 13", color: "Czarny"},
  {nameOfProduct: "Motorola Moto G8 Power 4/64GB Dual SIM Capri Blue Copy2", price : 799, id: 303, magazine: 10 , images: Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri_Images,screen: 6.4, processor: "Qualcomm Snapdragon 665", memory: 64 , system: "Android 10", color: "Niebieski"},
  {nameOfProduct: "Huawei Y5 2019 czarny Copy2", price : 499, id: 304, magazine: 10 , images: Huawei_Y5_2019_czarny_Images,screen: 5.7, processor: "MediaTek MT6761", memory: 16 , system: "Android 9.0 Pie", color: "Czarny"},
  {nameOfProduct: "Xiaomi Redmi Note 9 4/128GB Midnight Grey Copy2", price : 799, id: 305, magazine: 10 , images: Xiaomi_Redmi_Note_9_128GB_Midnight_Grey_Images,screen: 6.53, processor: "MediaTek Helio G85", memory: 128  , system: "Android 10", color: "Szary"},
  {nameOfProduct: "Xiaomi Redmi Note 8 PRO 6/64GB Mineral Grey Copy2", price : 1099, id: 306, magazine: 10 , images: Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey_Images,screen: 6.53, processor: "MediaTek Helio G90T", memory: 64  , system: "Android 9.0 Pie", color: "Szary"},
  {nameOfProduct: "Apple iPhone 8 64GB Gold Copy2", price : 1899, id: 307, magazine: 10 , images: Apple_iPhone_8_64GB_Gold_Images,screen: 4.7, processor: "Apple A11 Bionic z koprocesorem M11", memory: 64  , system: "ty", color: "Szary"},
];

export default productsInitList;
