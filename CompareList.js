/**
 * Created by István Szegedi on 2017. 05. 14.
 */

function CompareList(storage, products){
    this.storage = storage;
    this.products = products;
    var compareList = {};
    compareList.list = [];

    this.storage.initStorage('compareList', compareList);
}

CompareList.prototype.add = function(id){
    if(id.length == 0) {
        return false;
    } else {
        var list = this.storage.get();
        list.list.push({
            'id': id
        });
        this.storage.set(list);
    }
};

CompareList.prototype.remove = function(id){
    var list = this.storage.get();
    list.list.splice(id,1);
    this.storage.set(list);
};

CompareList.prototype.getListSize = function () {
    var list = this.storage.get().list;
    return list.length;
};

CompareList.prototype.isInList = function(id){
    var list = this.storage.get().list;
    var returnValue = false;

    for (var i = 0; i < list.length; i++) {
        if(list[i].id === id) {
            returnValue = true;
        }
    }
    return returnValue;
};

CompareList.prototype.getList = function(){
    var listHTML = "";
    var product;
    var list = this.storage.get().list;
    var self = this;

    for (var i = 0; i < list.length; i++) {
        product = self.products.getProductsById(list[i].id);
        listHTML +=
            '<li class="card p-2">' +
                '<div class="row align-items-center">' +
                    '<div class="col"><img src="' + product.image + '" width="80"></div>' +
                    '<div class="col"><div class="ellipsis">' + product.name + '</div></div>' +
                    '<div class="col" data-id="' + i + '">' +
                    '<span class="btn btn-link btn-todo-delete px-2"><i class="fa fa-times fa-2x" aria-hidden="true"></i></span>'  +
                    '</div>' +
                '</div>' +
            '</li>';
    }
    return listHTML;
};