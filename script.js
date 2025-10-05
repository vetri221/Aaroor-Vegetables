const vegetables = [
  {en:"Tomato", ta:"தக்காளி", img:"https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg", enNut:"Vitamin C, good for skin", taNut:"விட்டமின் C நிறைந்தது, தோலுக்கு நல்லது"},
  {en:"Onion", ta:"வெங்காயம்", img:"https://upload.wikimedia.org/wikipedia/commons/0/05/Onion.jpg", enNut:"Antioxidants, boosts immunity", taNut:"ஆன்டி-ஆக்ஸிடென்ட் நிறைந்தது, நோய் எதிர்ப்பு சக்தி அதிகரிக்கும்"},
  {en:"Brinjal", ta:"கத்திரிக்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/4/44/Eggplant.jpg", enNut:"Fiber, aids digestion", taNut:"நார்ச்சத்து நிறைந்தது, ஜீரணத்திற்கு உதவும்"},
  {en:"Carrot", ta:"காரட்", img:"https://upload.wikimedia.org/wikipedia/commons/a/a2/Carrots.jpg", enNut:"Vitamin A, good for eyes", taNut:"விட்டமின் A நிறைந்தது, கண்களுக்கு நல்லது"},
  {en:"Spinach", ta:"பசலைக்கீரை", img:"https://upload.wikimedia.org/wikipedia/commons/0/04/Spinach.JPG", enNut:"Iron, improves blood health", taNut:"இரும்புச் சத்து நிறைந்தது, இரத்தத்திற்கு நல்லது"},
  {en:"Beans", ta:"பீன்ஸ்", img:"https://upload.wikimedia.org/wikipedia/commons/4/40/Green_Beans.jpg", enNut:"Protein, improves strength", taNut:"புரதம் நிறைந்தது, உடலுக்கு பலம் தரும்"},
  {en:"Cabbage", ta:"முட்டைக்கோசு", img:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Cabbage.jpg", enNut:"Vitamin K, good for bones", taNut:"விட்டமின் K நிறைந்தது, எலும்பிற்கு நல்லது"},
  {en:"Cauliflower", ta:"பூக்கோசு", img:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Cauliflower.JPG", enNut:"Vitamin C, improves immunity", taNut:"விட்டமின் C நிறைந்தது, நோய் எதிர்ப்பு சக்தி தரும்"},
  {en:"Potato", ta:"உருளைக்கிழங்கு", img:"https://upload.wikimedia.org/wikipedia/commons/6/60/Potatoes.jpg", enNut:"Carbs, energy source", taNut:"கார்போஹைட்ரேட் நிறைந்தது, ஆற்றல் தரும்"},
  {en:"Sweet Potato", ta:"சர்க்கரைவள்ளிக் கிழங்கு", img:"https://upload.wikimedia.org/wikipedia/commons/0/01/Sweet_potato.jpg", enNut:"Fiber, energy", taNut:"நார்ச்சத்து நிறைந்தது, ஆற்றல் தரும்"},
  {en:"Pumpkin", ta:"பரங்கிக்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Pumpkin.jpg", enNut:"Vitamin A, good for eyes", taNut:"விட்டமின் A நிறைந்தது, கண்களுக்கு நல்லது"},
  {en:"Bottle Gourd", ta:"சுரைக்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/3/36/Bottle_Gourd.jpg", enNut:"Helps digestion", taNut:"ஜீரணத்திற்கு உதவும்"},
  {en:"Bitter Gourd", ta:"பாகற்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/6/64/Bitter_Gourd.jpg", enNut:"Controls blood sugar", taNut:"இரத்த சர்க்கரை கட்டுப்படுத்தும்"},
  {en:"Drumstick", ta:"முருங்கைக்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/7/70/Drumstick_vegetable.jpg", enNut:"Calcium, good for bones", taNut:"கால்சியம் நிறைந்தது, எலும்பிற்கு நல்லது"},
  {en:"Radish", ta:"மூலங்கி", img:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Radish.jpg", enNut:"Good for digestion", taNut:"ஜீரணத்திற்கு நல்லது"},
  {en:"Lady’s Finger", ta:"வெண்டைக்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/6/69/Ladies_finger.jpg", enNut:"Fiber, good for heart", taNut:"நார்ச்சத்து நிறைந்தது, இதயத்திற்கு நல்லது"},
  {en:"Ridge Gourd", ta:"பீர்க்கங்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Ridge_gourd.jpg", enNut:"Helps digestion", taNut:"ஜீரணத்திற்கு உதவும்"},
  {en:"Snake Gourd", ta:"புடலங்காய்", img:"https://upload.wikimedia.org/wikipedia/commons/6/61/Snake_Gourd.jpg", enNut:"Cools body", taNut:"உடல் சூடு குறைக்கும்"},
  {en:"Beetroot", ta:"பீட்ரூட்", img:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Beetroot.jpg", enNut:"Iron, good for blood", taNut:"இரும்புச் சத்து நிறைந்தது, இரத்தத்திற்கு நல்லது"},
  {en:"Green Peas", ta:"பட்டாணி", img:"https://upload.wikimedia.org/wikipedia/commons/1/19/Greenpeas.jpg", enNut:"Protein, energy", taNut:"புரதம் நிறைந்தது, ஆற்றல் தரும்"},
  {en:"Capsicum", ta:"குடைமிளகாய்", img:"https://upload.wikimedia.org/wikipedia/commons/2/21/Capsicum.jpg", enNut:"Vitamin C, immunity", taNut:"விட்டமின் C நிறைந்தது, நோய் எதிர்ப்பு சக்தி தரும்"},
  {en:"Chilli", ta:"மிளகாய்", img:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Green_Chilli.jpg", enNut:"Vitamin C, boosts metabolism", taNut:"விட்டமின் C நிறைந்தது, உடல் சூட்டை அதிகரிக்கும்"},
  {en:"Garlic", ta:"பூண்டு", img:"https://upload.wikimedia.org/wikipedia/commons/8/84/Garlic.jpg", enNut:"Improves immunity", taNut:"நோய் எதிர்ப்பு சக்தி அதிகரிக்கும்"},
  {en:"Ginger", ta:"இஞ்சி", img:"https://upload.wikimedia.org/wikipedia/commons/2/25/Ginger.jpg", enNut:"Good for digestion", taNut:"ஜீரணத்திற்கு நல்லது"},
  {en:"Coriander", ta:"கொத்தமல்லி", img:"https://upload.wikimedia.org/wikipedia/commons/a/a4/Coriander.jpg", enNut:"Vitamins, good for health", taNut:"விட்டமின் நிறைந்தது, உடலுக்கு நல்லது"}
];

const shops = [
  {name:"Anna Vegetable Store", address:"Market Road, Thiruvarur"},
  {name:"Murugan Veg Market", address:"Gandhi Nagar, Thiruvarur"},
  {name:"Raja Fresh Vegetables", address:"Bus Stand Road, Thiruvarur"},
  {name:"Meenakshi Veg Shop", address:"Hospital Road, Thiruvarur"},
  {name:"Lakshmi Veg Mart", address:"Near Railway Station, Thiruvarur"},
  {name:"Vasanth Vegetables", address:"College Road, Thiruvarur"},
  {name:"Priya Fresh Mart", address:"Court Street, Thiruvarur"},
  {name:"Kumar Veg Center", address:"East Street, Thiruvarur"},
  {name:"Selvi Vegetables", address:"South Main Road, Thiruvarur"},
  {name:"Arul Veg Shop", address:"Muthupettai Road, Thiruvarur"},
  {name:"Ram Veg Mart", address:"Near New Bus Stand, Thiruvarur"},
  {name:"Devi Vegetable Store", address:"Medical College Road, Thiruvarur"},
  {name:"Sanjay Fresh Market", address:"Raja Nagar, Thiruvarur"},
  {name:"Karthik Veg Center", address:"Mannargudi Road, Thiruvarur"},
  {name:"Sri Veg Point", address:"North Street, Thiruvarur"},
  {name:"Balaji Fresh Shop", address:"Collector Office Road, Thiruvarur"},
  {name:"Valli Vegetables", address:"Kumbakonam Road, Thiruvarur"},
  {name:"Rani Veg Shop", address:"Near Temple, Thiruvarur"},
  {name:"Gowri Veg Market", address:"Big Bazaar Street, Thiruvarur"},
  {name:"Sathya Veg Corner", address:"Station Road, Thiruvarur"}
];

function randomPrice() {
  return Math.floor(Math.random() * 40) + 20;
}

function renderShops(filter="") {
  const container = document.getElementById("shops-container");
  container.innerHTML = "";
  shops.forEach(shop => {
    if(filter && !shop.name.toLowerCase().includes(filter) && !shop.address.toLowerCase().includes(filter)){
      let vegMatch = vegetables.some(v => v.en.toLowerCase().includes(filter) || v.ta.includes(filter));
      if(!vegMatch) return;
    }
    let html = `
      <section class="shop">
        <h2>🏪 ${shop.name}</h2>
        <p>📍 Address: ${shop.address}</p>
        <div class="table-container">
          <table>
            <tr>
              <th>Image</th>
              <th>Vegetable (English)</th>
              <th>காய்கறி (Tamil)</th>
              <th>Price (₹ / Kg)</th>
              <th>Nutrition (English)</th>
              <th>உணவு மதிப்பு (Tamil)</th>
            </tr>`;
    vegetables.forEach(v => {
      if(filter && !(v.en.toLowerCase().includes(filter) || v.ta.includes(filter) || shop.name.toLowerCase().includes(filter))) return;
      html += `
            <tr>
              <td><img src="${v.img}" alt="${v.en}"></td>
              <td>${v.en}</td>
              <td>${v.ta}</td>
              <td>₹${randomPrice()}</td>
              <td>${v.enNut}</td>
              <td>${v.taNut}</td>
            </tr>`;
    });
    html += `</table></div></section>`;
    container.innerHTML += html;
  });
}

renderShops();

document.getElementById("searchBar").addEventListener("input", e => {
  let val = e.target.value.toLowerCase();
  renderShops(val);
});