function 如意九宫格(name, event) {
    //name表示组件在被创建时的名称，event表示组件拥有的事件
    //如果组件有多个事件，可以在后面继续填写这些事件名称
    //例如：function 如意九宫格(name,event1,event2,event3){
    var el = document.getElementById(name);
    var ht = el.getElementsByClassName('header-title')[0];
    var items = el.getElementsByClassName('items')[0];
    //组件内部属性，仅供组件内部使用：
    this.名称 = name;

    //组件命令：
    this.置标题 = function (newTitle) {
        if (newTitle == '') {
            ht.style.display = 'none';
            el.style.borderTop = "0px";
        } else {
            ht.style.display = 'block';
            el.style.borderTop = "1px solid #ddd";
        }
        ht.innerHTML = newTitle;
    }

    //组件命令：
    this.取标题 = function () {
        return ht.innerHTML;
    }

    //组件命令:
    this.添加 = function (logo, 标题) {
        var newItem = document.createElement('div');
        newItem.className = "item";
        newItem.innerHTML = '<img class="logo" src="' + logo + '" alt=""><span class="title">' + 标题 + '</span>';
        items.appendChild(newItem);
        //移除前面第3个的底部边框
        var tmp = document.getElementsByClassName('item');
        //如果是第二个,加右边框
        if (tmp.length % 3 == 2) {
            newItem.style.borderRight = "1px solid #ddd";
        }
        if (tmp.length % 3 == 0) {
            tmp[tmp.length - 2].style.borderRight = '0px';
        }
        if (tmp.length < 3) {
            ht.style.borderBottom = "1px solid #ddd";
        } else {
            ht.style.borderBottom = "0px";
            tmp = tmp[tmp.length - 4];
            tmp.style.borderBottom = "0px";
        }
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
            if (a.className == 'item') {
                console.log(a);
                event(a.getElementsByClassName('title')[0].innerText, a.getElementsByClassName('logo')[0].src);
            }
        }
    }
}