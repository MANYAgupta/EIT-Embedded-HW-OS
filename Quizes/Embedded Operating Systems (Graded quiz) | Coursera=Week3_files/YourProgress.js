define("bundles/ondemand/components/endOfCourse/components/YourProgress",["require","exports","module","react","vendor/cnpm/fluxible.v0-4/addons/connectToStores","classnames","bundles/ondemand/models/S12n","pages/open-course/common/constants","bundles/ondemand/components/endOfCourse/components/NextCourseButton","css!./__styles__/YourProgress"],function(require,exports,module){"use strict";function _defaults(e,r){for(var o=Object.getOwnPropertyNames(r),t=0;t<o.length;t++){var n=o[t],s=Object.getOwnPropertyDescriptor(r,n);s&&s.configurable&&void 0===e[n]&&Object.defineProperty(e,n,s)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,n,e=require("react"),r=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),s=require("classnames"),o=require("bundles/ondemand/models/S12n"),l=require("pages/open-course/common/constants"),a=require("bundles/ondemand/components/endOfCourse/components/NextCourseButton");require("css!./__styles__/YourProgress");var c=(n=t=function(t){function YourProgress(){return _classCallCheck(this,YourProgress),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(YourProgress,t),YourProgress.prototype.render=function render(){var t=this.props.s12n,n=t.getNextIncompleteCourse(),r=n?n.get("id"):null;return e.createElement("div",{className:"rc-YourProgress card-rich-interaction"},e.createElement("h3",{className:"headline-3-text"},t.getName()),t.s12n.get("courses").map(function(t,i){var o=t.get("memberships").last(),n=o&&o.hasPassed()&&o.getCourseGradeString(),c=s("percent",{"color-hint-text":!n}),l=s("cif-check",{hide:!n,show:!!n});return t.get("id")===r?e.createElement("div",{className:"course-entry next-course horizontal-box align-items-spacebetween"},e.createElement("div",{className:"horizontal-box align-items-left flex-1"},e.createElement("div",{className:"checkmark"},e.createElement("i",{className:l})),e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"body-2-text"},t.getName()),e.createElement("p",{className:"course-description"},t.get("description")))),e.createElement("div",{className:"vertical-box align-items-right"},e.createElement("div",{className:c},n||"--","%"),e.createElement(a,{nextCourse:t}))):e.createElement("div",{className:"course-entry horizontal-box align-items-spacebetween"},e.createElement("div",null,e.createElement("span",{className:"checkmark"},e.createElement("i",{className:l})),e.createElement("span",{className:"body-2-text"},t.getName())),e.createElement("div",{className:c},n||"--","%"))}))},YourProgress}(e.Component),t.propTypes={s12n:e.PropTypes.instanceOf(o).isRequired},n);module.exports=r(c,["S12nStore"],function(e,n){var t=e.S12nStore;return{s12n:t.s12n}})});