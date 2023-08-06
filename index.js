function render() {
    const productStore = localStorageUtil.getProducts();

    headerPage.render(productStore.length);
    productsPage.render();

}

let CATALOG = [];
//https://api.jsonserve.com/7kiyJI
//server/catalog.json
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(eror => {
        console.log(eror);
    });