# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url

import {{ cookiecutter.app_name }}.control

app_name = '{{ cookiecutter.app_name }}'

urlpatterns = [
    url(r'^is-installed$', {{ cookiecutter.app_name }}.control.is_installed),
]
