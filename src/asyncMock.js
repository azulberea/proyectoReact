const products = [
    {
        id: '1',
        name: 'Pompompurin Baby Plush',
        price: 29,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/products/769134-Zoom.2_600x.jpg?v=1642043024',
        stock: 15,
        description: 'item description'
    },
    {
        id: '2',
        name: 'My Sweet Piano Baby Tee',
        price: 42,
        category: 'indumentaria',
        img: 'https://www.sanrio.com/cdn/shop/files/MSPBABYTEE_600x.png?v=1694101830',
        stock: 15,
        description: 'item description'
    },
    {
        id: '3',
        name: 'My Melody Zipper Pouch',
        price: 18,
        category: 'accesorios',
        img: 'https://www.sanrio.com/cdn/shop/files/4901610621301_400x.jpg?v=1698183811',
        stock: 15,
        description: 'item description'
    },
    {
        id: '4',
        name: 'Badtz-maru Standing Display Plush',
        price: 28,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/files/zz-2304809543_XO_--1_600x.jpg?v=1684287150',
        stock: 15,
        description: 'item description'
    },
    {
        id: '5',
        name: 'Banita Plush',
        price: 30,
        category: 'peluches',
        img: 'https://www.sanrio.com/cdn/shop/products/Untitled-1_8c3aee0f-88bd-4291-b25d-0d6818b74221_600x.png?v=1648050069',
        stock: 15,
        description: 'la verdadera banita'
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
