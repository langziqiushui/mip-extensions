/**
 * @file mip-yxsoft-stats 组件
 * @author
 */

define(function (require) {

    var customElement = require('customElement').create();

    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.build = function () {
        var $ = require('jquery');

        var element = this.element;
        var op = element.getAttribute('op');
        var id = element.getAttribute('id');
        var modelid = element.getAttribute('modelid');
        var catid = element.getAttribute('catid');
        var url;
        if (op === 'count' && parseInt(id, 10).toString().length === id.length
            && parseInt(modelid, 10).toString().length === modelid.length) {
            url = 'https://api.05273.com/?op=count&id=' + parseInt(id, 10) + '&modelid=' + parseInt(modelid, 10);
            $.getScript(url);
        }
        else if (op === 'stats' && parseInt(catid, 10).toString().length === catid.length) {
            url = 'https://api.05273.com/?op=stats&catid=' + parseInt(catid, 10) + '&edi=mobile';
            $.getScript(url);
        }
        console.log(url);
    };

    return customElement;
});
