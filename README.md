# CATMAID-ext-cookiecutter

This is a [cookiecutter](https://github.com/audreyr/cookiecutter)
template for [CATMAID](https://catmaid.readthedocs.io/en/stable/) extensions.

It builds most of the necessary boilerplate, including but not limited to:

- `setup.py` for installing the extension with `pip`
- `.travis.yml` for running tests against CATMAID
- An API endpoint for checking whether the extension is installed
- A unit test for hitting that endpoint
- An empty frontend widget

It assumes you are using the same (recommended) tool stack as CATMAID:
[github](https://github.com/), [travis-ci](https://travis-ci.org/),
and [coveralls](https://coveralls.io/).

## Usage

For more details, see the `cookiecutter`
[repo](https://github.com/audreyr/cookiecutter) and
[docs](https://cookiecutter.readthedocs.io/en/latest)

tl;dr

- [Install `cookiecutter`](https://cookiecutter.readthedocs.io/en/latest/installation.html#install-cookiecutter)
: `pip install --user cookiecutter`
- [Use `cookiecutter`](https://cookiecutter.readthedocs.io/en/latest/usage.html#works-directly-with-git-and-hg-mercurial-repos-too)
 to fetch and use this template:
 `cookiecutter gh:clbarnes/CATMAID-ext-cookiecutter`

## Contributing

This is unlikely to be actively maintained as CATMAID changes
(e.g. directory reorganisation, travis build steps, widget conventions),
but pull requests to update it are welcome!