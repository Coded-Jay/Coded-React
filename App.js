
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Dropdown from './dropsetup';
import MyComponent from './MyComponent';
import Pictoral from './pictoral';
import Monkey from './videos';
import Logo from './logo';



const Creed=()=>{
 
  function clicky(){
   prompt("Enter your Orders Now!");
  }

  const submission=()=>{
    alert("Submitted Successfuly");
  };


  return(
    <>
    <header>
  
      <h1>CRE8TIVE DESIGNS</h1>

    <div className="nav-contents">
<a href="www.google.com">Home</a>
<a href="#">Services</a>
<a href="#">About Us</a>
<a href="#">Insights</a>
<a href="#">Profile</a>
</div>

<div className='drop'>
<Dropdown />
</div>
</header>

<br></br><br></br><br></br><br></br><br></br><br></br>
    
<div className='sign'>
<button href="#">Sign Up</button>

<button href="#">Login</button>
</div>


<button className='headbtn'>
<br></br><br></br>

<h2>CRE8TIVE DESIGNS</h2>

<h5>Redefining Modern Designs Solution...</h5>

<button className='btn11'>Get Started</button>

</button>

<br></br>

<input type="search" className="search" placeholder='Search Cre8tive Designs!'/> <button>Search</button>
<br></br><br></br>

    <p className="para">    
    <h3>Graphic Design Services</h3> 
    Hello my name is <strong>Joe!</strong> I'm a <strong>Developer and a Graphic Designer, also a Realtor.</strong> I'm solving a problem in global marketing by developing strategies in digital marketing automation. Hello my name is Joe! I'm a developer and a graphic designer, also a realtor. Hello my name is Joe! I'm a developer and a graphic designer, also a realtor. I'm solving a problem in global marketing by developing strategies. I'm solving a problem in global marketing by developing strategies.<br></br> <a href="#">Terms of Use & Policy</a> Hello my name is Joe! I'm a developer and a graphic designer, also a realtor.
    <br></br>
    <button>Contact Designer</button>
    </p>


    
    <p className="para1">
    <h3>Web Design Services</h3>
    Text samples like Lorem! my name is Joe! I'm a developer and a graphic designer, also a realtor.I'm solving a problem in global marketing by developing strategies necessary for sales automation. I'm solving a problem in global marketing by developing strategies.  Hello my name is Joe! I'm a developer and a graphic designer, also a realtor. I'm solving a problem in global marketing by developing strategies excellent marketing and targetting the right audience alwaysHello my name is Joe! I'm a developer and a graphic designer,Hello my name is Joe! I'm a developer and a graphic designer, also a realtor. also a realtor.
    <button>Contact Designer</button>
    </p>

 
    <p className="para2">
    <h3>UI/UX Design Services</h3>
    I speak computer languages you know! I'm a developer and a graphic designer, also a realtor.I'm solving a problem in global marketing by developing strategies<br></br> necessary for excellent I'm solving a problem in global<br></br>  marketing by developing strategies.  I'm solving a problem in global marketing by developing strategiesmarketing and targetting the right audience alwaysHello my name is Joe! I'm a developer and a graphic designer, also a realtor.Hello my name is Joe! I'm a developer and a graphic designer, also a realtor.Hello my name is Joe! I'm a developer and a graphic designer, also a realtor.<br></br>
    <button>Contact Designer</button>
    </p>

    <marquee className="marq">Thankyou for visiting our site. See you again Next Time! </marquee>

    <a href="#" className='imago'>
<MyComponent/>
</a>

<div className='creative'>
  <p>
<strong>BIG <div className='colis'>PRODUCT SALE </div> 2024</strong>
<br></br>
Cre8tive Nigeria is the largest online service providers website in Africa. We offer a platform where customers in any part of the world can find solution for their designs project,  and that platform is the Cre8tive Designs website. On the Cre8tiveE mobile app or website, you can contact a designer from the comfort of your home or during work breaks and get everything delivered fast without you having to stress or move an inch. Be it Graphic Designs, website Designs, UI/UX Design, Branding, or your everyday digital needs you can get everything you need Cre8tive website. <br></br>
Have you used the Cre8tive  online website today? Order now on Cre8tive to enjoy a seamless online shopping experience. With fast delivery, free returns, and flexible payment options, you are certain to enjoy the convenience of shopping online.

Order for Original and Quality Services at The Best Rates <button>Contact Designer</button>
  </p>
</div>


    <br></br> <br></br>


    <marquee><div className="box">ORDER FOR OUR SERVICES NOW!</div></marquee>
   
    <h3>Watch Video on Paypal</h3>
    
    <div className='vid'>
    <Monkey/>
    </div>
    <div className='vid2'>
     Paypal Account Opening Expo is our gift for you visiting Cre8tive Website. Please watch the tutorials to guide you on steps to creating a paypal account actively working in Nigeria irrespective of borders barriers just like crypto.
    </div>
    <br></br>
    <br></br>
    <marquee className="marq2">This site was develpoed by Joe Bako aka Codedjay </marquee>
    
      <p className='online'>
      <strong>Buy the <div className='colis'>Latest Smartphones and Electronics</div> From Cre8tive Nigeria</strong> <br></br>
Shopping on Cre8tive guarantees that you get the latest mobile phones, tablets, or phablets before anyone else. Buy trusted Apple iOS iPhones and iPads and quality Android brands like Samsung, Tecno, Xiaomi, Infinix, and many others! Unlock the best functionality of your smartphones when you buy our amazing phone accessories like AirPods, earphones, powerbank, Bluetooth speakers, durable phone cases, and many more! We have an endless supply of Jumia phone accessories from top brands like Oraimo, Edifier, Samsung, Tecno, JBL, etc.

We also have an amazing collection of top computing brands like Hp, Dell, Lenovo, Microsoft, Apple Macbook, and more! You can either buy these computing devices as desktops or laptops depending on your choice. Shop for computing accessories like printers, scanners, computer components, and monitors to enhance your computer or laptop experience. 

Our catalog of electronics offers you the highest quality of products from trusted sellers and brands. You can get the latest smart televisions and home audio devices for your living room. To spice things up, you can get the PlayStation consoles or Xbox consoles especially if you love gaming during your leisure time.
    </p>

      <div className='imago2'> 
    <Pictoral/>
    <div className='dado'>Order Now</div>
    </div>

  <marquee>PLEASE FILL KYC FORM TO VERIFY USER ACCOUNT</marquee>  

<div>
   <div className='fam'>
   <strong>Enjoy Top Deals and Discounts</strong><br></br>
There are limitless offers and deals on the Cre8tive Nigeria online store. Enjoy up to 80% discount on selected items of the day during the flash sales. Get the best prices you can find on the best deals page. 

Enjoy other weekly offers that run all year long, deals that will help you save more and get the most affordable prices no one else can give you.
   </div>
    <button className='bot'>
    <form onSubmit={submission}>
      <h3>PLEASE FILL THE KYC FORM BELOW</h3>
    <input type="text" placeholder="Enter your Fullname" className="fill1"/> <br></br>
    <input type="text" placeholder="Enter your Email" className="fill1"/> <br></br>
    <input type="country" placeholder="Enter your Country of Origin" className="fill1"/> <br></br>
    <input type="tel" placeholder="Telephone number" className="fill1"/> <br></br>
    <input type="date" placeholder="Date of Birth" className="fill1"/> <br></br>
    <input type="number" placeholder="Enter your Promo Code" className="fill1"/> <br></br>
    <strong>Specify your Gender</strong> <br></br>
    <strong>Male</strong><input type='checkbox'></input><strong>Female</strong><input type='checkbox'></input> <strong>Other</strong><input type='checkbox'></input><br></br>
    <input type="file"/> <button>Upload Receipt of Payment</button> <br></br> <br></br>
    <button type="submit" className="fill1">Submit</button>     <br></br> <br></br>
    </form>
    </button>
    </div>

    <marquee>  
    <div className='mylogo'>
      <Logo/>
    </div>
    </marquee>

    
 
<p className='txt'><strong>
Cre8tive Nigeria is the largest online service providers website in Africa. We offer a platform where customers in any part of the world can find and order for all the need for their designs project,  and that platform is the Cre8tive Designs website. On the Cre8tiveE mobile app or website, you can order from the comfort of your home or during work breaks and get everything delivered fast without you having to stress or move an inch. Be it Graphic Designs, website Designs, UI/UX Design, Branding, or your everyday digital needs you can get everything you need on online store.

Have you used the Cre8tive  online website today? Order now on Cre8tive to enjoy a seamless online shopping experience. With fast delivery, free returns, and flexible payment options, you are certain to enjoy the convenience of shopping online.

Order for Original and Quality Items at The Best Prices
Cre8tive  Nigeria prides itself in giving the best prices and the best quality of products you can find anywhere in the country. Our strong partnership with top brands like Oraimo, Samsung, Infinix, Xiaomi, Diageo, Tecno, Adidas, Nike, Defacto, Trendyol, etc. guarantees our customers the cheapest prices on original brand products. Beyond that, customers also have exclusive access to the latest product released by these top brands. If you enjoy exclusivity, the Official Store is the right place for you. On the official stores, you can experience product launches and be among the first set of people in Nigeria to own new products. You can also enjoy huge offers on brand days that come with heavy discounts on various products ranging from mobile phones to drinks, clothing items, sneakers, and many more!

Explore our official stores today to see a wide range of popular brands that sell directly on our platform and get assured of the best prices and quality of products you buy on Cre8tive .

Shop the Latest Fashion and Trendy Outfits Online
Discover an extensive range of fashion items for women, men, and kids on Cre8tive . Our women's fashion collection includes a diverse selection of clothing such as blouses, pants, and jeans. We also offer a variety of gowns in different lengths and materials to suit your individual style. Additionally, browse through our unique fashion accessories like shoes, bags, jewelry, and sunglasses, all at unbeatable prices.

For men's fashion, Cre8tive has an impressive collection of stylish clothing pieces that can make a statement. Find quality men's trousers, shoes, shirts, watches and suits at the most affordable prices. Sports enthusiasts can also get their hands on quality gym wear, trendy sneakers, and other sportswear items.

At Cre8tive, we haven't forgotten about the little ones. Browse through our selection of baby clothes for boys and girls and their accessories. Shop now on Cre8tive  Nigeria and enjoy an incredible online shopping experience.

Be certain that whatever we sell on the Cre8tive website is of good quality. When you shop for your beauty products on Cre8tive  you have successfully avoided getting fake products that can cause unhealthy reactions to your skin or body and without breaking the bank, you can maintain a healthy beauty routine to leave jaws dropping.

Get Your Home Needs on Cre8tive Nigeria
Cre8tive is an online supermarket where you can shop for your daily groceries in Nigeria at prices cheaper than others. Check off your grocery list and stock up your pantry with a variety of items ranging from rice to cooking oils, wines, Snacks, beverages, household cleaning items, and many others. We also have a section for fresh foods and canned foods. Also, Discover our baby shop for all baby essentials from baby food and diapers to toys and educational games. 


Buy the Latest Smartphones and Electronics From Cre8tive Nigeria
Shopping on Cre8tive guarantees that you get the latest mobile phones, tablets, or phablets before anyone else. Buy trusted Apple iOS iPhones and iPads and quality Android brands like Samsung, Tecno, Xiaomi, Infinix, and many others! Unlock the best functionality of your smartphones when you buy our amazing phone accessories like AirPods, earphones, powerbank, Bluetooth speakers, durable phone cases, and many more! We have an endless supply of Jumia phone accessories from top brands like Oraimo, Edifier, Samsung, Tecno, JBL, etc.

We also have an amazing collection of top computing brands like Hp, Dell, Lenovo, Microsoft, Apple Macbook, and more! You can either buy these computing devices as desktops or laptops depending on your choice. Shop for computing accessories like printers, scanners, computer components, and monitors to enhance your computer or laptop experience. 

Our catalog of electronics offers you the highest quality of products from trusted sellers and brands. You can get the latest smart televisions and home audio devices for your living room. To spice things up, you can get the PlayStation consoles or Xbox consoles especially if you love gaming during your leisure time.

Enjoy Top Deals and Discounts when Shopping onvNigeria Online Store
There are limitless offers and deals on the Cre8tive Nigeria online store. Enjoy up to 80% discount on selected items of the day during the flash sales. We also have Half Price Deals where our shoppers buy selected products like mobile phones, laptops, phone accessories, and clothing pieces for half the original price. Get the best prices you can find on the best deals page. 

Enjoy other weekly offers that run all year long, which means that every time you shop on the Cre8tive website, you are sure to enjoy mouth-watering discounts and deals that will help you save more and get the most affordable prices no one else can give you. To know more about these offers and deals, you can subscribe to our push notifications and newsletters, read our blog, and follow us on all our social media accounts.

Experience Fast Delivery and Online Shopping Convenience
Get your cart delivered to you within 24 hrs when you buy items with the Cre8tive Express tag, for selected digital products, you are also assured of free delivery and have your products delivered to you at no extra cost! Also, we have products that you can ship from abroad under the Jumia Global catalog. This means that you can order various items from outside the country and get them delivered to your doorstep without hassles. 
<br></br>
<h6 style={{color:'rgb(0, 90, 105)'}}>
Frequently Asked Questions (FAQs)<br></br>
What Payment Options are Available onCre8tive?<br></br>
You can either pay online or pay on delivery. With out payment solution called Cre8tivePay, you can conveniently pay online or on delivery with your cards (MasterCard, Visa and Verve), bank transfers and USSD. 
<br></br>
Can I Return the Items I Bought From Cre8tive?<br></br>
Yes, you can return items you bought for free and get refunded as soon as possible! We have a refund policy that grants you 7 days to return ALL eligible items bought from the official store and other sellers on Cre8tive Nigeria.

When is the Next Cre8tive Black Friday?<br></br>
Cre8tive  Black Friday happens in November. Cre8tive is the pioneer of Black Friday in Nigeria, so expect us to do it best! It comes with the biggest discount and offers on various categories of products like fashion, phones, computers, home appliances, electronics and many more! We also have various exciting and engaging activities like the treasure hunt and games our customers love to play.
<br></br>
Can I get Free Delivery on All my Orders?<br></br>
Customers in Lagos, Abuja, Ibadan,Warri,Benin, Abeokuta, Akure and Portharcourt enjoy free delivery on items with the free delivery tag. Free delivery does not apply to large items like refrigerators, huge TVs, washing machines and others.
<br></br>
What Is the Cre8tive  Customer Care Line?<br></br>
We have a dedicated team that is always available to make sure your shopping experience onCre8tiveis effortless. Simply dial +2349033008655 to reach out to us for complaints and other inquiries. If you would like to place an order, please call us at 09033008655. You can also chat with us on the Cre8tive app if you find that more convenient. Whatever you do, we are always available to help.
<br></br>
How Can I Become a Seller on Cre8tive?<br></br>
You can partner with Cre8tive as a seller on the website. All you need to do is register and follow the necessary steps. With our large customer base, we can help you reach a wider audience and sell many of your products to our customers
<br></br>
What Other Events are Celebrated in Cre8tive?<br></br>
Aside the Cre8tive White Friday, the Cre8tive's Tech Week is another big event we celebrate in Cre8tive Nigeria. The goal of the Cre8tive Tech Week is to help customers have access to the latest technology at the cheapest prices they can get. It happens in the month of March of every year and lasts at least two weeks. 
<br></br>
Aside these major events, we also have Ramadan sales, Easter sales, Christmas sales and other seasonal celebrations we make sure our customers enjoy on Cre8tive . 
</h6>

<button className='box4'>ORDER NOW FOR EXPERT SERVICES!</button><br></br><br></br></strong>

  <br></br><br></br>
</p>

<footer>
<div className='mail'>
  <input type="text" placeholder='Enter Email to Subscribe'/><button type='submit'>Subscribe</button>
  </div>  
  <div> 
  <br></br>
    <h2>Cre8tive Designs Solution</h2>
    </div>
 
   
<p className='f1'>
<strong><a href="#">SERVICES</a></strong>
<a href="#">+-Graphic Design-+</a>
<a href="#">+-Web Development-+</a>
<a href="#">+-UI/UX Design-+</a>
</p>


<p className='f3'>
<a href="#">Affiliate Link</a><br></br><br></br>
<a href="#">Pay Per Click</a><br></br><br></br>
<a href="#">Redeem promo code</a>
</p>


<p className='f4'>
<a href="#">Listing</a><br></br><br></br>
<a href="#">Careers</a><br></br><br></br>
<a href="#">Giftcard</a>
</p>

<p className='f4'>
<a href="#">Terms</a><br></br><br></br>
<a href="#">Privacy</a><br></br><br></br>
<a href="#">Policy</a>
</p>

<br></br><br></br><br></br><br></br>
<p className='owo'>
<a href="#">Facebook</a>
<a hreffsdhhh="#">Instagram</a>
<a href="#">LinkedIn</a>
<a href="#">Twitter X</a>
</p>

<p className='copy'>Copyright (C) Cre8tive Designs<br></br>All Rights Reserved<br></br>2024</p><br></br>

</footer>

    </>
  );
  ReactDOM.render(<Creed/>, document.getElementById('root'));
};
  export default Creed;
