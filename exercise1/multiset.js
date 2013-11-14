/**
 * Created with IntelliJ IDEA.
 * User: xXx
 * Date: 04-11-13
 * Time: 09:48
 * To change this template use File | Settings | File Templates.
 */

function MultiSet() {

    this.map = {};

    this.add = function (item) {
        if (this.contains(item)) this.map[this.calculateUniqueItemHash(item)].value++;
        else this.map[this.calculateUniqueItemHash(item)] = new Entry(item, 1);
    }

    this.remove = function (item) {
        if (!this.contains(item)) return false;
        if (this.map[this.calculateUniqueItemHash(item)].value == 1) delete this.map[this.calculateUniqueItemHash(item)];
        else this.map[this.calculateUniqueItemHash(item)].value--;
        return true;
    }

    this.count = function () {
        var sum = 0;
        for (var item in this.map) sum += this.map[item].value;
        return sum;
    }

    this.contains = function (item) {
        var hash = item.hashCode();
        var hit = this.map[hash];;
        // Take duplicates into account.
        while (hit != undefined) {
            if (item.equals(hit.key)) return true;
            hit = this.map[hash++];
        }
        return false;
    }

    this.toString = function () {
        var result = "[";
        for (var key in this.map) {
            result += "{" + this.map[key].key + "," + this.map[key].value + "},";
        }
        return result.substr(0,result.length-1) + "]";
    }

    this.calculateUniqueItemHash = function (item) {
        var hash = item.hashCode();
        var hit = this.map[hash];
        // Take duplicates into account.
        while (hit != undefined) {
            if (item.equals(hit.key)) return hash;
            hit = this.map[++hash];
        }
        return hash;
    }

    // Entry of the multiset.
    function Entry(k, v) {
        this.key = k;
        this.value = v;
    }

}

String.prototype.hashCode = function(){
    var hash = 0, i, char;
    if (this.length == 0) return hash;
    for (i = 0, l = this.length; i < l; i++) {
        char  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

String.prototype.equals = function(other) {
    return this == other;
}
