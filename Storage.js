/**
 * Created by István Szegedi on 2017. 05. 16.
 */

function Storage(){
    this.storage = localStorage;
    this.storageName = '';
}

Storage.prototype.initStorage = function(name, obj){
    this.storageName = name;
    if( this.storage.getItem( this.storageName ) == null ) {
        this.storage.setItem( this.storageName, this.toJSONString(obj) );
    }
};

Storage.prototype.set = function(item){
    this.storage.setItem(this.storageName,this.toJSONString(item))
};

Storage.prototype.get = function(){
    var storageItem = this.storage.getItem(this.storageName);
    return this.toJSONObject(storageItem);
};

Storage.prototype.toJSONObject = function(str){
    return JSON.parse( str );
};

Storage.prototype.toJSONString = function(obj){
    return JSON.stringify( obj );
};