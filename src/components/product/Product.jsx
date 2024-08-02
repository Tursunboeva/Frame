

// // const Product = () =>  {

// //     const products =[{
// //         id:1,
// //         // img:{burger1},
// //         name:' McSpicy Special',
// //         reyting:  '5.0',
// //         delivery: 'Free delivery',
// //         hour: '25-30 min',
// //         older: 'Older Now'
// //     }]

// import React from 'react'
// import './Product.css'


// const Product = ({products}) => {
   

//   return (
//     <section>
//         <div className="container">
//              <div className="menu_wrapper">
//              <div className="menu_title">
//                      <h3>Special Menu for you</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus 
//                         nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>
//                 </div>
//             <div >
//                {
//                  products.map(product=>
//                  <div className='menu_cards'>
//                      <img key={product.id} className='menu_img' src={product.image} alt="" />
//                      <h3 key={product.id} className='menu'>{product.name}</h3>
//                      <strong key={product.id} className='reyting'>{product.reyting}</strong>
//                      <p key={product.id}> {product.delivery} </p>
//                      <p key={product.id}>{product.hour}</p>
//                      <button key={product.id}>{product.older}</button>
//                  </div>
//                  )
//                }
//             </div>
//             </div>  
//         </div>  
//     </section>
//   )
// }

// export default Product