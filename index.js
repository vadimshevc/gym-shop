function render() {
    const productStore = localStorageUtil.getProducts();

    headerPage.render(productStore.length);
    productsPage.render();

}

spinnerPage.render();

let CATALOG = [];
//https://api.jsonserve.com/7kiyJI
//server/catalog.json
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

       /* setTimeout(() =>  {
            spinnerPage.handelClear();
            render();
        }, 1000);*/

        spinnerPage.handelClear();
        render();
    })
    .catch(error => {
        errorPage.render();
        spinnerPage.handelClear();
    });

