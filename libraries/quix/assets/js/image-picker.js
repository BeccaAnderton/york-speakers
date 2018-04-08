(function(){var t,e,i,s,l=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1};jQuery.fn.extend({imagepicker:function(e){return null==e&&(e={}),this.each(function(){var i;if(i=jQuery(this),i.data("picker")&&i.data("picker").destroy(),i.data("picker",new t(this,s(e))),null!=e.initialized)return e.initialized.call(i.data("picker"))})}}),s=function(t){var e;return e={hide_select:!0,show_label:!1,initialized:void 0,changed:void 0,clicked:void 0,selected:void 0,limit:void 0,limit_reached:void 0},jQuery.extend(e,t)},i=function(t,e){var i,s,l,r;if(!t||!e||t.length!==e.length)return!1;for(t=t.slice(0),e=e.slice(0),t.sort(),e.sort(),i=s=0,l=t.length;s<l;i=++s)if(r=t[i],e[i]!==r)return!1;return!0},t=function(){function t(t,e){this.opts=null!=e?e:{},this.sync_picker_with_select=l(this.sync_picker_with_select,this),this.select=jQuery(t),this.multiple="multiple"===this.select.attr("multiple"),null!=this.select.data("limit")&&(this.opts.limit=parseInt(this.select.data("limit"))),this.build_and_append_picker()}return t.prototype.destroy=function(){var t,e,i,s;for(s=this.picker_options,t=0,e=s.length;t<e;t++)i=s[t],i.destroy();return this.picker.remove(),this.select.off("change",this.sync_picker_with_select),this.select.removeData("picker"),this.select.show()},t.prototype.build_and_append_picker=function(){return this.opts.hide_select&&this.select.hide(),this.select.on("change",this.sync_picker_with_select),null!=this.picker&&this.picker.remove(),this.create_picker(),this.select.after(this.picker),this.sync_picker_with_select()},t.prototype.sync_picker_with_select=function(){var t,e,i,s,l;for(s=this.picker_options,l=[],t=0,e=s.length;t<e;t++)i=s[t],i.is_selected()?l.push(i.mark_as_selected()):l.push(i.unmark_as_selected());return l},t.prototype.create_picker=function(){return this.picker=jQuery("<ul class='thumbnails image_picker_selector'></ul>"),this.picker_options=[],this.recursively_parse_option_groups(this.select,this.picker),this.picker},t.prototype.recursively_parse_option_groups=function(t,i){var s,l,r,n,c,o,h,a,p,u;for(a=t.children("optgroup"),l=0,n=a.length;l<n;l++)h=a[l],h=jQuery(h),s=jQuery("<ul></ul>"),s.append(jQuery("<li class='group_title'>"+h.attr("label")+"</li>")),i.append(jQuery("<li class='group'>").append(s)),this.recursively_parse_option_groups(h,s);for(p=function(){var i,s,l,r;for(l=t.children("option"),r=[],i=0,s=l.length;i<s;i++)o=l[i],r.push(new e(o,this,this.opts));return r}.call(this),u=[],r=0,c=p.length;r<c;r++)o=p[r],this.picker_options.push(o),o.has_image()&&u.push(i.append(o.node));return u},t.prototype.has_implicit_blanks=function(){var t;return function(){var e,i,s,l;for(s=this.picker_options,l=[],e=0,i=s.length;e<i;e++)t=s[e],t.is_blank()&&!t.has_image()&&l.push(t);return l}.call(this).length>0},t.prototype.selected_values=function(){return this.multiple?this.select.val()||[]:[this.select.val()]},t.prototype.toggle=function(t,e){var s,l,n;if(l=this.selected_values(),n=t.value().toString(),this.multiple?r.call(this.selected_values(),n)>=0?(s=this.selected_values(),s.splice(jQuery.inArray(n,l),1),this.select.val([]),this.select.val(s)):null!=this.opts.limit&&this.selected_values().length>=this.opts.limit?null!=this.opts.limit_reached&&this.opts.limit_reached.call(this.select):this.select.val(this.selected_values().concat(n)):this.has_implicit_blanks()&&t.is_selected()?this.select.val(""):this.select.val(n),!i(l,this.selected_values())&&(this.select.change(),null!=this.opts.changed))return this.opts.changed.call(this.select,l,this.selected_values(),e)},t}(),e=function(){function t(t,e,i){this.picker=e,this.opts=null!=i?i:{},this.clicked=l(this.clicked,this),this.option=jQuery(t),this.create_node()}return t.prototype.destroy=function(){return this.node.find(".thumbnail").off("click",this.clicked)},t.prototype.has_image=function(){return null!=this.option.data("img-src")},t.prototype.is_blank=function(){return!(null!=this.value()&&""!==this.value())},t.prototype.is_selected=function(){var t;return t=this.picker.select.val(),this.picker.multiple?jQuery.inArray(this.value(),t)>=0:this.value()===t},t.prototype.mark_as_selected=function(){return this.node.find(".thumbnail").addClass("selected")},t.prototype.unmark_as_selected=function(){return this.node.find(".thumbnail").removeClass("selected")},t.prototype.value=function(){return this.option.val()},t.prototype.label=function(){return this.option.data("img-label")?this.option.data("img-label"):this.option.text()},t.prototype.clicked=function(t){if(this.picker.toggle(this,t),null!=this.opts.clicked&&this.opts.clicked.call(this.picker.select,this,t),null!=this.opts.selected&&this.is_selected())return this.opts.selected.call(this.picker.select,this,t)},t.prototype.create_node=function(){var t,e,i,s;return this.node=jQuery("<li/>"),t=jQuery("<img class='image_picker_image'/>"),t.attr("src",this.option.data("img-src")),s=jQuery("<div class='thumbnail'>"),i=this.option.data("img-class"),i&&(this.node.addClass(i),t.addClass(i),s.addClass(i)),e=this.option.data("img-alt"),e&&t.attr("alt",e),s.on("click",this.clicked),s.append(t),this.opts.show_label&&s.append(jQuery("<p/>").html(this.label())),this.node.append(s),this.node},t}()}).call(this);