/*
 final 2018-08-31 
*/

!function(){"use strict";function e(r,t,o,d,n){var c=this;c.selected={},c.selectProduct=function(e){c.selected=e},c.propertyName="price",c.reverse=!1,c.prod=o.products,c.currentPage=0,c.pageSize=10,c.liked=!0,c.numberOfPages=function(){return Math.ceil(c.prod.length/c.pageSize)},c.deleteProduct=function(){var e=c.prod.findIndex(function(e){return e.code==c.selected.code});c.prod.splice(e,1),n.set("The product was deleted!","success"),t(function(){d.setObject("products",o.products)},1e3)},c.sortBy=function(e){c.reverse=c.propertyName===e&&!c.reverse,c.propertyName=e},c.getSortClass=function(e){return c.reverse&&c.propertyName===e?"arrow-down":"arrow-up"},c.editProd=function(e){o.selected=e,r.go("edit")},c.viewProd=function(e){o.selected=e,r.go("view")}}angular.module("dashboardModule").controller("dashboard.dashboardMainController",e),e.$inject=["$state","$timeout","dataHolder","$localstorage","ngNotify"]}();