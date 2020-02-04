define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_ui_bundle/inputWidget', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter_ui_bundle__inputWidget, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image_icon = packages__flutter__src__widgets__actions.src__widgets__image_icon;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const visibility = packages__flutter__src__widgets__actions.src__widgets__visibility;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const shape_decoration = packages__flutter__src__painting___network_image_web.src__painting__shape_decoration;
  const circle_border = packages__flutter__src__painting___network_image_web.src__painting__circle_border;
  const gradient$ = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const inputWidget = packages__flutter_ui_bundle__inputWidget.inputWidget;
  const colors = packages__flutter__material.src__material__colors;
  const loginUi = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToPadding = () => (BuildContextToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "topRight",
        [_Location_column]: 33,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomRight",
        [_Location_column]: 39,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 33,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 33,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 33,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 8,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 7,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 19,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 19,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "visible",
        [_Location_column]: 13,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 18,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/loginUi.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279164626.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278427902.0
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], ui.Color);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294940997.0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294729846.0
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], ui.Color);
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C19;
  let C16;
  let C15;
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C25;
  let C24;
  let C29;
  let C30;
  let C31;
  let C28;
  let C27;
  let C34;
  let C35;
  let C36;
  let C33;
  let C32;
  let C39;
  let C38;
  let C37;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C53;
  let C52;
  let C57;
  let C56;
  let C55;
  let C60;
  let C59;
  let C58;
  loginUi.Login = class Login extends framework.StatelessWidget {
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: dart.notNull(media_query.MediaQuery.of(context).size.height) / 2.3}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Column.new({children: JSArrayOfWidget().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 40.0, bottom: 10.0}), child: new text.Text.new("Email", {style: new text_style.TextStyle.new({fontSize: 16.0, color: new ui.Color.new(4288256666)}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Stack.new({alignment: alignment.Alignment.bottomRight, children: JSArrayOfWidget().of([new inputWidget.InputWidget.new(30.0, 0.0, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 50.0}), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 40.0}), child: new text.Text.new("Enter your email id to continue...", {textAlign: ui.TextAlign.end, style: new text_style.TextStyle.new({color: new ui.Color.new(4288716960), fontSize: 12.0}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new container.Container.new({padding: new edge_insets.EdgeInsets.all(10.0), decoration: new shape_decoration.ShapeDecoration.new({shape: new circle_border.CircleBorder.new(), gradient: new gradient$.LinearGradient.new({colors: loginUi.signInGradients, begin: alignment.Alignment.topLeft, end: alignment.Alignment.bottomRight})}), child: new image_icon.ImageIcon.new(new image_resolution.AssetImage.new("assets/ic_forward.png"), {size: 40.0, color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32})]), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({bottom: 50.0}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), loginUi.roundedRectButton("Let's get Started", loginUi.signInGradients, false), loginUi.roundedRectButton("Create an Account", loginUi.signUpGradients, false)]), $creationLocationd_0dea112b090073317d4: C55 || CT.C55})]), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
  };
  (loginUi.Login.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    loginUi.Login.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = loginUi.Login.prototype;
  dart.addTypeTests(loginUi.Login);
  dart.setMethodSignature(loginUi.Login, () => ({
    __proto__: dart.getMethods(loginUi.Login.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(loginUi.Login, "package:flutter_ui_bundle/loginUi.dart");
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C66;
  let C65;
  let C74;
  let C75;
  let C76;
  let C73;
  let C72;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C92;
  let C90;
  let C89;
  let C95;
  let C94;
  let C93;
  loginUi.roundedRectButton = function roundedRectButton(title, gradient, isEndIconVisible) {
    return new basic.Builder.new({builder: dart.fn(mContext => new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({bottom: 10.0}), child: new basic.Stack.new({alignment: new alignment.Alignment.new(1.0, 0.0), children: JSArrayOfWidget().of([new container.Container.new({alignment: alignment.Alignment.center, width: dart.notNull(media_query.MediaQuery.of(mContext).size.width) / 1.7, decoration: new shape_decoration.ShapeDecoration.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), gradient: new gradient$.LinearGradient.new({colors: gradient, begin: alignment.Alignment.topLeft, end: alignment.Alignment.bottomRight})}), child: new text.Text.new(title, {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 18.0, fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), padding: new edge_insets.EdgeInsets.only({top: 16.0, bottom: 16.0}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new visibility.Visibility.new({visible: isEndIconVisible, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 10.0}), child: new image_icon.ImageIcon.new(new image_resolution.AssetImage.new("assets/ic_forward.png"), {size: 30.0, color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81})]), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), BuildContextToPadding()), $creationLocationd_0dea112b090073317d4: C93 || CT.C93});
  };
  const Color_value = dart.privateName(ui, "Color.value");
  let C97;
  let C98;
  let C96;
  let C100;
  let C101;
  let C99;
  dart.defineLazy(loginUi, {
    /*loginUi.signInGradients*/get signInGradients() {
      return C96 || CT.C96;
    },
    /*loginUi.signUpGradients*/get signUpGradients() {
      return C99 || CT.C99;
    }
  });
  dart.trackLibraries("packages/flutter_ui_bundle/loginUi", {
    "package:flutter_ui_bundle/loginUi.dart": loginUi
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["loginUi.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,iCACa,sBAChB,gCAEiB,sCAA6C,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,8DAEhE,gCACoB,sBAEhB,0CACyC,yCACrB,sBAChB,gCACsB,uCAAW,cAAY,eACpC,kBACL,iBACO,wCAAoB,aAAW,iBAAM,6HAGhD,gCACuB,2CACH,sBAChB,gCAAY,MAAM,+DAClB,gCACwB,wCAAY,eACzB,6BACa,sBAChB,+BACW,gCACW,sCAAU,eACvB,kBACL,kDACqB,yBACd,qCAAiB,iBAAM,uBACpB,mLAGd,sCACsB,+BAAI,mBACZ,iDACH,gDACG,0CACE,gCACS,kCACF,4CAEd,6BACL,oCAAW,iCACL,aACQ,iXASlC,gCACsB,yCAAa,iEAEnC,0BAAkB,qBAAqB,yBAAiB,QACxD,0BAAkB,qBAAqB,yBAAiB;IAKlE;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yDAGW,OAAmB,UAAe;AAC3C,UAAO,iCAAiB,QAAc,YAC7B,gCACe,yCAAa,eAC1B,gCACM,4BAAU,KAAK,gBACR,sBAChB,wCACuB,mCACqB,aAAxB,AAAa,AAAK,0BAAf,QAAQ,gBAAe,iBAChC,iDACH,uEACwB,wCAAS,mBAC9B,0CACE,QAAQ,SACC,kCACF,4CAEd,kBAAK,KAAK,UACN,qCACW,+BACJ,kBACa,wFACX,sCAAU,cAAY,iEAE5C,wCACW,gBAAgB,SAClB,gCACiB,wCAAY,eACzB,6BACL,oCAAW,iCACL,aACQ;EAOhC;;;;;;;;;MAEkB,uBAAe;;;MAKf,uBAAe","file":"loginUi.ddc.js"}');
  // Exports:
  return {
    loginUi: loginUi
  };
});

//# sourceMappingURL=loginUi.ddc.js.map
