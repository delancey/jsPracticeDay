let pizzaToppings = ['cheese', 'pepperoni', 'veggie', 'and never pineapple. Pineapples DO NOT belong on pizza (Manny).'];

function pizzaType() {
    pizzaToppings.toString();
    return ' I like my pizza with ' + pizzaToppings.join(', ');
};

console.log(pizzaType());