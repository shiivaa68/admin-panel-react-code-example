const translatePrice = (num, currency, detector) => {
    let yekan = {
        fa: ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
        en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    };
    let dahghan = {
        fa: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
        en: ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    };
    let dahgan11_19 = {
        fa: ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هیجده', 'نوزده'],
        en: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    };
    let sadgan = {
        fa: ['صد', 'دویست', 'سی صد', 'چهارصد', 'پانصد', 'ششصد', 'هفت صد', 'هشت صد', 'نهصد'],
        en: ['hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
    };
    let power = {
        fa: ['', 'هزار', 'میلیون', 'میلیارد', 'بیلیون', 'بیلیارد', 'تریلون', 'تریلیارد'],
        en: ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion','Quintillion', 'Sextillion']
    };
    let number = num.toString();
    // if (number.length > 24) {
    //     return alert('عدد بسیار بزرگ است');
    // }
    // if (isNaN(number)) {
    //     return alert('لطفا عدد وارد کنید !')
    // }
    number = number.split("").reverse().join("");
    let numberSliced = [];
    for (let i = 0; i < number.length; i += 3) {
        numberSliced.push(number.slice(i, i + 3));
    }
    numberSliced.forEach(function (value, i) {
        numberSliced[i] = Number(value.split("").reverse().join(""));
    });
    let and = {
        fa: ' و ',
        en: ' and '
    };
    let str = [];
    numberSliced.forEach(function (item, pwr) {
        if (item === 0) {
            item = '';
        }
        let each = item.toString().split("");
        if (item.toString().length === 1) {
            str.push(yekan[detector][item] + " " + power[detector][pwr]);
        }

        if (item.toString().length === 2) {
            if (Number(each[0]) === 1 && Number(each[1]) >= 0) {
                str.push(dahgan11_19[detector][each[1]] + " " + power[detector][pwr]);
            } else if (Number(each[1]) === 0) {
                str.push(dahghan[detector][each[0]] + " " + power[detector][pwr]);
            } else {
                str.push(dahghan[detector][each[0]] + and[detector] + yekan[detector][each[1]] + " " + power[detector][pwr]);
            }
        }
        if (item.toString().length === 3) {
            if (Number(each[1]) === 1 && each[2] >= 0) {
                str.push(sadgan[detector][each[0] - 1] + and[detector] + dahgan11_19[detector][each[2]] + " " + power[detector][pwr]);
            } else if (Number(each[1]) === 0 && Number(each[2]) === 0) {
                str.push(sadgan[detector][each[0] - 1] + " " + power[detector][pwr]);
            } else if (Number(each[1]) === 0 && each[2] >= 1) {
                str.push(sadgan[detector][each[0] - 1] + and[detector] + yekan[detector][each[2]] + " " + power[detector][pwr]);
            } else if (Number(each[2]) === 0) {
                str.push(sadgan[detector][each[0] - 1] + and[detector] + dahghan[detector][each[1]] + " " + power[detector][pwr]);
            } else {
                str.push(sadgan[detector][each[0] - 1] + and[detector] + dahghan[detector][each[1]] + and[detector] + yekan[detector][each[2]] + " " + power[detector][pwr]);
            }
        }
    });
    const measure = num !== 0 ? currency : '';
    return str.reverse().join(and[detector]) + " " + measure
};

export default translatePrice;
