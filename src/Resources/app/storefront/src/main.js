import Myaddtocart from "./plugin/my-cart/my-cart.plugin";

// Register them via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('Myaddtocart', Myaddtocart,'.buy-widget');