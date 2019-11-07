// Budget Controller
var budgetController = (function () {

    // some code

})();

// UI Controller
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        }
    }

})();

// Global Controller
var controler = (function (budgetCtrl, UICtrl) {

    var setupEventListener = function () {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (e) {

            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {

        // Get file input data
        var input = UICtrl.getInput();
        console.log(input);

        // Add item to the budget controller


        // Add item to the UI 


        // Calculate the budget


        // Display the budget on the UI


    };

    return {
        init: function() {
            console.log('App has started')
            setupEventListener();
        }
    };

})(budgetController, UIController);

controler.init();