"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElementCreate = /** @class */ (function () {
    function ElementCreate(elementTag) {
        this.elementTag = elementTag;
        this.id = "";
        this.classes = [];
        this.children = [];
        this.attributes = [];
        this.elementTag = elementTag;
        this.element = document.createElement(elementTag.toUpperCase());
    }
    ElementCreate.prototype.setElementText = function (text) {
        var span = document.createElement("SPAN");
        if (typeof text === "string") {
            span.innerHTML += text;
        }
        else {
            span.appendChild(text);
        }
        this.children.push(span);
        //span.innerHTML = text;
        //this.children.push(span);
    };
    //set element id
    ElementCreate.prototype.setId = function (id) {
        this.id = id;
    };
    //set multiple classes at a time
    ElementCreate.prototype.setClasses = function (classes) {
        var _this = this;
        classes.forEach(function (classs) {
            _this.classes.push(classs);
        });
    };
    //set a single class
    ElementCreate.prototype.setClass = function (clas) {
        this.classes.push(clas);
    };
    //set multiple attribute
    ElementCreate.prototype.setAttributes = function (attribs) {
        var _this = this;
        attribs.forEach(function (attrib) {
            _this.attributes.push(attrib);
        });
    };
    //set a single attribute
    ElementCreate.prototype.setAttribute = function (attrib) {
        this.attributes.push(attrib);
    };
    //set many children at the same time
    ElementCreate.prototype.setChildren = function (kids) {
        var _this = this;
        kids.forEach(function (kid) {
            _this.children.push(kid);
        });
    };
    //set a single child
    ElementCreate.prototype.setChild = function (kid) {
        this.children.push(kid);
    };
    //create the HTMLElement and return it
    ElementCreate.prototype.getElement = function () {
        var _this = this;
        //attach all the classes
        (this.classes !== null) && this.classes.forEach(function (clas) { return _this.element.classList.add(clas); });
        //attach all the attributes
        (this.attributes !== null) && this.attributes.forEach(function (attrib) { return _this.element.setAttribute(attrib.name, attrib.value); });
        //attach id
        (this.id !== "") && this.element.setAttribute("id", this.id);
        //attach children
        this.children.forEach(function (child) { return _this.element.appendChild(child); });
        //set the siblings
        return this.element;
    };
    return ElementCreate;
}());
//export the Class to be useful
exports.default = ElementCreate;
