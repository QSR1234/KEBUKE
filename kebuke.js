const menu = [
    {
        id: 1,
        title: "熟成紅茶",
        category: "紅茶",
        img:"foodimgs/熟成.jpg",
        desc:"熟成紅茶 25/M 30/L",
    },

    {
        id: 2,
        title: "白玉歐蕾",
        category: "歐蕾",
        img:"foodimgs/白玉.jpeg",
        desc:"白玉歐蕾 50/M 60/L",
    },

    {
        id: 3,
        title: "春芽冷露",
        category: "冷露",
        img:"foodimgs/春芽冷露.jpg",
        desc:"春芽冷露 25/M 30/L",
    },

    {
        id: 4,
        title: "熟成冷露",
        category: "冷露",
        img:"foodimgs/熟成冷露.jpg",
        desc:"熟成冷露 25/M 30/L",
    },

    {
        id: 5,
        title: "胭脂多多",
        category: "紅茶",
        img:"foodimgs/胭脂多多.jpg",
        desc:"胭脂多多 40/M 50/L",
    }
];

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll(".flt-btn");

function displayMenuItems(menu) {
    let displayMenu =  menu.map( menuItem =>`   <figure class="menu-item">
    <img class="photo" src=${menuItem.img} width="270" height="440" alt=${menuItem.title} loading="lazy">
    <figcaption>${menuItem.desc}</figcaption>
 </figure>`
 );

    displayMenu = displayMenu.join('');
 sectionCenter.innerHTML = displayMenu;
}

// console.log(displayMenuItems(menu));



window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});


for(let btn of filterBtns){
    btn.addEventListener('click', e => {
        const category = e.currentTarget.dataset.id;
        // console.log(e.currentTarget.dataset.id);
        const menuCategory = menu.filter(menuItem => {
            if(menuItem.category === category)
                return menuItem;
        })
        // console.log(menuCategory);
        
        if(category === "全部")
        displayMenuItems(menu);
        
        else
        displayMenuItems(menuCategory);
                
    })
}

// filterBtns.forEach(function(btn) {
//      btn.addEventListener('click', e =>{
//         e.currentTarget.dataset
//     })
//     }) ;