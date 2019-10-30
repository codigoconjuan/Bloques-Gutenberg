/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bloque/index.js":
/*!*****************************!*\
  !*** ./src/bloque/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcgdl/integrante', {
  title: 'Integrante Equipo',
  icon: 'admin-users',
  category: 'layout',
  // common, formatting, layout, widgets, embed
  attributes: {
    nombre: {
      type: 'string'
    },
    descripcion: {
      type: 'string',
      source: 'html',
      selector: '.descripcion'
    },
    imagen: {
      type: 'string',
      selector: '.imagen-integrante'
    }
  },
  edit: function edit(props) {
    // Revisar contenido de props
    console.log(props); // Extraer Contenido de Props

    var _props$attributes = props.attributes,
        nombre = _props$attributes.nombre,
        descripcion = _props$attributes.descripcion,
        imagen = _props$attributes.imagen,
        setAttributes = props.setAttributes; // Funciones para leer los contenidos de nuestros componentes

    var onChangeNombre = function onChangeNombre(nuevoNombre) {
      setAttributes({
        nombre: nuevoNombre
      });
    };

    var onChangeTexto = function onChangeTexto(nuevoTexto) {
      setAttributes({
        descripcion: nuevoTexto
      });
    };

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagen: nuevaImagen.sizes.full.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "integrante"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Agregar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      class: "imagen-integrante",
      src: imagen
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "nombre"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
      placeholder: "Agrega el Nombre",
      onChange: onChangeNombre,
      value: nombre,
      className: "nombre-integrante"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "descripcion"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      placeholder: "Texto Integrante",
      onChange: onChangeTexto,
      value: descripcion
    })));
  },
  save: function save(props) {
    console.log(props); // Extraer Contenido de Props

    var _props$attributes2 = props.attributes,
        nombre = _props$attributes2.nombre,
        descripcion = _props$attributes2.descripcion,
        imagen = _props$attributes2.imagen;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "integrante"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      class: "imagen-integrante",
      src: imagen
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "nombre"
    }, nombre), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "descripcion"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      value: descripcion
    })));
  }
});

/***/ }),

/***/ "./src/equipo/index.js":
/*!*****************************!*\
  !*** ./src/equipo/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




var TEMPLATE = [['core/heading', {
  placeholder: 'Titulo de Sección'
}], ['core/columns', {
  columns: 3
}, [['core/column', {}, [['wcgdl/integrante']]], ['core/column', {}, [['wcgdl/integrante']]], ['core/column', {}, [['wcgdl/integrante']]]]]];
var backgroundColors = [{
  name: 'Azul',
  slug: 'azul',
  color: '#0073a8'
}, {
  name: 'Azul Oscuro',
  slug: 'azul-oscuro',
  color: '#005075'
}, {
  name: 'Negro',
  slug: 'negro',
  color: '#111'
}, {
  name: 'Gris',
  slug: 'gris',
  color: '#767676'
}, {
  name: 'Blanco',
  slug: 'blanco',
  color: '#FFF'
}];
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wcgdl/equipo', {
  title: 'Equipo de Trabajo',
  icon: 'welcome-widgets-menus',
  category: 'layout',
  attributes: {
    colorFondo: {
      type: 'string'
    },
    colorHex: {
      type: 'string'
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  edit: function edit(props) {
    console.log(props); // Extraer el contenido desde props

    var _props$attributes = props.attributes,
        colorFondo = _props$attributes.colorFondo,
        colorHex = _props$attributes.colorHex,
        setAttributes = props.setAttributes;

    var onChangeColorFondo = function onChangeColorFondo(nuevoColor) {
      var color = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["getColorObjectByColorValue"])(backgroundColors, nuevoColor);
      var nombreColor = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["getColorClassName"])('text', color.name);
      setAttributes({
        colorFondo: nombreColor
      });
      setAttributes({
        colorHex: nuevoColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: 'Color de Fondo',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color de Fondo"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      onChange: onChangeColorFondo,
      value: colorHex
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: colorFondo
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenedor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      template: TEMPLATE,
      templateLock: "all"
    }))));
  },
  save: function save(props) {
    // Extraer el contenido desde props
    var colorFondo = props.attributes.colorFondo;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: colorFondo
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenedor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null)));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bloque__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloque */ "./src/bloque/index.js");
/* harmony import */ var _equipo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipo */ "./src/equipo/index.js");



/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map