    window.addEventListener('load', function() {
        document.querySelector('form').addEventListener('submit', handleSubmit);
    });

    /**
     * This method will handle the form submit
     *
     * @param {object} event
     * @returns {boolean}
     */
    handleSubmit = (event) => {
        event.preventDefault();
        const inputElement = document.getElementById('array_values');
        if (inputElement.value.trim() === '') {
            inputElement.classList.add('error');
            document.getElementById('danger').style.display = 'block';
            return false;
        }

        inputElement.classList.remove('error');
        document.getElementById('danger').style.display = 'none';

        let result = findWordLengthFromArray(inputElement.value.split(','));
        document.getElementById('result').innerHTML = result;
        return false;
    };

    /**
     * This method will read the array input and count its every word length and
     * return word length as array. It will handle multi-dimensional array too.
     * 
     * Example: 1
     *   input: ['hello', 'world', 'potato', 'pizza', 'sushi', 'yup']
     *   output: [5, 5, 6, 5, 5, 3]
     * Example: 2
     *   input: ['hello', 'world', 'potato', ['pizza', 'sushi', 'yup']]
     *   output: [5, 5, 6, [5, 5, 3]]
     * @param {array} input
     * @returns {array}
     */
    findWordLengthFromArray = (input) => {
        return input.map((string) => {
            return Array.isArray(string)
              ? findWordLengthFrmArray(string) : string.length;
        });
    };
