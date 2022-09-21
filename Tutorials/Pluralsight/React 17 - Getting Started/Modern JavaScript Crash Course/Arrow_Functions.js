const testerObj = {
    func1: function() {
        console.log('This is func1; ', this);
    },

    func2: () => {
        console.log('This is func2;', this);
    }
}

testerObj.func1();
testerObj.func2();