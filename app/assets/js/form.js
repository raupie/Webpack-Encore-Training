require('../css/form.css');

require('jquery-validation');

$(document).ready(function() {
    $("#myform").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            address: {
                required: true,
                minlength: 10
            },
            color: "required"
        },
        messages: {
            firstname: "Please enter your firstname please",
            lastname: "Please enter your lastname please",
            address: {
                required: "Hey! We need your address",
                minlength: "Are you sure that's your address?"
            },
            color: "Pretty please select a color"
        },
        submitHandler: function(form) {
            $(form).submit();
        }
    });
});