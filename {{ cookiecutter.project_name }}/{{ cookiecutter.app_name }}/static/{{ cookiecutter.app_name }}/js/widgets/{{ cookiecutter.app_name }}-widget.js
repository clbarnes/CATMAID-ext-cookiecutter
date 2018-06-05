/* -*- mode: espresso; espresso-indent-level: 8; indent-tabs-mode: t -*- */
/* vim: set softtabstop=2 shiftwidth=2 tabstop=2 expandtab: */

(function(CATMAID) {

  "use strict";

  var {{ cookiecutter.app_name.title() }}Widget = function() {
    this.widgetID = this.registerInstance();
    this.idPrefix = `{{ cookiecutter.app_name }}-widget${this.widgetID}-`;
  };

  $.extend({{ cookiecutter.app_name.title() }}Widget.prototype, new InstanceRegistry());

  {{ cookiecutter.app_name.title() }}Widget.prototype.getName = function() {
    return '{{ cookiecutter.app_name.title() }} Widget ' + this.widgetID;
  };

  {{ cookiecutter.app_name.title() }}Widget.prototype.getWidgetConfiguration = function() {
    return {
      helpText: '{{ cookiecutter.app_name.title() }} Widget: ',
      controlsID: this.idPrefix + 'controls',
      createControls: function(controls) {
        controls.appendChild(document.createTextNode('Controls go here'));
      },
      contentID: this.idPrefix + 'content',
      createContent: function(container) {
        container.appendChild(document.createTextNode('Content goes here'));
      },
      init: function() {}
    };
  };

  {{ cookiecutter.app_name.title() }}Widget.prototype.destroy = function() {
    this.unregisterInstance();
  };

  CATMAID.registerWidget({
    name: '{{ cookiecutter.project_title }} Widget',
    description: 'Widget associated with the {{ cookiecutter.app_name }} app',
    key: '{{ cookiecutter.app_name }}-widget',
    creator: {{ cookiecutter.app_name.title() }}Widget
  });

})(CATMAID);
