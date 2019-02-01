function cast(type, value) {

    if (type == "number" || type == "Number") {
        return Number(value);

    } else if (type == "string" || type == "String") {
        return value;

    } else if (type == "null" || type == "Null") {
        return null;

    } else if (type == "boolean" || type == "Boolean") {
        if (value === "true") {
            return true;
        } else if(value === 'false') {
            return false;
        } else {
            var assert_here = document.getElementById("assert-here");
            assert_here.style.backgroundColor = 'blue';
            throw new Error(value + ' is not boolean');
        };
    };

    // functions return undefined by default
    //  so if they asked for undefined, they'll get it
    //  and if they ask for an invalid type, they'll get undefined

};