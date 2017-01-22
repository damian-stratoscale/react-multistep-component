!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.reactMultistepComponent=t(require("react")):e.reactMultistepComponent=t(e.React)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Step=t.Steps=void 0;var r=n(2),i=o(r),s=n(4),u=o(s);t.Steps=u.default,t.Step=i.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=o(r),s=function(e){var t=e.stepNumber,n=e.isActive,o=e.isSibling,r=e.children;return i.default.createElement("div",{className:"step-item step-"+t+" active-"+n,style:{display:n?"block":"none"}},n||o?r:"")};t.default=s},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(3),p=o(a),l=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currentStep:e.currentStep},n._moveStep=n._moveStep.bind(n),n._printNav=n._printNav.bind(n),n.props.onStepChange(n.state.currentStep),n}return s(t,e),u(t,[{key:"render",value:function(){var e=this.state.currentStep,t=this.props.children;return p.default.createElement("div",{className:"steps-component"},p.default.createElement("ul",{className:"steps-navigator"},this._printStepsLabel(t,e)),p.default.createElement("div",{className:"steps-content"},this._printSteps(t,e)),this._printNav(e,t.length))}},{key:"_getStepState",value:function(e,t){var n="";return e+1<t?n="done-step":e+1===t?n="active-step":e>t&&!this.props.allowStepSkip&&(n="disabled"),n}},{key:"_printStepsLabel",value:function(e,t){var n=this;return p.default.Children.map(e,function(e,o){var r=e.props.customNavigator;return p.default.createElement("li",{key:o,className:n._getStepState(o,t),onClick:function(){n._moveStep(o+1)}},r?r:o+1)})}},{key:"_printSteps",value:function(e,t){var n=this;return p.default.Children.map(e,function(e,o){var r=o+1,i=t+1===r||t-1===r,s={key:o,index:o,stepNumber:r,isActive:t===r,isSibling:!n.props.mountOnlySiblings||i};return p.default.createElement(e.type,s,e.props.children)})}},{key:"_printNav",value:function(e,t){var n=this;return p.default.createElement("div",{className:"steps-nav"},p.default.createElement("button",{className:"steps-nav-cancel",onClick:function(){n._cancelStep()}},this.props.cancelButton),e>1?p.default.createElement("button",{className:"steps-nav-prev",onClick:function(){n._moveStep(e-1)},disabled:1===e},this.props.prevButton):null,e===t?p.default.createElement("button",{className:"steps-nav-finish",onClick:function(){n._finishStep(e)}},this.props.finishButton):p.default.createElement("button",{className:"steps-nav-next",onClick:function(){n._moveStep(e+1)}},this.props.nextButton),e<t&&Boolean(this.props.showFinish)?p.default.createElement("button",{className:"steps-nav-finish",onClick:function(){n._finishStep(e)}},this.props.intermediateFinishButton?this.props.intermediateFinishButton:this.props.finishButton):null)}},{key:"_moveStep",value:function(e){(this.props.allowStepSkip||this.state.currentStep>=e-1)&&this.props.stepShouldChange(this.state.currentStep,e)&&(this.setState({currentStep:e}),this.props.onStepChange(e))}},{key:"_finishStep",value:function(e){this.props.stepShouldChange(this.state.currentStep,e)&&this.props.onFinish()}},{key:"_cancelStep",value:function(){this.props.onCancel()}}]),t}(p.default.Component);t.default=l,l.propTypes={currentStep:p.default.PropTypes.number,stepShouldChange:p.default.PropTypes.func,onStepChange:p.default.PropTypes.func,onFinish:p.default.PropTypes.func,onCancel:p.default.PropTypes.func,mountOnlySiblings:p.default.PropTypes.bool,allowStepSkip:p.default.PropTypes.bool},l.defaultProps={currentStep:1,stepShouldChange:function(){return!0},onStepChange:function(){},onFinish:function(){},onCancel:function(){},prevButton:"Prev",nextButton:"Next",finishButton:"Finish",intermediateFinishButton:null,cancelButton:"Cancel",showFinish:!1,mountOnlySiblings:!1,allowStepSkip:!1}}])});