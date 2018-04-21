/**
 * Created by István Szegedi on 2017. 06. 10.
 */

function Products (data) {
    this.products = [];

    for(var i = 0;i < data.length;i++){
        this.products.push(data[i]);
    }
}

Products.prototype.getProductsById = function (id) {
    var self = this;
    for(var i = 0;i < this.products.length;i++){
        if(self.products[i].id === id) {
            return this.products[i];
        }
    }
};

Products.prototype.getProducts = function () {
    return this.products;
};