function sendRequest(name, phone, {street, house, entrance, floor, flat}, goods, sum) {
    let data = {
        client: name + " " + phone,
        order: {
            address: "ул. " + street + ", дом " + house + ", " + entrance + " подъезд, " + floor + " этаж" + ", кв " + flat,
            sum: sum
        },
        goods: []
    }

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i++) {
    data.goods.push({title:goods[i].title, count: goods[i].count});
    }

    let jsonData = JSON.stringify({data});
    
    return jsonData
}