[![Build Status](https://travis-ci.org/{{ cookiecutter.github_user }}/{{ cookiecutter.project_name }}.svg?branch=master)](https://travis-ci.org/{{ cookiecutter.github_user }}/{{ cookiecutter.project_name }})
[![Coverage Status](https://coveralls.io/repos/github/{{ cookiecutter.github_user }}/{{ cookiecutter.project_name }}/badge.svg?branch=master)](https://coveralls.io/github/{{ cookiecutter.github_user }}/{{ cookiecutter.project_name }}?branch=master)

# {{ cookiecutter.project_name }}

{{ cookiecutter.project_title }} is a django application which acts as a drop-in
extension for [CATMAID](http://www.catmaid.org). It contains API
endpoints and static files.

## Quick start

1. Install {{ cookiecutter.app_name }} in whichever python environment is running
CATMAID with `pip install -e path/to/this/directory`

2. Add "{{ cookiecutter.app_name }}" to your `INSTALLED_APPS` setting like this:

```python
INSTALLED_APPS = [
    ...
    "{{ cookiecutter.app_name }}.apps.{{ cookiecutter.app_name.title() }}Config",
]
```

3. Run `python manage.py migrate` to create the {{ cookiecutter.app_name }} models.

4. Run `python manage.py collectstatic -l` to pick up the
{{ cookiecutter.app_name }}'s static files.
