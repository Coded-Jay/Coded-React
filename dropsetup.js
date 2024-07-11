import React, {useState} from "react";
import './drop.css';

const Dropdown=()=>{
    const[selectedValue, setSelectedValue] = useState("");
    const handleChange=(event)=>{
        setSelectedValue(event.target.value);
    };

return (
    <div>
    <label htmlFor="dropdown"></label>
<select id="dropdown" value={selectedValue} onChange={handleChange}>
    <option value="">GO MENU</option>
    <option value="home">Home</option>
    <option value="#">Our Services</option>
    <option value="our Insights">Our Insights</option>
    <option value="www.google.com">Customer Services</option>
    <option value="Offers & Services">"Offers & Services</option>
    <option value="Tour Services">Terms & Services</option>
    <option value="our Services">Our Policy Services</option>
    <option value="our Services">Web developer Services</option>
    <option value="our Services">Visit Our Services</option>
    <option value="our Services">Insights on Our Services</option>    
    <option value="our Services">Discounts and offers</option>
    <option value="our Services">Exclusive Services</option>
    <option value="our Services">New updates Services</option>
    <option value="our Services">Graphic Designer Services</option>
    <option value="our Services">Branding Services</option>
    <option value="our Services">Promo Services</option>
    <option value="our Services">Redeem Services</option>
    <option value="our Services">Copyright</option>
</select>
</div>
);
};

export default Dropdown;