(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"/n9k":function(module,exports,t){"use strict";var e=t("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e(t("PTN7")),a=e(t("Ji/E")),l,o=function supportsNativeTextTracks(){var t,e=n.default.getTech("html5");if(!e.TEST_VID||!a.default.browser)return!1;return(t=!!e.TEST_VID.textTracks)&&e.TEST_VID.textTracks.length>0&&(t="number"!=typeof e.TEST_VID.textTracks[0].mode),!t||"onremovetrack"in e.TEST_VID.textTracks||(t=!1),t};exports.default=o},"/xeL":function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("PJYZ")),a=e(t("VbXa")),l=e(t("FMcB")),o=e(t("PTN7")),s=e(t("Ji/E")),u=e(t("oYk5")),i=e(t("VYij")),r=function(t){function PlaybackRateMenuSection(e,a){var l;return(l=t.call(this,e,a)||this).options_={name:"playbackRateMenuSection"},l.playbackRates_=[.75,1,1.25,1.5,1.75,2],(0,u.default)(l.el_).find('[data-js="c-playback-rate-minus-button"]').click(l.decreasePlaybackRate.bind((0,n.default)(l))),(0,u.default)(l.el_).find('[data-js="c-playback-rate-plus-button"]').click(l.increasePlaybackRate.bind((0,n.default)(l))),l.updateVisibility(),l.player_.on("ratechange",o.default.bind((0,n.default)(l),l.changeRateText)),l.player_.on("loadstart",o.default.bind((0,n.default)(l),l.updateVisibility)),l.changeRateText.call((0,n.default)(l)),l}(0,a.default)(PlaybackRateMenuSection,t);var e=PlaybackRateMenuSection.prototype;return e.name=function name(){return"PlaybackRateMenuSection"},e.createEl=function createEl(t,e){return(0,u.default)((0,l.default)())[0]},e.updateVisibility=function updateVisibility(){this.isPlaybackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},e.isPlaybackRateSupported=function isPlaybackRateSupported(){return this.player_.options().playbackRates&&this.player().tech_&&this.player().tech_.featuresPlaybackRate&&!s.default.isAndroid},e.changeRateText=function changeRateText(){var t=this.player_.playbackRate().toFixed(2)+"x";(0,u.default)(this.el_).find('[data-js="c-playback-rate-text"]').text(t)},e.getRateIndex=function getRateIndex(){return i.default.indexOf(this.playbackRates_,this.player_.playbackRate()||1)},e.decreasePlaybackRate=function decreasePlaybackRate(){this.player_.playbackRate()!==i.default.first(this.playbackRates_)&&this.player_.options().playbackRates&&this.player_.playbackRate(this.playbackRates_[this.getRateIndex()-1])},e.increasePlaybackRate=function increasePlaybackRate(){this.player_.playbackRate()!==i.default.last(this.playbackRates_)&&this.player_.options().playbackRates&&this.player_.playbackRate(this.playbackRates_[this.getRateIndex()+1])},PlaybackRateMenuSection}(o.default.getComponent("MenuItem"));o.default.registerComponent("PlaybackRateMenuSection",r)},"1+fi":function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("MVZn")),a=e(t("VbXa")),l=e(t("PTN7")),o=e(t("3g8Y"));t("Zg9a");var s=function(t){function SubtitlesOffMenuItem(e,a){var l;return(l=t.call(this,e,(0,n.default)({},a,{track:{kind:"subtitles",player:e,label:(0,o.default)({controlName:"subtitlesOffLabel"}),dflt:!1,mode:!1},selectable:!0}))||this).selected(!0),l}return(0,a.default)(SubtitlesOffMenuItem,t),SubtitlesOffMenuItem}(l.default.getComponent("SubtitlesMenuItem"));l.default.registerComponent("SubtitlesOffMenuItem",s)},"2UcY":function(module,exports,t){var e,n,a,l;a=window,l=function(t,e,n){var a=function template(n){var a=[],l,o=n||{};return function(e){a.push('<div tabindex="0" aria-label="Autoplay" class="c-autoplay-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+t.escape(null==(l=e("Autoplay"))?"":l)+'</h3></div><div class="c-menu-divider"></div><div class="c-autoplay-button-container"><button data-js="autoplay-off-button" aria-label="Autoplay Off" class="c-autoplay-button c-autoplay-off-button">'+t.escape(null==(l=e("Off"))?"":l)+'</button><button data-js="autoplay-on-button" aria-label="Autoplay On" class="c-autoplay-button c-autoplay-on-button">'+t.escape(null==(l=e("On"))?"":l)+"</button></div></div>")}.call(this,"_t"in o?o._t:void 0!==e?e:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("O+Uj")],void 0===(n=function(t,e){var n;return l(t,e,n)}.apply(exports,e))||(module.exports=n)},"3Ivv":function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("PTN7")),l=e(t("oYk5")),o=function(t){function CVolumeMenuButton(){return t.apply(this,arguments)||this}var e;return(0,n.default)(CVolumeMenuButton,t),CVolumeMenuButton.prototype.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=(0,l.default)(e);return n.attr("data-js","video-mute-control"),n.addClass("c-video-control c-volume-menu-button vjs-menu-button-popup"),e},CVolumeMenuButton}(a.default.getComponent("VolumePanel"));a.default.registerComponent("CVolumeMenuButton",o)},"3g8Y":function(module,exports,t){var e,n,a,l;a=window,l=function(t,e,n){var a=function template(n){var a=[],l,o=n||{};return function(e,n,o){switch(e){case"countdown":a.push('<div class="vjs-control c-countdown"><span class="c-countdown-text"><em class="cif-spin cif-refresh"></em></span></div>');break;case"subtitlesMenuItem":a.push('<em class="cif-lg cif-fw c-subtitles-menu-item-selected-icon"></em><span data-js="c-subtitles-menu-item-label" class="c-subtitles-menu-item-label caption-text">'+t.escape(null==(l=n(o))?"":l)+"</span>");break;case"subtitlesOffLabel":a.push(""+t.escape(null==(l=n("Subtitles Off"))?"":l));break;case"subtitlesMenuTitle":a.push('<h3 class="vjs-menu-title headline-1-text menu-section-title">'+t.escape(null==(l=n("Subtitles"))?"":l)+"</h3>");break;case"menuDivider":a.push('<div class="c-menu-divider"></div>')}}.call(this,"controlName"in o?o.controlName:"undefined"!=typeof controlName?controlName:void 0,"_t"in o?o._t:void 0!==e?e:void 0,"label"in o?o.label:"undefined"!=typeof label?label:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("Kq1R")],void 0===(n=function(t,e){var n;return l(t,e,n)}.apply(exports,e))||(module.exports=n)},"4nMq":function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("oYk5")),l=e(t("VYij")),o=e(t("PTN7")),s=e(t("3g8Y")),u=e(t("u5HK"));t("1+fi"),t("NjGn"),t("Zg9a");var i=38,r=40,c=13,d=32,f="vjs-selected",p="vjs-hidden",h=function(t){function SubtitlesMenuButton(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=t.call(this,e,a)||this;var o=(0,u.default)("Subtitles");n.menuButton_.el_.innerHTML='<span class="cif-2x cif-fw cif-captions"></span>',n.menuButton_.el_.innerHTML+='<span class="vjs-control-text">'.concat(o,"</span>"),n.menuButton_.el_.setAttribute("aria-label",o),n.menuButton_.addClass("vjs-control"),n.menuButton_.addClass("c-vjs-button"),n.menuButton_.el_.removeAttribute("aria-live");var s=a.defaultSubtitleLanguage;return s?n.menu.showSubtitleOffItem():n.menu.hideSubtitleOffItem(),n.one(e,"ready",function(){(0,l.default)(e.textTracks()).forEach(function(t){t.language===s?t.mode="showing":t.mode="hidden"})}),n}(0,n.default)(SubtitlesMenuButton,t);var e=SubtitlesMenuButton.prototype;return e.createEl=function createEl(e,n){var l=t.prototype.createEl.call(this),o=(0,a.default)(l);return o.attr("data-js","subtitles-menu-button"),o.addClass("c-video-control c-subtitles-control vjs-menu-button-popup"),l},e.handleKeyPress=function handleKeyPress(t){if([i,r,c,d].includes(t.keyCode)){var e=this.menu,n=(0,l.default)(e.children_).filter(function(t){return!t.hasClass("vjs-hidden")}),a;(0,l.default)(n).find(function(t){return t.hasClass("vjs-selected")})||(e.showSubtitleOffItem(),e.children()[0].selected(!0)),this.el().classList.add("selected"),e.lockShowing(),e.focus(),t.preventDefault(),t.stopPropagation()}},e.handleClick=function handleClick(t){this.player_.controlBar.subtitlesMenuButton.menu.unlockShowing();var e=this.player_.textTracks(),n=(0,l.default)(e).findWhere({mode:"showing"});if(n)n.mode="disabled";else if(e.length){var a=(0,l.default)(e).findWhere({default:!0});if(a)a.mode="showing";else{var o=(0,l.default)(e).findWhere({language:"en"});o?o.mode="showing":e[0].mode="showing"}}},e.createMenu=function createMenu(){var t,e=new(o.default.getComponent("SubtitlesMenu"))(this.player_,this.options_.subtitlesMenu);this.items=this.createItems(),this.items.forEach(function(t){return e.addItem(t)});var n=e.contentEl().children[0]||null;return e.contentEl().insertBefore((0,a.default)((0,s.default)({controlName:"subtitlesMenuTitle"}))[0],n),e.contentEl().insertBefore((0,a.default)((0,s.default)({controlName:"menuDivider"}))[0],n),e},e.createItems=function createItems(){var t,e=new(o.default.getComponent("SubtitlesOffMenuItem"))(this.player_,{kind:"subtitles",id:"subtitles-off"});e.hide();var n=o.default.getComponent("SubtitlesMenuItem");return[e].concat(l.default.chain(this.player_.textTracks()).filter(function(t){return"subtitles"===t.kind}).sortBy("label").map(function(t){return new n(this.player_,{track:t,selectable:!0})},this).value())},SubtitlesMenuButton}(o.default.getComponent("SubtitlesButton"));o.default.registerComponent("SubtitlesMenuButton",h)},BQhx:function(module,exports,t){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},FMcB:function(module,exports,t){var e,n,a,l;a=window,l=function(t,e,n){var a=function template(n){var a=[],l,o=n||{};return function(e){a.push('<div tabindex="0" aria-label="Playback Rate" class="c-playback-rate-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+t.escape(null==(l=e("Playback Rate"))?"":l)+'</h3></div><div class="c-menu-divider"></div><div class="c-playback-rate-button-container"><button data-js="c-playback-rate-minus-button" aria-label="Playback Rate Minus" class="c-playback-rate-button"><em class="cif-minus"></em></button><span data-js="c-playback-rate-text" class="c-playback-rate-text"></span><button data-js="c-playback-rate-plus-button" aria-label="Playback Rate Plus" class="c-playback-rate-button"><em class="cif-plus"></em></button></div></div>')}.call(this,"_t"in o?o._t:void 0!==e?e:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("tioU")],void 0===(n=function(t,e){var n;return l(t,e,n)}.apply(exports,e))||(module.exports=n)},HX4l:function(module,exports,t){"use strict";var e=t("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e(t("oYk5")),a=e(t("VYij")),l=e(t("PTN7")),o=e(t("/n9k")),s=e(t("yiR1"));t("xbf0"),t("rQOG"),t("PRI2"),t("t9gw"),t("PTu/"),t("4nMq"),t("3Ivv"),t("uvZC");var u=function getFlexDefaults(t){return{fluid:!0,controls:!0,html5:{nativeTextTracks:(0,o.default)()},children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},circlePlayButton:{},controlBar:{children:["progressControl","cPlayToggle","currentTimeDisplay","timeDivider","durationDisplay",{name:"subtitlesMenuButton",defaultSubtitleLanguage:t.defaultSubtitleLanguage},{name:"cVolumeMenuButton",children:["cMuteToggle"],inline:!1,vertical:!0},"settingsMenuButton","cFullscreenToggle"]},errorDisplay:{},textTrackSettings:{}}}},i=function attachListeners(t){t.one("play",function(){t.autoplay()&&(0,n.default)(t.el_).focus()})},r,c=function VideoPlayer(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,a.default)(e).defaults(u(e)),o=(0,l.default)(t,n);return i(o),o.emitter||(o.emitter=s.default.emitter()),o.setupHeartbeatListener(),o.currentTrack=function(){return(0,a.default)(o.textTracks()).find(function(t){return"showing"===t.mode})},o};exports.default=c},HwIc:function(module,exports,t){var e,n,a,l;a=window,l=function(t,e,n){var a=function template(n){var a=[],l,o=n||{};return function(e){a.push('<div tabindex="0" aria-label="Video Quality" class="c-resolution-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+t.escape(null==(l=e("Video Quality"))?"":l)+'</h3></div><div class="c-menu-divider"></div><div class="c-resolution-button-container"><button data-js="decrease-resolution-button" aria-label="Decrease Resolution" class="c-resolution-button"><em class="cif-minus"></em></button><span data-js="resolution-text" class="c-resolution-text"></span><button data-js="increase-resolution-button" aria-label="Increase Resolution" class="c-resolution-button"><em class="cif-plus"></em></button></div></div>')}.call(this,"_t"in o?o._t:void 0!==e?e:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("iuOe")],void 0===(n=function(t,e){var n;return l(t,e,n)}.apply(exports,e))||(module.exports=n)},JAA1:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("PTN7")),a=e(t("VYij")),l=e(t("unn+")),o=e(t("c6na")),s=function ResolutionsHandler(t,e){this.player=t,this.sourcesByResolution=e.sourcesByResolution,this.supportedResolutions=(0,a.default)(this._knownResolutions).intersection((0,a.default)(e.sourcesByResolution).keys()),this.resolution=this.isResolutionSupported(e.resolution)?e.resolution:"540p",this.possibleResolutions=this.supportedResolutions,this.player.on("error",function(){var t=this.player.error();if(t&&4===t.code&&"testing"!==o.default.environment){l.default.error("Attempted to get source for resolution, but server responded with an error");var e=this.getResolution();this.possibleResolutions=(0,a.default)(this.possibleResolutions).without(e),this.possibleResolutions.length&&this.setResolution(this.possibleResolutions[0])}}.bind(this))};s.prototype.getResolution=function(){return this.resolution},s.prototype.getResolutionIndex=function(){return(0,a.default)(this.supportedResolutions).indexOf(this.resolution)},s.prototype.isResolutionSupported=function(t){return(0,a.default)(this.supportedResolutions).contains(t)},s.prototype.getSourceForResolution=function(t){if(!this.isResolutionSupported(t))return void l.default.error("Attempted to get source for unsupported resolution");var e=(0,a.default)(this.sourcesByResolution[t]).findWhere({type:"video/mp4"});return e&&e.src},s.prototype.setResolution=function(t){if(this.resolution===t)return;if(!this.isResolutionSupported(t))return;var e=this.player.currentTime(),n=this.player.playbackRate(),a=this.player.paused();this.player.pause(),this.player.one("loadedmetadata",function(){this.player.currentTime(e),this.player.options().playbackRates&&this.player.playbackRate(n),a?this.player.pause():this.player.play()}.bind(this)),this.player.src(this.sourcesByResolution[t]),this.resolution=t,this.player.trigger("resolutionchange")},s.prototype.decreaseResolution=function(){0!==this.supportedResolutions.length&&this.getResolution!==(0,a.default)(this.supportedResolutions).first()&&this.setResolution(this.supportedResolutions[this.getResolutionIndex()-1])},s.prototype.increaseResolution=function(){0!==this.supportedResolutions.length&&this.resolution!==(0,a.default)(this.supportedResolutions).last()&&this.setResolution(this.supportedResolutions[this.getResolutionIndex()+1])},s.prototype._knownResolutions=["360p","540p","720p"],n.default.registerPlugin("resolutions",function(t){if(!this.resolutionsHandler_){var e=new s(this,t);this.resolutionsHandler_=e,this.resolution=function(t){return t?(e.setResolution(t),t):e.getResolution()},this.increaseResolution=e.increaseResolution.bind(e),this.decreaseResolution=e.decreaseResolution.bind(e),this.isResolutionSupported=e.isResolutionSupported.bind(e),this.getResolutionIndex=e.getResolutionIndex.bind(e),this.getSourceForResolution=e.getSourceForResolution.bind(e)}})},JZ2G:function(module,exports,t){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},Kq1R:function(module,exports,t){var e=t("wfto"),n=e.default?e.default:{},a,l=(0,t("HdzH").default)(n);l.getLocale=function(){return"en"},module.exports=l},NjGn:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("PTN7")),l="vjs-highlighted",o=function(t){function SubtitlesMenu(){return t.apply(this,arguments)||this}(0,n.default)(SubtitlesMenu,t);var e=SubtitlesMenu.prototype;return e.hideSubtitleOffItem=function hideSubtitleOffItem(){var t=this.getChildById("subtitles-off");t.removeClass(l),t.hide()},e.showSubtitleOffItem=function showSubtitleOffItem(){this.getChildById("subtitles-off").show()},SubtitlesMenu}(a.default.getComponent("Menu"));a.default.registerComponent("SubtitlesMenu",o)},"O+Uj":function(module,exports,t){var e=t("JZ2G"),n=e.default?e.default:{},a,l=(0,t("HdzH").default)(n);l.getLocale=function(){return"en"},module.exports=l},PRI2:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("PTN7")),l=e(t("oYk5")),o=e(t("u5HK")),s=function(t){function CPlayToggle(e,n){var a;a=t.call(this,e,n)||this;var l=(0,o.default)("Play"),s;return a.el_.innerHTML='<span class="cif-2x cif-fw cif-play"></span>',a.el_.innerHTML+='<span class="vjs-control-text">'.concat(l,"</span>"),a.el_.setAttribute("aria-label",l),n.isAudio&&(a.el_.innerHTML='<span class="cif-fw cif-play"></span>'),a}(0,n.default)(CPlayToggle,t);var e=CPlayToggle.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=(0,l.default)(e);return n.attr("data-js","c-play-control"),n.addClass("c-video-control c-play-control"),e},e.handlePlay=function handlePlay(){t.prototype.handlePlay.call(this);var e=(0,o.default)("Pause");this.el_.setAttribute("aria-label",e);var n=(0,l.default)(this.el_).find("span.cif-fw"),a;n.removeClass("cif-play"),n.addClass("cif-pause"),(0,l.default)(this.el_).find("span.vjs-control-text").html(e)},e.handlePause=function handlePause(){t.prototype.handlePause.call(this);var e=(0,o.default)("Play");this.el_.setAttribute("aria-label",e);var n=(0,l.default)(this.el_).find("span.cif-fw"),a;n.removeClass("cif-pause"),n.addClass("cif-play"),(0,l.default)(this.el_).find("span.vjs-control-text").html(e)},CPlayToggle}(a.default.getComponent("PlayToggle"));a.default.registerComponent("CPlayToggle",s)},"PTu/":function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("oYk5")),l=e(t("VYij")),o=e(t("PTN7")),s=e(t("u5HK"));t("p65z"),t("/xeL"),t("q6B5");var u=t("yVbM"),i="vjs-highlighted",r=function handleEnterAndSpaceKeys(t){t.lockShowing();var e=(0,a.default)(t.contentEl_).find("button"),n=(0,l.default)(e).find(function(t){return(0,a.default)(t).hasClass(i)});n?((0,a.default)(n).removeClass(i),(0,a.default)(n).blur()):(e.eq(0).addClass(i),e.eq(0).focus())},c=function handleTabAndEscapeKeys(t){(0,a.default)(t.contentEl_).find("button").removeClass(i),t.unlockShowing()},d=function handleUpAndDownArrowKeys(t,e){t.lockShowing();var n=-1,o=(0,a.default)(t.contentEl_).find("button"),s=(0,l.default)(o).find(function(t){return(0,a.default)(t).hasClass(i)});s&&(n=(0,l.default)(o).indexOf(s),(0,a.default)(s).removeClass(i),(0,a.default)(s).blur()),0===n&&-1===e?(o.eq(o.length-1).addClass(i),o.eq(o.length-1).focus()):n<0||n>=o.length-1?(o.eq(0).addClass(i),o.eq(0).focus()):(o.eq(n+e).addClass(i),o.eq(n+e).focus())},f=function(t){function SettingsMenuButton(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=t.call(this,e,a)||this;var l=(0,s.default)("Settings");return n.menuButton_.el_.innerHTML='<span class="cif-2x cif-fw cif-cog"></span>',n.menuButton_.el_.innerHTML+='<span class="vjs-control-text">'.concat(l,"</span>"),n.menuButton_.el_.setAttribute("aria-label",l),n.menuButton_.addClass("vjs-control"),n.menuButton_.addClass("c-vjs-button"),n}(0,n.default)(SettingsMenuButton,t);var e=SettingsMenuButton.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=(0,a.default)(e);return n.attr("data-js","settings-menu-button"),n.addClass("c-video-control c-settings-control vjs-menu-button-popup"),e},e.handleKeyPress=function handleKeyPress(t){var e=(0,a.default)(this.player_.controlBar.settingsMenuButton.contentEl_),n=this.player_.controlBar.settingsMenuButton.menu;t.keyCode===u.KEY_UP_ARROW||t.keyCode===u.KEY_DOWN_ARROW?(d(n,t.keyCode===u.KEY_UP_ARROW?-1:1),e.focus(),t.preventDefault(),t.stopPropagation()):t.keyCode===u.KEY_TAB||t.keyCode===u.KEY_ESCAPE||t.shiftKey&&t.keyCode===u.KEY_TAB?(c(n),e.blur()):t.keyCode!==u.KEY_ENTER&&t.keyCode!==u.KEY_SPACE||(r(n),e.focus(),t.preventDefault(),t.stopPropagation())},e.createMenu=function createMenu(){var t,e=new(o.default.getComponent("Menu"))(this.player_,{contentElType:"div"});return l.default.each(this.createItems(),function(t){e.addItem(t)},this),e},e.createItems=function createItems(){var t,e=[new(o.default.getComponent("ResolutionMenuSection"))(this.player_,{})],n=o.default.getComponent("PlaybackRateMenuSection");e.push(new n(this.player_,{}));var a=o.default.getComponent("AutoplayMenuSection");return e.push(new a(this.player_,{})),e},SettingsMenuButton}(o.default.getComponent("MenuButton"));o.default.registerComponent("SettingsMenuButton",f)},Y22C:function(module,exports,t){var e=t("uVoQ"),n=e.default?e.default:{},a,l=(0,t("HdzH").default)(n);l.getLocale=function(){return"en"},module.exports=l},Zg9a:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("PTN7")),l=e(t("3g8Y")),o=27,s=9,u=function(t){function SubtitlesMenuItem(){return t.apply(this,arguments)||this}(0,n.default)(SubtitlesMenuItem,t);var e=SubtitlesMenuItem.prototype;return e.createEl=function createEl(t,e){var n,o=a.default.getComponent("ClickableComponent").prototype.createEl.call(this,"li",Object.assign({className:"vjs-menu-item",innerHTML:(0,l.default)({controlName:"subtitlesMenuItem",label:this.options_.label})},e));return o.setAttribute("data-js","c-subtitles-menu-item"),o},e.closeAndFocus=function closeAndFocus(){var t=this.player_.controlBar.subtitlesMenuButton;t.menu.unlockShowing(),t.el().focus(),t.el().classList.remove("selected")},e.handleKeyPress=function handleKeyPress(e){27===e.keyCode||9===e.keyCode?(this.closeAndFocus(),e.preventDefault(),e.stopPropagation()):t.prototype.handleKeyPress.call(this,e)},e.handleClick=function handleClick(){t.prototype.handleClick.call(this),this.player_.trigger("subtitleschange"),"subtitles-off"===this.id_?(this.player_.controlBar.subtitlesMenuButton.menu.hideSubtitleOffItem(),this.closeAndFocus()):this.player_.controlBar.subtitlesMenuButton.menu.showSubtitleOffItem()},SubtitlesMenuItem}(a.default.getComponent("TextTrackMenuItem"));a.default.registerComponent("SubtitlesMenuItem",u)},ej64:function(module,exports,t){var e,n,a,l;a=window,l=function(t,e,n){var a=function template(t){var e=[],n;return e.push('<span class="cif-stack cif-2x"><em class="cif-circle cif-stack-2x cif-inverse"></em><em class="cif-play-circle cif-stack-2x"></em></span>'),e.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("Y22C")],void 0===(n=function(t,e){var n;return l(t,e,n)}.apply(exports,e))||(module.exports=n)},iuOe:function(module,exports,t){var e=t("BQhx"),n=e.default?e.default:{},a,l=(0,t("HdzH").default)(n);l.getLocale=function(){return"en"},module.exports=l},"l6i/":function(module,exports,t){},nPCH:function(module,exports,t){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},oS9v:function(module,exports,t){var e=t("l6i/"),n;"string"==typeof e&&(e=[[module.i,e,""]]);var a={transform:void 0},l=t("aET+")(e,a);e.locals&&(module.exports=e.locals)},p65z:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("PJYZ")),a=e(t("VbXa")),l=e(t("oYk5")),o=e(t("PTN7")),s=e(t("2UcY")),u=9,i=13,r=32,c=function(t){function AutoplayMenuSection(e,a){var o;return o=t.call(this,e,a)||this,(0,l.default)(o.el_).find('[data-js="autoplay-off-button"]').click(o.onAutoplayOff.bind((0,n.default)(o))),(0,l.default)(o.el_).find('[data-js="autoplay-on-button"]').click(o.onAutoplayOn.bind((0,n.default)(o))),(0,l.default)(o.el_).find('[data-js="autoplay-on-button"]').keydown(function(t){o.handleKeyPress(t)}),o.one(e,"ready",function(){e.autoplay()?(0,l.default)(this.el_).find('[data-js="autoplay-on-button"]').addClass("selected").attr("aria-label","Autoplay On Selected"):(0,l.default)(this.el_).find('[data-js="autoplay-off-button"]').addClass("selected").attr("aria-label","Autoplay Off Selected")}),o}(0,a.default)(AutoplayMenuSection,t);var e=AutoplayMenuSection.prototype;return e.createEl=function createEl(t,e){return(0,l.default)((0,s.default)())[0]},e.onAutoplayOff=function onAutoplayOff(t,e){(0,l.default)(this.el_).find('[data-js="autoplay-off-button"]').addClass("selected").attr("aria-selected","true").attr("aria-label","Autoplay Off Selected"),(0,l.default)(this.el_).find('[data-js="autoplay-on-button"]').removeClass("selected").attr("aria-selected","false").attr("aria-label","Autoplay On"),this.player_.autoplay(!1),this.player_.trigger("autoplaychange")},e.onAutoplayOn=function onAutoplayOn(t,e){(0,l.default)(this.el_).find('[data-js="autoplay-off-button"]').removeClass("selected").attr("aria-selected","false").attr("aria-label","Autoplay Off"),(0,l.default)(this.el_).find('[data-js="autoplay-on-button"]').addClass("selected").attr("aria-selected","true").attr("aria-label","Autoplay On Selected"),this.player_.autoplay(!0),this.player_.trigger("autoplaychange")},e.closeAndFocus=function closeAndFocus(){var t=this.player_.controlBar.settingsMenuButton;t.menu.unlockShowing(),t.el().focus(),t.el().classList.remove("selected")},e.handleKeyPress=function handleKeyPress(e){var n=(0,l.default)(this.el).find("[data-js=autoplay-on-button]")[0];9!==e.keyCode||e.shiftKey||document.activeElement!==n?13===e.keyCode||32===e.keyCode?this.onAutoplayOn.bind(this):t.prototype.handleKeyPress.call(this,e):(this.closeAndFocus(),e.stopPropagation())},AutoplayMenuSection}(o.default.getComponent("MenuItem"));o.default.registerComponent("AutoplayMenuSection",c)},q6B5:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("PJYZ")),a=e(t("VbXa")),l=e(t("HwIc")),o=e(t("PTN7")),s=e(t("iuOe")),u=e(t("oYk5"));t("JAA1");var i=function(t){function ResolutionMenuSection(e,a){var l;return(l=t.call(this,e,a)||this).options_={name:"resolutionMenuSection"},l.resolutionNames_={"360p":(0,s.default)("Low"),"540p":(0,s.default)("Medium"),"720p":(0,s.default)("High")},e.on("resolutionchange",l.updateResolutionText.bind((0,n.default)(l))),l.one(e,"ready",function(){(0,u.default)(this.el_).find('[data-js="decrease-resolution-button"]').click(e.decreaseResolution.bind(e)),(0,u.default)(this.el_).find('[data-js="increase-resolution-button"]').click(e.increaseResolution.bind(e)),this.updateResolutionText()}),l}(0,a.default)(ResolutionMenuSection,t);var e=ResolutionMenuSection.prototype;return e.createEl=function createEl(t,e){return(0,u.default)((0,l.default)())[0]},e.updateResolutionText=function updateResolutionText(){var t=this.player_.resolution(),e=this.resolutionNames_[t]||t;(0,u.default)(this.el_).find('[data-js="resolution-text"]').text(e)},ResolutionMenuSection}(o.default.getComponent("MenuItem"));o.default.registerComponent("ResolutionMenuSection",i)},rQOG:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("PJYZ")),a=e(t("VbXa")),l=e(t("oYk5")),o=e(t("PTN7")),s=e(t("u5HK")),u=t("yVbM"),i="vjs-highlighted",r=function(t){function CFullscreenToggle(e,a){var l;l=t.call(this,e,a)||this;var o=(0,s.default)("Full Screen");return l.el_.innerHTML='<span class="cif-2x cif-fw cif-expand"></span>',l.el_.innerHTML+='<span class="vjs-control-text">'.concat(o,"</span>"),l.el_.setAttribute("aria-label",o),e.on("fullscreenchange",l.changeIcon.bind((0,n.default)(l))),l}(0,a.default)(CFullscreenToggle,t);var e=CFullscreenToggle.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=(0,l.default)(e);return n.attr("data-js","c-fullscreen-control"),n.removeAttr("title"),n.addClass("c-vjs-button c-video-control c-fullscreen-control"),e},e.handleKeyPress=function handleKeyPress(t){var e=this.player_.controlBar.settingsMenuButton.menu;(t.keyCode===u.KEY_TAB||t.keyCode===u.KEY_ESCAPE||t.shiftKey&&t.keyCode===u.KEY_TAB)&&((0,l.default)(e.contentEl_).find("button").removeClass(i),e.unlockShowing())},e.changeIcon=function changeIcon(){var t=(0,l.default)(this.el_).find("span.cif-fw");this.player_.isFullscreen()?(t.removeClass("cif-expand"),t.addClass("cif-compress")):(t.removeClass("cif-compress"),t.addClass("cif-expand"))},CFullscreenToggle}(o.default.getComponent("FullscreenToggle"));o.default.registerComponent("CFullscreenToggle",r)},t9gw:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("PTN7")),a=e(t("yiR1")),l=5e3,o=function Heartbeat(t,e,n){var a=function startHeartbeat(){this.interval&&window.clearInterval(this.interval),this.interval=window.setInterval(n,parseInt(e,10))};t.on("playing",a.bind(this)),t.on("pause",function(){window.clearInterval(this.interval)}.bind(this)),t.on("dispose",function(){window.clearInterval(this.interval)}.bind(this))};n.default.registerPlugin("setupHeartbeatListener",function(){var t=this,e=[];t.emitter||(t.emitter=a.default.emitter()),t.emitter.on("emitter.listener",function(n,a){var l,s;if(s=(l=/^heartbeat(:(\d+))?$/).exec(n)){var u=s[2]||5e3;e.push(new o(t,u,a))}})})},tioU:function(module,exports,t){var e=t("nPCH"),n=e.default?e.default:{},a,l=(0,t("HdzH").default)(n);l.getLocale=function(){return"en"},module.exports=l},uVoQ:function(module,exports,t){"use strict";exports.default={}},uvZC:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("PTN7")),l=e(t("oYk5")),o=function(t){function CMuteToggle(e,n){var a,l=(a=t.call(this,e,n)||this).player_.volume(),o;return a.removeClass("vjs-mute-control"),a.addClass("c-vjs-button"),0===l||a.player_.muted()?(a.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-off"></span>',o=!0):l<.33?(a.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-down"></span>',o=!1):(a.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-up"></span>',o=!1),a.eventBusEl_.setAttribute("aria-pressed",o),a.eventBusEl_.removeAttribute("aria-disabled"),a}var e;return(0,n.default)(CMuteToggle,t),CMuteToggle.prototype.updateIcon_=function updateIcon_(){var t=this.player_.volume(),e=(0,l.default)(this.el_).find("span.cif-fw"),n=(0,l.default)(this.el_);0===t||this.player_.muted()?(e.removeClass("cif-volume-up"),e.removeClass("cif-volume-down"),e.addClass("cif-volume-off"),n.attr("aria-pressed",!0)):t<.33?(e.removeClass("cif-volume-up"),e.removeClass("cif-volume-off"),e.addClass("cif-volume-down"),n.attr("aria-pressed",!1)):(e.removeClass("cif-volume-down"),e.removeClass("cif-volume-off"),e.addClass("cif-volume-up"),n.attr("aria-pressed",!1))},CMuteToggle}(a.default.getComponent("MuteToggle"));a.default.registerComponent("CMuteToggle",o)},wfto:function(module,exports,t){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},xbf0:function(module,exports,t){"use strict";var e=t("TqRt"),n=e(t("VbXa")),a=e(t("ej64")),l=e(t("PTN7"));t("oS9v");var o=13,s=32,u=function(t){function CirclePlayButton(){return t.apply(this,arguments)||this}(0,n.default)(CirclePlayButton,t);var e=CirclePlayButton.prototype;return e.handleClick=function handleClick(){this.hide(),this.player_.play()},e.createEl=function createEl(){var t;return l.default.getComponent("ClickableComponent").prototype.createEl.call(this,"div",{className:"vjs-circle-play-button",innerHTML:(0,a.default)()},{"aria-label":"play video"})},e.handleKeyPress=function handleKeyPress(t){13!==t.keyCode&&32!==t.keyCode||(this.hide(),this.player_.play(),t.preventDefault(),t.stopPropagation())},CirclePlayButton}(l.default.getComponent("BigPlayButton"));l.default.registerComponent("CirclePlayButton",u)},yVbM:function(module,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KEY_ESCAPE=exports.KEY_SPACE=exports.KEY_ENTER=exports.KEY_TAB=exports.KEY_DOWN_ARROW=exports.KEY_UP_ARROW=void 0;var e=38;exports.KEY_UP_ARROW=38;var n=40;exports.KEY_DOWN_ARROW=40;var a=9;exports.KEY_TAB=9;var l=13;exports.KEY_ENTER=13;var o=32;exports.KEY_SPACE=32;var s=27;exports.KEY_ESCAPE=27}}]);
//# sourceMappingURL=en.76.acaaee16f513907aa444.js.map