define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const circle_border = packages__flutter__src__painting___network_image_web.src__painting__circle_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const background = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let CustomClipperOfPath = () => (CustomClipperOfPath = dart.constFn(proxy_box.CustomClipper$(ui.Path)))();
  let CustomClipperOfRect = () => (CustomClipperOfRect = dart.constFn(proxy_box.CustomClipper$(ui.Rect)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 27,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 55,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C5() {
      return C5 = dart.constList([], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomPadding",
        [_Location_column]: 7,
        [_Location_line]: 7,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 8,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 6,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipper",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipper",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 24,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 24,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/background.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294940740.0
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294871123.0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294799975.0
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], ui.Color);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284148465.0
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287559642.0
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], ui.Color);
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C5;
  let C4;
  let C8;
  let C9;
  let C7;
  let C6;
  let C10;
  let C13;
  let C12;
  let C11;
  let C14;
  let C15;
  let C16;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C28;
  let C25;
  let C24;
  background.Background = class Background extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({resizeToAvoidBottomPadding: false, backgroundColor: colors.Colors.white, body: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Stack.new({alignment: alignment.Alignment.bottomCenter, children: JSArrayOfWidget().of([new image.Image.asset("assets/collaboration.png", {width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 1.5, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new background.WavyHeader.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new basic.Expanded.new({child: new container.Container.new({$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new basic.Stack.new({alignment: alignment.Alignment.bottomLeft, children: JSArrayOfWidget().of([new background.WavyFooter.new({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new background.CirclePink.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new background.CircleYellow.new({$creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (background.Background.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    background.Background.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = background.Background.prototype;
  dart.addTypeTests(background.Background);
  dart.setMethodSignature(background.Background, () => ({
    __proto__: dart.getMethods(background.Background.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(background.Background, "package:flutter_ui_bundle/background.dart");
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C34;
  let C33;
  background.WavyHeader = class WavyHeader extends framework.StatelessWidget {
    build(context) {
      return new basic.ClipPath.new({clipper: new background.TopWaveClipper.new(), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: background.orangeGradients, begin: alignment.Alignment.topLeft, end: alignment.Alignment.center})}), height: dart.notNull(media_query.MediaQuery.of(context).size.height) / 2.5, $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
  };
  (background.WavyHeader.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    background.WavyHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = background.WavyHeader.prototype;
  dart.addTypeTests(background.WavyHeader);
  dart.setMethodSignature(background.WavyHeader, () => ({
    __proto__: dart.getMethods(background.WavyHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(background.WavyHeader, "package:flutter_ui_bundle/background.dart");
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C42;
  let C41;
  background.WavyFooter = class WavyFooter extends framework.StatelessWidget {
    build(context) {
      return new basic.ClipPath.new({clipper: new background.FooterWaveClipper.new(), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: background.aquaGradients, begin: alignment.Alignment.center, end: alignment.Alignment.bottomRight})}), height: dart.notNull(media_query.MediaQuery.of(context).size.height) / 3, $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
  };
  (background.WavyFooter.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    background.WavyFooter.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = background.WavyFooter.prototype;
  dart.addTypeTests(background.WavyFooter);
  dart.setMethodSignature(background.WavyFooter, () => ({
    __proto__: dart.getMethods(background.WavyFooter.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(background.WavyFooter, "package:flutter_ui_bundle/background.dart");
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C52;
  let C49;
  let C48;
  let C55;
  let C56;
  let C54;
  let C53;
  background.CirclePink = class CirclePink extends framework.StatelessWidget {
    build(context) {
      return new basic.Transform.translate({offset: new ui.Offset.new(-70.0, 90.0), child: new material.Material.new({color: colors.Colors.pink, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(120.0), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), shape: new circle_border.CircleBorder.new({side: new borders.BorderSide.new({color: colors.Colors.white, width: 15.0})}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
    }
  };
  (background.CirclePink.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    background.CirclePink.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = background.CirclePink.prototype;
  dart.addTypeTests(background.CirclePink);
  dart.setMethodSignature(background.CirclePink, () => ({
    __proto__: dart.getMethods(background.CirclePink.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(background.CirclePink, "package:flutter_ui_bundle/background.dart");
  let C59;
  let C58;
  let C57;
  let C62;
  let C63;
  let C64;
  let C61;
  let C60;
  let C67;
  let C68;
  let C66;
  let C65;
  background.CircleYellow = class CircleYellow extends framework.StatelessWidget {
    build(context) {
      return new basic.Transform.translate({offset: new ui.Offset.new(0.0, 210.0), child: new material.Material.new({color: colors.Colors.yellow, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(140.0), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), shape: new circle_border.CircleBorder.new({side: new borders.BorderSide.new({color: colors.Colors.white, width: 15.0})}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
    }
  };
  (background.CircleYellow.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    background.CircleYellow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = background.CircleYellow.prototype;
  dart.addTypeTests(background.CircleYellow);
  dart.setMethodSignature(background.CircleYellow, () => ({
    __proto__: dart.getMethods(background.CircleYellow.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(background.CircleYellow, "package:flutter_ui_bundle/background.dart");
  background.TopWaveClipper = class TopWaveClipper extends proxy_box.CustomClipper$(ui.Path) {
    getClip(size) {
      let path = ui.Path.new();
      path.lineTo(0.0, size.height);
      let firstControlPoint = new ui.Offset.new(dart.notNull(size.width) / 7, dart.notNull(size.height) - 30);
      let firstEndPoint = new ui.Offset.new(dart.notNull(size.width) / 6, dart.notNull(size.height) / 1.5);
      path.quadraticBezierTo(firstControlPoint.dx, firstControlPoint.dy, firstEndPoint.dx, firstEndPoint.dy);
      let secondControlPoint = new ui.Offset.new(dart.notNull(size.width) / 5, dart.notNull(size.height) / 4);
      let secondEndPoint = new ui.Offset.new(dart.notNull(size.width) / 1.5, dart.notNull(size.height) / 5);
      path.quadraticBezierTo(secondControlPoint.dx, secondControlPoint.dy, secondEndPoint.dx, secondEndPoint.dy);
      let thirdControlPoint = new ui.Offset.new(dart.notNull(size.width) - dart.notNull(size.width) / 9, dart.notNull(size.height) / 6);
      let thirdEndPoint = new ui.Offset.new(size.width, 0.0);
      path.quadraticBezierTo(thirdControlPoint.dx, thirdControlPoint.dy, thirdEndPoint.dx, thirdEndPoint.dy);
      path.lineTo(size.width, 0.0);
      path.close();
      return path;
    }
    shouldReclip(oldClipper) {
      CustomClipperOfPath()._check(oldClipper);
      return false;
    }
  };
  (background.TopWaveClipper.new = function() {
    background.TopWaveClipper.__proto__.new.call(this);
    ;
  }).prototype = background.TopWaveClipper.prototype;
  dart.addTypeTests(background.TopWaveClipper);
  dart.setMethodSignature(background.TopWaveClipper, () => ({
    __proto__: dart.getMethods(background.TopWaveClipper.__proto__),
    getClip: dart.fnType(ui.Path, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(background.TopWaveClipper, "package:flutter_ui_bundle/background.dart");
  background.FooterWaveClipper = class FooterWaveClipper extends proxy_box.CustomClipper$(ui.Path) {
    getClip(size) {
      let path = ui.Path.new();
      path.moveTo(size.width, 0.0);
      path.lineTo(size.width, size.height);
      path.lineTo(0.0, size.height);
      path.lineTo(0.0, dart.notNull(size.height) - 60);
      let secondControlPoint = new ui.Offset.new(dart.notNull(size.width) - dart.notNull(size.width) / 6, size.height);
      let secondEndPoint = new ui.Offset.new(size.width, 0.0);
      path.quadraticBezierTo(secondControlPoint.dx, secondControlPoint.dy, secondEndPoint.dx, secondEndPoint.dy);
      return path;
    }
    shouldReclip(oldClipper) {
      CustomClipperOfPath()._check(oldClipper);
      return false;
    }
  };
  (background.FooterWaveClipper.new = function() {
    background.FooterWaveClipper.__proto__.new.call(this);
    ;
  }).prototype = background.FooterWaveClipper.prototype;
  dart.addTypeTests(background.FooterWaveClipper);
  dart.setMethodSignature(background.FooterWaveClipper, () => ({
    __proto__: dart.getMethods(background.FooterWaveClipper.__proto__),
    getClip: dart.fnType(ui.Path, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(background.FooterWaveClipper, "package:flutter_ui_bundle/background.dart");
  background.YellowCircleClipper = class YellowCircleClipper extends proxy_box.CustomClipper$(ui.Rect) {
    getClip(size) {
      return null;
    }
    shouldReclip(oldClipper) {
      CustomClipperOfRect()._check(oldClipper);
      return false;
    }
  };
  (background.YellowCircleClipper.new = function() {
    background.YellowCircleClipper.__proto__.new.call(this);
    ;
  }).prototype = background.YellowCircleClipper.prototype;
  dart.addTypeTests(background.YellowCircleClipper);
  dart.setMethodSignature(background.YellowCircleClipper, () => ({
    __proto__: dart.getMethods(background.YellowCircleClipper.__proto__),
    getClip: dart.fnType(ui.Rect, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(background.YellowCircleClipper, "package:flutter_ui_bundle/background.dart");
  const Color_value = dart.privateName(ui, "Color.value");
  let C70;
  let C71;
  let C72;
  let C69;
  let C74;
  let C75;
  let C73;
  dart.defineLazy(background, {
    /*background.orangeGradients*/get orangeGradients() {
      return C69 || CT.C69;
    },
    /*background.aquaGradients*/get aquaGradients() {
      return C73 || CT.C73;
    }
  });
  dart.trackLibraries("packages/flutter_ui_bundle/background", {
    "package:flutter_ui_bundle/background.dart": background
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["background.dart"],"names":[],"mappings":"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","file":"background.ddc.js"}');
  // Exports:
  return {
    background: background
  };
});

//# sourceMappingURL=background.ddc.js.map
