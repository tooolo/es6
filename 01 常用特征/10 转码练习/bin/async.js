"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var timeout = function () {
    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(data) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                if (data == 4) {
                                    reject(data);
                                } else {
                                    resolve(data);
                                }
                            }, 1000);
                        }));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function timeout(_x) {
        return _ref.apply(this, arguments);
    };
}();

var test2 = function () {
    var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return timeout(1);

                    case 2:
                        _context2.next = 4;
                        return timeout(2);

                    case 4:
                        _context2.next = 6;
                        return timeout(4);

                    case 6:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function test2() {
        return _ref2.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function test1() {
    timeout(1);
    timeout(2);
    timeout(14);
}


// test1();
test2();