import json
import os.path

import markdown2
from datetime import datetime
from slugify import slugify
from jinja2 import Environment, FileSystemLoader


class Post:
    markdown = markdown2.Markdown(extras=["fenced-code-blocks", "tables"])
    environment = Environment(loader=FileSystemLoader(os.path.join(os.path.dirname(__file__), "templates")))

    def __init__(self, metadata, content):
        self.metadata = metadata
        self.content = content

    def __repr__(self):
        return "Post(%s)" % self.metadata["title"]

    def get_published(self):
        return datetime.strptime(self.metadata["published"], "%Y-%m-%d").strftime("%d %B, %Y")

    def get_slug(self):
        return "posts/" + datetime.strptime(self.metadata["published"], "%Y-%m-%d").strftime("%Y/%m/%d") + "/" + slugify(self.metadata["title"])

    def render(self, file):
        title = self.metadata["title"]
        content = self.markdown.convert(self.content)
        template = self.environment.get_template("post.html")
        file.write(template.render(title=title, content=content))

    @staticmethod
    def from_path(path):
        with open(path + "/metadata.json") as f:
            metadata = json.load(f)
            metadata["path"] = path
        with open(path + "/index.md") as f:
            content = f.read()
        return Post(metadata, content)

    @classmethod
    def render_index(cls, f, posts):
        template = cls.environment.get_template("posts.html")
        f.write(template.render(posts=posts))
