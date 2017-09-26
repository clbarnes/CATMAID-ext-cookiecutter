# -*- coding: utf-8 -*-
from catmaid.tests.apis.common import CatmaidApiTestCase


class {{ cookiecutter.app_name.title() }}TestCase(CatmaidApiTestCase):
    fixtures = CatmaidApiTestCase.fixtures + ['{{ cookiecutter.app_name }}_testdata.json']

    @classmethod
    def setUpTestData(cls):
        super({{ cookiecutter.app_name.title() }}TestCase, cls).setUpTestData()
