/*
 final 2018-08-31 
*/

!function(){"use strict";function e(t,d,o){var r=this;r.editProduct={},r.selected=t.selected,r.prod=t.products,r.updateProduct=function(){var e=r.prod.findIndex(function(e){return e.code==r.selected.code});r.selected.dateNew=new Date,o.set("Edited product was saved!","success",{position:"top",duration:"1000"}),r.prod[e]=r.selected,$timeout(function(){return d.setObject("products",t.products)},2e3)}}angular.module("dashboardModule").controller("dashboard.dashboardEditController",e),e.$inject=["dataHolder","$localstorage","ngNotify"]}();