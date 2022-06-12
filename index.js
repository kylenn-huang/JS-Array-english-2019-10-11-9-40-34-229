        // The writer determines whether the following variables are of type array.
        var a = '[a, b, c, d]';
        var b = [1, 2, 3, 4];
        console.log('a is Array ?', Array.isArray(a));
        console.log('b is Array ?', b instanceof Array);
        
        // Write a program that multiplies each entry in the following array by 2。
        var a = [1, 2, 3, 4, 5];
        var b = [];
        a.map(item => {
            b.push(item * 2)
        })
        console.log(b)

        // Write the program, according to the following requirements output results.
        var colors = ["Red", "Green", "White", "Black"];
        var colorStr = "'"
        for (var i = 0; i < colors.length; i++) {
            colorStr = colorStr + colors[i] + " "
        }
        colorStr = colorStr + "' "
        console.log('case 1:', colorStr);

        // Write a program to sort the Numbers in the following array from largest to smallest.
        var arr = [5, 1, 8, 10, 4];
        arr.sort(function (a, b) {
            return b - a;
        })
        console.log('sort array', arr);

        // Program to find the most frequent element in the following array.
        var repeatArr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
        function findMost(arr) {
            if (!arr.length) return;
            if (arr.length === 1) return 1;
            let maxName, maxNum = 0
            let res = arr.reduce((res, currentNum) => {
                res[currentNum] ? res[currentNum] += 1 : res[currentNum] = 1
                if (res[currentNum] > maxNum) {
                    maxNum = res[currentNum]
                    maxName = currentNum
                }
                return res
            }, {})
            return 'the most frequent element is :' + maxName
        }
        console.log(findMost(repeatArr));
