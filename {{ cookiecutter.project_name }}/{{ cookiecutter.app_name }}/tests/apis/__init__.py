# -*- coding: utf-8 -*-
import json
from {{ cookiecutter.app_name }}.tests.common import {{ cookiecutter.app_name.title() }}TestCase


URL_PREFIX = '/ext/{{ cookiecutter.app_name }}'


class InstallationTest({{ cookiecutter.app_name.title() }}TestCase):
    def test_is_installed(self):
        response = self.client.get(URL_PREFIX + '/is-installed')
        self.assertEqual(response.status_code, 200)
        parsed_response = json.loads(response.content.decode('utf-8'))
        assert parsed_response['is_installed']
