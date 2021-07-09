import os.path
from jinja2 import Environment, FileSystemLoader


def render_resume(f):
    environment = Environment(loader=FileSystemLoader(os.path.join(os.path.dirname(__file__), "templates/resume")))
    template = environment.get_template("index.html")
    f.write(template.render())
