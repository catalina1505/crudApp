/*
 final 2018-08-31 
*/

!function(){"use strict";function t(t,o,e,d){var r=this;r.newProduct={},r.saveProduct=function(){o.products.push(r.newProduct),r.newProduct.code=(Date.now()+Math.random().toString(16).slice(2,5)).slice(7),r.newProduct.date=new Date,d.set("You added a new product!","success"),t(function(){e.setObject("products",o.products)},1e3),r.newProduct={}}}angular.module("dashboardModule").controller("dashboard.dashboardCreateController",t),t.$inject=["$timeout","dataHolder","$localstorage","ngNotify"]}();