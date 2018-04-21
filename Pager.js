/**
 * Created by István Szegedi on 2017. 05. 04.
 */

function Pager (list) {
    this.list = list;
    this.itemsPerPage = 4;
    this.items = list.length;
    this.currentPage = 1;

    this.next = function next (){
        if (this.currentPage < this.numberOfPages()) {
            this.currentPage++;
        }
        return this.getPage(this.currentPage);
    };

    this.prev = function prev (){
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        return this.getPage(this.currentPage);
    };

    this.setCurrentPage = function setCurrentPage (pageNumber) {
        this.currentPage = pageNumber;
    };

    this.getCurrentPage = function getCurrentPage () {
        return this.currentPage;
    };

    this.current = function current (){
        return this.getPage(this.currentPage);
    };

    this.numberOfPages = function numberOfPages (){
        return Math.ceil(this.items / this.itemsPerPage);
    };

    this.getPage = function getPage (pageNumber){
        let currentItems = [];
        for (var i = (pageNumber-1) * this.itemsPerPage; i < (pageNumber * this.itemsPerPage); i++) {
            if(this.list[i]) {
              currentItems.push(this.list[i]);
            }
        }
        return currentItems;
    };
};