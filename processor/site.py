import os

from jinja2 import Environment, FileSystemLoader

from .utils import docopen


def readsite(path):
    with open(os.path.join(os.path.dirname(__file__), '../site/', path)) as f:
        return f.read()


def process_site(environment):
    template = environment.get_template('site.index.html')
    with docopen('index.html', 'w') as f:
        f.write(template.render(about=readsite('about.html')))


