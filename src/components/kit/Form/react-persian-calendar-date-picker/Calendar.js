Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
// eslint-disable-next-line
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Calendar = function Calendar(_ref) {
  var selectedDay = _ref.selectedDay,
      selectedDayRange = _ref.selectedDayRange,
      onChange = _ref.onChange,
      onDisabledDayError = _ref.onDisabledDayError,
      isDayRange = _ref.isDayRange,
      calendarClassName = _ref.calendarClassName,
      calendarTodayClassName = _ref.calendarTodayClassName,
      calendarSelectedDayClassName = _ref.calendarSelectedDayClassName,
      calendarRangeStartClassName = _ref.calendarRangeStartClassName,
      calendarRangeBetweenClassName = _ref.calendarRangeBetweenClassName,
      calendarRangeEndClassName = _ref.calendarRangeEndClassName,
      disabledDays = _ref.disabledDays,
      colorPrimary = _ref.colorPrimary,
      colorPrimaryLight = _ref.colorPrimaryLight,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      selectorStartingYear = _ref.selectorStartingYear,
      selectorEndingYear = _ref.selectorEndingYear;
  var calendarElement = (0, _react.useRef)(null);
  var monthYearTextWrapper = (0, _react.useRef)(null);
  var calendarSectionWrapper = (0, _react.useRef)(null);
  var monthSelector = (0, _react.useRef)(null);
  var yearSelector = (0, _react.useRef)(null);
  var yearSelectorWrapper = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    status: 'NEXT',
    cycleCount: 1,
    activeDate: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      mainState = _useState2[0],
      setMainState = _useState2[1];

  var today = (0, _utils.getToday)();
  var activeDate = mainState.activeDate ? (0, _utils.shallowCloneObject)(mainState.activeDate) : null;

  var setActiveDate = function setActiveDate() {
    if (selectedDay) activeDate = (0, _utils.shallowCloneObject)(selectedDay);else if (selectedDayRange.from) activeDate = (0, _utils.shallowCloneObject)(selectedDayRange.from);else activeDate = (0, _utils.shallowCloneObject)(today);
  };

  if (!activeDate) setActiveDate();

  var renderWeekDays = function renderWeekDays() {
    return Object.keys(_utils.WEEK_DAYS).map(function (key) {
      return _react["default"].createElement("span", {
        key: key,
        className: "Calendar__weekDay"
      }, _utils.WEEK_DAYS[key][0]);
    });
  };

  var getDate = function getDate(isThisMonth) {
    return isThisMonth ? activeDate : (0, _utils.getDateAccordingToMonth)(activeDate, mainState.status);
  };

  var getMonthYearText = function getMonthYearText(isNewMonth) {
    var date = getDate(!isNewMonth);
    var year = (0, _utils.toPersianNumber)(date.year);
    var month = (0, _utils.getMonthName)(date.month);
    return "".concat(month, " ").concat(year);
  };

  var getDayRangeValue = function getDayRangeValue(day) {
    var clonedDayRange = (0, _utils.deepCloneObject)(selectedDayRange);
    var dayRangeValue = clonedDayRange.from && clonedDayRange.to ? {
      from: null,
      to: null
    } : clonedDayRange;
    var dayRangeProp = !dayRangeValue.from ? 'from' : 'to';
    dayRangeValue[dayRangeProp] = day;
    var from = dayRangeValue.from,
        to = dayRangeValue.to; // swap from and to values if from is later than to

    if ((0, _utils.isBeforeDate)(dayRangeValue.to, dayRangeValue.from)) {
      dayRangeValue.from = to;
      dayRangeValue.to = from;
    }

    var checkIncludingDisabledDay = function checkIncludingDisabledDay(disabledDay) {
      return (0, _utils.checkDayInDayRange)({
        day: disabledDay,
        from: dayRangeValue.from,
        to: dayRangeValue.to
      });
    };

    var includingDisabledDay = disabledDays.find(checkIncludingDisabledDay);

    if (includingDisabledDay) {
      onDisabledDayError(includingDisabledDay);
      return selectedDayRange;
    }

    return dayRangeValue;
  };

  var handleDayClick = function handleDayClick(day) {
    var newDayValue = isDayRange ? getDayRangeValue(day) : day;
    onChange(newDayValue);
  };

  var getDayClassNames = function getDayClassNames(dayItem) {
    var isToday = (0, _utils.isSameDay)(dayItem, today);
    var isSelected = selectedDay ? (0, _utils.isSameDay)(dayItem, selectedDay) : false;
    var startingDay = selectedDayRange.from,
        endingDay = selectedDayRange.to;
    var isStartedDayRange = (0, _utils.isSameDay)(dayItem, startingDay);
    var isEndingDayRange = (0, _utils.isSameDay)(dayItem, endingDay);
    var isWithinRange = (0, _utils.checkDayInDayRange)({
      day: dayItem,
      from: startingDay,
      to: endingDay
    });
    var classNames = ''.concat(isToday && !isSelected ? " -today ".concat(calendarTodayClassName) : '').concat(!dayItem.isStandard ? ' -blank' : '').concat(isSelected ? " -selected ".concat(calendarSelectedDayClassName) : '').concat(isStartedDayRange ? " -selectedStart ".concat(calendarRangeStartClassName) : '').concat(isEndingDayRange ? " -selectedEnd ".concat(calendarRangeEndClassName) : '').concat(isWithinRange ? " -selectedBetween ".concat(calendarRangeBetweenClassName) : '').concat(dayItem.isDisabled ? '-disabled' : '');
    return classNames;
  };

  var getViewMonthDays = function getViewMonthDays(isNewMonth) {
    var date = getDate(!isNewMonth);
    var prependingBlankDays = (0, _utils.createUniqueRange)((0, _utils.getMonthFirstWeekday)(date), 'starting-blank'); // all months will have an additional 7 days(week) for rendering purpose

    var appendingBlankDays = (0, _utils.createUniqueRange)(7 - (0, _utils.getMonthFirstWeekday)(date), 'ending-blank');
    var standardDays = (0, _utils.createUniqueRange)((0, _utils.getMonthLength)(date)).map(function (day) {
      return _objectSpread({}, day, {
        isStandard: true,
        month: date.month,
        year: date.year
      });
    }, 'standard');
    var allDays = prependingBlankDays.concat(standardDays, appendingBlankDays);
    return allDays;
  };

  var renderMonthDays = function renderMonthDays(isNewMonth) {
    var allDays = getViewMonthDays(isNewMonth);
    return allDays.map(function (_ref2) {
      var id = _ref2.id,
          day = _ref2.value,
          month = _ref2.month,
          year = _ref2.year,
          isStandard = _ref2.isStandard;
      var dayItem = {
        day: day,
        month: month,
        year: year
      };
      var isInDisabledDaysRange = disabledDays.some(function (disabledDay) {
        return (0, _utils.isSameDay)(dayItem, disabledDay);
      });
      var isBeforeMinimumDate = (0, _utils.isBeforeDate)(dayItem, minimumDate);
      var isAfterMaximumDate = (0, _utils.isBeforeDate)(maximumDate, dayItem);
      var isNotInValidRange = isStandard && (isBeforeMinimumDate || isAfterMaximumDate);
      var isDisabled = isInDisabledDaysRange || isNotInValidRange;
      var additionalClass = getDayClassNames(_objectSpread({}, dayItem, {
        isStandard: isStandard,
        isDisabled: isDisabled
      }));
      return _react["default"].createElement("button", {
        key: id,
        className: "Calendar__day ".concat(additionalClass),
        tabIndex: "-1",
        onClick: function onClick() {
          if (isDisabled) {
            onDisabledDayError(dayItem); // good for showing error messages

            return;
          }

          handleDayClick({
            day: day,
            month: month,
            year: year
          });
        },
        disabled: !isStandard,
        type: "button"
      }, (0, _utils.toPersianNumber)(day));
    });
  }; // animate monthYear text in header and month days


  var animateContent = function animateContent(direction, parentRef) {
    var textWrapper = parentRef.current;
    var wrapperChildren = Array.from(textWrapper.children);
    var shownItem = wrapperChildren.find(function (child) {
      return child.classList.contains('-shown');
    });
    if (!shownItem) return; // prevent simultaneous animations

    var hiddenItem = wrapperChildren.find(function (child) {
      return child !== shownItem;
    });
    var baseClass = shownItem.classList[0];
    var isNextMonth = direction === 'NEXT';

    var getAnimationClass = function getAnimationClass(value) {
      return value ? '-hiddenNext' : '-hiddenPrevious';
    };

    shownItem.className = "".concat(baseClass, " ").concat(getAnimationClass(!isNextMonth));
    hiddenItem.className = "".concat(baseClass, " ").concat(getAnimationClass(isNextMonth));
    hiddenItem.classList.add('-shownAnimated');
  };

  var handleMonthClick = function handleMonthClick(direction) {
    setMainState(_objectSpread({}, mainState, {
      status: direction
    }));
    animateContent(direction, monthYearTextWrapper);
    animateContent(direction, calendarSectionWrapper);
  };

  var handleAnimationEnd = function handleAnimationEnd(_ref3) {
    var target = _ref3.target;
    target.classList.remove('-hiddenNext');
    target.classList.remove('-hiddenPrevious');
    target.classList.replace('-shownAnimated', '-shown');
  };

  var updateDate = function updateDate() {
    setMainState(_objectSpread({}, mainState, {
      cycleCount: mainState.cycleCount + 1,
      activeDate: (0, _utils.getDateAccordingToMonth)(activeDate, mainState.status)
    }));
  };

  var toggleMonthArrows = function toggleMonthArrows() {
    var arrows = _toConsumableArray(calendarElement.current.querySelectorAll('.Calendar__monthArrowWrapper'));

    arrows.forEach(function (arrow) {
      arrow.classList.toggle('-hidden');
    });
  };

  var toggleMonthSelector = function toggleMonthSelector() {
    toggleMonthArrows();
    var monthText = calendarElement.current.querySelector('.Calendar__monthYear.-shown .Calendar__monthText');
    var yearText = monthText.nextSibling;
    var isClosed = yearText.classList.contains('-hidden');
    var scale = isClosed ? 1 : 1.05;
    var translateX = isClosed ? 0 : "-".concat(yearText.offsetWidth / 2);
    yearText.style.transform = '';
    monthText.style.transform = "scale(".concat(scale, ") translateX(").concat(translateX, "px)");
    monthText.classList.toggle('-activeBackground');
    yearText.classList.toggle('-hidden');
    monthSelector.current.classList.toggle('-open');
  };

  var toggleYearSelector = function toggleYearSelector() {
    toggleMonthArrows();
    var yearText = calendarElement.current.querySelector('.Calendar__monthYear.-shown .Calendar__yearText');
    var monthText = yearText.previousSibling;
    var isClosed = monthText.classList.contains('-hidden');
    var scale = isClosed ? 1 : 1.05;
    var translateX = isClosed ? 0 : "".concat(monthText.offsetWidth / 2);
    var activeSelectorYear = calendarElement.current.querySelector('.Calendar__yearSelectorText.-active');
    yearSelectorWrapper.current.classList.toggle('-faded');
    yearSelector.current.scrollTop = activeSelectorYear.offsetTop - activeSelectorYear.offsetHeight * 5.8;
    monthText.style.transform = '';
    yearText.style.transform = "scale(".concat(scale, ") translateX(").concat(translateX, "px)");
    yearText.classList.toggle('-activeBackground');
    monthText.classList.toggle('-hidden');
    yearSelector.current.classList.toggle('-open');
  };

  var handleMonthSelect = function handleMonthSelect(newMonthNumber) {
    setMainState(_objectSpread({}, mainState, {
      activeDate: _objectSpread({}, activeDate, {
        month: newMonthNumber
      })
    }));
    toggleMonthSelector();
  };

  var renderMonthSelectorItems = function renderMonthSelectorItems() {
    return _utils.PERSIAN_MONTHS.map(function (persianMonth) {
      var monthNumber = (0, _utils.getMonthNumber)(persianMonth);
      var monthDate = {
        day: 1,
        month: monthNumber,
        year: activeDate.year
      };
      var isAfterMaximumDate = maximumDate && (0, _utils.isBeforeDate)(maximumDate, _objectSpread({}, monthDate, {
        month: monthNumber
      }));
      var isBeforeMinimumDate = minimumDate && ((0, _utils.isBeforeDate)(_objectSpread({}, monthDate, {
        month: monthNumber + 1
      }), minimumDate) || (0, _utils.isSameDay)(_objectSpread({}, monthDate, {
        month: monthNumber + 1
      }), minimumDate));
      return _react["default"].createElement("div", {
        key: persianMonth,
        className: "Calendar__monthSelectorItem"
      }, _react["default"].createElement("button", {
        tabIndex: "-1",
        onClick: function onClick() {
          handleMonthSelect(monthNumber);
        },
        className: "Calendar__monthSelectorItemText ".concat(monthNumber === activeDate.month ? '-active' : ''),
        type: "button",
        disabled: isAfterMaximumDate || isBeforeMinimumDate
      }, persianMonth));
    });
  };

  var selectYear = function selectYear(year) {
    setMainState(_objectSpread({}, mainState, {
      activeDate: _objectSpread({}, activeDate, {
        year: year
      })
    }));
    toggleYearSelector();
  };

  var renderSelectorYears = function renderSelectorYears() {
    // const items =
    var items = [];

    for (var i = selectorStartingYear; i <= selectorEndingYear; i += 1) {
      items.push(i);
    }

    return items.map(function (item) {
      var isAfterMaximumDate = maximumDate && item > maximumDate.year;
      var isBeforeMinimumDate = minimumDate && item < minimumDate.year;
      return _react["default"].createElement("div", {
        key: item,
        className: "Calendar__yearSelectorItem"
      }, _react["default"].createElement("button", {
        tabIndex: "-1",
        className: "Calendar__yearSelectorText ".concat(activeDate.year === item ? '-active' : ''),
        type: "button",
        onClick: function onClick() {
          selectYear(item);
        },
        disabled: isAfterMaximumDate || isBeforeMinimumDate
      }, (0, _utils.toPersianNumber)(item)));
    });
  };

  var isNextMonthArrowDisabled = maximumDate && (0, _utils.isBeforeDate)(maximumDate, _objectSpread({}, activeDate, {
    month: activeDate.month + 1,
    day: 1
  }));
  var isPreviousMonthArrowDisabled = minimumDate && ((0, _utils.isBeforeDate)(_objectSpread({}, activeDate, {
    day: 1
  }), minimumDate) || (0, _utils.isSameDay)(minimumDate, _objectSpread({}, activeDate, {
    day: 1
  }))); // determine the hidden animated item

  var isCycleCountEven = mainState.cycleCount % 2 === 0;
  return _react["default"].createElement("div", {
    className: "Calendar ".concat(calendarClassName),
    style: {
      '--cl-color-primary': colorPrimary,
      '--cl-color-primary-light': colorPrimaryLight
    },
    ref: calendarElement
  }, _react["default"].createElement("div", {
    className: "Calendar__header"
  }, _react["default"].createElement("button", {
    tabIndex: "-1",
    className: "Calendar__monthArrowWrapper -right",
    onClick: function onClick() {
      return handleMonthClick('PREVIOUS');
    },
    "aria-label": "\u0645\u0627\u0647 \u0642\u0628\u0644",
    type: "button",
    disabled: isPreviousMonthArrowDisabled
  }, _react["default"].createElement("span", {
    className: "Calendar__monthArrow",
    alt: "\u0641\u0644\u0634 \u0631\u0627\u0633\u062A"
  }, "\xA0")), _react["default"].createElement("div", {
    className: "Calendar__monthYearContainer",
    ref: monthYearTextWrapper
  }, "\xA0", _react["default"].createElement("div", {
    onAnimationEnd: handleAnimationEnd,
    className: "Calendar__monthYear -shown"
  }, _react["default"].createElement("button", {
    tabIndex: "-1",
    onClick: toggleMonthSelector,
    type: "button",
    className: "Calendar__monthText"
  }, getMonthYearText(isCycleCountEven).split(' ')[0]), _react["default"].createElement("button", {
    tabIndex: "-1",
    onClick: toggleYearSelector,
    type: "button",
    className: "Calendar__yearText"
  }, getMonthYearText(isCycleCountEven).split(' ')[1])), _react["default"].createElement("div", {
    onAnimationEnd: handleAnimationEnd,
    className: "Calendar__monthYear -hiddenNext"
  }, _react["default"].createElement("button", {
    tabIndex: "-1",
    onClick: toggleMonthSelector,
    type: "button",
    className: "Calendar__monthText"
  }, getMonthYearText(!isCycleCountEven).split(' ')[0]), _react["default"].createElement("button", {
    tabIndex: "-1",
    onClick: toggleYearSelector,
    type: "button",
    className: "Calendar__yearText"
  }, getMonthYearText(!isCycleCountEven).split(' ')[1]))), _react["default"].createElement("button", {
    tabIndex: "-1",
    className: "Calendar__monthArrowWrapper -left",
    onClick: function onClick() {
      return handleMonthClick('NEXT');
    },
    "aria-label": "\u0645\u0627\u0647 \u0628\u0639\u062F",
    type: "button",
    disabled: isNextMonthArrowDisabled
  }, _react["default"].createElement("span", {
    className: "Calendar__monthArrow",
    alt: "\u0641\u0644\u0634 \u0686\u067E"
  }, "\xA0"))), _react["default"].createElement("div", {
    className: "Calendar__monthSelectorAnimationWrapper"
  }, _react["default"].createElement("div", {
    className: "Calendar__monthSelectorWrapper"
  }, _react["default"].createElement("div", {
    ref: monthSelector,
    className: "Calendar__monthSelector"
  }, renderMonthSelectorItems()))), _react["default"].createElement("div", {
    className: "Calendar__yearSelectorAnimationWrapper"
  }, _react["default"].createElement("div", {
    ref: yearSelectorWrapper,
    className: "Calendar__yearSelectorWrapper"
  }, _react["default"].createElement("div", {
    ref: yearSelector,
    className: "Calendar__yearSelector"
  }, renderSelectorYears()))), _react["default"].createElement("div", {
    className: "Calendar__weekDays"
  }, renderWeekDays()), _react["default"].createElement("div", {
    ref: calendarSectionWrapper,
    className: "Calendar__sectionWrapper"
  }, _react["default"].createElement("div", {
    onAnimationEnd: function onAnimationEnd(e) {
      handleAnimationEnd(e);
      updateDate();
    },
    className: "Calendar__section -shown"
  }, renderMonthDays(isCycleCountEven)), _react["default"].createElement("div", {
    onAnimationEnd: function onAnimationEnd(e) {
      handleAnimationEnd(e);
      updateDate();
    },
    className: "Calendar__section -hiddenNext"
  }, renderMonthDays(!isCycleCountEven))));
};

exports.Calendar = Calendar;
var dayShape = {
  year: _propTypes["default"].number.isRequired,
  month: _propTypes["default"].number.isRequired,
  day: _propTypes["default"].number.isRequired
};
Calendar.defaultProps = {
  onChange: function onChange() {
    return null;
  },
  onDisabledDayError: function onDisabledDayError() {
    return null;
  },
  selectedDay: null,
  selectedDayRange: {
    from: null,
    to: null
  },
  minimumDate: null,
  maximumDate: null,
  disabledDays: [],
  colorPrimary: '#0eca2d',
  colorPrimaryLight: '#cff4d5',
  calendarClassName: '',
  calendarTodayClassName: '',
  calendarSelectedDayClassName: '',
  calendarRangeStartClassName: '',
  calendarRangeBetweenClassName: '',
  calendarRangeEndClassName: '',
  selectorStartingYear: 1300,
  selectorEndingYear: 1450
};
Calendar.propTypes = {
  onChange: _propTypes["default"].func,
  onDisabledDayError: _propTypes["default"].func,
  selectedDay: _propTypes["default"].shape(dayShape),
  selectedDayRange: _propTypes["default"].shape({
    from: _propTypes["default"].shape(dayShape),
    to: _propTypes["default"].shape(dayShape)
  }),
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].shape(dayShape)),
  calendarClassName: _propTypes["default"].string,
  calendarTodayClassName: _propTypes["default"].string,
  calendarSelectedDayClassName: _propTypes["default"].string,
  calendarRangeStartClassName: _propTypes["default"].string,
  calendarRangeBetweenClassName: _propTypes["default"].string,
  calendarRangeEndClassName: _propTypes["default"].string,
  colorPrimary: _propTypes["default"].string,
  colorPrimaryLight: _propTypes["default"].string,
  minimumDate: _propTypes["default"].shape(dayShape),
  maximumDate: _propTypes["default"].shape(dayShape),
  selectorStartingYear: _propTypes["default"].number,
  selectorEndingYear: _propTypes["default"].number
};