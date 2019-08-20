var mobileTemplate = document.querySelector(".mobile-card-template");
var mobileSection = document.querySelector(".mobiles-section");
var mobileSection1 = document.querySelector(".mobiles-section1");
var mobileSection2 = document.querySelector(".mobiles-section2");
var mobileSection3 = document.querySelector(".mobiles-section3");

var mobiles = {
  iphone: [
    {
      name: "iphone X",
      ram: 8,
      price: 66000
    },
    {
      name: "iphone 6s",
      ram: 6,
      price: 30000
    },
    {
      name: "iphone 7",
      ram: 12,
      price: 36900
    },
    {
      name: "iphone xr",
      ram: 8,
      price: 65000
    },
    {
      name: "iphone 8 plus",
      ram: 6,
      price: 58900
    },
    {
      name: "iphone X",
      ram: 8,
      price: 66000
    },
    {
      name: "iphone 6s",
      ram: 6,
      price: 30000
    },
    {
      name: "iphone 7",
      ram: 12,
      price: 36900
    },
    {
      name: "iphone xr",
      ram: 8,
      price: 65000
    },
    {
      name: "iphone 8 plus",
      ram: 6,
      price: 58900
    }
  ],
  samsung: [
    {
      name: "samsung galaxy M20",
      ram: 88,
      price: 12000
    },
    {
      name: "samsung galaxy M30",
      ram: 6,
      price: 17000
    },
    {
      name: "samsung galaxy note 10+",
      ram: 12,
      price: 70000
    },
    {
      name: "samsung galaxy A50",
      ram: 8,
      price: 21250
    },
    {
      name: "samsung galaxy A70",
      ram: 6,
      price: 50000.25
    }
    
  ],
  oneplus: [
    {
      name: "oneplus 5T",
      ram: 8,
      price: 10499
    },
    {
      name: "oneplus 5",
      ram: 6,
      price: 14999
    },
    {
      name: "oneplus 7",
      ram: 12,
      price: 32500
    },
    {
      name: "oneplus 7pro",
      ram: 8,
      price: 48999
    },
    {
      name: "oneplus 6T",
      ram: 6,
      price: 25999
    }
  ],
  Redmi: [
    {
      name: "Redmi note 7",
      ram: 88,
      price:12390
    },
    {
      name: "Redmi note 4",
      ram: 6,
      price: 4390
    },
    {
      name: "Redmi 6",
      ram: 12,
      price: 6999
    },
    {
      name: "Redmi note 5pro",
      ram: 8,
      price: 12999
    },
    {
      name: "Redmi note 5",
      ram: 6,
      price: 9999
    }
  ]
};
var val = (Object.keys(mobiles));
var c = 0;
val.forEach(function (v) {

  c += 1;
  var mobileType = v;
  mobiles[mobileType].forEach(function (item) {
    var mobile = mobileTemplate.cloneNode(true);
    mobile.classList.remove("mobile-card-template");
    mobile.querySelector(".mobile-name").innerText = item["name"];
    mobile.querySelector(".mobile-ram").innerText = item["ram"];
    mobile.querySelector(".mobile-price").innerText = item["price"];
    switch (c) {
      case 1:
        mobileSection.appendChild(mobile);
        break;
      case 2:
        mobileSection1.appendChild(mobile); 
        break;
      case 3:
        mobileSection2.appendChild(mobile);
        break;
      case 4:
        mobileSection3.appendChild(mobile);
        break;
    }
  });
});   