Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Calendar = require("./Calendar");

var _DatePickerInput = _interopRequireDefault(require("./DatePickerInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var shouldPreventFocus;
var mousePosition;

var DatePicker = function DatePicker(_ref) {
  var isDayRange = _ref.isDayRange,
      selectedDay = _ref.selectedDay,
      onChange = _ref.onChange,
      formatInputText = _ref.formatInputText,
      inputPlaceholder = _ref.inputPlaceholder,
      inputClassName = _ref.inputClassName,
      renderInput = _ref.renderInput,
      selectedDayRange = _ref.selectedDayRange,
      wrapperClassName = _ref.wrapperClassName,
      calendarClassName = _ref.calendarClassName,
      calendarTodayClassName = _ref.calendarTodayClassName,
      calendarSelectedDayClassName = _ref.calendarSelectedDayClassName,
      calendarRangeStartClassName = _ref.calendarRangeStartClassName,
      calendarRangeBetweenClassName = _ref.calendarRangeBetweenClassName,
      calendarRangeEndClassName = _ref.calendarRangeEndClassName,
      disabledDays = _ref.disabledDays,
      onDisabledDayError = _ref.onDisabledDayError,
      colorPrimary = _ref.colorPrimary,
      colorPrimaryLight = _ref.colorPrimaryLight,
      minimumDate = _ref.minimumDate,
      maximumDate = _ref.maximumDate,
      selectorStartingYear = _ref.selectorStartingYear,
      selectorEndingYear = _ref.selectorEndingYear;
  var calendarContainerElement = (0, _react.useRef)(null);
  var dateInputElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCalendarOpen = _useState2[0],
      setCalendarVisiblity = _useState2[1];

  var handleMouseMove = function handleMouseMove(e) {
    var x = e.clientX,
        y = e.clientY;
    mousePosition = {
      x: x,
      y: y
    };
  }; // get mouse live position


  (0, _react.useEffect)(function () {
    document.addEventListener('mousemove', handleMouseMove, false);
    return function () {
      document.removeEventListener('mousemove', handleMouseMove, false);
    };
  }, []); // handle input focus/blur

  (0, _react.useEffect)(function () {
    var shouldCloseCalendar = !isDayRange ? !isCalendarOpen : !isCalendarOpen && selectedDayRange.from && selectedDayRange.to;
    if (shouldCloseCalendar) dateInputElement.current.blur();
  }, [selectedDay, isCalendarOpen]);

  var toggleCalendar = function toggleCalendar() {
    return setCalendarVisiblity(!isCalendarOpen);
  }; // keep calendar open if clicked inside the calendar


  var handleBlur = function handleBlur(e) {
    e.persist();
    if (!isCalendarOpen) return;
    var calendar = calendarContainerElement.current;
    var calendarPosition = calendar.getBoundingClientRect();

    var isInBetween = function isInBetween(value, start, end) {
      return value >= start && value <= end;
    };

    var isInsideCalendar = isInBetween(mousePosition.x, calendarPosition.left, calendarPosition.right) && isInBetween(mousePosition.y, calendarPosition.top, calendarPosition.bottom);

    if (isInsideCalendar) {
      shouldPreventFocus = true;
      e.target.focus();
      shouldPreventFocus = false;
      return;
    }

    toggleCalendar();
  };

  var handleFocus = function handleFocus() {
    if (shouldPreventFocus) return;
    toggleCalendar();
  };

  var handleDaySelect = function handleDaySelect(day) {
    onChange(day);
    toggleCalendar();
  };

  var handleDayRangeSelect = function handleDayRangeSelect(range) {
    onChange(range);
    if (range.from && range.to) toggleCalendar();
  }; // Keep the calendar in the screen bounds if input is near the window edges


  var getCalendarPosition = function getCalendarPosition() {
    if (!calendarContainerElement.current) return;
    var previousLeft = calendarContainerElement.current.style.left;
    if (previousLeft) return {
      left: previousLeft
    };

    var _calendarContainerEle = calendarContainerElement.current.getBoundingClientRect(),
        left = _calendarContainerEle.left,
        width = _calendarContainerEle.width;

    var clientWidth = document.documentElement.clientWidth;
    var isOverflowingFromRight = left + width > clientWidth;
    var overflowFromRightDistance = left + width - clientWidth;
    var isOverflowingFromLeft = left < 0;
    var overflowFromLeftDistance = Math.abs(left);
    var rightPosition = isOverflowingFromLeft ? overflowFromLeftDistance : 0;
    var leftStyle = isOverflowingFromRight ? "calc(50% - ".concat(overflowFromRightDistance, "px)") : "calc(50% + ".concat(rightPosition, "px)");
    return {
      left: leftStyle
    };
  };

  return _react["default"].createElement("div", {
    className: "DatePicker ".concat(isCalendarOpen ? '-calendarOpen' : '', " ").concat(wrapperClassName),
    tabIndex: "-1"
  }, _react["default"].createElement("div", {
    ref: calendarContainerElement,
    className: "DatePicker__calendarContainer",
    tabIndex: "-1",
    style: getCalendarPosition()
  }, _react["default"].createElement(_Calendar.Calendar, {
    tabIndex: "-1",
    onDaySelect: handleDaySelect,
    selectedDay: selectedDay,
    onChange: isDayRange ? handleDayRangeSelect : handleDaySelect,
    selectedDayRange: selectedDayRange,
    onDayRangeSelect: handleDayRangeSelect,
    isDayRange: isDayRange,
    calendarClassName: calendarClassName,
    calendarTodayClassName: calendarTodayClassName,
    calendarSelectedDayClassName: calendarSelectedDayClassName,
    calendarRangeStartClassName: calendarRangeStartClassName,
    calendarRangeBetweenClassName: calendarRangeBetweenClassName,
    calendarRangeEndClassName: calendarRangeEndClassName,
    disabledDays: disabledDays,
    colorPrimary: colorPrimary,
    colorPrimaryLight: colorPrimaryLight,
    onDisabledDayError: onDisabledDayError,
    minimumDate: minimumDate,
    maximumDate: maximumDate,
    selectorStartingYear: selectorStartingYear,
    selectorEndingYear: selectorEndingYear
  })), _react["default"].createElement(_DatePickerInput["default"], {
    tabIndex: "-1",
    ref: dateInputElement,
    onFocus: handleFocus,
    onBlur: handleBlur,
    formatInputText: formatInputText,
    selectedDay: selectedDay,
    selectedDayRange: selectedDayRange,
    inputPlaceholder: inputPlaceholder,
    inputClassName: inputClassName,
    renderInput: renderInput,
    isDayRange: isDayRange
  }));
};

DatePicker.defaultProps = {
  wrapperClassName: ''
};
DatePicker.propTypes = {
  wrapperClassName: _propTypes["default"].string,
  tabIndex: "-1"
};
var _default = DatePicker;
exports["default"] = _default;