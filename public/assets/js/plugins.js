/*
Template Name: Alphabet
Author: Ingrid Kuhn
Author URI: http://themeforest.net/user/ingridk
*/

//Plugins
/*** MailChimp Validation		**/
(function mailchimp() {
	window.fnames = new Array();
	window.ftypes = new Array();
	fnames[0] = 'EMAIL';
	ftypes[0] = 'email';
	fnames[1] = 'FNAME';
	ftypes[1] = 'text';
	fnames[2] = 'LNAME';
	ftypes[2] = 'text';
}(jQuery));


/** jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ **/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
	},
	easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a
	},
	easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a
	},
	easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f + a
		}
		return -h / 2 * ((--f) * (f - 2) - 1) + a
	},
	easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a
	},
	easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a
	},
	easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f + 2) + a
	},
	easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a
	},
	easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a
	},
	easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a
		}
		return -h / 2 * ((f -= 2) * f * f * f - 2) + a
	},
	easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a
	},
	easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a
	},
	easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
	},
	easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
	},
	easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin(f / g * (Math.PI / 2)) + a
	},
	easeInOutSine: function (e, f, a, h, g) {
		return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	},
	easeInExpo: function (e, f, a, h, g) {
		return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
	},
	easeOutExpo: function (e, f, a, h, g) {
		return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
	},
	easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a
		}
		if (f == g) {
			return a + h
		}
		if ((f /= g / 2) < 1) {
			return h / 2 * Math.pow(2, 10 * (f - 1)) + a
		}
		return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
	},
	easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	},
	easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
	},
	easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
		}
		return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	},
	easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	},
	easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
	},
	easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k / 2) == 2) {
			return e + l
		}
		if (!j) {
			j = k * (0.3 * 1.5)
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
		}
		return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
	},
	easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * (f /= h) * f * ((g + 1) * f - g) + a
	},
	easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
	},
	easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		if ((f /= h / 2) < 1) {
			return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
		}
		return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	},
	easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
	},
	easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < (1 / 2.75)) {
			return h * (7.5625 * f * f) + a
		} else {
			if (f < (2 / 2.75)) {
				return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
			} else {
				if (f < (2.5 / 2.75)) {
					return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
				} else {
					return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
				}
			}
		}
	},
	easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
	}
});

/** Scroll to **/
(function scrollto() {
	var h = $.scrollTo = function (a, b, c) {
		$(window).scrollTo(a, b, c)
	};
	h.defaults = {
		axis: 'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
		limit: true
	};
	h.window = function (a) {
		return $(window)._scrollable()
	};
	$.fn._scrollable = function () {
		return this.map(function () {
			var a = this,
				isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
			if (!isWin) return a;
			var b = (a.contentWindow || a).document || a.ownerDocument || a;
			return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
		})
	};
	$.fn.scrollTo = function (e, f, g) {
		if (typeof f == 'object') {
			g = f;
			f = 0
		}
		if (typeof g == 'function') g = {
			onAfter: g
		};
		if (e == 'max') e = 9e9;
		g = $.extend({}, h.defaults, g);
		f = f || g.duration;
		g.queue = g.queue && g.axis.length > 1;
		if (g.queue) f /= 2;
		g.offset = both(g.offset);
		g.over = both(g.over);
		return this._scrollable().each(function () {
			if (!e) return;
			var d = this,
				$elem = $(d),
				targ = e,
				toff, attr = {},
				win = $elem.is('html,body');
			switch (typeof targ) {
				case 'number':
				case 'string':
					if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						break
					}
					targ = $(targ, this);
					if (!targ.length) return;
				case 'object':
					if (targ.is || targ.style) toff = (targ = $(targ)).offset()
			}
			$.each(g.axis.split(''), function (i, a) {
				var b = a == 'x' ? 'Left' : 'Top',
					pos = b.toLowerCase(),
					key = 'scroll' + b,
					old = d[key],
					max = h.max(d, a);
				if (toff) {
					attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
					if (g.margin) {
						attr[key] -= parseInt(targ.css('margin' + b)) || 0;
						attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
					}
					attr[key] += g.offset[pos] || 0;
					if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
				} else {
					var c = targ[pos];
					attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
				}
				if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				if (!i && g.queue) {
					if (old != attr[key]) animate(g.onAfterFirst);
					delete attr[key]
				}
			});
			animate(g.onAfter);

			function animate(a) {
				$elem.animate(attr, f, g.easing, a && function () {
					a.call(this, e, g)
				})
			}
		}).end()
	};
	h.max = function (a, b) {
		var c = b == 'x' ? 'Width' : 'Height',
			scroll = 'scroll' + c;
		if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
		var d = 'client' + c,
			html = a.ownerDocument.documentElement,
			body = a.ownerDocument.body;
		return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
	};

	function both(a) {
		return typeof a == 'object' ? a : {
			top: a,
			left: a
		}
	}
})(jQuery);

/** Owl carousel **/
! function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Pipe, a.proxy(function (b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}

	function f(a) {
		if (a.touches !== d) return {
			x: a.touches[0].pageX,
			y: a.touches[0].pageY
		};
		if (a.touches === d) {
			if (a.pageX !== d) return {
				x: a.pageX,
				y: a.pageY
			};
			if (a.pageX === d) return {
				x: a.clientX,
				y: a.clientY
			}
		}
	}

	function g(a) {
		var b, d, e = c.createElement("div"),
			f = a;
		for (b in f)
			if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
		return [!1]
	}

	function h() {
		return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
	}

	function i() {
		return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
	}

	function j() {
		return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
	}

	function k() {
		return "ontouchstart" in b || !!navigator.msMaxTouchPoints
	}

	function l() {
		return b.navigator.msPointerEnabled
	}
	var m, n, o;
	m = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	}, n = {
		isTouch: !1,
		isScrolling: !1,
		isSwiping: !1,
		direction: !1,
		inMotion: !1
	}, o = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	}, e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		responsiveClass: !1,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		themeClass: "owl-theme",
		baseClass: "owl-carousel",
		itemClass: "owl-item",
		centerClass: "center",
		activeClass: "active"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Plugins = {}, e.Pipe = [{
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var a = this._clones,
				b = this.$stage.children(".cloned");
			(b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var a, b, c = this._clones,
				d = this._items,
				e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
			for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var a, b, c, d = this.settings.rtl ? 1 : -1,
				e = (this.width() / this.settings.items).toFixed(3),
				f = 0;
			for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var b, c, d = (this.width() / this.settings.items).toFixed(3),
				e = {
					width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
					"padding-left": this.settings.stagePadding || "",
					"padding-right": this.settings.stagePadding || ""
				};
			if (this.$stage.css(e), e = {
					width: this.settings.autoWidth ? "auto" : d - this.settings.margin
				}, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) {
					return a > 1
				}).length > 0)
				for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
			else this.$stage.children().css(e)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current && this.reset(this.$stage.children().index(a.current))
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
		}
	}], e.prototype.initialize = function () {
		if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
			var b, c, e;
			if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
		}
		this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
	}, e.prototype.setup = function () {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function (a) {
			b >= a && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) {
			return b.replace(/\b owl-responsive-\S+/g, "")
		}).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		}))
	}, e.prototype.optionsLogic = function () {
		this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
				return this[a]
			}, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		if (0 === this._items.length) return !1;
		(new Date).getTime();
		this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
	}, e.prototype.eventsCall = function () {
		this.e._onDragStart = a.proxy(function (a) {
			this.onDragStart(a)
		}, this), this.e._onDragMove = a.proxy(function (a) {
			this.onDragMove(a)
		}, this), this.e._onDragEnd = a.proxy(function (a) {
			this.onDragEnd(a)
		}, this), this.e._onResize = a.proxy(function (a) {
			this.onResize(a)
		}, this), this.e._transitionEnd = a.proxy(function (a) {
			this.transitionEnd(a)
		}, this), this.e._preventClick = a.proxy(function (a) {
			this.preventClick(a)
		}, this)
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
	}, e.prototype.eventsRouter = function (a) {
		var b = a.type;
		"mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
	}, e.prototype.internalEvents = function () {
		var c = (k(), l());
		this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) {
			this.eventsRouter(a)
		}, this)), this.$stage.on("dragstart", function () {
			return !1
		}), this.$stage.get(0).onselectstart = function () {
			return !1
		}) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
			this.eventsRouter(a)
		}, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
	}, e.prototype.onDragStart = function (d) {
		var e, g, h, i;
		if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
		if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
		else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
		this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
			this.eventsRouter(a)
		}, this))
	}, e.prototype.onDragMove = function (a) {
		var c, e, g, h, i, j;
		this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
	}, e.prototype.onDragEnd = function (b) {
		var d, e, f;
		if (this.state.isTouch) {
			if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
			this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
		}
	}, e.prototype.removeClick = function (c) {
		this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
			a(c).off("click.preventClick")
		}, 300)
	}, e.prototype.preventClick = function (b) {
		b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
	}, e.prototype.getTransformProperty = function () {
		var a, c;
		return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
	}, e.prototype.closest = function (b) {
		var c = -1,
			d = 30,
			e = this.width(),
			f = this.coordinates();
		return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) {
			return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
		}, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
	}, e.prototype.animate = function (b) {
		this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px, 0px)",
			transition: this.speed() / 1e3 + "s"
		}) : this.state.isTouch ? this.$stage.css({
			left: b + "px"
		}) : this.$stage.animate({
			left: b
		}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
			this.state.inMotion && this.transitionEnd()
		}, this))
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (a) {
		this._invalidated[a] = !0
	}, e.prototype.reset = function (a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (b, c) {
		var e = c ? this._items.length : this._items.length + this._clones.length;
		return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
	}, e.prototype.relative = function (a) {
		return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c, d, e = 0,
			f = this.settings;
		if (a) return this._items.length - 1;
		if (!f.loop && f.center) b = this._items.length - 1;
		else if (f.loop || f.center)
			if (f.loop || f.center) b = this._items.length + f.items;
			else {
				if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
				for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
					(d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
			}
		else b = this._items.length - f.items;
		return b
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function (a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c = null;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
	}, e.prototype.duration = function (a, b, c) {
		return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function (c, d) {
		if (this.settings.loop) {
			var e = c - this.relative(this.current()),
				f = this.current(),
				g = this.current(),
				h = this.current() + e,
				i = 0 > g - h ? !0 : !1,
				j = this._clones.length + this._items.length;
			h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
				this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
			}, this), 30)
		} else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.transitionEnd = function (a) {
		return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
	}, e.prototype.viewport = function () {
		var d;
		if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
		else if (b.innerWidth) d = b.innerWidth;
		else {
			if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
			d = c.documentElement.clientWidth
		}
		return d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (a, b) {
		b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
			content: a,
			position: b
		}), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
			content: a,
			position: b
		})
	}, e.prototype.remove = function (a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.addTriggerableEvents = function () {
		var b = a.proxy(function (b, c) {
			return a.proxy(function (a) {
				a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
			}, this)
		}, this);
		a.each({
			next: this.next,
			prev: this.prev,
			to: this.to,
			destroy: this.destroy,
			refresh: this.refresh,
			replace: this.replace,
			add: this.add,
			remove: this.remove
		}, a.proxy(function (a, c) {
			this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
		}, this))
	}, e.prototype.watchVisibility = function () {
		function c(a) {
			return a.offsetWidth > 0 && a.offsetHeight > 0
		}

		function d() {
			c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
		}
		c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		var c, d, e, f;
		c = 0, d = this, b.each(function (g, h) {
			e = a(h), f = new Image, f.onload = function () {
				c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
			}, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
		})
	}, e.prototype.destroy = function () {
		this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		for (var d in this._plugins) this._plugins[d].destroy();
		(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
			return !1
		})), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : c > a;
			case ">":
				return d ? c > a : a > c;
			case ">=":
				return d ? c >= a : a >= c;
			case "<=":
				return d ? a >= c : c >= a
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d) {
		var e = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			f = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, e, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(g)
		}), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.browserSupport = function () {
		if (this.support3d = j(), this.support3d) {
			this.transformVendor = i();
			var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
			this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
		}
		this.state.orientation = b.orientation
	}, a.fn.owlCarousel = function (b) {
		return this.each(function () {
			a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b) {
	var c = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
							this.load(b)
						}, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
			}, this)
		}, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	c.Defaults = {
		lazyLoad: !1
	}, c.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({
					"background-image": "url(" + g + ")",
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, c.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function (a) {
	var b = function (c) {
		this._core = c, this._handlers = {
			"initialized.owl.carousel": a.proxy(function () {
				this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function (a) {
				this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
			}, this)
		}, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	b.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, b.prototype.update = function () {
		this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
	}, b.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function (a, b, c) {
	var d = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
			"resize.owl.carousel": a.proxy(function (a) {
				this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
			}, this),
			"refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
				this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				var c = a(b.content).find(".owl-video");
				c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
			}, this)
		}, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	d.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, d.prototype.fetch = function (a, b) {
		var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else {
			if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
			c = "vimeo"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, d.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
			type: "GET",
			url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}))
	}, d.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
	}, d.prototype.play = function (b) {
		this._core.trigger("play", null, "video"), this._playing && this.stop();
		var c, d, e = a(b.target || b.srcElement),
			f = e.closest("." + this._core.settings.itemClass),
			g = this._videos[f.attr("data-video")],
			h = g.width || "100%",
			i = g.height || this._core.$stage.height();
		"youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
	}, d.prototype.isInFullScreen = function () {
		var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
	}, d.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				"position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				this.swapping = "translated" == a.type
			}, this),
			"translate.owl.carousel": a.proxy(function () {
				this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function () {
		if (1 === this.core.settings.items && this.core.support3d) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
		}
	}, e.prototype.clear = function (b) {
		a(b.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c) {
	var d = function (b) {
		this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
			"translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
				this.autoplay()
			}, this),
			"play.owl.autoplay": a.proxy(function (a, b, c) {
				this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function () {
				this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function () {
				this.core.settings.autoplayHoverPause && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function () {
				this.core.settings.autoplayHoverPause && this.autoplay()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	d.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, d.prototype.autoplay = function () {
		this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
			this.play()
		}, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
	}, d.prototype.play = function () {
		return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
	}, d.prototype.stop = function () {
		b.clearInterval(this.interval)
	}, d.prototype.pause = function () {
		b.clearInterval(this.interval)
	}, d.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this.interval);
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function (a) {
	"use strict";
	var b = function (c) {
		this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"add.owl.carousel": a.proxy(function (b) {
				this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
				this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"change.owl.carousel": a.proxy(function (a) {
				if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
					var b = this._core.current(),
						c = this._core.maximum(),
						d = this._core.minimum();
					a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
				}
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				"position" == a.property.name && this.draw()
			}, this),
			"refreshed.owl.carousel": a.proxy(function () {
				this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
			}, this)
		}, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	b.Defaults = {
		nav: !1,
		navRewind: !0,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotData: !1,
		dotsSpeed: !1,
		dotsContainer: !1,
		controlsClass: "owl-controls"
	}, b.prototype.initialize = function () {
		var b, c, d = this._core.settings;
		d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) {
			var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(c, d.dotsSpeed)
		}, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () {
			this.prev(d.navSpeed)
		}, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () {
			this.next(d.navSpeed)
		}, this));
		for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
	}, b.prototype.destroy = function () {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, b.prototype.update = function () {
		var a, b, c, d = this._core.settings,
			e = this._core.clones().length / 2,
			f = e + this._core.items().length,
			g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
		if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
			for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
				start: a - e,
				end: a - e + g - 1
			}), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
	}, b.prototype.draw = function () {
		var b, c, d = "",
			e = this._core.settings,
			f = (this._core.$stage.children(), this._core.relative(this._core.current()));
		if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
			if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
				for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
				this._controls.$indicators.html(d)
			} else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
			this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
		}
		this._controls.$indicators.toggle(e.dots)
	}, b.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
		}
	}, b.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, function (a) {
			return a.start <= b && a.end >= b
		}).pop()
	}, b.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, b.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, b.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, b.prototype.to = function (b, c, d) {
		var e;
		d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function (a, b) {
	"use strict";
	var c = function (d) {
		this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function () {
				"URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
				this._hashes[c] = b.content
			}, this)
		}, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
			var a = b.location.hash.substring(1),
				c = this._core.$stage.children(),
				d = this._hashes[a] && c.index(this._hashes[a]) || 0;
			return a ? void this._core.to(d, !1, !0) : !1
		}, this))
	};
	c.Defaults = {
		URLhashListener: !1
	}, c.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);

/** Pretty Photo **/
(function (e) {
	function t() {
		var e = location.href;
		hashtag = e.indexOf("#prettyPhoto") !== -1 ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : false;
		return hashtag
	}

	function n() {
		if (typeof theRel == "undefined") return;
		location.hash = theRel + "/" + rel_index + "/"
	}

	function r() {
		if (location.href.indexOf("#prettyPhoto") !== -1) location.hash = "prettyPhoto"
	}

	function i(e, t) {
		e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var n = "[\\?&]" + e + "=([^&#]*)";
		var r = new RegExp(n);
		var i = r.exec(t);
		return i == null ? "" : i[1]
	}
	e.prettyPhoto = {
		version: "3.1.5"
	};
	e.fn.prettyPhoto = function (s) {
		function g() {
			e(".pp_loaderIcon").hide();
			projectedTop = scroll_pos["scrollTop"] + (d / 2 - a["containerHeight"] / 2);
			if (projectedTop < 0) projectedTop = 0;
			$ppt.fadeTo(settings.animation_speed, 1);
			$pp_pic_holder.find(".pp_content").animate({
				height: a["contentHeight"],
				width: a["contentWidth"]
			}, settings.animation_speed);
			$pp_pic_holder.animate({
				top: projectedTop,
				left: v / 2 - a["containerWidth"] / 2 < 0 ? 0 : v / 2 - a["containerWidth"] / 2,
				width: a["containerWidth"]
			}, settings.animation_speed, function () {
				$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);
				$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
				if (isSet && S(pp_images[set_position]) == "image") {
					$pp_pic_holder.find(".pp_hoverContainer").show()
				} else {
					$pp_pic_holder.find(".pp_hoverContainer").hide()
				}
				if (settings.allow_expand) {
					if (a["resized"]) {
						e("a.pp_expand,a.pp_contract").show()
					} else {
						e("a.pp_expand").hide()
					}
				}
				if (settings.autoplay_slideshow && !m && !f) e.prettyPhoto.startSlideshow();
				settings.changepicturecallback();
				f = true
			});
			C();
			s.ajaxcallback()
		}

		function y(t) {
			$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
			$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
				e(".pp_loaderIcon").show();
				t()
			})
		}

		function b(t) {
			t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
		}

		function w(e, t) {
			resized = false;
			E(e, t);
			imageWidth = e, imageHeight = t;
			if ((p > v || h > d) && doresize && settings.allow_resize && !u) {
				resized = true, fitting = false;
				while (!fitting) {
					if (p > v) {
						imageWidth = v - 200;
						imageHeight = t / e * imageWidth
					} else if (h > d) {
						imageHeight = d - 200;
						imageWidth = e / t * imageHeight
					} else {
						fitting = true
					}
					h = imageHeight, p = imageWidth
				}
				if (p > v || h > d) {
					w(p, h)
				}
				E(imageWidth, imageHeight)
			}
			return {
				width: Math.floor(imageWidth),
				height: Math.floor(imageHeight),
				containerHeight: Math.floor(h),
				containerWidth: Math.floor(p) + settings.horizontal_padding * 2,
				contentHeight: Math.floor(l),
				contentWidth: Math.floor(c),
				resized: resized
			}
		}

		function E(t, n) {
			t = parseFloat(t);
			n = parseFloat(n);
			$pp_details = $pp_pic_holder.find(".pp_details");
			$pp_details.width(t);
			detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
			$pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			});
			detailsHeight += $pp_details.height();
			detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight;
			$pp_details.remove();
			$pp_title = $pp_pic_holder.find(".ppt");
			$pp_title.width(t);
			titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
			$pp_title = $pp_title.clone().appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			l = n + detailsHeight;
			c = t;
			h = l + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
			p = t
		}

		function S(e) {
			if (e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)) {
				return "youtube"
			} else if (e.match(/vimeo\.com/i)) {
				return "vimeo"
			} else if (e.match(/\b.mov\b/i)) {
				return "quicktime"
			} else if (e.match(/\b.swf\b/i)) {
				return "flash"
			} else if (e.match(/\biframe=true\b/i)) {
				return "iframe"
			} else if (e.match(/\bajax=true\b/i)) {
				return "ajax"
			} else if (e.match(/\bcustom=true\b/i)) {
				return "custom"
			} else if (e.substr(0, 1) == "#") {
				return "inline"
			} else {
				return "image"
			}
		}

		function x() {
			if (doresize && typeof $pp_pic_holder != "undefined") {
				scroll_pos = T();
				contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();
				projectedTop = d / 2 + scroll_pos["scrollTop"] - contentHeight / 2;
				if (projectedTop < 0) projectedTop = 0;
				if (contentHeight > d) return;
				$pp_pic_holder.css({
					top: projectedTop,
					left: v / 2 + scroll_pos["scrollLeft"] - contentwidth / 2
				})
			}
		}

		function T() {
			if (self.pageYOffset) {
				return {
					scrollTop: self.pageYOffset,
					scrollLeft: self.pageXOffset
				}
			} else if (document.documentElement && document.documentElement.scrollTop) {
				return {
					scrollTop: document.documentElement.scrollTop,
					scrollLeft: document.documentElement.scrollLeft
				}
			} else if (document.body) {
				return {
					scrollTop: document.body.scrollTop,
					scrollLeft: document.body.scrollLeft
				}
			}
		}

		function N() {
			d = e(window).height(), v = e(window).width();
			if (typeof $pp_overlay != "undefined") $pp_overlay.height(e(document).height()).width(v)
		}

		function C() {
			if (isSet && settings.overlay_gallery && S(pp_images[set_position]) == "image") {
				itemWidth = 52 + 5;
				navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50 : 30;
				itemsPerPage = Math.floor((a["containerWidth"] - 100 - navWidth) / itemWidth);
				itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
				if (totalPage == 0) {
					navWidth = 0;
					$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()
				} else {
					$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()
				}
				galleryWidth = itemsPerPage * itemWidth;
				fullGalleryWidth = pp_images.length * itemWidth;
				$pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
				goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
				e.prettyPhoto.changeGalleryPage(goToPage);
				$pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")
			} else {
				$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
			}
		}

		function k(t) {
			if (settings.social_tools) facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
			settings.markup = settings.markup.replace("{pp_social}", "");
			e("body").append(settings.markup);
			$pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay");
			if (isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var n = 0; n < pp_images.length; n++) {
					if (!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
						classname = "default";
						img_src = ""
					} else {
						classname = "";
						img_src = pp_images[n]
					}
					toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>"
				}
				toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
				$pp_pic_holder.find("#pp_full_res").after(toInject);
				$pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li");
				$pp_gallery.find(".pp_arrow_next").click(function () {
					e.prettyPhoto.changeGalleryPage("next");
					e.prettyPhoto.stopSlideshow();
					return false
				});
				$pp_gallery.find(".pp_arrow_previous").click(function () {
					e.prettyPhoto.changeGalleryPage("previous");
					e.prettyPhoto.stopSlideshow();
					return false
				});
				$pp_pic_holder.find(".pp_content").hover(function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
				}, function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
				});
				itemWidth = 52 + 5;
				$pp_gallery_li.each(function (t) {
					e(this).find("a").click(function () {
						e.prettyPhoto.changePage(t);
						e.prettyPhoto.stopSlideshow();
						return false
					})
				})
			}
			if (settings.slideshow) {
				$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
				$pp_pic_holder.find(".pp_nav .pp_play").click(function () {
					e.prettyPhoto.startSlideshow();
					return false
				})
			}
			$pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
			$pp_overlay.css({
				opacity: 0,
				height: e(document).height(),
				width: e(window).width()
			}).bind("click", function () {
				if (!settings.modal) e.prettyPhoto.close()
			});
			e("a.pp_close").bind("click", function () {
				e.prettyPhoto.close();
				return false
			});
			if (settings.allow_expand) {
				e("a.pp_expand").bind("click", function (t) {
					if (e(this).hasClass("pp_expand")) {
						e(this).removeClass("pp_expand").addClass("pp_contract");
						doresize = false
					} else {
						e(this).removeClass("pp_contract").addClass("pp_expand");
						doresize = true
					}
					y(function () {
						e.prettyPhoto.open()
					});
					return false
				})
			}
			$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
				e.prettyPhoto.changePage("previous");
				e.prettyPhoto.stopSlideshow();
				return false
			});
			$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
				e.prettyPhoto.changePage("next");
				e.prettyPhoto.stopSlideshow();
				return false
			});
			x()
		}
		s = jQuery.extend({
			hook: "rel",
			animation_speed: "fast",
			ajaxcallback: function () {},
			slideshow: 5e3,
			autoplay_slideshow: false,
			opacity: .8,
			show_title: true,
			allow_resize: true,
			allow_expand: true,
			default_width: 500,
			default_height: 344,
			counter_separator_label: "/",
			theme: "light_square",
			horizontal_padding: 20,
			hideflash: false,
			wmode: "opaque",
			autoplay: true,
			modal: false,
			deeplinking: true,
			overlay_gallery: true,
			overlay_gallery_max: 30,
			keyboard_shortcuts: true,
			changepicturecallback: function () {},
			callback: function () {},
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: "",
			social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
		}, s);
		var o = this,
			u = false,
			a, f, l, c, h, p, d = e(window).height(),
			v = e(window).width(),
			m;
		doresize = true, scroll_pos = T();
		e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
			x();
			N()
		});
		if (s.keyboard_shortcuts) {
			e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (t) {
				if (typeof $pp_pic_holder != "undefined") {
					if ($pp_pic_holder.is(":visible")) {
						switch (t.keyCode) {
							case 37:
								e.prettyPhoto.changePage("previous");
								t.preventDefault();
								break;
							case 39:
								e.prettyPhoto.changePage("next");
								t.preventDefault();
								break;
							case 27:
								if (!settings.modal) e.prettyPhoto.close();
								t.preventDefault();
								break
						}
					}
				}
			})
		}
		e.prettyPhoto.initialize = function () {
			settings = s;
			if (settings.theme == "pp_default") settings.horizontal_padding = 16;
			theRel = e(this).attr(settings.hook);
			galleryRegExp = /\[(?:.*)\]/;
			isSet = galleryRegExp.exec(theRel) ? true : false;
			pp_images = isSet ? jQuery.map(o, function (t, n) {
				if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("href")
			}) : e.makeArray(e(this).attr("href"));
			pp_titles = isSet ? jQuery.map(o, function (t, n) {
				if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
			}) : e.makeArray(e(this).find("img").attr("alt"));
			pp_descriptions = isSet ? jQuery.map(o, function (t, n) {
				if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("title") ? e(t).attr("title") : ""
			}) : e.makeArray(e(this).attr("title"));
			if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
			set_position = jQuery.inArray(e(this).attr("href"), pp_images);
			rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this));
			k(this);
			if (settings.allow_resize) e(window).bind("scroll.prettyphoto", function () {
				x()
			});
			e.prettyPhoto.open();
			return false
		};
		e.prettyPhoto.open = function (t) {
			if (typeof settings == "undefined") {
				settings = s;
				pp_images = e.makeArray(arguments[0]);
				pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray("");
				pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray("");
				isSet = pp_images.length > 1 ? true : false;
				set_position = arguments[3] ? arguments[3] : 0;
				k(t.target)
			}
			if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
			b(e(pp_images).size());
			e(".pp_loaderIcon").show();
			if (settings.deeplinking) n();
			if (settings.social_tools) {
				facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
				$pp_pic_holder.find(".pp_social").html(facebook_like_link)
			}
			if ($ppt.is(":hidden")) $ppt.css("opacity", 0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
			$pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size());
			if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") {
				$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))
			} else {
				$pp_pic_holder.find(".pp_description").hide()
			}
			movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString();
			movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString();
			u = false;
			if (movie_height.indexOf("%") != -1) {
				movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150);
				u = true
			}
			if (movie_width.indexOf("%") != -1) {
				movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150);
				u = true
			}
			$pp_pic_holder.fadeIn(function () {
				settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(" ");
				imgPreloader = "";
				skipInjection = false;
				switch (S(pp_images[set_position])) {
					case "image":
						imgPreloader = new Image;
						nextImage = new Image;
						if (isSet && set_position < e(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image;
						if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];
						$pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
						imgPreloader.onload = function () {
							a = w(imgPreloader.width, imgPreloader.height);
							g()
						};
						imgPreloader.onerror = function () {
							alert("Image cannot be loaded. Make sure the path is correct and image exist.");
							e.prettyPhoto.close()
						};
						imgPreloader.src = pp_images[set_position];
						break;
					case "youtube":
						a = w(movie_width, movie_height);
						movie_id = i("v", pp_images[set_position]);
						if (movie_id == "") {
							movie_id = pp_images[set_position].split("youtu.be/");
							movie_id = movie_id[1];
							if (movie_id.indexOf("?") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("?"));
							if (movie_id.indexOf("&") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("&"))
						}
						movie = "http://www.youtube.com/embed/" + movie_id;
						i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1";
						if (settings.autoplay) movie += "&autoplay=1";
						toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
						break;
					case "vimeo":
						a = w(movie_width, movie_height);
						movie_id = pp_images[set_position];
						var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
						var n = movie_id.match(t);
						movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&byline=0&portrait=0";
						if (settings.autoplay) movie += "&autoplay=1;";
						vimeo_width = a["width"] + "/embed/?moog_width=" + a["width"];
						toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, a["height"]).replace(/{path}/g, movie);
						break;
					case "quicktime":
						a = w(movie_width, movie_height);
						a["height"] += 15;
						a["contentHeight"] += 15;
						a["containerHeight"] += 15;
						toInject = settings.quicktime_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
						break;
					case "flash":
						a = w(movie_width, movie_height);
						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
						filename = pp_images[set_position];
						filename = filename.substring(0, filename.indexOf("?"));
						toInject = settings.flash_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
						break;
					case "iframe":
						a = w(movie_width, movie_height);
						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
						toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{path}/g, frame_url);
						break;
					case "ajax":
						doresize = false;
						a = w(movie_width, movie_height);
						doresize = true;
						skipInjection = true;
						e.get(pp_images[set_position], function (e) {
							toInject = settings.inline_markup.replace(/{content}/g, e);
							$pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
							g()
						});
						break;
					case "custom":
						a = w(movie_width, movie_height);
						toInject = settings.custom_markup;
						break;
					case "inline":
						myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
							width: settings.default_width
						}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();
						doresize = false;
						a = w(e(myClone).width(), e(myClone).height());
						doresize = true;
						e(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html());
						break
				}
				if (!imgPreloader && !skipInjection) {
					$pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
					g()
				}
			});
			return false
		};
		e.prettyPhoto.changePage = function (t) {
			currentGalleryPage = 0;
			if (t == "previous") {
				set_position--;
				if (set_position < 0) set_position = e(pp_images).size() - 1
			} else if (t == "next") {
				set_position++;
				if (set_position > e(pp_images).size() - 1) set_position = 0
			} else {
				set_position = t
			}
			rel_index = set_position;
			if (!doresize) doresize = true;
			if (settings.allow_expand) {
				e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")
			}
			y(function () {
				e.prettyPhoto.open()
			})
		};
		e.prettyPhoto.changeGalleryPage = function (e) {
			if (e == "next") {
				currentGalleryPage++;
				if (currentGalleryPage > totalPage) currentGalleryPage = 0
			} else if (e == "previous") {
				currentGalleryPage--;
				if (currentGalleryPage < 0) currentGalleryPage = totalPage
			} else {
				currentGalleryPage = e
			}
			slide_speed = e == "next" || e == "previous" ? settings.animation_speed : 0;
			slide_to = currentGalleryPage * itemsPerPage * itemWidth;
			$pp_gallery.find("ul").animate({
				left: -slide_to
			}, slide_speed)
		};
		e.prettyPhoto.startSlideshow = function () {
			if (typeof m == "undefined") {
				$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
					e.prettyPhoto.stopSlideshow();
					return false
				});
				m = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)
			} else {
				e.prettyPhoto.changePage("next")
			}
		};
		e.prettyPhoto.stopSlideshow = function () {
			$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
				e.prettyPhoto.startSlideshow();
				return false
			});
			clearInterval(m);
			m = undefined
		};
		e.prettyPhoto.close = function () {
			if ($pp_overlay.is(":animated")) return;
			e.prettyPhoto.stopSlideshow();
			$pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
			e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
				e(this).remove()
			});
			$pp_overlay.fadeOut(settings.animation_speed, function () {
				if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
				e(this).remove();
				e(window).unbind("scroll.prettyphoto");
				r();
				settings.callback();
				doresize = true;
				f = false;
				delete settings
			})
		};
		if (!pp_alreadyInitialized && t()) {
			pp_alreadyInitialized = true;
			hashIndex = t();
			hashRel = hashIndex;
			hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1);
			hashRel = hashRel.substring(0, hashRel.indexOf("/"));
			setTimeout(function () {
				e("a[" + s.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
			}, 50)
		}
		return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
	};
})(jQuery);
var pp_alreadyInitialized = false

	/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
	! function (a, b, c) {
		"use strict";

		function d(c) {
			if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
				for (var d in c.easing) W[d] = c.easing[d];
			ta = c.edgeStrategy || "set", ka = {
				beforerender: c.beforerender,
				render: c.render,
				keyframe: c.keyframe
			}, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
				targetTop: ha.getScrollTop()
			}, Sa = (c.mobileCheck || function () {
				return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
			})(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function () {
				var a = e.clientWidth,
					b = e.clientHeight;
				(b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
			});
			var g = U();
			return function h() {
				$(), va = g(h)
			}(), ha
		}
		var e, f, g = {
				get: function () {
					return ha
				},
				init: function (a) {
					return ha || new d(a)
				},
				VERSION: "0.6.30"
			},
			h = Object.prototype.hasOwnProperty,
			i = a.Math,
			j = a.getComputedStyle,
			k = "touchstart",
			l = "touchmove",
			m = "touchcancel",
			n = "touchend",
			o = "skrollable",
			p = o + "-before",
			q = o + "-between",
			r = o + "-after",
			s = "skrollr",
			t = "no-" + s,
			u = s + "-desktop",
			v = s + "-mobile",
			w = "linear",
			x = 1e3,
			y = .004,
			z = "skrollr-body",
			A = 200,
			B = "start",
			C = "end",
			D = "center",
			E = "bottom",
			F = "___skrollable_id",
			G = /^(?:input|textarea|button|select)$/i,
			H = /^\s+|\s+$/g,
			I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
			J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
			K = /^(@?[a-z\-]+)\[(\w+)\]$/,
			L = /-([a-z0-9_])/g,
			M = function (a, b) {
				return b.toUpperCase()
			},
			N = /[\-+]?[\d]*\.?[\d]+/g,
			O = /\{\?\}/g,
			P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
			Q = /[a-z\-]+-gradient/g,
			R = "",
			S = "",
			T = function () {
				var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
				if (j) {
					var b = j(f, null);
					for (var c in b)
						if (R = c.match(a) || +c == c && b[c].match(a)) break;
					if (!R) return void(R = S = "");
					R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
						"-webkit-": "webkit",
						"-moz-": "Moz",
						"-ms-": "ms",
						"-o-": "O"
					}[R]) : S = "-" + R.toLowerCase() + "-"
				}
			},
			U = function () {
				var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
					c = Ha();
				return (Sa || !b) && (b = function (b) {
					var d = Ha() - c,
						e = i.max(0, 1e3 / 60 - d);
					return a.setTimeout(function () {
						c = Ha(), b()
					}, e)
				}), b
			},
			V = function () {
				var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
				return (Sa || !b) && (b = function (b) {
					return a.clearTimeout(b)
				}), b
			},
			W = {
				begin: function () {
					return 0
				},
				end: function () {
					return 1
				},
				linear: function (a) {
					return a
				},
				quadratic: function (a) {
					return a * a
				},
				cubic: function (a) {
					return a * a * a
				},
				swing: function (a) {
					return -i.cos(a * i.PI) / 2 + .5
				},
				sqrt: function (a) {
					return i.sqrt(a)
				},
				outCubic: function (a) {
					return i.pow(a - 1, 3) + 1
				},
				bounce: function (a) {
					var b;
					if (.5083 >= a) b = 3;
					else if (.8489 >= a) b = 9;
					else if (.96208 >= a) b = 27;
					else {
						if (!(.99981 >= a)) return 1;
						b = 91
					}
					return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
				}
			};
		d.prototype.refresh = function (a) {
			var d, e, f = !1;
			for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
				var g = a[d],
					h = g,
					i = [],
					j = pa,
					k = ta,
					l = !1;
				if (f && F in g && delete g[F], g.attributes) {
					for (var m = 0, n = g.attributes.length; n > m; m++) {
						var p = g.attributes[m];
						if ("data-anchor-target" !== p.name)
							if ("data-smooth-scrolling" !== p.name)
								if ("data-edge-strategy" !== p.name)
									if ("data-emit-events" !== p.name) {
										var q = p.name.match(I);
										if (null !== q) {
											var r = {
												props: p.value,
												element: g,
												eventType: p.name.replace(L, M)
											};
											i.push(r);
											var s = q[1];
											s && (r.constant = s.substr(1));
											var t = q[2];
											/p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
											var u = q[3],
												v = q[4] || u;
											u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
										}
									} else l = !0;
						else k = p.value;
						else j = "off" !== p.value;
						else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
					}
					if (i.length) {
						var w, x, y;
						!f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
							element: g,
							styleAttr: w,
							classAttr: x,
							anchorTarget: h,
							keyFrames: i,
							smoothScrolling: j,
							edgeStrategy: k,
							emitEvents: l,
							lastFrameIndex: -1
						}, Ea(g, [o], [])
					}
				}
			}
			for (Aa(), d = 0, e = a.length; e > d; d++) {
				var z = ia[a[d][F]];
				z !== c && (_(z), ba(z))
			}
			return ha
		}, d.prototype.relativeToAbsolute = function (a, b, c) {
			var d = e.clientHeight,
				f = a.getBoundingClientRect(),
				g = f.top,
				h = f.bottom - f.top;
			return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
		}, d.prototype.animateTo = function (a, b) {
			b = b || {};
			var d = Ha(),
				e = ha.getScrollTop(),
				f = b.duration === c ? x : b.duration;
			return oa = {
				startTop: e,
				topDiff: a - e,
				targetTop: a,
				duration: f,
				startTime: d,
				endTime: d + f,
				easing: W[b.easing || w],
				done: b.done
			}, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
		}, d.prototype.stopAnimateTo = function () {
			oa && oa.done && oa.done.call(ha, !0), oa = c
		}, d.prototype.isAnimatingTo = function () {
			return !!oa
		}, d.prototype.isMobile = function () {
			return Sa
		}, d.prototype.setScrollTop = function (b, c) {
			return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
		}, d.prototype.getScrollTop = function () {
			return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
		}, d.prototype.getMaxScrollTop = function () {
			return Ja
		}, d.prototype.on = function (a, b) {
			return ka[a] = b, ha
		}, d.prototype.off = function (a) {
			return delete ka[a], ha
		}, d.prototype.destroy = function () {
			var a = V();
			a(va), ya(), Ea(e, [t], [s, u, v]);
			for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
			e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
		};
		var X = function () {
				var d, g, h, j, o, p, q, r, s, t, u, v;
				wa(e, [k, l, m, n].join(" "), function (a) {
					var e = a.changedTouches[0];
					for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
					switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
						case k:
							d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
							break;
						case l:
							G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
							break;
						default:
						case m:
						case n:
							var f = g - o,
								w = h - p,
								x = w * w + f * f;
							if (49 > x) {
								if (!G.test(d.tagName)) {
									d.focus();
									var y = b.createEvent("MouseEvents");
									y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
								}
								return
							}
							d = c;
							var z = r / v;
							z = i.max(i.min(z, 3), -3);
							var A = i.abs(z / na),
								B = z * A + .5 * na * A * A,
								C = ha.getScrollTop() - B,
								D = 0;
							C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
								easing: "outCubic",
								duration: A
							})
					}
				}), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
			},
			Y = function () {
				var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
					o = Ba();
				for (j = 0, k = ia.length; k > j; j++)
					for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
				for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
					for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
					a.keyFrames.sort(Ia)
				}
			},
			Z = function (a, b) {
				for (var c = 0, d = ia.length; d > c; c++) {
					var e, f, i = ia[c],
						j = i.element,
						k = i.smoothScrolling ? a : b,
						l = i.keyFrames,
						m = l.length,
						n = l[0],
						s = l[l.length - 1],
						t = k < n.frame,
						u = k > s.frame,
						v = t ? n : s,
						w = i.emitEvents,
						x = i.lastFrameIndex;
					if (t || u) {
						if (t && -1 === i.edge || u && 1 === i.edge) continue;
						switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
							case "reset":
								fa(j);
								continue;
							case "ease":
								k = v.frame;
								break;
							default:
							case "set":
								var y = v.props;
								for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
								continue
						}
					} else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
					for (var z = 0; m - 1 > z; z++)
						if (k >= l[z].frame && k <= l[z + 1].frame) {
							var A = l[z],
								B = l[z + 1];
							for (e in A.props)
								if (h.call(A.props, e)) {
									var C = (k - A.frame) / (B.frame - A.frame);
									C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
								}
							w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
							break
						}
				}
			},
			$ = function () {
				Qa && (Qa = !1, Aa());
				var a, b, d = ha.getScrollTop(),
					e = Ha();
				if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
				else if (!sa) {
					var f = ra.targetTop - d;
					f && (ra = {
						startTop: Ma,
						topDiff: d - Ma,
						targetTop: d,
						startTime: Na,
						endTime: Na + qa
					}), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
				}
				if (sa || Ma !== d) {
					La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
					var h = {
							curTop: d,
							lastTop: Ma,
							maxTop: Ja,
							direction: La
						},
						i = ka.beforerender && ka.beforerender.call(ha, h);
					i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
				}
				Na = e
			},
			_ = function (a) {
				for (var b = 0, c = a.keyFrames.length; c > b; b++) {
					for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
						value: e,
						easing: W[d]
					};
					h.props = i
				}
			},
			aa = function (a) {
				var b = [];
				return P.lastIndex = 0, a = a.replace(P, function (a) {
					return a.replace(N, function (a) {
						return a / 255 * 100 + "%"
					})
				}), S && (Q.lastIndex = 0, a = a.replace(Q, function (a) {
					return S + a
				})), a = a.replace(N, function (a) {
					return b.push(+a), "{?}"
				}), b.unshift(a), b
			},
			ba = function (a) {
				var b, c, d = {};
				for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
				for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
			},
			ca = function (a, b) {
				var c;
				for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
				for (c in a.props) b[c] = a.props[c]
			},
			da = function (a, b, c) {
				var d, e = a.length;
				if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
				var f = [a[0]];
				for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
				return f
			},
			ea = function (a) {
				var b = 1;
				return O.lastIndex = 0, a[0].replace(O, function () {
					return a[b++]
				})
			},
			fa = function (a, b) {
				a = [].concat(a);
				for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
			},
			ga = function () {
				ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
				var a = j(ja),
					b = a.getPropertyValue("transform"),
					c = a.getPropertyValue(S + "transform"),
					d = b && "none" !== b || c && "none" !== c;
				d || (ua = "")
			};
		g.setStyle = function (a, b, c) {
			var d = a.style;
			if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
			else if ("float" === b) d.styleFloat = d.cssFloat = c;
			else try {
				R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
			} catch (e) {}
		};
		var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function (b, c, d) {
				var e = function (b) {
					return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function () {
						b.returnValue = !1, b.defaultPrevented = !0
					}), d.call(this, b)
				};
				c = c.split(" ");
				for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
					element: b,
					name: f,
					listener: d
				})
			},
			xa = g.removeEvent = function (a, b, c) {
				b = b.split(" ");
				for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
			},
			ya = function () {
				for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
				Ua = []
			},
			za = function (a, b, c) {
				ka.keyframe && ka.keyframe.call(ha, a, b, c)
			},
			Aa = function () {
				var a = ha.getScrollTop();
				Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
			},
			Ba = function () {
				var a, b, c = e.clientHeight,
					d = {};
				for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
				return d
			},
			Ca = function () {
				var a, b = 0;
				return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
			},
			Da = function (b) {
				var c = "className";
				return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
			},
			Ea = function (b, d, e) {
				var f = "className";
				if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
				for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
				g = Fa(g);
				for (var j = 0, k = d.length; k > j; j++) - 1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
				b[f] = Fa(g)
			},
			Fa = function (a) {
				return a.replace(H, "")
			},
			Ga = function (a) {
				return " " + a + " "
			},
			Ha = Date.now || function () {
				return +new Date
			},
			Ia = function (a, b) {
				return a.frame - b.frame
			},
			Ja = 0,
			Ka = 1,
			La = "down",
			Ma = -1,
			Na = Ha(),
			Oa = 0,
			Pa = 0,
			Qa = !1,
			Ra = 0,
			Sa = !1,
			Ta = 0,
			Ua = [];
		"function" == typeof define && define.amd ? define([], function () {
			return g
		}) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
	}(window, document);

/* @preserve
 * Leaflet 1.3.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
! function (t, i) {
	"object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
}(this, function (t) {
	"use strict";

	function i(t) {
		var i, e, n, o;
		for (e = 1, n = arguments.length; e < n; e++) {
			o = arguments[e];
			for (i in o) t[i] = o[i]
		}
		return t
	}

	function e(t, i) {
		var e = Array.prototype.slice;
		if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
		var n = e.call(arguments, 2);
		return function () {
			return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
		}
	}

	function n(t) {
		return t._leaflet_id = t._leaflet_id || ++ti, t._leaflet_id
	}

	function o(t, i, e) {
		var n, o, s, r;
		return r = function () {
			n = !1, o && (s.apply(e, o), o = !1)
		}, s = function () {
			n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
		}
	}

	function s(t, i, e) {
		var n = i[1],
			o = i[0],
			s = n - o;
		return t === n && e ? t : ((t - o) % s + s) % s + o
	}

	function r() {
		return !1
	}

	function a(t, i) {
		var e = Math.pow(10, void 0 === i ? 6 : i);
		return Math.round(t * e) / e
	}

	function h(t) {
		return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
	}

	function u(t) {
		return h(t).split(/\s+/)
	}

	function l(t, i) {
		t.hasOwnProperty("options") || (t.options = t.options ? Qt(t.options) : {});
		for (var e in i) t.options[e] = i[e];
		return t.options
	}

	function c(t, i, e) {
		var n = [];
		for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
		return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
	}

	function _(t, i) {
		return t.replace(ii, function (t, e) {
			var n = i[e];
			if (void 0 === n) throw new Error("No value provided for variable " + t);
			return "function" == typeof n && (n = n(i)), n
		})
	}

	function d(t, i) {
		for (var e = 0; e < t.length; e++)
			if (t[e] === i) return e;
		return -1
	}

	function p(t) {
		return window["webkit" + t] || window["moz" + t] || window["ms" + t]
	}

	function m(t) {
		var i = +new Date,
			e = Math.max(0, 16 - (i - oi));
		return oi = i + e, window.setTimeout(t, e)
	}

	function f(t, i, n) {
		if (!n || si !== m) return si.call(window, e(t, i));
		t.call(i)
	}

	function g(t) {
		t && ri.call(window, t)
	}

	function v() {}

	function y(t) {
		if ("undefined" != typeof L && L && L.Mixin) {
			t = ei(t) ? t : [t];
			for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
		}
	}

	function x(t, i, e) {
		this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
	}

	function w(t, i, e) {
		return t instanceof x ? t : ei(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e)
	}

	function P(t, i) {
		if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
	}

	function b(t, i) {
		return !t || t instanceof P ? t : new P(t, i)
	}

	function T(t, i) {
		if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
	}

	function z(t, i) {
		return t instanceof T ? t : new T(t, i)
	}

	function M(t, i, e) {
		if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
		this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
	}

	function C(t, i, e) {
		return t instanceof M ? t : ei(t) && "object" != typeof t[0] ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e)
	}

	function Z(t, i, e, n) {
		if (ei(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
		this._a = t, this._b = i, this._c = e, this._d = n
	}

	function S(t, i, e, n) {
		return new Z(t, i, e, n)
	}

	function E(t) {
		return document.createElementNS("http://www.w3.org/2000/svg", t)
	}

	function k(t, i) {
		var e, n, o, s, r, a, h = "";
		for (e = 0, o = t.length; e < o; e++) {
			for (n = 0, s = (r = t[e]).length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
			h += i ? Xi ? "z" : "x" : ""
		}
		return h || "M0 0"
	}

	function I(t) {
		return navigator.userAgent.toLowerCase().indexOf(t) >= 0
	}

	function A(t, i, e, n) {
		return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this
	}

	function B(t, i, e) {
		var n = t["_leaflet_" + i + e];
		return "touchstart" === i ? t.removeEventListener(Qi, n, !1) : "touchmove" === i ? t.removeEventListener(te, n, !1) : "touchend" === i && (t.removeEventListener(ie, n, !1), t.removeEventListener(ee, n, !1)), this
	}

	function O(t, i, n) {
		var o = e(function (t) {
			if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
				if (!(ne.indexOf(t.target.tagName) < 0)) return;
				$(t)
			}
			j(t, i)
		});
		t["_leaflet_touchstart" + n] = o, t.addEventListener(Qi, o, !1), se || (document.documentElement.addEventListener(Qi, R, !0), document.documentElement.addEventListener(te, D, !0), document.documentElement.addEventListener(ie, N, !0), document.documentElement.addEventListener(ee, N, !0), se = !0)
	}

	function R(t) {
		oe[t.pointerId] = t, re++
	}

	function D(t) {
		oe[t.pointerId] && (oe[t.pointerId] = t)
	}

	function N(t) {
		delete oe[t.pointerId], re--
	}

	function j(t, i) {
		t.touches = [];
		for (var e in oe) t.touches.push(oe[e]);
		t.changedTouches = [t], i(t)
	}

	function W(t, i, e) {
		var n = function (t) {
			(t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i)
		};
		t["_leaflet_touchmove" + e] = n, t.addEventListener(te, n, !1)
	}

	function H(t, i, e) {
		var n = function (t) {
			j(t, i)
		};
		t["_leaflet_touchend" + e] = n, t.addEventListener(ie, n, !1), t.addEventListener(ee, n, !1)
	}

	function F(t, i, e) {
		function n(t) {
			var i;
			if (Ui) {
				if (!Pi || "mouse" === t.pointerType) return;
				i = re
			} else i = t.touches.length;
			if (!(i > 1)) {
				var e = Date.now(),
					n = e - (s || e);
				r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e
			}
		}

		function o(t) {
			if (a && !r.cancelBubble) {
				if (Ui) {
					if (!Pi || "mouse" === t.pointerType) return;
					var e, n, o = {};
					for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
					r = o
				}
				r.type = "dblclick", i(r), s = null
			}
		}
		var s, r, a = !1,
			h = 250;
		return t[ue + ae + e] = n, t[ue + he + e] = o, t[ue + "dblclick" + e] = i, t.addEventListener(ae, n, !1), t.addEventListener(he, o, !1), t.addEventListener("dblclick", i, !1), this
	}

	function U(t, i) {
		var e = t[ue + ae + i],
			n = t[ue + he + i],
			o = t[ue + "dblclick" + i];
		return t.removeEventListener(ae, e, !1), t.removeEventListener(he, n, !1), Pi || t.removeEventListener("dblclick", o, !1), this
	}

	function V(t, i, e, n) {
		if ("object" == typeof i)
			for (var o in i) G(t, o, i[o], e);
		else
			for (var s = 0, r = (i = u(i)).length; s < r; s++) G(t, i[s], e, n);
		return this
	}

	function q(t, i, e, n) {
		if ("object" == typeof i)
			for (var o in i) K(t, o, i[o], e);
		else if (i)
			for (var s = 0, r = (i = u(i)).length; s < r; s++) K(t, i[s], e, n);
		else {
			for (var a in t[le]) K(t, a, t[le][a]);
			delete t[le]
		}
		return this
	}

	function G(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : "");
		if (t[le] && t[le][s]) return this;
		var r = function (i) {
				return e.call(o || t, i || window.event)
			},
			a = r;
		Ui && 0 === i.indexOf("touch") ? A(t, i, r, s) : !Vi || "dblclick" !== i || !F || Ui && Si ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function (i) {
			i = i || window.event, ot(t, i) && a(i)
		}, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && Ti && (r = function (t) {
			st(t, a)
		}), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[le] = t[le] || {}, t[le][s] = r
	}

	function K(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : ""),
			r = t[le] && t[le][s];
		if (!r) return this;
		Ui && 0 === i.indexOf("touch") ? B(t, i, s) : !Vi || "dblclick" !== i || !U || Ui && Si ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : U(t, s), t[le][s] = null
	}

	function Y(t) {
		return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, nt(t), this
	}

	function X(t) {
		return G(t, "mousewheel", Y), this
	}

	function J(t) {
		return V(t, "mousedown touchstart dblclick", Y), G(t, "click", et), this
	}

	function $(t) {
		return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
	}

	function Q(t) {
		return $(t), Y(t), this
	}

	function tt(t, i) {
		if (!i) return new x(t.clientX, t.clientY);
		var e = i.getBoundingClientRect(),
			n = e.width / i.offsetWidth || 1,
			o = e.height / i.offsetHeight || 1;
		return new x(t.clientX / n - e.left - i.clientLeft, t.clientY / o - e.top - i.clientTop)
	}

	function it(t) {
		return Pi ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ce : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
	}

	function et(t) {
		_e[t.type] = !0
	}

	function nt(t) {
		var i = _e[t.type];
		return _e[t.type] = !1, i
	}

	function ot(t, i) {
		var e = i.relatedTarget;
		if (!e) return !0;
		try {
			for (; e && e !== t;) e = e.parentNode
		} catch (t) {
			return !1
		}
		return e !== t
	}

	function st(t, i) {
		var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
			n = pi && e - pi;
		n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? Q(t) : (pi = e, i(t))
	}

	function rt(t) {
		return "string" == typeof t ? document.getElementById(t) : t
	}

	function at(t, i) {
		var e = t.style[i] || t.currentStyle && t.currentStyle[i];
		if ((!e || "auto" === e) && document.defaultView) {
			var n = document.defaultView.getComputedStyle(t, null);
			e = n ? n[i] : null
		}
		return "auto" === e ? null : e
	}

	function ht(t, i, e) {
		var n = document.createElement(t);
		return n.className = i || "", e && e.appendChild(n), n
	}

	function ut(t) {
		var i = t.parentNode;
		i && i.removeChild(t)
	}

	function lt(t) {
		for (; t.firstChild;) t.removeChild(t.firstChild)
	}

	function ct(t) {
		var i = t.parentNode;
		i.lastChild !== t && i.appendChild(t)
	}

	function _t(t) {
		var i = t.parentNode;
		i.firstChild !== t && i.insertBefore(t, i.firstChild)
	}

	function dt(t, i) {
		if (void 0 !== t.classList) return t.classList.contains(i);
		var e = gt(t);
		return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
	}

	function pt(t, i) {
		if (void 0 !== t.classList)
			for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
		else if (!dt(t, i)) {
			var s = gt(t);
			ft(t, (s ? s + " " : "") + i)
		}
	}

	function mt(t, i) {
		void 0 !== t.classList ? t.classList.remove(i) : ft(t, h((" " + gt(t) + " ").replace(" " + i + " ", " ")))
	}

	function ft(t, i) {
		void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
	}

	function gt(t) {
		return void 0 === t.className.baseVal ? t.className : t.className.baseVal
	}

	function vt(t, i) {
		"opacity" in t.style ? t.style.opacity = i : "filter" in t.style && yt(t, i)
	}

	function yt(t, i) {
		var e = !1,
			n = "DXImageTransform.Microsoft.Alpha";
		try {
			e = t.filters.item(n)
		} catch (t) {
			if (1 === i) return
		}
		i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
	}

	function xt(t) {
		for (var i = document.documentElement.style, e = 0; e < t.length; e++)
			if (t[e] in i) return t[e];
		return !1
	}

	function wt(t, i, e) {
		var n = i || new x(0, 0);
		t.style[pe] = (Oi ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
	}

	function Lt(t, i) {
		t._leaflet_pos = i, Ni ? wt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
	}

	function Pt(t) {
		return t._leaflet_pos || new x(0, 0)
	}

	function bt() {
		V(window, "dragstart", $)
	}

	function Tt() {
		q(window, "dragstart", $)
	}

	function zt(t) {
		for (; - 1 === t.tabIndex;) t = t.parentNode;
		t.style && (Mt(), ve = t, ye = t.style.outline, t.style.outline = "none", V(window, "keydown", Mt))
	}

	function Mt() {
		ve && (ve.style.outline = ye, ve = void 0, ye = void 0, q(window, "keydown", Mt))
	}

	function Ct(t, i) {
		if (!i || !t.length) return t.slice();
		var e = i * i;
		return t = kt(t, e), t = St(t, e)
	}

	function Zt(t, i, e) {
		return Math.sqrt(Rt(t, i, e, !0))
	}

	function St(t, i) {
		var e = t.length,
			n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
		n[0] = n[e - 1] = 1, Et(t, n, i, 0, e - 1);
		var o, s = [];
		for (o = 0; o < e; o++) n[o] && s.push(t[o]);
		return s
	}

	function Et(t, i, e, n, o) {
		var s, r, a, h = 0;
		for (r = n + 1; r <= o - 1; r++)(a = Rt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
		h > e && (i[s] = 1, Et(t, i, e, n, s), Et(t, i, e, s, o))
	}

	function kt(t, i) {
		for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Ot(t[n], t[o]) > i && (e.push(t[n]), o = n);
		return o < s - 1 && e.push(t[s - 1]), e
	}

	function It(t, i, e, n, o) {
		var s, r, a, h = n ? Se : Bt(t, e),
			u = Bt(i, e);
		for (Se = u;;) {
			if (!(h | u)) return [t, i];
			if (h & u) return !1;
			a = Bt(r = At(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a)
		}
	}

	function At(t, i, e, n, o) {
		var s, r, a = i.x - t.x,
			h = i.y - t.y,
			u = n.min,
			l = n.max;
		return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o)
	}

	function Bt(t, i) {
		var e = 0;
		return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
	}

	function Ot(t, i) {
		var e = i.x - t.x,
			n = i.y - t.y;
		return e * e + n * n
	}

	function Rt(t, i, e, n) {
		var o, s = i.x,
			r = i.y,
			a = e.x - s,
			h = e.y - r,
			u = a * a + h * h;
		return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r)
	}

	function Dt(t) {
		return !ei(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
	}

	function Nt(t) {
		return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Dt(t)
	}

	function jt(t, i, e) {
		var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
		for (o = 0, u = t.length; o < u; o++) t[o]._code = Bt(t[o], i);
		for (r = 0; r < 4; r++) {
			for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = At(h, a, l, i, e))._code = Bt(c, i), n.push(c)) : (h._code & l && ((c = At(h, a, l, i, e))._code = Bt(c, i), n.push(c)), n.push(a));
			t = n
		}
		return t
	}

	function Wt(t, i) {
		var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
			a = r ? r.coordinates : null,
			h = [],
			u = i && i.pointToLayer,
			l = i && i.coordsToLatLng || Ht;
		if (!a && !r) return null;
		switch (r.type) {
			case "Point":
				return e = l(a), u ? u(t, e) : new Xe(e);
			case "MultiPoint":
				for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new Xe(e));
				return new qe(h);
			case "LineString":
			case "MultiLineString":
				return n = Ft(a, "LineString" === r.type ? 0 : 1, l), new tn(n, i);
			case "Polygon":
			case "MultiPolygon":
				return n = Ft(a, "Polygon" === r.type ? 1 : 2, l), new en(n, i);
			case "GeometryCollection":
				for (o = 0, s = r.geometries.length; o < s; o++) {
					var c = Wt({
						geometry: r.geometries[o],
						type: "Feature",
						properties: t.properties
					}, i);
					c && h.push(c)
				}
				return new qe(h);
			default:
				throw new Error("Invalid GeoJSON object.")
		}
	}

	function Ht(t) {
		return new M(t[1], t[0], t[2])
	}

	function Ft(t, i, e) {
		for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Ft(t[s], i - 1, e) : (e || Ht)(t[s]), o.push(n);
		return o
	}

	function Ut(t, i) {
		return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)]
	}

	function Vt(t, i, e, n) {
		for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Vt(t[s], i - 1, e, n) : Ut(t[s], n));
		return !i && e && o.push(o[0]), o
	}

	function qt(t, e) {
		return t.feature ? i({}, t.feature, {
			geometry: e
		}) : Gt(e)
	}

	function Gt(t) {
		return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
			type: "Feature",
			properties: {},
			geometry: t
		}
	}

	function Kt(t, i) {
		return new nn(t, i)
	}

	function Yt(t, i) {
		return new dn(t, i)
	}

	function Xt(t) {
		return Yi ? new fn(t) : null
	}

	function Jt(t) {
		return Xi || Ji ? new xn(t) : null
	}
	var $t = Object.freeze;
	Object.freeze = function (t) {
		return t
	};
	var Qt = Object.create || function () {
			function t() {}
			return function (i) {
				return t.prototype = i, new t
			}
		}(),
		ti = 0,
		ii = /\{ *([\w_-]+) *\}/g,
		ei = Array.isArray || function (t) {
			return "[object Array]" === Object.prototype.toString.call(t)
		},
		ni = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		oi = 0,
		si = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
		ri = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function (t) {
			window.clearTimeout(t)
		},
		ai = (Object.freeze || Object)({
			freeze: $t,
			extend: i,
			create: Qt,
			bind: e,
			lastId: ti,
			stamp: n,
			throttle: o,
			wrapNum: s,
			falseFn: r,
			formatNum: a,
			trim: h,
			splitWords: u,
			setOptions: l,
			getParamString: c,
			template: _,
			isArray: ei,
			indexOf: d,
			emptyImageUrl: ni,
			requestFn: si,
			cancelFn: ri,
			requestAnimFrame: f,
			cancelAnimFrame: g
		});
	v.extend = function (t) {
		var e = function () {
				this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
			},
			n = e.__super__ = this.prototype,
			o = Qt(n);
		o.constructor = e, e.prototype = o;
		for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
		return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(Qt(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function () {
			if (!this._initHooksCalled) {
				n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
				for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this)
			}
		}, e
	}, v.include = function (t) {
		return i(this.prototype, t), this
	}, v.mergeOptions = function (t) {
		return i(this.prototype.options, t), this
	}, v.addInitHook = function (t) {
		var i = Array.prototype.slice.call(arguments, 1),
			e = "function" == typeof t ? t : function () {
				this[t].apply(this, i)
			};
		return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
	};
	var hi = {
		on: function (t, i, e) {
			if ("object" == typeof t)
				for (var n in t) this._on(n, t[n], i);
			else
				for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
			return this
		},
		off: function (t, i, e) {
			if (t)
				if ("object" == typeof t)
					for (var n in t) this._off(n, t[n], i);
				else
					for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
			else delete this._events;
			return this
		},
		_on: function (t, i, e) {
			this._events = this._events || {};
			var n = this._events[t];
			n || (n = [], this._events[t] = n), e === this && (e = void 0);
			for (var o = {
					fn: i,
					ctx: e
				}, s = n, r = 0, a = s.length; r < a; r++)
				if (s[r].fn === i && s[r].ctx === e) return;
			s.push(o)
		},
		_off: function (t, i, e) {
			var n, o, s;
			if (this._events && (n = this._events[t]))
				if (i) {
					if (e === this && (e = void 0), n)
						for (o = 0, s = n.length; o < s; o++) {
							var a = n[o];
							if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
						}
				} else {
					for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
					delete this._events[t]
				}
		},
		fire: function (t, e, n) {
			if (!this.listens(t, n)) return this;
			var o = i({}, e, {
				type: t,
				target: this,
				sourceTarget: e && e.sourceTarget || this
			});
			if (this._events) {
				var s = this._events[t];
				if (s) {
					this._firingCount = this._firingCount + 1 || 1;
					for (var r = 0, a = s.length; r < a; r++) {
						var h = s[r];
						h.fn.call(h.ctx || this, o)
					}
					this._firingCount--
				}
			}
			return n && this._propagateEvent(o), this
		},
		listens: function (t, i) {
			var e = this._events && this._events[t];
			if (e && e.length) return !0;
			if (i)
				for (var n in this._eventParents)
					if (this._eventParents[n].listens(t, i)) return !0;
			return !1
		},
		once: function (t, i, n) {
			if ("object" == typeof t) {
				for (var o in t) this.once(o, t[o], i);
				return this
			}
			var s = e(function () {
				this.off(t, i, n).off(t, s, n)
			}, this);
			return this.on(t, i, n).on(t, s, n)
		},
		addEventParent: function (t) {
			return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
		},
		removeEventParent: function (t) {
			return this._eventParents && delete this._eventParents[n(t)], this
		},
		_propagateEvent: function (t) {
			for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
				layer: t.target,
				propagatedFrom: t.target
			}, t), !0)
		}
	};
	hi.addEventListener = hi.on, hi.removeEventListener = hi.clearAllEventListeners = hi.off, hi.addOneTimeEventListener = hi.once, hi.fireEvent = hi.fire, hi.hasEventListeners = hi.listens;
	var ui = v.extend(hi),
		li = Math.trunc || function (t) {
			return t > 0 ? Math.floor(t) : Math.ceil(t)
		};
	x.prototype = {
		clone: function () {
			return new x(this.x, this.y)
		},
		add: function (t) {
			return this.clone()._add(w(t))
		},
		_add: function (t) {
			return this.x += t.x, this.y += t.y, this
		},
		subtract: function (t) {
			return this.clone()._subtract(w(t))
		},
		_subtract: function (t) {
			return this.x -= t.x, this.y -= t.y, this
		},
		divideBy: function (t) {
			return this.clone()._divideBy(t)
		},
		_divideBy: function (t) {
			return this.x /= t, this.y /= t, this
		},
		multiplyBy: function (t) {
			return this.clone()._multiplyBy(t)
		},
		_multiplyBy: function (t) {
			return this.x *= t, this.y *= t, this
		},
		scaleBy: function (t) {
			return new x(this.x * t.x, this.y * t.y)
		},
		unscaleBy: function (t) {
			return new x(this.x / t.x, this.y / t.y)
		},
		round: function () {
			return this.clone()._round()
		},
		_round: function () {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		floor: function () {
			return this.clone()._floor()
		},
		_floor: function () {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function () {
			return this.clone()._ceil()
		},
		_ceil: function () {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		trunc: function () {
			return this.clone()._trunc()
		},
		_trunc: function () {
			return this.x = li(this.x), this.y = li(this.y), this
		},
		distanceTo: function (t) {
			var i = (t = w(t)).x - this.x,
				e = t.y - this.y;
			return Math.sqrt(i * i + e * e)
		},
		equals: function (t) {
			return (t = w(t)).x === this.x && t.y === this.y
		},
		contains: function (t) {
			return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
		},
		toString: function () {
			return "Point(" + a(this.x) + ", " + a(this.y) + ")"
		}
	}, P.prototype = {
		extend: function (t) {
			return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
		},
		getCenter: function (t) {
			return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
		},
		getBottomLeft: function () {
			return new x(this.min.x, this.max.y)
		},
		getTopRight: function () {
			return new x(this.max.x, this.min.y)
		},
		getTopLeft: function () {
			return this.min
		},
		getBottomRight: function () {
			return this.max
		},
		getSize: function () {
			return this.max.subtract(this.min)
		},
		contains: function (t) {
			var i, e;
			return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
		},
		intersects: function (t) {
			t = b(t);
			var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x >= i.x && n.x <= e.x,
				r = o.y >= i.y && n.y <= e.y;
			return s && r
		},
		overlaps: function (t) {
			t = b(t);
			var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x > i.x && n.x < e.x,
				r = o.y > i.y && n.y < e.y;
			return s && r
		},
		isValid: function () {
			return !(!this.min || !this.max)
		}
	}, T.prototype = {
		extend: function (t) {
			var i, e, n = this._southWest,
				o = this._northEast;
			if (t instanceof M) i = t, e = t;
			else {
				if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
				if (i = t._southWest, e = t._northEast, !i || !e) return this
			}
			return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this
		},
		pad: function (t) {
			var i = this._southWest,
				e = this._northEast,
				n = Math.abs(i.lat - e.lat) * t,
				o = Math.abs(i.lng - e.lng) * t;
			return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o))
		},
		getCenter: function () {
			return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
		},
		getSouthWest: function () {
			return this._southWest
		},
		getNorthEast: function () {
			return this._northEast
		},
		getNorthWest: function () {
			return new M(this.getNorth(), this.getWest())
		},
		getSouthEast: function () {
			return new M(this.getSouth(), this.getEast())
		},
		getWest: function () {
			return this._southWest.lng
		},
		getSouth: function () {
			return this._southWest.lat
		},
		getEast: function () {
			return this._northEast.lng
		},
		getNorth: function () {
			return this._northEast.lat
		},
		contains: function (t) {
			t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
			var i, e, n = this._southWest,
				o = this._northEast;
			return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
		},
		intersects: function (t) {
			t = z(t);
			var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat >= i.lat && n.lat <= e.lat,
				r = o.lng >= i.lng && n.lng <= e.lng;
			return s && r
		},
		overlaps: function (t) {
			t = z(t);
			var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat > i.lat && n.lat < e.lat,
				r = o.lng > i.lng && n.lng < e.lng;
			return s && r
		},
		toBBoxString: function () {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
		},
		equals: function (t, i) {
			return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
		},
		isValid: function () {
			return !(!this._southWest || !this._northEast)
		}
	}, M.prototype = {
		equals: function (t, i) {
			return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
		},
		toString: function (t) {
			return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
		},
		distanceTo: function (t) {
			return _i.distance(this, C(t))
		},
		wrap: function () {
			return _i.wrapLatLng(this)
		},
		toBounds: function (t) {
			var i = 180 * t / 40075017,
				e = i / Math.cos(Math.PI / 180 * this.lat);
			return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
		},
		clone: function () {
			return new M(this.lat, this.lng, this.alt)
		}
	};
	var ci = {
			latLngToPoint: function (t, i) {
				var e = this.projection.project(t),
					n = this.scale(i);
				return this.transformation._transform(e, n)
			},
			pointToLatLng: function (t, i) {
				var e = this.scale(i),
					n = this.transformation.untransform(t, e);
				return this.projection.unproject(n)
			},
			project: function (t) {
				return this.projection.project(t)
			},
			unproject: function (t) {
				return this.projection.unproject(t)
			},
			scale: function (t) {
				return 256 * Math.pow(2, t)
			},
			zoom: function (t) {
				return Math.log(t / 256) / Math.LN2
			},
			getProjectedBounds: function (t) {
				if (this.infinite) return null;
				var i = this.projection.bounds,
					e = this.scale(t);
				return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
			},
			infinite: !1,
			wrapLatLng: function (t) {
				var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
				return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
			},
			wrapLatLngBounds: function (t) {
				var i = t.getCenter(),
					e = this.wrapLatLng(i),
					n = i.lat - e.lat,
					o = i.lng - e.lng;
				if (0 === n && 0 === o) return t;
				var s = t.getSouthWest(),
					r = t.getNorthEast();
				return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o))
			}
		},
		_i = i({}, ci, {
			wrapLng: [-180, 180],
			R: 6371e3,
			distance: function (t, i) {
				var e = Math.PI / 180,
					n = t.lat * e,
					o = i.lat * e,
					s = Math.sin((i.lat - t.lat) * e / 2),
					r = Math.sin((i.lng - t.lng) * e / 2),
					a = s * s + Math.cos(n) * Math.cos(o) * r * r,
					h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				return this.R * h
			}
		}),
		di = {
			R: 6378137,
			MAX_LATITUDE: 85.0511287798,
			project: function (t) {
				var i = Math.PI / 180,
					e = this.MAX_LATITUDE,
					n = Math.max(Math.min(e, t.lat), -e),
					o = Math.sin(n * i);
				return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
			},
			unproject: function (t) {
				var i = 180 / Math.PI;
				return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
			},
			bounds: function () {
				var t = 6378137 * Math.PI;
				return new P([-t, -t], [t, t])
			}()
		};
	Z.prototype = {
		transform: function (t, i) {
			return this._transform(t.clone(), i)
		},
		_transform: function (t, i) {
			return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
		},
		untransform: function (t, i) {
			return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
		}
	};
	var pi, mi, fi, gi, vi = i({}, _i, {
			code: "EPSG:3857",
			projection: di,
			transformation: function () {
				var t = .5 / (Math.PI * di.R);
				return S(t, .5, -t, .5)
			}()
		}),
		yi = i({}, vi, {
			code: "EPSG:900913"
		}),
		xi = document.documentElement.style,
		wi = "ActiveXObject" in window,
		Li = wi && !document.addEventListener,
		Pi = "msLaunchUri" in navigator && !("documentMode" in document),
		bi = I("webkit"),
		Ti = I("android"),
		zi = I("android 2") || I("android 3"),
		Mi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
		Ci = Ti && I("Google") && Mi < 537 && !("AudioNode" in window),
		Zi = !!window.opera,
		Si = I("chrome"),
		Ei = I("gecko") && !bi && !Zi && !wi,
		ki = !Si && I("safari"),
		Ii = I("phantom"),
		Ai = "OTransition" in xi,
		Bi = 0 === navigator.platform.indexOf("Win"),
		Oi = wi && "transition" in xi,
		Ri = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !zi,
		Di = "MozPerspective" in xi,
		Ni = !window.L_DISABLE_3D && (Oi || Ri || Di) && !Ai && !Ii,
		ji = "undefined" != typeof orientation || I("mobile"),
		Wi = ji && bi,
		Hi = ji && Ri,
		Fi = !window.PointerEvent && window.MSPointerEvent,
		Ui = !(!window.PointerEvent && !Fi),
		Vi = !window.L_NO_TOUCH && (Ui || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
		qi = ji && Zi,
		Gi = ji && Ei,
		Ki = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
		Yi = !!document.createElement("canvas").getContext,
		Xi = !(!document.createElementNS || !E("svg").createSVGRect),
		Ji = !Xi && function () {
			try {
				var t = document.createElement("div");
				t.innerHTML = '<v:shape adj="1"/>';
				var i = t.firstChild;
				return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
			} catch (t) {
				return !1
			}
		}(),
		$i = (Object.freeze || Object)({
			ie: wi,
			ielt9: Li,
			edge: Pi,
			webkit: bi,
			android: Ti,
			android23: zi,
			androidStock: Ci,
			opera: Zi,
			chrome: Si,
			gecko: Ei,
			safari: ki,
			phantom: Ii,
			opera12: Ai,
			win: Bi,
			ie3d: Oi,
			webkit3d: Ri,
			gecko3d: Di,
			any3d: Ni,
			mobile: ji,
			mobileWebkit: Wi,
			mobileWebkit3d: Hi,
			msPointer: Fi,
			pointer: Ui,
			touch: Vi,
			mobileOpera: qi,
			mobileGecko: Gi,
			retina: Ki,
			canvas: Yi,
			svg: Xi,
			vml: Ji
		}),
		Qi = Fi ? "MSPointerDown" : "pointerdown",
		te = Fi ? "MSPointerMove" : "pointermove",
		ie = Fi ? "MSPointerUp" : "pointerup",
		ee = Fi ? "MSPointerCancel" : "pointercancel",
		ne = ["INPUT", "SELECT", "OPTION"],
		oe = {},
		se = !1,
		re = 0,
		ae = Fi ? "MSPointerDown" : Ui ? "pointerdown" : "touchstart",
		he = Fi ? "MSPointerUp" : Ui ? "pointerup" : "touchend",
		ue = "_leaflet_",
		le = "_leaflet_events",
		ce = Bi && Si ? 2 * window.devicePixelRatio : Ei ? window.devicePixelRatio : 1,
		_e = {},
		de = (Object.freeze || Object)({
			on: V,
			off: q,
			stopPropagation: Y,
			disableScrollPropagation: X,
			disableClickPropagation: J,
			preventDefault: $,
			stop: Q,
			getMousePosition: tt,
			getWheelDelta: it,
			fakeStop: et,
			skipped: nt,
			isExternalTarget: ot,
			addListener: V,
			removeListener: q
		}),
		pe = xt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
		me = xt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
		fe = "webkitTransition" === me || "OTransition" === me ? me + "End" : "transitionend";
	if ("onselectstart" in document) mi = function () {
		V(window, "selectstart", $)
	}, fi = function () {
		q(window, "selectstart", $)
	};
	else {
		var ge = xt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
		mi = function () {
			if (ge) {
				var t = document.documentElement.style;
				gi = t[ge], t[ge] = "none"
			}
		}, fi = function () {
			ge && (document.documentElement.style[ge] = gi, gi = void 0)
		}
	}
	var ve, ye, xe = (Object.freeze || Object)({
			TRANSFORM: pe,
			TRANSITION: me,
			TRANSITION_END: fe,
			get: rt,
			getStyle: at,
			create: ht,
			remove: ut,
			empty: lt,
			toFront: ct,
			toBack: _t,
			hasClass: dt,
			addClass: pt,
			removeClass: mt,
			setClass: ft,
			getClass: gt,
			setOpacity: vt,
			testProp: xt,
			setTransform: wt,
			setPosition: Lt,
			getPosition: Pt,
			disableTextSelection: mi,
			enableTextSelection: fi,
			disableImageDrag: bt,
			enableImageDrag: Tt,
			preventOutline: zt,
			restoreOutline: Mt
		}),
		we = ui.extend({
			run: function (t, i, e, n) {
				this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pt(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
			},
			stop: function () {
				this._inProgress && (this._step(!0), this._complete())
			},
			_animate: function () {
				this._animId = f(this._animate, this), this._step()
			},
			_step: function (t) {
				var i = +new Date - this._startTime,
					e = 1e3 * this._duration;
				i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
			},
			_runFrame: function (t, i) {
				var e = this._startPos.add(this._offset.multiplyBy(t));
				i && e._round(), Lt(this._el, e), this.fire("step")
			},
			_complete: function () {
				g(this._animId), this._inProgress = !1, this.fire("end")
			},
			_easeOut: function (t) {
				return 1 - Math.pow(1 - t, this._easeOutPower)
			}
		}),
		Le = ui.extend({
			options: {
				crs: vi,
				center: void 0,
				zoom: void 0,
				minZoom: void 0,
				maxZoom: void 0,
				layers: [],
				maxBounds: void 0,
				renderer: void 0,
				zoomAnimation: !0,
				zoomAnimationThreshold: 4,
				fadeAnimation: !0,
				markerZoomAnimation: !0,
				transform3DLimit: 8388608,
				zoomSnap: 1,
				zoomDelta: 1,
				trackResize: !0
			},
			initialize: function (t, i) {
				i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, {
					reset: !0
				}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = me && Ni && !qi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), V(this._proxy, fe, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
			},
			setView: function (t, e, n) {
				return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({
					animate: n.animate
				}, n.zoom), n.pan = i({
					animate: n.animate,
					duration: n.duration
				}, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
			},
			setZoom: function (t, i) {
				return this._loaded ? this.setView(this.getCenter(), t, {
					zoom: i
				}) : (this._zoom = t, this)
			},
			zoomIn: function (t, i) {
				return t = t || (Ni ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
			},
			zoomOut: function (t, i) {
				return t = t || (Ni ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
			},
			setZoomAround: function (t, i, e) {
				var n = this.getZoomScale(i),
					o = this.getSize().divideBy(2),
					s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
					r = this.containerPointToLatLng(o.add(s));
				return this.setView(r, i, {
					zoom: e
				})
			},
			_getBoundsCenterZoom: function (t, i) {
				i = i || {}, t = t.getBounds ? t.getBounds() : z(t);
				var e = w(i.paddingTopLeft || i.padding || [0, 0]),
					n = w(i.paddingBottomRight || i.padding || [0, 0]),
					o = this.getBoundsZoom(t, !1, e.add(n));
				if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
					center: t.getCenter(),
					zoom: o
				};
				var s = n.subtract(e).divideBy(2),
					r = this.project(t.getSouthWest(), o),
					a = this.project(t.getNorthEast(), o);
				return {
					center: this.unproject(r.add(a).divideBy(2).add(s), o),
					zoom: o
				}
			},
			fitBounds: function (t, i) {
				if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
				var e = this._getBoundsCenterZoom(t, i);
				return this.setView(e.center, e.zoom, i)
			},
			fitWorld: function (t) {
				return this.fitBounds([
					[-90, -180],
					[90, 180]
				], t)
			},
			panTo: function (t, i) {
				return this.setView(t, this._zoom, {
					pan: i
				})
			},
			panBy: function (t, i) {
				if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
				if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
				if (this._panAnim || (this._panAnim = new we, this._panAnim.on({
						step: this._onPanTransitionStep,
						end: this._onPanTransitionEnd
					}, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
					pt(this._mapPane, "leaflet-pan-anim");
					var e = this._getMapPanePos().subtract(t).round();
					this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
				} else this._rawPanBy(t), this.fire("move").fire("moveend");
				return this
			},
			flyTo: function (t, i, e) {
				function n(t) {
					var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
						e = Math.sqrt(i * i + 1) - i;
					return e < 1e-9 ? -18 : Math.log(e)
				}

				function o(t) {
					return (Math.exp(t) - Math.exp(-t)) / 2
				}

				function s(t) {
					return (Math.exp(t) + Math.exp(-t)) / 2
				}

				function r(t) {
					return o(t) / s(t)
				}

				function a(t) {
					return m * (s(w) / s(w + y * t))
				}

				function h(t) {
					return m * (s(w) * r(w + y * t) - o(w)) / x
				}

				function u(t) {
					return 1 - Math.pow(1 - t, 1.5)
				}

				function l() {
					var e = (Date.now() - L) / b,
						n = u(e) * P;
					e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), {
						flyTo: !0
					})) : this._move(t, i)._moveEnd(!0)
				}
				if (!1 === (e = e || {}).animate || !Ni) return this.setView(t, i, e);
				this._stop();
				var c = this.project(this.getCenter()),
					_ = this.project(t),
					d = this.getSize(),
					p = this._zoom;
				t = C(t), i = void 0 === i ? p : i;
				var m = Math.max(d.x, d.y),
					g = m * this.getZoomScale(p, i),
					v = _.distanceTo(c) || 1,
					y = 1.42,
					x = y * y,
					w = n(0),
					L = Date.now(),
					P = (n(1) - w) / y,
					b = e.duration ? 1e3 * e.duration : 1e3 * P * .8;
				return this._moveStart(!0, e.noMoveStart), l.call(this), this
			},
			flyToBounds: function (t, i) {
				var e = this._getBoundsCenterZoom(t, i);
				return this.flyTo(e.center, e.zoom, i)
			},
			setMaxBounds: function (t) {
				return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
			},
			setMinZoom: function (t) {
				var i = this.options.minZoom;
				return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
			},
			setMaxZoom: function (t) {
				var i = this.options.maxZoom;
				return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
			},
			panInsideBounds: function (t, i) {
				this._enforcingBounds = !0;
				var e = this.getCenter(),
					n = this._limitCenter(e, this._zoom, z(t));
				return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
			},
			invalidateSize: function (t) {
				if (!this._loaded) return this;
				t = i({
					animate: !1,
					pan: !0
				}, !0 === t ? {
					animate: !0
				} : t);
				var n = this.getSize();
				this._sizeChanged = !0, this._lastCenter = null;
				var o = this.getSize(),
					s = n.divideBy(2).round(),
					r = o.divideBy(2).round(),
					a = s.subtract(r);
				return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
					oldSize: n,
					newSize: o
				})) : this
			},
			stop: function () {
				return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
			},
			locate: function (t) {
				if (t = this._locateOptions = i({
						timeout: 1e4,
						watch: !1
					}, t), !("geolocation" in navigator)) return this._handleGeolocationError({
					code: 0,
					message: "Geolocation not supported."
				}), this;
				var n = e(this._handleGeolocationResponse, this),
					o = e(this._handleGeolocationError, this);
				return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
			},
			stopLocate: function () {
				return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
			},
			_handleGeolocationError: function (t) {
				var i = t.code,
					e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
				this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
					code: i,
					message: "Geolocation error: " + e + "."
				})
			},
			_handleGeolocationResponse: function (t) {
				var i = new M(t.coords.latitude, t.coords.longitude),
					e = i.toBounds(t.coords.accuracy),
					n = this._locateOptions;
				if (n.setView) {
					var o = this.getBoundsZoom(e);
					this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
				}
				var s = {
					latlng: i,
					bounds: e,
					timestamp: t.timestamp
				};
				for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
				this.fire("locationfound", s)
			},
			addHandler: function (t, i) {
				if (!i) return this;
				var e = this[t] = new i(this);
				return this._handlers.push(e), this.options[t] && e.enable(), this
			},
			remove: function () {
				if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
				try {
					delete this._container._leaflet_id, delete this._containerId
				} catch (t) {
					this._container._leaflet_id = void 0, this._containerId = void 0
				}
				void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ut(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");
				var t;
				for (t in this._layers) this._layers[t].remove();
				for (t in this._panes) ut(this._panes[t]);
				return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
			},
			createPane: function (t, i) {
				var e = ht("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
				return t && (this._panes[t] = e), e
			},
			getCenter: function () {
				return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
			},
			getZoom: function () {
				return this._zoom
			},
			getBounds: function () {
				var t = this.getPixelBounds();
				return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
			},
			getMinZoom: function () {
				return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
			},
			getMaxZoom: function () {
				return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
			},
			getBoundsZoom: function (t, i, e) {
				t = z(t), e = w(e || [0, 0]);
				var n = this.getZoom() || 0,
					o = this.getMinZoom(),
					s = this.getMaxZoom(),
					r = t.getNorthWest(),
					a = t.getSouthEast(),
					h = this.getSize().subtract(e),
					u = b(this.project(a, n), this.project(r, n)).getSize(),
					l = Ni ? this.options.zoomSnap : 1,
					c = h.x / u.x,
					_ = h.y / u.y,
					d = i ? Math.max(c, _) : Math.min(c, _);
				return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
			},
			getSize: function () {
				return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
			},
			getPixelBounds: function (t, i) {
				var e = this._getTopLeftPoint(t, i);
				return new P(e, e.add(this.getSize()))
			},
			getPixelOrigin: function () {
				return this._checkIfLoaded(), this._pixelOrigin
			},
			getPixelWorldBounds: function (t) {
				return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
			},
			getPane: function (t) {
				return "string" == typeof t ? this._panes[t] : t
			},
			getPanes: function () {
				return this._panes
			},
			getContainer: function () {
				return this._container
			},
			getZoomScale: function (t, i) {
				var e = this.options.crs;
				return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
			},
			getScaleZoom: function (t, i) {
				var e = this.options.crs;
				i = void 0 === i ? this._zoom : i;
				var n = e.zoom(t * e.scale(i));
				return isNaN(n) ? 1 / 0 : n
			},
			project: function (t, i) {
				return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i)
			},
			unproject: function (t, i) {
				return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i)
			},
			layerPointToLatLng: function (t) {
				var i = w(t).add(this.getPixelOrigin());
				return this.unproject(i)
			},
			latLngToLayerPoint: function (t) {
				return this.project(C(t))._round()._subtract(this.getPixelOrigin())
			},
			wrapLatLng: function (t) {
				return this.options.crs.wrapLatLng(C(t))
			},
			wrapLatLngBounds: function (t) {
				return this.options.crs.wrapLatLngBounds(z(t))
			},
			distance: function (t, i) {
				return this.options.crs.distance(C(t), C(i))
			},
			containerPointToLayerPoint: function (t) {
				return w(t).subtract(this._getMapPanePos())
			},
			layerPointToContainerPoint: function (t) {
				return w(t).add(this._getMapPanePos())
			},
			containerPointToLatLng: function (t) {
				var i = this.containerPointToLayerPoint(w(t));
				return this.layerPointToLatLng(i)
			},
			latLngToContainerPoint: function (t) {
				return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))
			},
			mouseEventToContainerPoint: function (t) {
				return tt(t, this._container)
			},
			mouseEventToLayerPoint: function (t) {
				return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
			},
			mouseEventToLatLng: function (t) {
				return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
			},
			_initContainer: function (t) {
				var i = this._container = rt(t);
				if (!i) throw new Error("Map container not found.");
				if (i._leaflet_id) throw new Error("Map container is already initialized.");
				V(i, "scroll", this._onScroll, this), this._containerId = n(i)
			},
			_initLayout: function () {
				var t = this._container;
				this._fadeAnimated = this.options.fadeAnimation && Ni, pt(t, "leaflet-container" + (Vi ? " leaflet-touch" : "") + (Ki ? " leaflet-retina" : "") + (Li ? " leaflet-oldie" : "") + (ki ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
				var i = at(t, "position");
				"absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
			},
			_initPanes: function () {
				var t = this._panes = {};
				this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Lt(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pt(t.markerPane, "leaflet-zoom-hide"), pt(t.shadowPane, "leaflet-zoom-hide"))
			},
			_resetView: function (t, i) {
				Lt(this._mapPane, new x(0, 0));
				var e = !this._loaded;
				this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
				var n = this._zoom !== i;
				this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
			},
			_moveStart: function (t, i) {
				return t && this.fire("zoomstart"), i || this.fire("movestart"), this
			},
			_move: function (t, i, e) {
				void 0 === i && (i = this._zoom);
				var n = this._zoom !== i;
				return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
			},
			_moveEnd: function (t) {
				return t && this.fire("zoomend"), this.fire("moveend")
			},
			_stop: function () {
				return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
			},
			_rawPanBy: function (t) {
				Lt(this._mapPane, this._getMapPanePos().subtract(t))
			},
			_getZoomSpan: function () {
				return this.getMaxZoom() - this.getMinZoom()
			},
			_panInsideMaxBounds: function () {
				this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
			},
			_checkIfLoaded: function () {
				if (!this._loaded) throw new Error("Set map center and zoom first.")
			},
			_initEvents: function (t) {
				this._targets = {}, this._targets[n(this._container)] = this;
				var i = t ? q : V;
				i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Ni && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
			},
			_onResize: function () {
				g(this._resizeRequest), this._resizeRequest = f(function () {
					this.invalidateSize({
						debounceMoveend: !0
					})
				}, this)
			},
			_onScroll: function () {
				this._container.scrollTop = 0, this._container.scrollLeft = 0
			},
			_onMoveEnd: function () {
				var t = this._getMapPanePos();
				Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
			},
			_findEventTargets: function (t, i) {
				for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
					if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
						a = !0;
						break
					}
					if (e && e.listens(i, !0)) {
						if (s && !ot(r, t)) break;
						if (o.push(e), s) break
					}
					if (r === this._container) break;
					r = r.parentNode
				}
				return o.length || a || s || !ot(r, t) || (o = [this]), o
			},
			_handleDOMEvent: function (t) {
				if (this._loaded && !nt(t)) {
					var i = t.type;
					"mousedown" !== i && "keypress" !== i || zt(t.target || t.srcElement), this._fireDOMEvent(t, i)
				}
			},
			_mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
			_fireDOMEvent: function (t, e, n) {
				if ("click" === t.type) {
					var o = i({}, t);
					o.type = "preclick", this._fireDOMEvent(o, o.type, n)
				}
				if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
					var s = n[0];
					"contextmenu" === e && s.listens(e, !0) && $(t);
					var r = {
						originalEvent: t
					};
					if ("keypress" !== t.type) {
						var a = s.getLatLng && (!s._radius || s._radius <= 10);
						r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
					}
					for (var h = 0; h < n.length; h++)
						if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
				}
			},
			_draggableMoved: function (t) {
				return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
			},
			_clearHandlers: function () {
				for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
			},
			whenReady: function (t, i) {
				return this._loaded ? t.call(i || this, {
					target: this
				}) : this.on("load", t, i), this
			},
			_getMapPanePos: function () {
				return Pt(this._mapPane) || new x(0, 0)
			},
			_moved: function () {
				var t = this._getMapPanePos();
				return t && !t.equals([0, 0])
			},
			_getTopLeftPoint: function (t, i) {
				return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
			},
			_getNewPixelOrigin: function (t, i) {
				var e = this.getSize()._divideBy(2);
				return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
			},
			_latLngToNewLayerPoint: function (t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return this.project(t, i)._subtract(n)
			},
			_latLngBoundsToNewLayerBounds: function (t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
			},
			_getCenterLayerPoint: function () {
				return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
			},
			_getCenterOffset: function (t) {
				return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
			},
			_limitCenter: function (t, i, e) {
				if (!e) return t;
				var n = this.project(t, i),
					o = this.getSize().divideBy(2),
					s = new P(n.subtract(o), n.add(o)),
					r = this._getBoundsOffset(s, e, i);
				return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
			},
			_limitOffset: function (t, i) {
				if (!i) return t;
				var e = this.getPixelBounds(),
					n = new P(e.min.add(t), e.max.add(t));
				return t.add(this._getBoundsOffset(n, i))
			},
			_getBoundsOffset: function (t, i, e) {
				var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
					o = n.min.subtract(t.min),
					s = n.max.subtract(t.max);
				return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
			},
			_rebound: function (t, i) {
				return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
			},
			_limitZoom: function (t) {
				var i = this.getMinZoom(),
					e = this.getMaxZoom(),
					n = Ni ? this.options.zoomSnap : 1;
				return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
			},
			_onPanTransitionStep: function () {
				this.fire("move")
			},
			_onPanTransitionEnd: function () {
				mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
			},
			_tryAnimatedPan: function (t, i) {
				var e = this._getCenterOffset(t)._trunc();
				return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0)
			},
			_createAnimProxy: function () {
				var t = this._proxy = ht("div", "leaflet-proxy leaflet-zoom-animated");
				this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
					var i = pe,
						e = this._proxy.style[i];
					wt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
				}, this), this.on("load moveend", function () {
					var t = this.getCenter(),
						i = this.getZoom();
					wt(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
				}, this), this._on("unload", this._destroyAnimProxy, this)
			},
			_destroyAnimProxy: function () {
				ut(this._proxy), delete this._proxy
			},
			_catchTransitionEnd: function (t) {
				this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
			},
			_nothingToAnimate: function () {
				return !this._container.getElementsByClassName("leaflet-zoom-animated").length
			},
			_tryAnimatedZoom: function (t, i, e) {
				if (this._animatingZoom) return !0;
				if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
				var n = this.getZoomScale(i),
					o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
				return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function () {
					this._moveStart(!0, !1)._animateZoom(t, i, !0)
				}, this), !0)
			},
			_animateZoom: function (t, i, n, o) {
				this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, pt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
					center: t,
					zoom: i,
					noUpdate: o
				}), setTimeout(e(this._onZoomTransitionEnd, this), 250))
			},
			_onZoomTransitionEnd: function () {
				this._animatingZoom && (this._mapPane && mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function () {
					this._moveEnd(!0)
				}, this))
			}
		}),
		Pe = v.extend({
			options: {
				position: "topright"
			},
			initialize: function (t) {
				l(this, t)
			},
			getPosition: function () {
				return this.options.position
			},
			setPosition: function (t) {
				var i = this._map;
				return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
			},
			getContainer: function () {
				return this._container
			},
			addTo: function (t) {
				this.remove(), this._map = t;
				var i = this._container = this.onAdd(t),
					e = this.getPosition(),
					n = t._controlCorners[e];
				return pt(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
			},
			remove: function () {
				return this._map ? (ut(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
			},
			_refocusOnMap: function (t) {
				this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
			}
		}),
		be = function (t) {
			return new Pe(t)
		};
	Le.include({
		addControl: function (t) {
			return t.addTo(this), this
		},
		removeControl: function (t) {
			return t.remove(), this
		},
		_initControlPos: function () {
			function t(t, o) {
				var s = e + t + " " + e + o;
				i[t + o] = ht("div", s, n)
			}
			var i = this._controlCorners = {},
				e = "leaflet-",
				n = this._controlContainer = ht("div", e + "control-container", this._container);
			t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
		},
		_clearControlPos: function () {
			for (var t in this._controlCorners) ut(this._controlCorners[t]);
			ut(this._controlContainer), delete this._controlCorners, delete this._controlContainer
		}
	});
	var Te = Pe.extend({
			options: {
				collapsed: !0,
				position: "topright",
				autoZIndex: !0,
				hideSingleBase: !1,
				sortLayers: !1,
				sortFunction: function (t, i, e, n) {
					return e < n ? -1 : n < e ? 1 : 0
				}
			},
			initialize: function (t, i, e) {
				l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
				for (var n in t) this._addLayer(t[n], n);
				for (n in i) this._addLayer(i[n], n, !0)
			},
			onAdd: function (t) {
				this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
				for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
				return this._container
			},
			addTo: function (t) {
				return Pe.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
			},
			onRemove: function () {
				this._map.off("zoomend", this._checkDisabledLayers, this);
				for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
			},
			addBaseLayer: function (t, i) {
				return this._addLayer(t, i), this._map ? this._update() : this
			},
			addOverlay: function (t, i) {
				return this._addLayer(t, i, !0), this._map ? this._update() : this
			},
			removeLayer: function (t) {
				t.off("add remove", this._onLayerChange, this);
				var i = this._getLayer(n(t));
				return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
			},
			expand: function () {
				pt(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
				var t = this._map.getSize().y - (this._container.offsetTop + 50);
				return t < this._form.clientHeight ? (pt(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : mt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
			},
			collapse: function () {
				return mt(this._container, "leaflet-control-layers-expanded"), this
			},
			_initLayout: function () {
				var t = "leaflet-control-layers",
					i = this._container = ht("div", t),
					e = this.options.collapsed;
				i.setAttribute("aria-haspopup", !0), J(i), X(i);
				var n = this._form = ht("form", t + "-list");
				e && (this._map.on("click", this.collapse, this), Ti || V(i, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this));
				var o = this._layersLink = ht("a", t + "-toggle", i);
				o.href = "#", o.title = "Layers", Vi ? (V(o, "click", Q), V(o, "click", this.expand, this)) : V(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = ht("div", t + "-base", n), this._separator = ht("div", t + "-separator", n), this._overlaysList = ht("div", t + "-overlays", n), i.appendChild(n)
			},
			_getLayer: function (t) {
				for (var i = 0; i < this._layers.length; i++)
					if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
			},
			_addLayer: function (t, i, n) {
				this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
					layer: t,
					name: i,
					overlay: n
				}), this.options.sortLayers && this._layers.sort(e(function (t, i) {
					return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
				}, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
			},
			_update: function () {
				if (!this._container) return this;
				lt(this._baseLayersList), lt(this._overlaysList), this._layerControlInputs = [];
				var t, i, e, n, o = 0;
				for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
				return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
			},
			_onLayerChange: function (t) {
				this._handlingClick || this._update();
				var i = this._getLayer(n(t.target)),
					e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
				e && this._map.fire(e, i)
			},
			_createRadioElement: function (t, i) {
				var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
					n = document.createElement("div");
				return n.innerHTML = e, n.firstChild
			},
			_addItem: function (t) {
				var i, e = document.createElement("label"),
					o = this._map.hasLayer(t.layer);
				t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), V(i, "click", this._onInputClick, this);
				var s = document.createElement("span");
				s.innerHTML = " " + t.name;
				var r = document.createElement("div");
				return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
			},
			_onInputClick: function () {
				var t, i, e = this._layerControlInputs,
					n = [],
					o = [];
				this._handlingClick = !0;
				for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
				for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
				for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
				this._handlingClick = !1, this._refocusOnMap()
			},
			_checkDisabledLayers: function () {
				for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
			},
			_expandIfNotCollapsed: function () {
				return this._map && !this.options.collapsed && this.expand(), this
			},
			_expand: function () {
				return this.expand()
			},
			_collapse: function () {
				return this.collapse()
			}
		}),
		ze = Pe.extend({
			options: {
				position: "topleft",
				zoomInText: "+",
				zoomInTitle: "Zoom in",
				zoomOutText: "&#x2212;",
				zoomOutTitle: "Zoom out"
			},
			onAdd: function (t) {
				var i = "leaflet-control-zoom",
					e = ht("div", i + " leaflet-bar"),
					n = this.options;
				return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
			},
			onRemove: function (t) {
				t.off("zoomend zoomlevelschange", this._updateDisabled, this)
			},
			disable: function () {
				return this._disabled = !0, this._updateDisabled(), this
			},
			enable: function () {
				return this._disabled = !1, this._updateDisabled(), this
			},
			_zoomIn: function (t) {
				!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_zoomOut: function (t) {
				!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_createButton: function (t, i, e, n, o) {
				var s = ht("a", e, n);
				return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), J(s), V(s, "click", Q), V(s, "click", o, this), V(s, "click", this._refocusOnMap, this), s
			},
			_updateDisabled: function () {
				var t = this._map,
					i = "leaflet-disabled";
				mt(this._zoomInButton, i), mt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && pt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && pt(this._zoomInButton, i)
			}
		});
	Le.mergeOptions({
		zoomControl: !0
	}), Le.addInitHook(function () {
		this.options.zoomControl && (this.zoomControl = new ze, this.addControl(this.zoomControl))
	});
	var Me = Pe.extend({
			options: {
				position: "bottomleft",
				maxWidth: 100,
				metric: !0,
				imperial: !0
			},
			onAdd: function (t) {
				var i = ht("div", "leaflet-control-scale"),
					e = this.options;
				return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
			},
			onRemove: function (t) {
				t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
			},
			_addScales: function (t, i, e) {
				t.metric && (this._mScale = ht("div", i, e)), t.imperial && (this._iScale = ht("div", i, e))
			},
			_update: function () {
				var t = this._map,
					i = t.getSize().y / 2,
					e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
				this._updateScales(e)
			},
			_updateScales: function (t) {
				this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
			},
			_updateMetric: function (t) {
				var i = this._getRoundNum(t),
					e = i < 1e3 ? i + " m" : i / 1e3 + " km";
				this._updateScale(this._mScale, e, i / t)
			},
			_updateImperial: function (t) {
				var i, e, n, o = 3.2808399 * t;
				o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
			},
			_updateScale: function (t, i, e) {
				t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
			},
			_getRoundNum: function (t) {
				var i = Math.pow(10, (Math.floor(t) + "").length - 1),
					e = t / i;
				return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e
			}
		}),
		Ce = Pe.extend({
			options: {
				position: "bottomright",
				prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
			},
			initialize: function (t) {
				l(this, t), this._attributions = {}
			},
			onAdd: function (t) {
				t.attributionControl = this, this._container = ht("div", "leaflet-control-attribution"), J(this._container);
				for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
				return this._update(), this._container
			},
			setPrefix: function (t) {
				return this.options.prefix = t, this._update(), this
			},
			addAttribution: function (t) {
				return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
			},
			removeAttribution: function (t) {
				return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
			},
			_update: function () {
				if (this._map) {
					var t = [];
					for (var i in this._attributions) this._attributions[i] && t.push(i);
					var e = [];
					this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
				}
			}
		});
	Le.mergeOptions({
		attributionControl: !0
	}), Le.addInitHook(function () {
		this.options.attributionControl && (new Ce).addTo(this)
	});
	Pe.Layers = Te, Pe.Zoom = ze, Pe.Scale = Me, Pe.Attribution = Ce, be.layers = function (t, i, e) {
		return new Te(t, i, e)
	}, be.zoom = function (t) {
		return new ze(t)
	}, be.scale = function (t) {
		return new Me(t)
	}, be.attribution = function (t) {
		return new Ce(t)
	};
	var Ze = v.extend({
		initialize: function (t) {
			this._map = t
		},
		enable: function () {
			return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
		},
		disable: function () {
			return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
		},
		enabled: function () {
			return !!this._enabled
		}
	});
	Ze.addTo = function (t, i) {
		return t.addHandler(i, this), this
	};
	var Se, Ee = {
			Events: hi
		},
		ke = Vi ? "touchstart mousedown" : "mousedown",
		Ie = {
			mousedown: "mouseup",
			touchstart: "touchend",
			pointerdown: "touchend",
			MSPointerDown: "touchend"
		},
		Ae = {
			mousedown: "mousemove",
			touchstart: "touchmove",
			pointerdown: "touchmove",
			MSPointerDown: "touchmove"
		},
		Be = ui.extend({
			options: {
				clickTolerance: 3
			},
			initialize: function (t, i, e, n) {
				l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
			},
			enable: function () {
				this._enabled || (V(this._dragStartTarget, ke, this._onDown, this), this._enabled = !0)
			},
			disable: function () {
				this._enabled && (Be._dragging === this && this.finishDrag(), q(this._dragStartTarget, ke, this._onDown, this), this._enabled = !1, this._moved = !1)
			},
			_onDown: function (t) {
				if (!t._simulated && this._enabled && (this._moved = !1, !dt(this._element, "leaflet-zoom-anim") && !(Be._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Be._dragging = this, this._preventOutline && zt(this._element), bt(), mi(), this._moving)))) {
					this.fire("down");
					var i = t.touches ? t.touches[0] : t;
					this._startPoint = new x(i.clientX, i.clientY), V(document, Ae[t.type], this._onMove, this), V(document, Ie[t.type], this._onUp, this)
				}
			},
			_onMove: function (t) {
				if (!t._simulated && this._enabled)
					if (t.touches && t.touches.length > 1) this._moved = !0;
					else {
						var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
							e = new x(i.clientX, i.clientY).subtract(this._startPoint);
						(e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || ($(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Pt(this._element).subtract(e), pt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
					}
			},
			_updatePosition: function () {
				var t = {
					originalEvent: this._lastEvent
				};
				this.fire("predrag", t), Lt(this._element, this._newPos), this.fire("drag", t)
			},
			_onUp: function (t) {
				!t._simulated && this._enabled && this.finishDrag()
			},
			finishDrag: function () {
				mt(document.body, "leaflet-dragging"), this._lastTarget && (mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
				for (var t in Ae) q(document, Ae[t], this._onMove, this), q(document, Ie[t], this._onUp, this);
				Tt(), fi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
					distance: this._newPos.distanceTo(this._startPos)
				})), this._moving = !1, Be._dragging = !1
			}
		}),
		Oe = (Object.freeze || Object)({
			simplify: Ct,
			pointToSegmentDistance: Zt,
			closestPointOnSegment: function (t, i, e) {
				return Rt(t, i, e)
			},
			clipSegment: It,
			_getEdgeIntersection: At,
			_getBitCode: Bt,
			_sqClosestPointOnSegment: Rt,
			isFlat: Dt,
			_flat: Nt
		}),
		Re = (Object.freeze || Object)({
			clipPolygon: jt
		}),
		De = {
			project: function (t) {
				return new x(t.lng, t.lat)
			},
			unproject: function (t) {
				return new M(t.y, t.x)
			},
			bounds: new P([-180, -90], [180, 90])
		},
		Ne = {
			R: 6378137,
			R_MINOR: 6356752.314245179,
			bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
			project: function (t) {
				var i = Math.PI / 180,
					e = this.R,
					n = t.lat * i,
					o = this.R_MINOR / e,
					s = Math.sqrt(1 - o * o),
					r = s * Math.sin(n),
					a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
				return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n)
			},
			unproject: function (t) {
				for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
				return new M(a * e, t.x * e / n)
			}
		},
		je = (Object.freeze || Object)({
			LonLat: De,
			Mercator: Ne,
			SphericalMercator: di
		}),
		We = i({}, _i, {
			code: "EPSG:3395",
			projection: Ne,
			transformation: function () {
				var t = .5 / (Math.PI * Ne.R);
				return S(t, .5, -t, .5)
			}()
		}),
		He = i({}, _i, {
			code: "EPSG:4326",
			projection: De,
			transformation: S(1 / 180, 1, -1 / 180, .5)
		}),
		Fe = i({}, ci, {
			projection: De,
			transformation: S(1, 0, -1, 0),
			scale: function (t) {
				return Math.pow(2, t)
			},
			zoom: function (t) {
				return Math.log(t) / Math.LN2
			},
			distance: function (t, i) {
				var e = i.lng - t.lng,
					n = i.lat - t.lat;
				return Math.sqrt(e * e + n * n)
			},
			infinite: !0
		});
	ci.Earth = _i, ci.EPSG3395 = We, ci.EPSG3857 = vi, ci.EPSG900913 = yi, ci.EPSG4326 = He, ci.Simple = Fe;
	var Ue = ui.extend({
		options: {
			pane: "overlayPane",
			attribution: null,
			bubblingMouseEvents: !0
		},
		addTo: function (t) {
			return t.addLayer(this), this
		},
		remove: function () {
			return this.removeFrom(this._map || this._mapToAdd)
		},
		removeFrom: function (t) {
			return t && t.removeLayer(this), this
		},
		getPane: function (t) {
			return this._map.getPane(t ? this.options[t] || t : this.options.pane)
		},
		addInteractiveTarget: function (t) {
			return this._map._targets[n(t)] = this, this
		},
		removeInteractiveTarget: function (t) {
			return delete this._map._targets[n(t)], this
		},
		getAttribution: function () {
			return this.options.attribution
		},
		_layerAdd: function (t) {
			var i = t.target;
			if (i.hasLayer(this)) {
				if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
					var e = this.getEvents();
					i.on(e, this), this.once("remove", function () {
						i.off(e, this)
					}, this)
				}
				this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
					layer: this
				})
			}
		}
	});
	Le.include({
		addLayer: function (t) {
			if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
			var i = n(t);
			return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
		},
		removeLayer: function (t) {
			var i = n(t);
			return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
				layer: t
			}), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
		},
		hasLayer: function (t) {
			return !!t && n(t) in this._layers
		},
		eachLayer: function (t, i) {
			for (var e in this._layers) t.call(i, this._layers[e]);
			return this
		},
		_addLayers: function (t) {
			for (var i = 0, e = (t = t ? ei(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
		},
		_addZoomLimit: function (t) {
			!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
		},
		_removeZoomLimit: function (t) {
			var i = n(t);
			this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
		},
		_updateZoomLevels: function () {
			var t = 1 / 0,
				i = -1 / 0,
				e = this._getZoomSpan();
			for (var n in this._zoomBoundLayers) {
				var o = this._zoomBoundLayers[n].options;
				t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
			}
			this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
		}
	});
	var Ve = Ue.extend({
			initialize: function (t, i) {
				l(this, i), this._layers = {};
				var e, n;
				if (t)
					for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
			},
			addLayer: function (t) {
				var i = this.getLayerId(t);
				return this._layers[i] = t, this._map && this._map.addLayer(t), this
			},
			removeLayer: function (t) {
				var i = t in this._layers ? t : this.getLayerId(t);
				return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
			},
			hasLayer: function (t) {
				return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
			},
			clearLayers: function () {
				return this.eachLayer(this.removeLayer, this)
			},
			invoke: function (t) {
				var i, e, n = Array.prototype.slice.call(arguments, 1);
				for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n);
				return this
			},
			onAdd: function (t) {
				this.eachLayer(t.addLayer, t)
			},
			onRemove: function (t) {
				this.eachLayer(t.removeLayer, t)
			},
			eachLayer: function (t, i) {
				for (var e in this._layers) t.call(i, this._layers[e]);
				return this
			},
			getLayer: function (t) {
				return this._layers[t]
			},
			getLayers: function () {
				var t = [];
				return this.eachLayer(t.push, t), t
			},
			setZIndex: function (t) {
				return this.invoke("setZIndex", t)
			},
			getLayerId: function (t) {
				return n(t)
			}
		}),
		qe = Ve.extend({
			addLayer: function (t) {
				return this.hasLayer(t) ? this : (t.addEventParent(this), Ve.prototype.addLayer.call(this, t), this.fire("layeradd", {
					layer: t
				}))
			},
			removeLayer: function (t) {
				return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ve.prototype.removeLayer.call(this, t), this.fire("layerremove", {
					layer: t
				})) : this
			},
			setStyle: function (t) {
				return this.invoke("setStyle", t)
			},
			bringToFront: function () {
				return this.invoke("bringToFront")
			},
			bringToBack: function () {
				return this.invoke("bringToBack")
			},
			getBounds: function () {
				var t = new T;
				for (var i in this._layers) {
					var e = this._layers[i];
					t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
				}
				return t
			}
		}),
		Ge = v.extend({
			options: {
				popupAnchor: [0, 0],
				tooltipAnchor: [0, 0]
			},
			initialize: function (t) {
				l(this, t)
			},
			createIcon: function (t) {
				return this._createIcon("icon", t)
			},
			createShadow: function (t) {
				return this._createIcon("shadow", t)
			},
			_createIcon: function (t, i) {
				var e = this._getIconUrl(t);
				if (!e) {
					if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
					return null
				}
				var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
				return this._setIconStyles(n, t), n
			},
			_setIconStyles: function (t, i) {
				var e = this.options,
					n = e[i + "Size"];
				"number" == typeof n && (n = [n, n]);
				var o = w(n),
					s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
				t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
			},
			_createImg: function (t, i) {
				return i = i || document.createElement("img"), i.src = t, i
			},
			_getIconUrl: function (t) {
				return Ki && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
			}
		}),
		Ke = Ge.extend({
			options: {
				iconUrl: "marker-icon.png",
				iconRetinaUrl: "marker-icon-2x.png",
				shadowUrl: "marker-shadow.png",
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				tooltipAnchor: [16, -28],
				shadowSize: [41, 41]
			},
			_getIconUrl: function (t) {
				return Ke.imagePath || (Ke.imagePath = this._detectIconPath()), (this.options.imagePath || Ke.imagePath) + Ge.prototype._getIconUrl.call(this, t)
			},
			_detectIconPath: function () {
				var t = ht("div", "leaflet-default-icon-path", document.body),
					i = at(t, "background-image") || at(t, "backgroundImage");
				return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
			}
		}),
		Ye = Ze.extend({
			initialize: function (t) {
				this._marker = t
			},
			addHooks: function () {
				var t = this._marker._icon;
				this._draggable || (this._draggable = new Be(t, t, !0)), this._draggable.on({
					dragstart: this._onDragStart,
					predrag: this._onPreDrag,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this).enable(), pt(t, "leaflet-marker-draggable")
			},
			removeHooks: function () {
				this._draggable.off({
					dragstart: this._onDragStart,
					predrag: this._onPreDrag,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this).disable(), this._marker._icon && mt(this._marker._icon, "leaflet-marker-draggable")
			},
			moved: function () {
				return this._draggable && this._draggable._moved
			},
			_adjustPan: function (t) {
				var i = this._marker,
					e = i._map,
					n = this._marker.options.autoPanSpeed,
					o = this._marker.options.autoPanPadding,
					s = L.DomUtil.getPosition(i._icon),
					r = e.getPixelBounds(),
					a = e.getPixelOrigin(),
					h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
				if (!h.contains(s)) {
					var u = w((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
					e.panBy(u, {
						animate: !1
					}), this._draggable._newPos._add(u), this._draggable._startPos._add(u), L.DomUtil.setPosition(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t))
				}
			},
			_onDragStart: function () {
				this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
			},
			_onPreDrag: function (t) {
				this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)))
			},
			_onDrag: function (t) {
				var i = this._marker,
					e = i._shadow,
					n = Pt(i._icon),
					o = i._map.layerPointToLatLng(n);
				e && Lt(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
			},
			_onDragEnd: function (t) {
				g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
			}
		}),
		Xe = Ue.extend({
			options: {
				icon: new Ke,
				interactive: !0,
				draggable: !1,
				autoPan: !1,
				autoPanPadding: [50, 50],
				autoPanSpeed: 10,
				keyboard: !0,
				title: "",
				alt: "",
				zIndexOffset: 0,
				opacity: 1,
				riseOnHover: !1,
				riseOffset: 250,
				pane: "markerPane",
				bubblingMouseEvents: !1
			},
			initialize: function (t, i) {
				l(this, i), this._latlng = C(t)
			},
			onAdd: function (t) {
				this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
			},
			onRemove: function (t) {
				this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
			},
			getEvents: function () {
				return {
					zoom: this.update,
					viewreset: this.update
				}
			},
			getLatLng: function () {
				return this._latlng
			},
			setLatLng: function (t) {
				var i = this._latlng;
				return this._latlng = C(t), this.update(), this.fire("move", {
					oldLatLng: i,
					latlng: this._latlng
				})
			},
			setZIndexOffset: function (t) {
				return this.options.zIndexOffset = t, this.update()
			},
			setIcon: function (t) {
				return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
			},
			getElement: function () {
				return this._icon
			},
			update: function () {
				if (this._icon && this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng).round();
					this._setPos(t)
				}
				return this
			},
			_initIcon: function () {
				var t = this.options,
					i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
					e = t.icon.createIcon(this._icon),
					n = !1;
				e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), pt(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				});
				var o = t.icon.createShadow(this._shadow),
					s = !1;
				o !== this._shadow && (this._removeShadow(), s = !0), o && (pt(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
			},
			_removeIcon: function () {
				this.options.riseOnHover && this.off({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				}), ut(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
			},
			_removeShadow: function () {
				this._shadow && ut(this._shadow), this._shadow = null
			},
			_setPos: function (t) {
				Lt(this._icon, t), this._shadow && Lt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
			},
			_updateZIndex: function (t) {
				this._icon.style.zIndex = this._zIndex + t
			},
			_animateZoom: function (t) {
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
				this._setPos(i)
			},
			_initInteraction: function () {
				if (this.options.interactive && (pt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ye)) {
					var t = this.options.draggable;
					this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ye(this), t && this.dragging.enable()
				}
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._map && this._updateOpacity(), this
			},
			_updateOpacity: function () {
				var t = this.options.opacity;
				vt(this._icon, t), this._shadow && vt(this._shadow, t)
			},
			_bringToFront: function () {
				this._updateZIndex(this.options.riseOffset)
			},
			_resetZIndex: function () {
				this._updateZIndex(0)
			},
			_getPopupAnchor: function () {
				return this.options.icon.options.popupAnchor
			},
			_getTooltipAnchor: function () {
				return this.options.icon.options.tooltipAnchor
			}
		}),
		Je = Ue.extend({
			options: {
				stroke: !0,
				color: "#3388ff",
				weight: 3,
				opacity: 1,
				lineCap: "round",
				lineJoin: "round",
				dashArray: null,
				dashOffset: null,
				fill: !1,
				fillColor: null,
				fillOpacity: .2,
				fillRule: "evenodd",
				interactive: !0,
				bubblingMouseEvents: !0
			},
			beforeAdd: function (t) {
				this._renderer = t.getRenderer(this)
			},
			onAdd: function () {
				this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
			},
			onRemove: function () {
				this._renderer._removePath(this)
			},
			redraw: function () {
				return this._map && this._renderer._updatePath(this), this
			},
			setStyle: function (t) {
				return l(this, t), this._renderer && this._renderer._updateStyle(this), this
			},
			bringToFront: function () {
				return this._renderer && this._renderer._bringToFront(this), this
			},
			bringToBack: function () {
				return this._renderer && this._renderer._bringToBack(this), this
			},
			getElement: function () {
				return this._path
			},
			_reset: function () {
				this._project(), this._update()
			},
			_clickTolerance: function () {
				return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
			}
		}),
		$e = Je.extend({
			options: {
				fill: !0,
				radius: 10
			},
			initialize: function (t, i) {
				l(this, i), this._latlng = C(t), this._radius = this.options.radius
			},
			setLatLng: function (t) {
				return this._latlng = C(t), this.redraw(), this.fire("move", {
					latlng: this._latlng
				})
			},
			getLatLng: function () {
				return this._latlng
			},
			setRadius: function (t) {
				return this.options.radius = this._radius = t, this.redraw()
			},
			getRadius: function () {
				return this._radius
			},
			setStyle: function (t) {
				var i = t && t.radius || this._radius;
				return Je.prototype.setStyle.call(this, t), this.setRadius(i), this
			},
			_project: function () {
				this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
			},
			_updateBounds: function () {
				var t = this._radius,
					i = this._radiusY || t,
					e = this._clickTolerance(),
					n = [t + e, i + e];
				this._pxBounds = new P(this._point.subtract(n), this._point.add(n))
			},
			_update: function () {
				this._map && this._updatePath()
			},
			_updatePath: function () {
				this._renderer._updateCircle(this)
			},
			_empty: function () {
				return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
			},
			_containsPoint: function (t) {
				return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
			}
		}),
		Qe = $e.extend({
			initialize: function (t, e, n) {
				if ("number" == typeof e && (e = i({}, n, {
						radius: e
					})), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
				this._mRadius = this.options.radius
			},
			setRadius: function (t) {
				return this._mRadius = t, this.redraw()
			},
			getRadius: function () {
				return this._mRadius
			},
			getBounds: function () {
				var t = [this._radius, this._radiusY || this._radius];
				return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
			},
			setStyle: Je.prototype.setStyle,
			_project: function () {
				var t = this._latlng.lng,
					i = this._latlng.lat,
					e = this._map,
					n = e.options.crs;
				if (n.distance === _i.distance) {
					var o = Math.PI / 180,
						s = this._mRadius / _i.R / o,
						r = e.project([i + s, t]),
						a = e.project([i - s, t]),
						h = r.add(a).divideBy(2),
						u = e.unproject(h).lat,
						l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
					(isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
				} else {
					var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
					this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
				}
				this._updateBounds()
			}
		}),
		tn = Je.extend({
			options: {
				smoothFactor: 1,
				noClip: !1
			},
			initialize: function (t, i) {
				l(this, i), this._setLatLngs(t)
			},
			getLatLngs: function () {
				return this._latlngs
			},
			setLatLngs: function (t) {
				return this._setLatLngs(t), this.redraw()
			},
			isEmpty: function () {
				return !this._latlngs.length
			},
			closestLayerPoint: function (t) {
				for (var i, e, n = 1 / 0, o = null, s = Rt, r = 0, a = this._parts.length; r < a; r++)
					for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
						var c = s(t, i = h[u - 1], e = h[u], !0);
						c < n && (n = c, o = s(t, i, e))
					}
				return o && (o.distance = Math.sqrt(n)), o
			},
			getCenter: function () {
				if (!this._map) throw new Error("Must add layer to map before using getCenter()");
				var t, i, e, n, o, s, r, a = this._rings[0],
					h = a.length;
				if (!h) return null;
				for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
				if (0 === i) return this._map.layerPointToLatLng(a[0]);
				for (t = 0, n = 0; t < h - 1; t++)
					if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
			},
			getBounds: function () {
				return this._bounds
			},
			addLatLng: function (t, i) {
				return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw()
			},
			_setLatLngs: function (t) {
				this._bounds = new T, this._latlngs = this._convertLatLngs(t)
			},
			_defaultShape: function () {
				return Dt(this._latlngs) ? this._latlngs : this._latlngs[0]
			},
			_convertLatLngs: function (t) {
				for (var i = [], e = Dt(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
				return i
			},
			_project: function () {
				var t = new P;
				this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
				var i = this._clickTolerance(),
					e = new x(i, i);
				this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
			},
			_projectLatlngs: function (t, i, e) {
				var n, o, s = t[0] instanceof M,
					r = t.length;
				if (s) {
					for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
					i.push(o)
				} else
					for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
			},
			_clipPoints: function () {
				var t = this._renderer._bounds;
				if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else {
						var i, e, n, o, s, r, a, h = this._parts;
						for (i = 0, n = 0, o = this._rings.length; i < o; i++)
							for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = It(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
					}
			},
			_simplifyPoints: function () {
				for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Ct(t[e], i)
			},
			_update: function () {
				this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
			},
			_updatePath: function () {
				this._renderer._updatePoly(this)
			},
			_containsPoint: function (t, i) {
				var e, n, o, s, r, a, h = this._clickTolerance();
				if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
				for (e = 0, s = this._parts.length; e < s; e++)
					for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
						if ((i || 0 !== n) && Zt(t, a[o], a[n]) <= h) return !0;
				return !1
			}
		});
	tn._flat = Nt;
	var en = tn.extend({
			options: {
				fill: !0
			},
			isEmpty: function () {
				return !this._latlngs.length || !this._latlngs[0].length
			},
			getCenter: function () {
				if (!this._map) throw new Error("Must add layer to map before using getCenter()");
				var t, i, e, n, o, s, r, a, h, u = this._rings[0],
					l = u.length;
				if (!l) return null;
				for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
				return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
			},
			_convertLatLngs: function (t) {
				var i = tn.prototype._convertLatLngs.call(this, t),
					e = i.length;
				return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i
			},
			_setLatLngs: function (t) {
				tn.prototype._setLatLngs.call(this, t), Dt(this._latlngs) && (this._latlngs = [this._latlngs])
			},
			_defaultShape: function () {
				return Dt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
			},
			_clipPoints: function () {
				var t = this._renderer._bounds,
					i = this.options.weight,
					e = new x(i, i);
				if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else
						for (var n, o = 0, s = this._rings.length; o < s; o++)(n = jt(this._rings[o], t, !0)).length && this._parts.push(n)
			},
			_updatePath: function () {
				this._renderer._updatePoly(this, !0)
			},
			_containsPoint: function (t) {
				var i, e, n, o, s, r, a, h, u = !1;
				if (!this._pxBounds.contains(t)) return !1;
				for (o = 0, a = this._parts.length; o < a; o++)
					for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
				return u || tn.prototype._containsPoint.call(this, t, !0)
			}
		}),
		nn = qe.extend({
			initialize: function (t, i) {
				l(this, i), this._layers = {}, t && this.addData(t)
			},
			addData: function (t) {
				var i, e, n, o = ei(t) ? t : t.features;
				if (o) {
					for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
					return this
				}
				var s = this.options;
				if (s.filter && !s.filter(t)) return this;
				var r = Wt(t, s);
				return r ? (r.feature = Gt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
			},
			resetStyle: function (t) {
				return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
			},
			setStyle: function (t) {
				return this.eachLayer(function (i) {
					this._setLayerStyle(i, t)
				}, this)
			},
			_setLayerStyle: function (t, i) {
				"function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
			}
		}),
		on = {
			toGeoJSON: function (t) {
				return qt(this, {
					type: "Point",
					coordinates: Ut(this.getLatLng(), t)
				})
			}
		};
	Xe.include(on), Qe.include(on), $e.include(on), tn.include({
		toGeoJSON: function (t) {
			var i = !Dt(this._latlngs),
				e = Vt(this._latlngs, i ? 1 : 0, !1, t);
			return qt(this, {
				type: (i ? "Multi" : "") + "LineString",
				coordinates: e
			})
		}
	}), en.include({
		toGeoJSON: function (t) {
			var i = !Dt(this._latlngs),
				e = i && !Dt(this._latlngs[0]),
				n = Vt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
			return i || (n = [n]), qt(this, {
				type: (e ? "Multi" : "") + "Polygon",
				coordinates: n
			})
		}
	}), Ve.include({
		toMultiPoint: function (t) {
			var i = [];
			return this.eachLayer(function (e) {
				i.push(e.toGeoJSON(t).geometry.coordinates)
			}), qt(this, {
				type: "MultiPoint",
				coordinates: i
			})
		},
		toGeoJSON: function (t) {
			var i = this.feature && this.feature.geometry && this.feature.geometry.type;
			if ("MultiPoint" === i) return this.toMultiPoint(t);
			var e = "GeometryCollection" === i,
				n = [];
			return this.eachLayer(function (i) {
				if (i.toGeoJSON) {
					var o = i.toGeoJSON(t);
					if (e) n.push(o.geometry);
					else {
						var s = Gt(o);
						"FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
					}
				}
			}), e ? qt(this, {
				geometries: n,
				type: "GeometryCollection"
			}) : {
				type: "FeatureCollection",
				features: n
			}
		}
	});
	var sn = Kt,
		rn = Ue.extend({
			options: {
				opacity: 1,
				alt: "",
				interactive: !1,
				crossOrigin: !1,
				errorOverlayUrl: "",
				zIndex: 1,
				className: ""
			},
			initialize: function (t, i, e) {
				this._url = t, this._bounds = z(i), l(this, e)
			},
			onAdd: function () {
				this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
			},
			onRemove: function () {
				ut(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._image && this._updateOpacity(), this
			},
			setStyle: function (t) {
				return t.opacity && this.setOpacity(t.opacity), this
			},
			bringToFront: function () {
				return this._map && ct(this._image), this
			},
			bringToBack: function () {
				return this._map && _t(this._image), this
			},
			setUrl: function (t) {
				return this._url = t, this._image && (this._image.src = t), this
			},
			setBounds: function (t) {
				return this._bounds = z(t), this._map && this._reset(), this
			},
			getEvents: function () {
				var t = {
					zoom: this._reset,
					viewreset: this._reset
				};
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			setZIndex: function (t) {
				return this.options.zIndex = t, this._updateZIndex(), this
			},
			getBounds: function () {
				return this._bounds
			},
			getElement: function () {
				return this._image
			},
			_initImage: function () {
				var t = "IMG" === this._url.tagName,
					i = this._image = t ? this._url : ht("img");
				pt(i, "leaflet-image-layer"), this._zoomAnimated && pt(i, "leaflet-zoom-animated"), this.options.className && pt(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), this.options.crossOrigin && (i.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
			},
			_animateZoom: function (t) {
				var i = this._map.getZoomScale(t.zoom),
					e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
				wt(this._image, e, i)
			},
			_reset: function () {
				var t = this._image,
					i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
					e = i.getSize();
				Lt(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
			},
			_updateOpacity: function () {
				vt(this._image, this.options.opacity)
			},
			_updateZIndex: function () {
				this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
			},
			_overlayOnError: function () {
				this.fire("error");
				var t = this.options.errorOverlayUrl;
				t && this._url !== t && (this._url = t, this._image.src = t)
			}
		}),
		an = rn.extend({
			options: {
				autoplay: !0,
				loop: !0
			},
			_initImage: function () {
				var t = "VIDEO" === this._url.tagName,
					i = this._image = t ? this._url : ht("video");
				if (pt(i, "leaflet-image-layer"), this._zoomAnimated && pt(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
					for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
					this._url = n.length > 0 ? o : [i.src]
				} else {
					ei(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
					for (var a = 0; a < this._url.length; a++) {
						var h = ht("source");
						h.src = this._url[a], i.appendChild(h)
					}
				}
			}
		}),
		hn = Ue.extend({
			options: {
				offset: [0, 7],
				className: "",
				pane: "popupPane"
			},
			initialize: function (t, i) {
				l(this, t), this._source = i
			},
			onAdd: function (t) {
				this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && vt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && vt(this._container, 1), this.bringToFront()
			},
			onRemove: function (t) {
				t._fadeAnimated ? (vt(this._container, 0), this._removeTimeout = setTimeout(e(ut, void 0, this._container), 200)) : ut(this._container)
			},
			getLatLng: function () {
				return this._latlng
			},
			setLatLng: function (t) {
				return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this
			},
			getContent: function () {
				return this._content
			},
			setContent: function (t) {
				return this._content = t, this.update(), this
			},
			getElement: function () {
				return this._container
			},
			update: function () {
				this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
			},
			getEvents: function () {
				var t = {
					zoom: this._updatePosition,
					viewreset: this._updatePosition
				};
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			isOpen: function () {
				return !!this._map && this._map.hasLayer(this)
			},
			bringToFront: function () {
				return this._map && ct(this._container), this
			},
			bringToBack: function () {
				return this._map && _t(this._container), this
			},
			_updateContent: function () {
				if (this._content) {
					var t = this._contentNode,
						i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
					if ("string" == typeof i) t.innerHTML = i;
					else {
						for (; t.hasChildNodes();) t.removeChild(t.firstChild);
						t.appendChild(i)
					}
					this.fire("contentupdate")
				}
			},
			_updatePosition: function () {
				if (this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng),
						i = w(this.options.offset),
						e = this._getAnchor();
					this._zoomAnimated ? Lt(this._container, t.add(e)) : i = i.add(t).add(e);
					var n = this._containerBottom = -i.y,
						o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
					this._container.style.bottom = n + "px", this._container.style.left = o + "px"
				}
			},
			_getAnchor: function () {
				return [0, 0]
			}
		}),
		un = hn.extend({
			options: {
				maxWidth: 300,
				minWidth: 50,
				maxHeight: null,
				autoPan: !0,
				autoPanPaddingTopLeft: null,
				autoPanPaddingBottomRight: null,
				autoPanPadding: [5, 5],
				keepInView: !1,
				closeButton: !0,
				autoClose: !0,
				closeOnEscapeKey: !0,
				className: ""
			},
			openOn: function (t) {
				return t.openPopup(this), this
			},
			onAdd: function (t) {
				hn.prototype.onAdd.call(this, t), t.fire("popupopen", {
					popup: this
				}), this._source && (this._source.fire("popupopen", {
					popup: this
				}, !0), this._source instanceof Je || this._source.on("preclick", Y))
			},
			onRemove: function (t) {
				hn.prototype.onRemove.call(this, t), t.fire("popupclose", {
					popup: this
				}), this._source && (this._source.fire("popupclose", {
					popup: this
				}, !0), this._source instanceof Je || this._source.off("preclick", Y))
			},
			getEvents: function () {
				var t = hn.prototype.getEvents.call(this);
				return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
			},
			_close: function () {
				this._map && this._map.closePopup(this)
			},
			_initLayout: function () {
				var t = "leaflet-popup",
					i = this._container = ht("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
					e = this._wrapper = ht("div", t + "-content-wrapper", i);
				if (this._contentNode = ht("div", t + "-content", e), J(e), X(this._contentNode), V(e, "contextmenu", Y), this._tipContainer = ht("div", t + "-tip-container", i), this._tip = ht("div", t + "-tip", this._tipContainer), this.options.closeButton) {
					var n = this._closeButton = ht("a", t + "-close-button", i);
					n.href = "#close", n.innerHTML = "&#215;", V(n, "click", this._onCloseButtonClick, this)
				}
			},
			_updateLayout: function () {
				var t = this._contentNode,
					i = t.style;
				i.width = "", i.whiteSpace = "nowrap";
				var e = t.offsetWidth;
				e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
				var n = t.offsetHeight,
					o = this.options.maxHeight;
				o && n > o ? (i.height = o + "px", pt(t, "leaflet-popup-scrolled")) : mt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
			},
			_animateZoom: function (t) {
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
					e = this._getAnchor();
				Lt(this._container, i.add(e))
			},
			_adjustPan: function () {
				if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
					var t = this._map,
						i = parseInt(at(this._container, "marginBottom"), 10) || 0,
						e = this._container.offsetHeight + i,
						n = this._containerWidth,
						o = new x(this._containerLeft, -e - this._containerBottom);
					o._add(Pt(this._container));
					var s = t.layerPointToContainerPoint(o),
						r = w(this.options.autoPanPadding),
						a = w(this.options.autoPanPaddingTopLeft || r),
						h = w(this.options.autoPanPaddingBottomRight || r),
						u = t.getSize(),
						l = 0,
						c = 0;
					s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
				}
			},
			_onCloseButtonClick: function (t) {
				this._close(), Q(t)
			},
			_getAnchor: function () {
				return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
			}
		});
	Le.mergeOptions({
		closePopupOnClick: !0
	}), Le.include({
		openPopup: function (t, i, e) {
			return t instanceof un || (t = new un(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
		},
		closePopup: function (t) {
			return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
		}
	}), Ue.include({
		bindPopup: function (t, i) {
			return t instanceof un ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new un(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			}), this._popupHandlersAdded = !0), this
		},
		unbindPopup: function () {
			return this._popup && (this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			}), this._popupHandlersAdded = !1, this._popup = null), this
		},
		openPopup: function (t, i) {
			if (t instanceof Ue || (i = t, t = this), t instanceof qe)
				for (var e in this._layers) {
					t = this._layers[e];
					break
				}
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
		},
		closePopup: function () {
			return this._popup && this._popup._close(), this
		},
		togglePopup: function (t) {
			return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
		},
		isPopupOpen: function () {
			return !!this._popup && this._popup.isOpen()
		},
		setPopupContent: function (t) {
			return this._popup && this._popup.setContent(t), this
		},
		getPopup: function () {
			return this._popup
		},
		_openPopup: function (t) {
			var i = t.layer || t.target;
			this._popup && this._map && (Q(t), i instanceof Je ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
		},
		_movePopup: function (t) {
			this._popup.setLatLng(t.latlng)
		},
		_onKeyPress: function (t) {
			13 === t.originalEvent.keyCode && this._openPopup(t)
		}
	});
	var ln = hn.extend({
		options: {
			pane: "tooltipPane",
			offset: [0, 0],
			direction: "auto",
			permanent: !1,
			sticky: !1,
			interactive: !1,
			opacity: .9
		},
		onAdd: function (t) {
			hn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
				tooltip: this
			}), this._source && this._source.fire("tooltipopen", {
				tooltip: this
			}, !0)
		},
		onRemove: function (t) {
			hn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
				tooltip: this
			}), this._source && this._source.fire("tooltipclose", {
				tooltip: this
			}, !0)
		},
		getEvents: function () {
			var t = hn.prototype.getEvents.call(this);
			return Vi && !this.options.permanent && (t.preclick = this._close), t
		},
		_close: function () {
			this._map && this._map.closeTooltip(this)
		},
		_initLayout: function () {
			var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
			this._contentNode = this._container = ht("div", t)
		},
		_updateLayout: function () {},
		_adjustPan: function () {},
		_setPosition: function (t) {
			var i = this._map,
				e = this._container,
				n = i.latLngToContainerPoint(i.getCenter()),
				o = i.layerPointToContainerPoint(t),
				s = this.options.direction,
				r = e.offsetWidth,
				a = e.offsetHeight,
				h = w(this.options.offset),
				u = this._getAnchor();
			"top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), mt(e, "leaflet-tooltip-right"), mt(e, "leaflet-tooltip-left"), mt(e, "leaflet-tooltip-top"), mt(e, "leaflet-tooltip-bottom"), pt(e, "leaflet-tooltip-" + s), Lt(e, t)
		},
		_updatePosition: function () {
			var t = this._map.latLngToLayerPoint(this._latlng);
			this._setPosition(t)
		},
		setOpacity: function (t) {
			this.options.opacity = t, this._container && vt(this._container, t)
		},
		_animateZoom: function (t) {
			var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
			this._setPosition(i)
		},
		_getAnchor: function () {
			return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
		}
	});
	Le.include({
		openTooltip: function (t, i, e) {
			return t instanceof ln || (t = new ln(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
		},
		closeTooltip: function (t) {
			return t && this.removeLayer(t), this
		}
	}), Ue.include({
		bindTooltip: function (t, i) {
			return t instanceof ln ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new ln(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
		},
		unbindTooltip: function () {
			return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
		},
		_initTooltipInteractions: function (t) {
			if (t || !this._tooltipHandlersAdded) {
				var i = t ? "off" : "on",
					e = {
						remove: this.closeTooltip,
						move: this._moveTooltip
					};
				this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Vi && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
			}
		},
		openTooltip: function (t, i) {
			if (t instanceof Ue || (i = t, t = this), t instanceof qe)
				for (var e in this._layers) {
					t = this._layers[e];
					break
				}
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (pt(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
		},
		closeTooltip: function () {
			return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
		},
		toggleTooltip: function (t) {
			return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
		},
		isTooltipOpen: function () {
			return this._tooltip.isOpen()
		},
		setTooltipContent: function (t) {
			return this._tooltip && this._tooltip.setContent(t), this
		},
		getTooltip: function () {
			return this._tooltip
		},
		_openTooltip: function (t) {
			var i = t.layer || t.target;
			this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
		},
		_moveTooltip: function (t) {
			var i, e, n = t.latlng;
			this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
		}
	});
	var cn = Ge.extend({
		options: {
			iconSize: [12, 12],
			html: !1,
			bgPos: null,
			className: "leaflet-div-icon"
		},
		createIcon: function (t) {
			var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
				e = this.options;
			if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
				var n = w(e.bgPos);
				i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
			}
			return this._setIconStyles(i, "icon"), i
		},
		createShadow: function () {
			return null
		}
	});
	Ge.Default = Ke;
	var _n = Ue.extend({
			options: {
				tileSize: 256,
				opacity: 1,
				updateWhenIdle: ji,
				updateWhenZooming: !0,
				updateInterval: 200,
				zIndex: 1,
				bounds: null,
				minZoom: 0,
				maxZoom: void 0,
				maxNativeZoom: void 0,
				minNativeZoom: void 0,
				noWrap: !1,
				pane: "tilePane",
				className: "",
				keepBuffer: 2
			},
			initialize: function (t) {
				l(this, t)
			},
			onAdd: function () {
				this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
			},
			beforeAdd: function (t) {
				t._addZoomLimit(this)
			},
			onRemove: function (t) {
				this._removeAllTiles(), ut(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
			},
			bringToFront: function () {
				return this._map && (ct(this._container), this._setAutoZIndex(Math.max)), this
			},
			bringToBack: function () {
				return this._map && (_t(this._container), this._setAutoZIndex(Math.min)), this
			},
			getContainer: function () {
				return this._container
			},
			setOpacity: function (t) {
				return this.options.opacity = t, this._updateOpacity(), this
			},
			setZIndex: function (t) {
				return this.options.zIndex = t, this._updateZIndex(), this
			},
			isLoading: function () {
				return this._loading
			},
			redraw: function () {
				return this._map && (this._removeAllTiles(), this._update()), this
			},
			getEvents: function () {
				var t = {
					viewprereset: this._invalidateAll,
					viewreset: this._resetView,
					zoom: this._resetView,
					moveend: this._onMoveEnd
				};
				return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			createTile: function () {
				return document.createElement("div")
			},
			getTileSize: function () {
				var t = this.options.tileSize;
				return t instanceof x ? t : new x(t, t)
			},
			_updateZIndex: function () {
				this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
			},
			_setAutoZIndex: function (t) {
				for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
				isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
			},
			_updateOpacity: function () {
				if (this._map && !Li) {
					vt(this._container, this.options.opacity);
					var t = +new Date,
						i = !1,
						e = !1;
					for (var n in this._tiles) {
						var o = this._tiles[n];
						if (o.current && o.loaded) {
							var s = Math.min(1, (t - o.loaded) / 200);
							vt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
						}
					}
					e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
				}
			},
			_onOpaqueTile: r,
			_initContainer: function () {
				this._container || (this._container = ht("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
			},
			_updateLevels: function () {
				var t = this._tileZoom,
					i = this.options.maxZoom;
				if (void 0 !== t) {
					for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ut(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
					var n = this._levels[t],
						o = this._map;
					return n || ((n = this._levels[t] = {}).el = ht("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
				}
			},
			_onUpdateLevel: r,
			_onRemoveLevel: r,
			_onCreateLevel: r,
			_pruneTiles: function () {
				if (this._map) {
					var t, i, e = this._map.getZoom();
					if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
					else {
						for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
						for (t in this._tiles)
							if ((i = this._tiles[t]).current && !i.active) {
								var n = i.coords;
								this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
							}
						for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
					}
				}
			},
			_removeTilesAtZoom: function (t) {
				for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
			},
			_removeAllTiles: function () {
				for (var t in this._tiles) this._removeTile(t)
			},
			_invalidateAll: function () {
				for (var t in this._levels) ut(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
				this._removeAllTiles(), this._tileZoom = void 0
			},
			_retainParent: function (t, i, e, n) {
				var o = Math.floor(t / 2),
					s = Math.floor(i / 2),
					r = e - 1,
					a = new x(+o, +s);
				a.z = +r;
				var h = this._tileCoordsToKey(a),
					u = this._tiles[h];
				return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n))
			},
			_retainChildren: function (t, i, e, n) {
				for (var o = 2 * t; o < 2 * t + 2; o++)
					for (var s = 2 * i; s < 2 * i + 2; s++) {
						var r = new x(o, s);
						r.z = e + 1;
						var a = this._tileCoordsToKey(r),
							h = this._tiles[a];
						h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
					}
			},
			_resetView: function (t) {
				var i = t && (t.pinch || t.flyTo);
				this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
			},
			_animateZoom: function (t) {
				this._setView(t.center, t.zoom, !0, t.noUpdate)
			},
			_clampZoom: function (t) {
				var i = this.options;
				return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
			},
			_setView: function (t, i, e, n) {
				var o = this._clampZoom(Math.round(i));
				(void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
				var s = this.options.updateWhenZooming && o !== this._tileZoom;
				n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
			},
			_setZoomTransforms: function (t, i) {
				for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
			},
			_setZoomTransform: function (t, i, e) {
				var n = this._map.getZoomScale(e, t.zoom),
					o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
				Ni ? wt(t.el, o, n) : Lt(t.el, o)
			},
			_resetGrid: function () {
				var t = this._map,
					i = t.options.crs,
					e = this._tileSize = this.getTileSize(),
					n = this._tileZoom,
					o = this._map.getPixelWorldBounds(this._tileZoom);
				o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
			},
			_onMoveEnd: function () {
				this._map && !this._map._animatingZoom && this._update()
			},
			_getTiledPixelBounds: function (t) {
				var i = this._map,
					e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
					n = i.getZoomScale(e, this._tileZoom),
					o = i.project(t, this._tileZoom).floor(),
					s = i.getSize().divideBy(2 * n);
				return new P(o.subtract(s), o.add(s))
			},
			_update: function (t) {
				var i = this._map;
				if (i) {
					var e = this._clampZoom(i.getZoom());
					if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
						var n = this._getTiledPixelBounds(t),
							o = this._pxBoundsToTileRange(n),
							s = o.getCenter(),
							r = [],
							a = this.options.keepBuffer,
							h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
						if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
						for (var u in this._tiles) {
							var l = this._tiles[u].coords;
							l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1)
						}
						if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
						else {
							for (var c = o.min.y; c <= o.max.y; c++)
								for (var _ = o.min.x; _ <= o.max.x; _++) {
									var d = new x(_, c);
									if (d.z = this._tileZoom, this._isValidTile(d)) {
										var p = this._tiles[this._tileCoordsToKey(d)];
										p ? p.current = !0 : r.push(d)
									}
								}
							if (r.sort(function (t, i) {
									return t.distanceTo(s) - i.distanceTo(s)
								}), 0 !== r.length) {
								this._loading || (this._loading = !0, this.fire("loading"));
								var m = document.createDocumentFragment();
								for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
								this._level.el.appendChild(m)
							}
						}
					}
				}
			},
			_isValidTile: function (t) {
				var i = this._map.options.crs;
				if (!i.infinite) {
					var e = this._globalTileRange;
					if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
				}
				if (!this.options.bounds) return !0;
				var n = this._tileCoordsToBounds(t);
				return z(this.options.bounds).overlaps(n)
			},
			_keyToBounds: function (t) {
				return this._tileCoordsToBounds(this._keyToTileCoords(t))
			},
			_tileCoordsToNwSe: function (t) {
				var i = this._map,
					e = this.getTileSize(),
					n = t.scaleBy(e),
					o = n.add(e);
				return [i.unproject(n, t.z), i.unproject(o, t.z)]
			},
			_tileCoordsToBounds: function (t) {
				var i = this._tileCoordsToNwSe(t),
					e = new T(i[0], i[1]);
				return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
			},
			_tileCoordsToKey: function (t) {
				return t.x + ":" + t.y + ":" + t.z
			},
			_keyToTileCoords: function (t) {
				var i = t.split(":"),
					e = new x(+i[0], +i[1]);
				return e.z = +i[2], e
			},
			_removeTile: function (t) {
				var i = this._tiles[t];
				i && (Ci || i.el.setAttribute("src", ni), ut(i.el), delete this._tiles[t], this.fire("tileunload", {
					tile: i.el,
					coords: this._keyToTileCoords(t)
				}))
			},
			_initTile: function (t) {
				pt(t, "leaflet-tile");
				var i = this.getTileSize();
				t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, Li && this.options.opacity < 1 && vt(t, this.options.opacity), Ti && !zi && (t.style.WebkitBackfaceVisibility = "hidden")
			},
			_addTile: function (t, i) {
				var n = this._getTilePos(t),
					o = this._tileCoordsToKey(t),
					s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
				this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), Lt(s, n), this._tiles[o] = {
					el: s,
					coords: t,
					current: !0
				}, i.appendChild(s), this.fire("tileloadstart", {
					tile: s,
					coords: t
				})
			},
			_tileReady: function (t, i, n) {
				if (this._map) {
					i && this.fire("tileerror", {
						error: i,
						tile: n,
						coords: t
					});
					var o = this._tileCoordsToKey(t);
					(n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (vt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (pt(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
						tile: n.el,
						coords: t
					})), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Li || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
				}
			},
			_getTilePos: function (t) {
				return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
			},
			_wrapCoords: function (t) {
				var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
				return i.z = t.z, i
			},
			_pxBoundsToTileRange: function (t) {
				var i = this.getTileSize();
				return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
			},
			_noTilesToLoad: function () {
				for (var t in this._tiles)
					if (!this._tiles[t].loaded) return !1;
				return !0
			}
		}),
		dn = _n.extend({
			options: {
				minZoom: 0,
				maxZoom: 18,
				subdomains: "abc",
				errorTileUrl: "",
				zoomOffset: 0,
				tms: !1,
				zoomReverse: !1,
				detectRetina: !1,
				crossOrigin: !1
			},
			initialize: function (t, i) {
				this._url = t, (i = l(this, i)).detectRetina && Ki && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), Ti || this.on("tileunload", this._onTileRemove)
			},
			setUrl: function (t, i) {
				return this._url = t, i || this.redraw(), this
			},
			createTile: function (t, i) {
				var n = document.createElement("img");
				return V(n, "load", e(this._tileOnLoad, this, i, n)), V(n, "error", e(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
			},
			getTileUrl: function (t) {
				var e = {
					r: Ki ? "@2x" : "",
					s: this._getSubdomain(t),
					x: t.x,
					y: t.y,
					z: this._getZoomForUrl()
				};
				if (this._map && !this._map.options.crs.infinite) {
					var n = this._globalTileRange.max.y - t.y;
					this.options.tms && (e.y = n), e["-y"] = n
				}
				return _(this._url, i(e, this.options))
			},
			_tileOnLoad: function (t, i) {
				Li ? setTimeout(e(t, this, null, i), 0) : t(null, i)
			},
			_tileOnError: function (t, i, e) {
				var n = this.options.errorTileUrl;
				n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
			},
			_onTileRemove: function (t) {
				t.tile.onload = null
			},
			_getZoomForUrl: function () {
				var t = this._tileZoom,
					i = this.options.maxZoom,
					e = this.options.zoomReverse,
					n = this.options.zoomOffset;
				return e && (t = i - t), t + n
			},
			_getSubdomain: function (t) {
				var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
				return this.options.subdomains[i]
			},
			_abortLoading: function () {
				var t, i;
				for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = ni, ut(i), delete this._tiles[t]))
			}
		}),
		pn = dn.extend({
			defaultWmsParams: {
				service: "WMS",
				request: "GetMap",
				layers: "",
				styles: "",
				format: "image/jpeg",
				transparent: !1,
				version: "1.1.1"
			},
			options: {
				crs: null,
				uppercase: !1
			},
			initialize: function (t, e) {
				this._url = t;
				var n = i({}, this.defaultWmsParams);
				for (var o in e) o in this.options || (n[o] = e[o]);
				var s = (e = l(this, e)).detectRetina && Ki ? 2 : 1,
					r = this.getTileSize();
				n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
			},
			onAdd: function (t) {
				this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
				var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
				this.wmsParams[i] = this._crs.code, dn.prototype.onAdd.call(this, t)
			},
			getTileUrl: function (t) {
				var i = this._tileCoordsToNwSe(t),
					e = this._crs,
					n = b(e.project(i[0]), e.project(i[1])),
					o = n.min,
					s = n.max,
					r = (this._wmsVersion >= 1.3 && this._crs === He ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
					a = L.TileLayer.prototype.getTileUrl.call(this, t);
				return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
			},
			setParams: function (t, e) {
				return i(this.wmsParams, t), e || this.redraw(), this
			}
		});
	dn.WMS = pn, Yt.wms = function (t, i) {
		return new pn(t, i)
	};
	var mn = Ue.extend({
			options: {
				padding: .1,
				tolerance: 0
			},
			initialize: function (t) {
				l(this, t), n(this), this._layers = this._layers || {}
			},
			onAdd: function () {
				this._container || (this._initContainer(), this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
			},
			onRemove: function () {
				this.off("update", this._updatePaths, this), this._destroyContainer()
			},
			getEvents: function () {
				var t = {
					viewreset: this._reset,
					zoom: this._onZoom,
					moveend: this._update,
					zoomend: this._onZoomEnd
				};
				return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
			},
			_onAnimZoom: function (t) {
				this._updateTransform(t.center, t.zoom)
			},
			_onZoom: function () {
				this._updateTransform(this._map.getCenter(), this._map.getZoom())
			},
			_updateTransform: function (t, i) {
				var e = this._map.getZoomScale(i, this._zoom),
					n = Pt(this._container),
					o = this._map.getSize().multiplyBy(.5 + this.options.padding),
					s = this._map.project(this._center, i),
					r = this._map.project(t, i).subtract(s),
					a = o.multiplyBy(-e).add(n).add(o).subtract(r);
				Ni ? wt(this._container, a, e) : Lt(this._container, a)
			},
			_reset: function () {
				this._update(), this._updateTransform(this._center, this._zoom);
				for (var t in this._layers) this._layers[t]._reset()
			},
			_onZoomEnd: function () {
				for (var t in this._layers) this._layers[t]._project()
			},
			_updatePaths: function () {
				for (var t in this._layers) this._layers[t]._update()
			},
			_update: function () {
				var t = this.options.padding,
					i = this._map.getSize(),
					e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
				this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
			}
		}),
		fn = mn.extend({
			getEvents: function () {
				var t = mn.prototype.getEvents.call(this);
				return t.viewprereset = this._onViewPreReset, t
			},
			_onViewPreReset: function () {
				this._postponeUpdatePaths = !0
			},
			onAdd: function () {
				mn.prototype.onAdd.call(this), this._draw()
			},
			_initContainer: function () {
				var t = this._container = document.createElement("canvas");
				V(t, "mousemove", o(this._onMouseMove, 32, this), this), V(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), V(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
			},
			_destroyContainer: function () {
				delete this._ctx, ut(this._container), q(this._container), delete this._container
			},
			_updatePaths: function () {
				if (!this._postponeUpdatePaths) {
					this._redrawBounds = null;
					for (var t in this._layers) this._layers[t]._update();
					this._redraw()
				}
			},
			_update: function () {
				if (!this._map._animatingZoom || !this._bounds) {
					this._drawnLayers = {}, mn.prototype._update.call(this);
					var t = this._bounds,
						i = this._container,
						e = t.getSize(),
						n = Ki ? 2 : 1;
					Lt(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Ki && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
				}
			},
			_reset: function () {
				mn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
			},
			_initPath: function (t) {
				this._updateDashArray(t), this._layers[n(t)] = t;
				var i = t._order = {
					layer: t,
					prev: this._drawLast,
					next: null
				};
				this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
			},
			_addPath: function (t) {
				this._requestRedraw(t)
			},
			_removePath: function (t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t)
			},
			_updatePath: function (t) {
				this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
			},
			_updateStyle: function (t) {
				this._updateDashArray(t), this._requestRedraw(t)
			},
			_updateDashArray: function (t) {
				if (t.options.dashArray) {
					var i, e = t.options.dashArray.split(","),
						n = [];
					for (i = 0; i < e.length; i++) n.push(Number(e[i]));
					t.options._dashArray = n
				}
			},
			_requestRedraw: function (t) {
				this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
			},
			_extendRedrawBounds: function (t) {
				if (t._pxBounds) {
					var i = (t.options.weight || 0) + 1;
					this._redrawBounds = this._redrawBounds || new P, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
				}
			},
			_redraw: function () {
				this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
			},
			_clear: function () {
				var t = this._redrawBounds;
				if (t) {
					var i = t.getSize();
					this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
				} else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
			},
			_draw: function () {
				var t, i = this._redrawBounds;
				if (this._ctx.save(), i) {
					var e = i.getSize();
					this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
				}
				this._drawing = !0;
				for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
				this._drawing = !1, this._ctx.restore()
			},
			_updatePoly: function (t, i) {
				if (this._drawing) {
					var e, n, o, s, r = t._parts,
						a = r.length,
						h = this._ctx;
					if (a) {
						for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
							for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
							i && h.closePath()
						}
						this._fillStroke(h, t)
					}
				}
			},
			_updateCircle: function (t) {
				if (this._drawing && !t._empty()) {
					var i = t._point,
						e = this._ctx,
						n = Math.max(Math.round(t._radius), 1),
						o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
					this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
				}
			},
			_fillStroke: function (t, i) {
				var e = i.options;
				e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
			},
			_onClick: function (t) {
				for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
				e && (et(t), this._fireEvent([e], t))
			},
			_onMouseMove: function (t) {
				if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
					var i = this._map.mouseEventToLayerPoint(t);
					this._handleMouseHover(t, i)
				}
			},
			_handleMouseOut: function (t) {
				var i = this._hoveredLayer;
				i && (mt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
			},
			_handleMouseHover: function (t, i) {
				for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
				n !== this._hoveredLayer && (this._handleMouseOut(t), n && (pt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
			},
			_fireEvent: function (t, i, e) {
				this._map._fireDOMEvent(i, e || i.type, t)
			},
			_bringToFront: function (t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
			},
			_bringToBack: function (t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
			}
		}),
		gn = function () {
			try {
				return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
					function (t) {
						return document.createElement("<lvml:" + t + ' class="lvml">')
					}
			} catch (t) {
				return function (t) {
					return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
				}
			}
		}(),
		vn = {
			_initContainer: function () {
				this._container = ht("div", "leaflet-vml-container")
			},
			_update: function () {
				this._map._animatingZoom || (mn.prototype._update.call(this), this.fire("update"))
			},
			_initPath: function (t) {
				var i = t._container = gn("shape");
				pt(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = gn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
			},
			_addPath: function (t) {
				var i = t._container;
				this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
			},
			_removePath: function (t) {
				var i = t._container;
				ut(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
			},
			_updateStyle: function (t) {
				var i = t._stroke,
					e = t._fill,
					n = t.options,
					o = t._container;
				o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = gn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = ei(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = gn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
			},
			_updateCircle: function (t) {
				var i = t._point.round(),
					e = Math.round(t._radius),
					n = Math.round(t._radiusY || e);
				this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
			},
			_setPath: function (t, i) {
				t._path.v = i
			},
			_bringToFront: function (t) {
				ct(t._container)
			},
			_bringToBack: function (t) {
				_t(t._container)
			}
		},
		yn = Ji ? gn : E,
		xn = mn.extend({
			getEvents: function () {
				var t = mn.prototype.getEvents.call(this);
				return t.zoomstart = this._onZoomStart, t
			},
			_initContainer: function () {
				this._container = yn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = yn("g"), this._container.appendChild(this._rootGroup)
			},
			_destroyContainer: function () {
				ut(this._container), q(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
			},
			_onZoomStart: function () {
				this._update()
			},
			_update: function () {
				if (!this._map._animatingZoom || !this._bounds) {
					mn.prototype._update.call(this);
					var t = this._bounds,
						i = t.getSize(),
						e = this._container;
					this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), Lt(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
				}
			},
			_initPath: function (t) {
				var i = t._path = yn("path");
				t.options.className && pt(i, t.options.className), t.options.interactive && pt(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
			},
			_addPath: function (t) {
				this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
			},
			_removePath: function (t) {
				ut(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
			},
			_updatePath: function (t) {
				t._project(), t._update()
			},
			_updateStyle: function (t) {
				var i = t._path,
					e = t.options;
				i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
			},
			_updatePoly: function (t, i) {
				this._setPath(t, k(t._parts, i))
			},
			_updateCircle: function (t) {
				var i = t._point,
					e = Math.max(Math.round(t._radius), 1),
					n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
					o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
				this._setPath(t, o)
			},
			_setPath: function (t, i) {
				t._path.setAttribute("d", i)
			},
			_bringToFront: function (t) {
				ct(t._path)
			},
			_bringToBack: function (t) {
				_t(t._path)
			}
		});
	Ji && xn.include(vn), Le.include({
		getRenderer: function (t) {
			var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
			return i || (i = this._renderer = this.options.preferCanvas && Xt() || Jt()), this.hasLayer(i) || this.addLayer(i), i
		},
		_getPaneRenderer: function (t) {
			if ("overlayPane" === t || void 0 === t) return !1;
			var i = this._paneRenderers[t];
			return void 0 === i && (i = xn && Jt({
				pane: t
			}) || fn && Xt({
				pane: t
			}), this._paneRenderers[t] = i), i
		}
	});
	var wn = en.extend({
		initialize: function (t, i) {
			en.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
		},
		setBounds: function (t) {
			return this.setLatLngs(this._boundsToLatLngs(t))
		},
		_boundsToLatLngs: function (t) {
			return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
		}
	});
	xn.create = yn, xn.pointsToPath = k, nn.geometryToLayer = Wt, nn.coordsToLatLng = Ht, nn.coordsToLatLngs = Ft, nn.latLngToCoords = Ut, nn.latLngsToCoords = Vt, nn.getFeature = qt, nn.asFeature = Gt, Le.mergeOptions({
		boxZoom: !0
	});
	var Ln = Ze.extend({
		initialize: function (t) {
			this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
		},
		addHooks: function () {
			V(this._container, "mousedown", this._onMouseDown, this)
		},
		removeHooks: function () {
			q(this._container, "mousedown", this._onMouseDown, this)
		},
		moved: function () {
			return this._moved
		},
		_destroy: function () {
			ut(this._pane), delete this._pane
		},
		_resetState: function () {
			this._resetStateTimeout = 0, this._moved = !1
		},
		_clearDeferredResetState: function () {
			0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
		},
		_onMouseDown: function (t) {
			if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
			this._clearDeferredResetState(), this._resetState(), mi(), bt(), this._startPoint = this._map.mouseEventToContainerPoint(t), V(document, {
				contextmenu: Q,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this)
		},
		_onMouseMove: function (t) {
			this._moved || (this._moved = !0, this._box = ht("div", "leaflet-zoom-box", this._container), pt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
			var i = new P(this._point, this._startPoint),
				e = i.getSize();
			Lt(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
		},
		_finish: function () {
			this._moved && (ut(this._box), mt(this._container, "leaflet-crosshair")), fi(), Tt(), q(document, {
				contextmenu: Q,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this)
		},
		_onMouseUp: function (t) {
			if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
				this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
				var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
				this._map.fitBounds(i).fire("boxzoomend", {
					boxZoomBounds: i
				})
			}
		},
		_onKeyDown: function (t) {
			27 === t.keyCode && this._finish()
		}
	});
	Le.addInitHook("addHandler", "boxZoom", Ln), Le.mergeOptions({
		doubleClickZoom: !0
	});
	var Pn = Ze.extend({
		addHooks: function () {
			this._map.on("dblclick", this._onDoubleClick, this)
		},
		removeHooks: function () {
			this._map.off("dblclick", this._onDoubleClick, this)
		},
		_onDoubleClick: function (t) {
			var i = this._map,
				e = i.getZoom(),
				n = i.options.zoomDelta,
				o = t.originalEvent.shiftKey ? e - n : e + n;
			"center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
		}
	});
	Le.addInitHook("addHandler", "doubleClickZoom", Pn), Le.mergeOptions({
		dragging: !0,
		inertia: !zi,
		inertiaDeceleration: 3400,
		inertiaMaxSpeed: 1 / 0,
		easeLinearity: .2,
		worldCopyJump: !1,
		maxBoundsViscosity: 0
	});
	var bn = Ze.extend({
		addHooks: function () {
			if (!this._draggable) {
				var t = this._map;
				this._draggable = new Be(t._mapPane, t._container), this._draggable.on({
					dragstart: this._onDragStart,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
			}
			pt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
		},
		removeHooks: function () {
			mt(this._map._container, "leaflet-grab"), mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
		},
		moved: function () {
			return this._draggable && this._draggable._moved
		},
		moving: function () {
			return this._draggable && this._draggable._moving
		},
		_onDragStart: function () {
			var t = this._map;
			if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
				var i = z(this._map.options.maxBounds);
				this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
			} else this._offsetLimit = null;
			t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
		},
		_onDrag: function (t) {
			if (this._map.options.inertia) {
				var i = this._lastTime = +new Date,
					e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
				this._positions.push(e), this._times.push(i), this._prunePositions(i)
			}
			this._map.fire("move", t).fire("drag", t)
		},
		_prunePositions: function (t) {
			for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
		},
		_onZoomEnd: function () {
			var t = this._map.getSize().divideBy(2),
				i = this._map.latLngToLayerPoint([0, 0]);
			this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
		},
		_viscousLimit: function (t, i) {
			return t - (t - i) * this._viscosity
		},
		_onPreDragLimit: function () {
			if (this._viscosity && this._offsetLimit) {
				var t = this._draggable._newPos.subtract(this._draggable._startPos),
					i = this._offsetLimit;
				t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
			}
		},
		_onPreDragWrap: function () {
			var t = this._worldWidth,
				i = Math.round(t / 2),
				e = this._initialWorldOffset,
				n = this._draggable._newPos.x,
				o = (n - i + e) % t + i - e,
				s = (n + i + e) % t - i - e,
				r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
			this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
		},
		_onDragEnd: function (t) {
			var i = this._map,
				e = i.options,
				n = !e.inertia || this._times.length < 2;
			if (i.fire("dragend", t), n) i.fire("moveend");
			else {
				this._prunePositions(+new Date);
				var o = this._lastPos.subtract(this._positions[0]),
					s = (this._lastTime - this._times[0]) / 1e3,
					r = e.easeLinearity,
					a = o.multiplyBy(r / s),
					h = a.distanceTo([0, 0]),
					u = Math.min(e.inertiaMaxSpeed, h),
					l = a.multiplyBy(u / h),
					c = u / (e.inertiaDeceleration * r),
					_ = l.multiplyBy(-c / 2).round();
				_.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function () {
					i.panBy(_, {
						duration: c,
						easeLinearity: r,
						noMoveStart: !0,
						animate: !0
					})
				})) : i.fire("moveend")
			}
		}
	});
	Le.addInitHook("addHandler", "dragging", bn), Le.mergeOptions({
		keyboard: !0,
		keyboardPanDelta: 80
	});
	var Tn = Ze.extend({
		keyCodes: {
			left: [37],
			right: [39],
			down: [40],
			up: [38],
			zoomIn: [187, 107, 61, 171],
			zoomOut: [189, 109, 54, 173]
		},
		initialize: function (t) {
			this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
		},
		addHooks: function () {
			var t = this._map._container;
			t.tabIndex <= 0 && (t.tabIndex = "0"), V(t, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this), this._map.on({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this)
		},
		removeHooks: function () {
			this._removeHooks(), q(this._map._container, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this), this._map.off({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this)
		},
		_onMouseDown: function () {
			if (!this._focused) {
				var t = document.body,
					i = document.documentElement,
					e = t.scrollTop || i.scrollTop,
					n = t.scrollLeft || i.scrollLeft;
				this._map._container.focus(), window.scrollTo(n, e)
			}
		},
		_onFocus: function () {
			this._focused = !0, this._map.fire("focus")
		},
		_onBlur: function () {
			this._focused = !1, this._map.fire("blur")
		},
		_setPanDelta: function (t) {
			var i, e, n = this._panKeys = {},
				o = this.keyCodes;
			for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
			for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
			for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
			for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
		},
		_setZoomDelta: function (t) {
			var i, e, n = this._zoomKeys = {},
				o = this.keyCodes;
			for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
			for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
		},
		_addHooks: function () {
			V(document, "keydown", this._onKeyDown, this)
		},
		_removeHooks: function () {
			q(document, "keydown", this._onKeyDown, this)
		},
		_onKeyDown: function (t) {
			if (!(t.altKey || t.ctrlKey || t.metaKey)) {
				var i, e = t.keyCode,
					n = this._map;
				if (e in this._panKeys) {
					if (n._panAnim && n._panAnim._inProgress) return;
					i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
				} else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
				else {
					if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
					n.closePopup()
				}
				Q(t)
			}
		}
	});
	Le.addInitHook("addHandler", "keyboard", Tn), Le.mergeOptions({
		scrollWheelZoom: !0,
		wheelDebounceTime: 40,
		wheelPxPerZoomLevel: 60
	});
	var zn = Ze.extend({
		addHooks: function () {
			V(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
		},
		removeHooks: function () {
			q(this._map._container, "mousewheel", this._onWheelScroll, this)
		},
		_onWheelScroll: function (t) {
			var i = it(t),
				n = this._map.options.wheelDebounceTime;
			this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
			var o = Math.max(n - (+new Date - this._startTime), 0);
			clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Q(t)
		},
		_performZoom: function () {
			var t = this._map,
				i = t.getZoom(),
				e = this._map.options.zoomSnap || 0;
			t._stop();
			var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
				o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
				s = e ? Math.ceil(o / e) * e : o,
				r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
			this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
		}
	});
	Le.addInitHook("addHandler", "scrollWheelZoom", zn), Le.mergeOptions({
		tap: !0,
		tapTolerance: 15
	});
	var Mn = Ze.extend({
		addHooks: function () {
			V(this._map._container, "touchstart", this._onDown, this)
		},
		removeHooks: function () {
			q(this._map._container, "touchstart", this._onDown, this)
		},
		_onDown: function (t) {
			if (t.touches) {
				if ($(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
				var i = t.touches[0],
					n = i.target;
				this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && pt(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function () {
					this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
				}, this), 1e3), this._simulateEvent("mousedown", i), V(document, {
					touchmove: this._onMove,
					touchend: this._onUp
				}, this)
			}
		},
		_onUp: function (t) {
			if (clearTimeout(this._holdTimeout), q(document, {
					touchmove: this._onMove,
					touchend: this._onUp
				}, this), this._fireClick && t && t.changedTouches) {
				var i = t.changedTouches[0],
					e = i.target;
				e && e.tagName && "a" === e.tagName.toLowerCase() && mt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
			}
		},
		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
		},
		_onMove: function (t) {
			var i = t.touches[0];
			this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
		},
		_simulateEvent: function (t, i) {
			var e = document.createEvent("MouseEvents");
			e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
		}
	});
	Vi && !Ui && Le.addInitHook("addHandler", "tap", Mn), Le.mergeOptions({
		touchZoom: Vi && !zi,
		bounceAtZoomLimits: !0
	});
	var Cn = Ze.extend({
		addHooks: function () {
			pt(this._map._container, "leaflet-touch-zoom"), V(this._map._container, "touchstart", this._onTouchStart, this)
		},
		removeHooks: function () {
			mt(this._map._container, "leaflet-touch-zoom"), q(this._map._container, "touchstart", this._onTouchStart, this)
		},
		_onTouchStart: function (t) {
			var i = this._map;
			if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
				var e = i.mouseEventToContainerPoint(t.touches[0]),
					n = i.mouseEventToContainerPoint(t.touches[1]);
				this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), V(document, "touchmove", this._onTouchMove, this), V(document, "touchend", this._onTouchEnd, this), $(t)
			}
		},
		_onTouchMove: function (t) {
			if (t.touches && 2 === t.touches.length && this._zooming) {
				var i = this._map,
					n = i.mouseEventToContainerPoint(t.touches[0]),
					o = i.mouseEventToContainerPoint(t.touches[1]),
					s = n.distanceTo(o) / this._startDist;
				if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
					if (this._center = this._startLatLng, 1 === s) return
				} else {
					var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
					if (1 === s && 0 === r.x && 0 === r.y) return;
					this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
				}
				this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
				var a = e(i._move, i, this._center, this._zoom, {
					pinch: !0,
					round: !1
				});
				this._animRequest = f(a, this, !0), $(t)
			}
		},
		_onTouchEnd: function () {
			this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), q(document, "touchmove", this._onTouchMove), q(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
		}
	});
	Le.addInitHook("addHandler", "touchZoom", Cn), Le.BoxZoom = Ln, Le.DoubleClickZoom = Pn, Le.Drag = bn, Le.Keyboard = Tn, Le.ScrollWheelZoom = zn, Le.Tap = Mn, Le.TouchZoom = Cn;
	var Zn = window.L;
	window.L = t, Object.freeze = $t, t.version = "1.3.1", t.noConflict = function () {
		return window.L = Zn, this
	}, t.Control = Pe, t.control = be, t.Browser = $i, t.Evented = ui, t.Mixin = Ee, t.Util = ai, t.Class = v, t.Handler = Ze, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = de, t.DomUtil = xe, t.PosAnimation = we, t.Draggable = Be, t.LineUtil = Oe, t.PolyUtil = Re, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = Z, t.transformation = S, t.Projection = je, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = ci, t.GeoJSON = nn, t.geoJSON = Kt, t.geoJson = sn, t.Layer = Ue, t.LayerGroup = Ve, t.layerGroup = function (t, i) {
		return new Ve(t, i)
	}, t.FeatureGroup = qe, t.featureGroup = function (t) {
		return new qe(t)
	}, t.ImageOverlay = rn, t.imageOverlay = function (t, i, e) {
		return new rn(t, i, e)
	}, t.VideoOverlay = an, t.videoOverlay = function (t, i, e) {
		return new an(t, i, e)
	}, t.DivOverlay = hn, t.Popup = un, t.popup = function (t, i) {
		return new un(t, i)
	}, t.Tooltip = ln, t.tooltip = function (t, i) {
		return new ln(t, i)
	}, t.Icon = Ge, t.icon = function (t) {
		return new Ge(t)
	}, t.DivIcon = cn, t.divIcon = function (t) {
		return new cn(t)
	}, t.Marker = Xe, t.marker = function (t, i) {
		return new Xe(t, i)
	}, t.TileLayer = dn, t.tileLayer = Yt, t.GridLayer = _n, t.gridLayer = function (t) {
		return new _n(t)
	}, t.SVG = xn, t.svg = Jt, t.Renderer = mn, t.Canvas = fn, t.canvas = Xt, t.Path = Je, t.CircleMarker = $e, t.circleMarker = function (t, i) {
		return new $e(t, i)
	}, t.Circle = Qe, t.circle = function (t, i, e) {
		return new Qe(t, i, e)
	}, t.Polyline = tn, t.polyline = function (t, i) {
		return new tn(t, i)
	}, t.Polygon = en, t.polygon = function (t, i) {
		return new en(t, i)
	}, t.Rectangle = wn, t.rectangle = function (t, i) {
		return new wn(t, i)
	}, t.Map = Le, t.map = function (t, i) {
		return new Le(t, i)
	}
});