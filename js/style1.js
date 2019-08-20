var mobileTemplate = document.querySelector(".mobile-card-template");
var mobileSection = document.querySelector(".mobiles-section");
var ele = document.querySelector(".mobiles-section");
var mob = document.querySelector(".mobil");
var heading = document.querySelector(".mobile-name1");
var page = document.querySelector(".pagenation");
var button = document.querySelector(".button");
var mobiles = {
    iPHONE: [
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
    SAMSUNG: [
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
    ONEPLUS: [
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
    REDMI: [
        {
            name: "Redmi note 7",
            ram: 88,
            price: 12390
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
val.forEach(function (v) {
    var mobileType = v;
    var cln = mobileSection.cloneNode(false);
    cln.classList.remove("mobiles-section");
    var headingNode = heading.cloneNode(true);
    //   var pageNode = page.cloneNode(true);
    headingNode.innerText = mobileType;
    cln.appendChild(headingNode);
    var count = 0;
    mobiles[mobileType].forEach(function (item) {
        count++;
        var mobile = mobileTemplate.cloneNode(true);
        mobile.classList.remove("mobile-card-template");
        mobile.querySelector(".mobile-name").innerText = item["name"];
        mobile.querySelector(".mobile-ram").innerText = item["ram"];
        mobile.querySelector(".mobile-price").innerText = item["price"];
        cln.appendChild(mobile);
    });
    if (count > 6) {
        var pageNode = page.cloneNode(true);
        var c = Math.ceil(count / 6);
        for (i = 1; i <= c; i++) {
            var buttonNode = button.cloneNode(true);
            buttonNode.innerText = i;
            pageNode.appendChild(buttonNode);

        }
        cln.appendChild(pageNode);
    }
    mob.appendChild(cln);
});   