/* -*- mode: espresso; espresso-indent-level: 8; indent-tabs-mode: t -*- */
/* vim: set softtabstop=2 shiftwidth=2 tabstop=2 expandtab: */

(function(CATMAID) {

  "use strict";

  var {{ cookiecutter.app_name.title() }}Widget = function() {
    this.widgetID = this.registerInstance();
    this.idPrefix = `{{ cookiecutter.app_name }}-widget${this.widgetID}-`;

  $.extend({{ cookiecutter.app_name.title() }}Widget.prototype, new InstanceRegistry());

  {{ cookiecutter.app_name.title() }}Widget.prototype.getName = function() {
    return '{{ cookiecutter.app_name.title() }} Widget ' + this.widgetID;
  };

  {{ cookiecutter.app_name.title() }}Widget.prototype.getWidgetConfiguration = function() {
    return {
      helpText: '{{ cookiecutter.app_name.title() }} Widget: ',
      controlsID: this.idPrefix + 'controls',
      createControls: function(controls) {},
      contentID: this.idPrefix + 'content',
      createContent: function(container) {},
      init: function() {}
    };
  };

  {{ cookiecutter.app_name.title() }}Widget.prototype.destroy = function() {
    this.unregisterInstance();
  };

  CATMAID.registerWidget({key: '{{ cookiecutter.app_name }}-widget', creator: {{ cookiecutter.app_name.title() }}Widget});

})(CATMAID);
