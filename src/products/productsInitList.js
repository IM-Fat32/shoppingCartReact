//Productslist, poniewaz nie mam backednu ani api 

import batmanTshirt from "../images/batman_tshirt.jpg";
import blackTshirt from "../images/black_tshirt.jpg";
import pinkTshirt from "../images/black_tshirt.jpg";
import jacket from "../images/jacket.jpg";
import jeans from "../images/jeans.jpg";
import kidHoodie from "../images/kid_hoodie.jpg";
import redHoodie from "../images/red_hoodie.jpg";
import yellowHoodie from "../images/yellow_hoddie.jpg";


const productsInitList = [
  {nameOfProduct: "Koszulka Batman", price : 60, id: 101, magazine: 10 , image: batmanTshirt},
  {nameOfProduct: "Koszulka Czarna", price : 30, id: 103, magazine: 5 , image: blackTshirt},
  {nameOfProduct: "Koszulka Rożowa", price : 30, id: 105, magazine: 15 , image: pinkTshirt}, 
  {nameOfProduct: "Kurtka przejściowa", price : 120, id: 107, magazine: 5 , image: jacket}, 
  {nameOfProduct: "Spodnie jeansowe", price : 100, id: 109, magazine: 5 , image: jeans}, 
  {nameOfProduct: "Bluza dziecięca", price : 80, id: 110, magazine: 5 , image: kidHoodie}, 
  {nameOfProduct: "Bluza czerwona", price : 200, id: 112, magazine: 15 , image: redHoodie}, 
  {nameOfProduct: "Bluza żółta", price : 210, id: 114, magazine: 225 , image: yellowHoodie}, 
];

export default productsInitList;
