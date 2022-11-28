"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




let arr = [];
const Index = (data2)=>{
    //const [theme, setTheme] = useState(localStorage.theme);
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (items) {
            arr = JSON.parse(localStorage.getItem("items"));
            arr.push(items);
            localStorage.setItem("items", JSON.stringify(arr));
            if (arr.length > 5) {
                arr.shift();
                localStorage.setItem("items", JSON.stringify(arr));
            }
        }
        setState(JSON.parse(localStorage.getItem("items")));
    }, [
        items
    ]);
    const id = 1;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const data = "";
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            style: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-start",
                alignContent: "flex-start",
                width: "100%",
                boxSizing: "border-box",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    alignContent: "flex-start"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        alignContent: "flex-start"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            flexWrap: "wrap",
                            maxWidth: "1400px",
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-start",
                            alignContent: "flex-start",
                            paddingLeft: "40px",
                            paddingRight: "40px",
                            paddingTop: "30px",
                            paddingBottom: "30px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                width: "100%",
                                display: "flex",
                                alignItems: "flex-start",
                                alignContent: " flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            action: `/user/${value}`,
                                            method: "post",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            for: "searchKey",
                                                            children: [
                                                                "Aratmak İstediğiniz Filmi Giriniz:",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            class: "form-control",
                                                            id: "searchKey",
                                                            placeholder: "Filmi giriniz",
                                                            onChange: (e)=>setValue(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    class: "btn btn-primary",
                                                    onClick: ()=>setItems(document.getElementById("searchKey").value),
                                                    children: "Arat"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                position: "fixed"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "mt-5",
                                                    children: "Son aratılan 5 anahtar kelime: "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    class: "list-group mt-5",
                                                    children: state.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            class: "list-group-item hover",
                                                            children: [
                                                                " ",
                                                                data
                                                            ]
                                                        }))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "mb-4",
                                            children: [
                                                "Yakında vizyona girecek filmler ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Vizyon tarihleri arası: ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                data2.data2[0].dates.minimum,
                                                " ile",
                                                " ",
                                                data2.data2[0].dates.maximum,
                                                " tarihleri"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                paddingLeft: "30px",
                                                background: "transparent",
                                                paddingRight: "0",
                                                width: "400px",
                                                maxWidth: "calc(1400px - 80px - 268px)",
                                                display: "flex",
                                                flexWrap: "wrap",
                                                flex: "0 1 auto"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                                style: {
                                                    width: "100%",
                                                    display: "block",
                                                    padding: "30px 0"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        marginTop: "-30px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            flexWrap: "wrap"
                                                        },
                                                        className: "ml-5",
                                                        children: data2.data2[0].results.map((result)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: `/movie/${result.id}`,
                                                                style: {
                                                                    color: "black",
                                                                    textDecoration: "none"
                                                                },
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card mb-3",
                                                                    style: {
                                                                        width: "18rem"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            class: "card-img-top",
                                                                            src: `https://www.themoviedb.org/t/p/w220_and_h330_face/${result.poster_path}`,
                                                                            alt: "Card image cap"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            class: "card-body hover",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                                    class: "card-title",
                                                                                    children: [
                                                                                        "Filmin adı: ",
                                                                                        result.title
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                    class: "card-text",
                                                                                    style: {
                                                                                        overflow: "hidden",
                                                                                        height: "100px"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                            children: "\xd6zet: "
                                                                                        }),
                                                                                        " ",
                                                                                        result.overview
                                                                                    ]
                                                                                }),
                                                                                result.overview.length > 188 ? "......" : ""
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }))
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
async function getServerSideProps(context) {
    const https = __webpack_require__(5687);
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });
    // Fetch data from external API
    const url = `https://localhost:7005/api/Movie/getListByUpcomingMovie`;
    const res = await fetch(url, {
        agent: httpsAgent
    });
    const data2 = await res.json();
    // Pass data to the page via props
    return {
        props: {
            data2
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3678));
module.exports = __webpack_exports__;

})();