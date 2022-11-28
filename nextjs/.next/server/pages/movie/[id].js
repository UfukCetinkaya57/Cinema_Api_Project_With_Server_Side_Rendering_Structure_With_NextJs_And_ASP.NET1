"use strict";
(() => {
var exports = {};
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 3969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-waypoint"
const external_react_waypoint_namespaceObject = require("react-waypoint");
;// CONCATENATED MODULE: ./pages/movie/[id].js




const SingleMovie = (data)=>{
    const [_document, set_document] = external_react_default().useState(null);
    external_react_default().useEffect(()=>{
        set_document(document);
    }, []);
    let runtime = parseInt(data.data.runtime);
    let hours = runtime / 60;
    hours = Math.floor(hours);
    let minute = runtime % 60;
    console.log(data);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "container-fluid",
                style: {
                    backgroundColor: "green",
                    height: "560px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " ml-2",
                    style: {
                        display: "flex",
                        flexWrap: "nowrap"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                borderWidth: "0px",
                                minWidth: "300px",
                                width: "300px",
                                height: "450px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "poster",
                                    style: {
                                        display: "block",
                                        minWidth: "300px",
                                        width: "300px",
                                        height: "450px",
                                        position: "relative",
                                        top: "0",
                                        left: "0"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: " mt-5",
                                        style: {
                                            display: "inline-block",
                                            minWidth: "300px",
                                            borderRadius: "18px",
                                            overflow: "hidden"
                                        },
                                        src: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" + data.data.backdrop_path,
                                        alt: "image cap"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ott_offer",
                                    style: {
                                        position: "relative",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        backgroundColor: "darkblue",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderBottomRightRadius: "8px",
                                        borderBottomLeftRadius: "8px",
                                        boxSizing: "borderBox"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mb-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            style: {
                                                color: "white"
                                            },
                                            children: [
                                                "Now Streming",
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        class: true,
                                                        href: data.data.homepage,
                                                        style: {
                                                            color: "white"
                                                        },
                                                        children: "Hemen izle"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "col-9",
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                alignContent: "center",
                                boxSizing: "border-box",
                                paddingLeft: "40px"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "",
                                    style: {
                                        width: "100%",
                                        marginBottom: "24px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            className: "mt-5 mb-3",
                                            children: [
                                                " ",
                                                data.data.title
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "pr-5",
                                                    children: [
                                                        "Filmin \xc7ıkış Tarihi: ",
                                                        data.data.release_date
                                                    ]
                                                }),
                                                "*",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "pl-1 pr-3",
                                                    children: data.data.genres.map((data)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                data.name,
                                                                " "
                                                            ]
                                                        }))
                                                }),
                                                "*",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "Film S\xfcresi: ",
                                                        hours,
                                                        "saat ",
                                                        minute,
                                                        "dakika"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text",
                                                    style: {
                                                        height: "48px",
                                                        overflow: "hidden"
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Film Sloganı:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            style: {
                                                color: "black"
                                            },
                                            children: [
                                                " ",
                                                data.data.tagline
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "\xd6zet"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: data.data.overview
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignContent: "flex-start"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        maxWidth: "1400px",
                        width: "100%",
                        display: "flex",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        paddingTop: "30px",
                        paddingBottom: "30px",
                        alignItems: "flex-start",
                        alignContent: "flex-start"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "1000px",
                                    maWidth: "1400px - 80px - 268px",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    flex: "0 1 auto",
                                    paddingRight: "30px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                        style: {
                                            width: "100%",
                                            display: "block",
                                            padding: "30px",
                                            borderTop: "1px solid #d7d7d7"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            id: "recommendation_waypoint",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: " Benzer Filmler"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        position: "relative",
                                                        top: "0",
                                                        left: "0"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            overflowY: "hidden",
                                                            overflowX: "scroll",
                                                            whiteSpace: "nowrap",
                                                            paddingBottom: "10px",
                                                            width: "18%"
                                                        },
                                                        children: data.data2[0].results.map((data3)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                style: {
                                                                    display: "inline-block",
                                                                    float: "none",
                                                                    borderRadius: "7px",
                                                                    width: "250px",
                                                                    marginRight: "15px",
                                                                    overflow: "hidden"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            width: "250px",
                                                                            height: "141px"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: `/movie/${data3.id}`,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                loading: "lazy",
                                                                                style: {
                                                                                    top: "0",
                                                                                    left: "0",
                                                                                    width: "250px",
                                                                                    height: "141px"
                                                                                },
                                                                                src: `https://www.themoviedb.org/t/p/w250_and_h141_face${data3.backdrop_path}`
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: `https://www.themoviedb.org/t/p/w250_and_h141_face${data3.backdrop_path}`,
                                                                            style: {
                                                                                textDecoration: "none",
                                                                                color: "black",
                                                                                overflow: "hidden"
                                                                            },
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("bdi", {
                                                                                children: data3.title
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }))
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                minWidth: "260px",
                                width: "260px",
                                display: "flex",
                                flexWrap: "wrap"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                    style: {
                                        paddingTop: "4px",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        maxWidth: "300px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                paddingBottom: "0",
                                                marginBottom: "0"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                style: {
                                                                    display: "block"
                                                                },
                                                                children: "Orijinal Başlık"
                                                            }),
                                                            data.data.original_title
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                style: {
                                                                    display: "block"
                                                                },
                                                                children: "Durumu"
                                                            }),
                                                            data.data.status,
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                style: {
                                                                    display: "block"
                                                                },
                                                                children: "Orijinal Dili"
                                                            }),
                                                            data.data.original_language,
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                style: {
                                                                    display: "block"
                                                                },
                                                                children: "Harcanan B\xfct\xe7e"
                                                            }),
                                                            data.data.budget,
                                                            "$"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                style: {
                                                                    display: "block"
                                                                },
                                                                children: "Elde Edilen Gelir"
                                                            }),
                                                            data.data.revenue,
                                                            "$"
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
// This gets called on every request
async function getServerSideProps(context) {
    const https = __webpack_require__(5687);
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });
    // Fetch data from external API
    const url = `https://localhost:7005/api/Movie/getMovieById?movieId=${context.params.id}`;
    const url2 = `https://localhost:7005/api/Movie/getListBySimilirMovie?movieId=${context.params.id}`;
    const res = await fetch(url, {
        agent: httpsAgent
    });
    const data = await res.json();
    const res2 = await fetch(url2, {
        agent: httpsAgent
    });
    const data2 = await res2.json();
    console.log(data);
    console.log(data2);
    // Pass data to the page via props
    return {
        props: {
            data,
            data2
        }
    };
}
function assad(recommendation_waypoint, movieTitle, movie) {
    var recommendation_waypoint_check = false;
    new Waypoint({
        element: recommendation_waypoint,
        handler: function(direction) {
            if (direction == "down" && !recommendation_waypoint_check) {
                $.ajax({
                    url: kendo.format("/{0}/{1}/remote/recommendations", "movie", "1865-pirates-of-the-caribbean-on-stranger-tides"),
                    type: "GET",
                    data: {
                        version: 1,
                        translate: false
                    }
                }).done(function(response) {
                    recommendation_waypoint_check = true;
                    $("#recommendation_waypoint").html(response).hide().fadeIn(1000);
                    initializeScroller(false, "#recommendation_scroller");
                    observer.observe();
                });
            }
        },
        offset: "100%"
    });
}
/* harmony default export */ const _id_ = (SingleMovie);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3969));
module.exports = __webpack_exports__;

})();