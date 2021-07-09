import os.path
from jinja2 import Environment, FileSystemLoader


def render_index_page(f):
    environment = Environment(loader=FileSystemLoader(os.path.join(os.path.dirname(__file__), "templates")))
    template = environment.get_template("index.html")
    f.write(template.render(title="Hello, I am Anmol"))
