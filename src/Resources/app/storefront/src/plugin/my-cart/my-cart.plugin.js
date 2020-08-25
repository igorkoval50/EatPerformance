import Plugin from 'src/plugin-system/plugin.class';

export default class Myaddtocart extends Plugin{
    init() {
        console.log(window.PluginManager.getPluginInstanceFromElement(this.el))
    }


    _openOffCanvasCart(instance, requestUrl, formData) {
        instance.openOffCanvas(requestUrl, formData, () => {
            this.$emitter.publish('openOffCanvasCart',function () {
                console.log('cart opens');
            });

        });
    }
}