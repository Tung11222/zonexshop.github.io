function Validator(options) {

    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault()

            let notError = true

            options.props.forEach((state) => {
                let inputElement = formElement.querySelector(state.selector)
                let checkError = checkForm(inputElement, state)
                if (!checkError) {
                    notError = false
                }
            })

            if (notError) {
                if (typeof options.submit === 'function') {
                    let input = formElement.querySelectorAll('[name]')
                    const formInput = Array.from(input).reduce((values, input) => {
                        values[input.name] = input.value
                        return values
                    }, {})

                    formElement.submit()
                }
            } 
        }
    }

    let selectorProps = []

    // Check Validator
    function checkForm(inputElement, state) {
        let errorMessage
        let errorElement = inputElement.parentElement.querySelector(options.selector);

        let states = selectorProps[state.selector]

        for (let i = 0; i < states.length; i++) {
            errorMessage = states[i](inputElement.value)
            if (errorMessage) {
                break
            }
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
        }

        return !errorMessage
    }

    // Get element
    if (formElement) {
        options.props.forEach(function (state) {

        if (Array.isArray(selectorProps[state.selector])) {
            selectorProps[state.selector].push(state.test)
        } else {
            selectorProps[state.selector] = [state.test]
        }

        let inputElement = formElement.querySelector(state.selector);
        let errorElement = inputElement.parentElement.querySelector(options.selector);

        if (inputElement) {
            inputElement.onblur = function () {
                checkForm(inputElement, state)
            };

            // Check input
            inputElement.oninput = function() {
                errorElement.innerText = "";
                inputElement.parentElement.classList.remove("invalid");
            }
        }
        });
    }
}

// Constructor
Validator.Required = function (selector, notify) {
    return {
        selector: selector,
        test(value) {
            return value.trim() ? undefined : notify || 'Vui lòng nhập tên đầy đủ !';
        },
    };
};

Validator.Email = function (selector, notify) {
    return {
        selector: selector,
        test(value) {
            let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return checkMail.test(value) ? undefined : notify || 'Email nhập vào không chính xác !'
        },
    };
};

Validator.Length = function (selector, length, notify) {
    return {
        selector: selector,
        test(value) {
            return value.length >= length ? undefined : notify || `Vui lòng nhập tối thiểu ${length} kí tự !`
        },
    };
};

Validator.ConfirmPassword = function(selector, ConfirmPassword, notify) {
    return {
        selector: selector,
        test(value) {
            return value === ConfirmPassword() ? undefined : notify || 'Mật khẩu nhập vào không chính xác'
        }
    }
} 
