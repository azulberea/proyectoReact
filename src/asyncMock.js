const products = [
    {
        id: '1',
        name: 'Pompompurin Baby Plush',
        price: 29,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/products/769134-Zoom.2_600x.jpg?v=1642043024',
        stock: 15,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        id: '2',
        name: 'My Sweet Piano Baby Tee',
        price: 42,
        category: 'indumentaria',
        img: 'https://www.sanrio.com/cdn/shop/files/MSPBABYTEE_600x.png?v=1694101830',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '3',
        name: 'My Melody Zipper Pouch',
        price: 18,
        category: 'accesorios',
        img: 'https://www.sanrio.com/cdn/shop/files/4901610621301_400x.jpg?v=1698183811',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '4',
        name: 'Badtz-maru Standing Display Plush',
        price: 28,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/files/zz-2304809543_XO_--1_600x.jpg?v=1684287150',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '5',
        name: 'Banita Plush',
        price: 30,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/products/Untitled-1_8c3aee0f-88bd-4291-b25d-0d6818b74221_600x.png?v=1648050069',
        stock: 15,
        description: 'la verdadera banita'
    },
    {
        id: '6',
        name: 'Pompompurin x Dumbgood Crop Hoodie',
        price: 50,
        category: 'indumentaria',
        img: 'https://www.sanrio.com/cdn/shop/products/PNHoodie2_600x.png?v=1666743354',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '7',
        name: 'Aggretsuko Sanrio Original Front & Back Tee',
        price: 15,
        category: 'indumentaria',
        img: 'https://www.sanrio.com/cdn/shop/products/278432-Zoom.1_600x.jpg?v=1671652803',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '8',
        name: 'Tuxedosam 10" Plush (Classic Series)',
        price: 32,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/products/618934-Zoom.1_600x.jpg?v=1664384476',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '9',
        name: 'Chococat 19" Plush (Just Lounging Series)',
        price: 64,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/files/899135-Zoom.1_600x.jpg?v=1697843354',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '10',
        name: 'Pretty Guardian Sailor Moon Cosmos Vanity Bag',
        price: 58,
        category: 'accesorios',
        img: 'https://www.sanrio.com/cdn/shop/files/Untitled-8_f42692f1-aadd-4462-9171-03a6755e76dc_600x.png?v=1700014109',
        stock: 15,
        description: 'Lorem ipsum dolor sit amet.'
    }
]

export const getItems = ()=>{
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getItemById = (itemId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id == itemId))
        }, 1000)
    })
}

export const getItemsByCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=>prod.category == categoryId))
        }, 1000)
    })
}
