define([
    './radioOption'
], function(RadioOption) {

    var RadioCons = Backbone.View.extend({

        initialize: function(settings) {
            _.bindAll(this, 'onStartInteraction', 'onButtonClick', 'onListBlur', 'onKeyDown');
            // this.settings = _.defaults(settings, this.getDefaults());
            // this.placeholder = null;
             this.options = [];
             this.setUpElements();
            this.setUpItems();
            // this.select(this.settings.value);
            // this.addEventListeners();
            // this.toggleOpen(false);
            // this.settings.load.call(this, this);
            // this.trigger('load', this);
        },

        getDefaults: function() {
            // return {
            //     load: RadioCons.defaults.load,
            //     openList: RadioCons.defaults.openList,
            //     closeList: RadioCons.defaults.closeList,
            //     scrollToItem: RadioCons.defaults.scrollToItem
            // };
        },

        setUpElements: function() {
            this.$radios = this.$('.option');
            // this.$button = this.$('button');
            // this.$inner = this.$button.find('.dropdown__inner');
             this.$input = this.$el;
             console.log("THISINPUT", this.$input)
        },

        setUpItems: function() {
            var $options = this.$('.option');
            $options.each(function(index, el) {
                var option = new RadioOption({
                    parent: this,
                    el: el
                });
                // if (option.isPlaceholder()) {
                //     this.placeholder = option;
                //     return;
                // }
                this.options.push(option);
                console.log("OPTIONS in radiocons", this.options)
            }.bind(this));
        },


        onOptionSelected: function(itemIndex, optionIndex) {
            console.log("onOPTIONSELECTED fired on set!!!!");
            //if (this.model.get('_isInteractionComplete')) return;
            // var $container = dropdown.$el.parents('.matching-select-container');
            // $container.removeClass('error');
            //var itemIndex = dropdown.$el.parents('.matching-item').index();
            //if (dropdown.isEmpty()) return;
            //console.log("dropdown val", dropdown.val());
            //var optionIndex = parseInt(dropdown.val());
            this.model.setOptionSelected(itemIndex, optionIndex, true);
        },


        addEventListeners: function() {
            this.$radios.on({
                //'mousedown touchstart': this.onStartInteraction,
                click: this.onButtonClick
            });
            //this.$list.on('blur', this.onListBlur);
            //$(document).on('keydown', this.onKeyDown);
        },

        onStartInteraction: function() {
            // this.wasOpen = this.isOpen();
        },

        deselectAll: function() {
            // this.placeholder.deselect();
             this.options.forEach(function(option) {
                 option.deselect();
             });
        },

        passup: function(){
        //    var parent = this.settings.parent;
        //    console.log("PARENTTTTT", parent);
        },

        onButtonClick: function(event) {
            if (this.wasOpen || this.isOpen()) {
                // // click toggle list:
                // // if the list is open and the button is clicked
                // // the blur event will fire first closing the list.
                // // this code is to prevent the list from reopening
                // // in that situation
                // this.wasOpen = false;
                // return;
            }
            console.log("ONBTNCLICK", event.target, "this", this);
            // this.toggleOpen();
            // var option = this.getFirstSelectedItem() || this.placeholder;
            // if (!option) return;
            // option.reselect();
            // option.scrollTo();
            // this.$list.focus();
        },

        isOpen: function() {
            // return !this.$list.hasClass('hidden');
        },

        toggleOpen: function(open) {
            // if (open === undefined) open = !this.isOpen();
            // if (open) clearTimeout(this.blurTimeout);
            // this.$button.attr('aria-expanded', open ? 'true' : 'false');
            // var name = open ? 'openList' : 'closeList';
            // this.settings[name].call(this, this);
            // this.trigger(name, this);
        },

        onListBlur: function(event) {
            // IE11: Allow option click handler to execute before blur and close list
            // var handleBlur = function() {
            //     this.toggleOpen(false);
            //     this.removeActiveDescendantId();
            // }.bind(this);
            // this.blurTimeout = setTimeout(handleBlur, 100);
        },

        onKeyDown: function(event) {
            // if (!this.isOpen()) return;
            // var option = this.getFirstSelectedItem() || this.placeholder;
            // switch (event.keyCode) {
            //     case 38: 
            //         event.preventDefault();
            //         option = option.getPrevious() || option.getLast();
            //         break;
            //     case 40: 
            //         event.preventDefault();
            //         option = option.getNext() || option.getFirst();
            //         break;
            //     case 13: 
            //     case 32: 
            //     case 27: 
            //         event.preventDefault();
            //         this.$button.focus();
            //         return;
            //     default:
            //         return;
            // }
            // option.select().scrollTo();
        },

        getFirstSelectedItem: function() {
            // return _.find(this.options, function(option) {
            //     return option.isSelected();
            // });
        },

        setActiveDescendantId: function(id) {
            // this.$list.attr('aria-activedescendant', id);
        },

        removeActiveDescendantId: function() {
            // this.$list.removeAttr('aria-activedescendant');
        },

        select: function(value) {
            console.log(b= this)
            value = String(value);
            var option = _.find(this.options, function(option) {
                return option.getValue() === value;
            });
            if (option) {
                option.select();
                return;
            }
            // this.placeholder.select();
        },

        toggleDisabled: function(value) {
            // if (value === undefined) {
            //     value = !this.$input.attr('disabled');
            // }
            // if (value === false) {
            //     this.$input.removeAttr('disabled');
            //     this.$button.removeAttr('disabled');
            //     this.$el.removeAttr('disabled');
            //     return;
            // }
            // this.$input.attr('disabled', '');
            // this.$button.attr('disabled', '');
            // this.$el.attr('disabled', '');
        },

        isEmpty: function() {
            return !this.getFirstSelectedItem();
        },

        val: function() {
            return this.$input.val();
        },

        destroy: function() {
            // this.removeEventListeners();
            // this.$el.remove();
            // delete this.options;
            // delete this.$input;
            // delete this.$inner;
            // delete this.$button;
            // delete this.$list;
            // delete this.$el;
        },

        removeEventListeners: function() {
            // this.$button.off({
            //     'mousedown touchstart': this.onStartInteraction,
            //     click: this.onButtonClick
            // });
            // this.$list.off('blur', this.onListBlur);
            // $(document).off('keydown', this.onKeyDown);
        }

    }, {

        defaults: {

            load: function() {},

            openList: function() {
                // this.$list
                //     .css({
                //         top: '',
                //         left: this.$button[0].offsetLeft,
                //         width: this.$button.width()
                //     })
                //     .addClass('sizing')
                //     .removeClass('hidden');

                // var offset = this.$list[0].getBoundingClientRect();
                // var height = this.$list.height();
                // var windowHeight = $(window).height();
                // var isOffscreen = (offset.top + height > windowHeight);

                // this.$list
                //     .css('top', isOffscreen ? -height : '')
                //     .removeClass('sizing')
                //     .focus();

            },

            closeList: function() {
                // this.$list
                //     .removeClass('sizing')
                //     .addClass('hidden')
                //     .css('top', '');
            },

            scrollToItem: function(option) {
                // var height = this.$list[0].clientHeight;
                // var pos = option.$el[0].offsetTop-(height/2);
                // this.$list[0].scrollTop = pos;
            }

        }

    });

    return RadioCons;

});
