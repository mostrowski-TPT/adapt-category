define([
    'core/js/adapt',
    './categoryView',
    './categoryModel'
], function(Adapt, CategoryView, CategoryModel) {
    console.log("this one fires AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    return Adapt.register("category", {
        view: CategoryView,
        model: CategoryModel
    });
});
