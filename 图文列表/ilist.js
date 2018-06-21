function 如意图文列表(name, event) {
    var el = document.getElementById(name);
    var ht = el.getElementsByClassName('header-title')[0];
    var items = el;
    //组件内部属性，仅供组件内部使用：
    this.名称 = name;

    //组件命令:
    this.添加 = function (图片, 标题, 左上, 右上) {
        var newItem = document.createElement('div');
        newItem.className = "item";
        newItem.innerHTML = '<img src="' + 图片 + '" class="item-bg">' +
            (左上 != undefined && 左上 != '' ? '<div class="left-top f"><div class="t">' + 左上 + '</div></div>' : '') +
            '<div class="right-top f">' + (右上 != undefined && 右上 != '' ? 右上 : '') + '</div><div class="item-title f"><p class="li-title">' + 标题 + '</p></div>';
        items.appendChild(newItem);
    }

    //组件命令:
    this.清空 = function () {
        while (items.hasChildNodes()) {
            items.removeChild(items.firstChild);
        }
    }

    //组件命令:
    this.背景色 = function (color) {
        el.style.background = color;
    }

    //组件命令:
    this.删除 = function (index) {
        var item = items.getElementsByClassName('item');
        items.removeChild(item[index]);
    }

    //组件命令:
    this.取项目数 = function (index) {
        var item = items.getElementsByClassName('item');
        return item.length;
    }

    //组件命令：
    this.置可视 = function (value) {
        if (value == true) {
            var div = document.getElementById(this.名称).parentNode;
            div.style.display = ""; //显示，也可以设置为block	                
        } else {
            var div = document.getElementById(this.名称).parentNode;
            div.style.display = "none"; //不占位隐藏               
        }
        document.getElementById().getAttribute
    }

    //组件命令：
    this.置可视2 = function (value) {
        if (value == true) {
            var div = document.getElementById(this.名称).parentNode;
            div.style.visibility = "visible"; //显示	                
        } else {
            var div = document.getElementById(this.名称).parentNode;
            div.style.visibility = "hidden"; //占位隐藏               
        }
    }

    this.取标题 = function (index) {
        return index.getElementsByClassName('li-title')[0].innerText;
    }

    this.置标题 = function (index, str) {
        index.getElementsByClassName('li-title')[0].innerText = str;
    }

    this.取图片 = function (index) {
        return index.getElementsByClassName('item-bg')[0].getAttribute('src');
    }

    this.置图片 = function (index, img) {
        return index.getElementsByClassName('item-bg')[0].setAttribute('src', img);
    }

    //组件事件
    if (event != null) {
        el.addEventListener("tap", function (a) {
            ev(a);
        });
        el.addEventListener("click", function (a) {
            ev(a);
        });

        function ev(a) {
            a = a.target;
            if (a.className != 'item') {
                a = a.parentNode;
            }
            if (a.className != 'item') {
                a = a.parentNode;
            }
            if (a.className == 'item') {
                event(a);
            }
        }
    }
}