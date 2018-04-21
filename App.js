/**
 * Created by István Szegedi on 2017. 06. 13.
 */

var pager, products, productsList, compareList;
var storage = new Storage();
var $compareList = $('#compareList');
var maxCompareItems = 4;
var texts = {
    'alreadyInList': 'This product is already in compare list!',
    'maximumAlert': 'You can compare maximum ' + maxCompareItems + ' products!'
}

$.getJSON('products.json', function(data){
    products = new Products(data);
    pager = new Pager(products.getProducts());
    productsList = new ProductsList(pager);
    compareList = new CompareList(storage, products);
    $compareList.html(compareList.getList());
});

$compareList.on('click', '.btn-todo-delete', function(){
    compareList.remove($(this).parent().data('id'));
    $compareList.html(compareList.getList());
});

$('#productsList').on('click', '.btn-compare', function(e){
    e.preventDefault();
    if(compareList.getListSize() < maxCompareItems && !compareList.isInList($(this).data('id'))){
        compareList.add($(this).data('id'));
        $compareList.html(compareList.getList());
    } else {
        if(compareList.isInList($(this).data('id'))) {
            alert(texts.alreadyInList);
        } else {
            alert(texts.maximumAlert);
        }
    }
});