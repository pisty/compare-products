/**
 * Created by István Szegedi on 2017. 06. 10.
 */

function ProductsList (pager) {
    this.pager = pager;
    this.$pagination = $('.pagination');
    this.$productsList = $('#productsList');

    var self = this;

    self.setPagination();

    this.$pagination.on('click', '.page-link-prev', function(){
        self.pager.prev();
        self.update();
    });

    this.$pagination.on('click', '.page-link-next', function(){
        self.pager.next();
        self.update();
    });

    this.$pagination.on('click', '.page-link-number', function(){
        self.pager.setCurrentPage(parseInt($(this).text()));
        self.update();
    });

    self.update();
}

ProductsList.prototype.update = function(){
    this.setList();
    this.setActivePage();
};

ProductsList.prototype.setPagination = function(){
    var paginationHTML = '<li class="page-item"><a class="page-link page-link-prev" href="#">Previous</a></li>';
    for (var i = 1; i <= this.pager.numberOfPages();i++) {
        paginationHTML += '<li class="page-item"><a class="page-link page-link-number" href="#">' + i + '</a></li>';
    }
    paginationHTML += '<li class="page-item"><a class="page-link page-link-next" href="#">Next</a></li>';
    this.$pagination.html(paginationHTML);
};

ProductsList.prototype.setActivePage = function(){
    var self = this;
    $('.page-item').removeClass('active');
    $.each($('.page-link-number'), function(i){
        if (self.pager.getCurrentPage() === i+1) {
            $(this).parent().addClass('active');
        }
    });
};

ProductsList.prototype.setList = function(){
    var actPage = this.pager.current();
    this.$productsList.empty();
    for (var i = 0; i < actPage.length; i++) {
        this.$productsList.append(
            '<div class="card">' +
            '<img class="card-img-top" width="250" src="' + actPage[i].image + '" alt="Card image cap">' +
            '<div class="card-block">' +
            '<h5 class="card-title">' + actPage[i].name + '</h5>' +
            '</div>' +
            '<div class="card-block">' +
            '<button class="btn btn-primary btn-compare" data-id="' + actPage[i].id + '"><i class="fa fa-retweet" aria-hidden="true"></i> Compare</button>' +
            '</div>' +
            '<div class="card-footer text-muted">' + actPage[i].price + '</div>'
        );
    }
};