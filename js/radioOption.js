define(function() {

    var RadioOption = Backbone.View.extend({

        events: {
            'click': 'onClick',
            'click *': 'onClick'
        },

        initialize: function(settings) {
             this.settings = settings;
             console.log("this settings", settings)
            // this.$inner = this.$('input');
        },

        isPlaceholder: function() {
            // return this.$el.is('[hidden]');
            return false
        },

        parent: function() {
            console.log("this settings parent", this.settings.parent);
             return this.settings.parent;
        },

        onClick: function(event) {
            //var parent = this.parent();
            //event.preventDefault();
            this.select(event.target);
            // parent.$button.focus();
            //?
        },

        getValue: function() {
            console.log(a=this);
            // this.$el.checked = true;
            // this.$el.attr( "checked", "true" )
            console.log(this.$el.attr('optionvalue').trim());
            return this.$el.attr('optionvalue').trim();
        },

        select: function(target) {
            if (this.isSelected()) return
            console.log('RADIOPOTION SELECT WORKS target',target)
            
            c=$(target)
            
            var parent = this.parent();
            console.log("PARENT", parent)
            parent.deselectAll();
            parent.setActiveDescendantId(this.el.id);
            this.$el.attr({
                selected: '',
                'aria-selected': 'true'
            });
            this.$el.prop("checked", true);
            
            //parent.$inner.html(this.$el.attr('text'));
            var value = this.getValue();
            console.log("select value", value);
            parent.$input.val(value).trigger('change');
            parent.trigger('changed', parent);
            parent.passup(value);
            console.log("changed parent", parent);

            var itemIndex = parseInt($(parent.el).attr('class').substring('radios.item-'.length));
            console.log("itemindex", itemIndex);
            var optionIndex = parseInt($(this.el).attr('index'));
            console.log("optionidex", optionIndex)
            console.log("thisparent in selectF", parent)
            parent.onOptionSelected(itemIndex, optionIndex)
            
            
            return this;
        },

        deselect: function() {
            this.$el.prop('checked', false); 
            if (!this.isSelected()) return this;
            var parent = this.parent();
            parent.removeActiveDescendantId();
            this.$el.removeAttr('selected');
            this.$el.attr('aria-selected', 'false');
            //parent.$inner.html('');
            parent.$input.val('').trigger('change');
            parent.trigger('change', parent);
            this.$el.prop("checked", false);
            this.$el.removeAttr("checked");
            
            return this;
        },

        reselect: function() {
            // var parent = this.parent();
            // parent.setActiveDescendantId(this.$el[0].id);
            // if (this.isSelected()) return this;
            // this.select();
            // return this;
        },

        isSelected: function() {
            return Boolean(this.$el.attr('selected'));
        },

        getIndex: function() {
            // var parent = this.parent();
            // return _.findIndex(parent.options, function(option) {
            //     return (option === this);
            // }.bind(this));
        },

        getNext: function() {
            // var parent = this.parent();
            // return parent.options[this.getIndex()+1];
        },

        getPrevious: function() {
            // var parent = this.parent();
            // return parent.options[this.getIndex()-1];
        },

        getFirst: function() {
            // var parent = this.parent();
            // return parent.options[0];
        },

        getLast: function() {
            // var parent = this.parent();
            // return parent.options[parent.options.length-1];
        },

        scrollTo: function() {
            // var parent = this.parent();
            // parent.settings.scrollToItem.call(parent, this);
        },

        destroy: function() {
            // var parent = this.parent();
            // this.remove();
            // if (this.isPlaceholder()) {
            //     parent.placeholder = null;
            // } else {
            //     for (var i = 0, l = parent.options.length; i < l; i++) {
            //         var item = parent.options[i];
            //         if (item !== this) continue;
            //         parent.options.splice(i, 1);
            //         break;
            //     }
            // }
            // delete this.settings;
        }

    });

    return RadioOption;

});
