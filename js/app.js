
    const numberData = [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5},
        {value: 6},
        {value: 7},
        {value: 8},
        {value: 9},
        {value: 0}
    ]

    const operationData = [
        {value: '+'},
        {value: '-'},
        {value: '&times;'},
        {value: '&divide;'},
        {value: '%'},
        {value: '.'},
        {value: '='}
    ]

    const specialData = [
        {value: 'AC'},
        {value: 'CE'}
    ]

    let Button = Backbone.Model.extend({
        defaults: {
            value: ''
        }
    });

    let Buttons = Backbone.Collection.extend({
        model: Button
    });

    let numberButtons = new Buttons(numberData.map(function(val){
        return new Button(val);
    }));

    let operationButtons = new Buttons(operationData.map(function(operator){
        return new Button(operator);
    }))

    let specialButtons = new Buttons(specialData.map(function(val){
        return new Button(val);
    }))

    let ButtonView = Backbone.View.extend({

        tagName: 'div',
        className: 'btn-item',

        template: _.template($('#btn-template').html()),
        
        initialize: function(){
            this.render();
        },

        render: function(){
            let self = this;
            self.$el.html(this.template(this.model.toJSON()));
            return self;
        }
    });

