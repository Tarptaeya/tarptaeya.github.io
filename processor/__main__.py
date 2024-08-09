import os

from jinja2 import Environment, FileSystemLoader

from.posts import process_posts
from .site import process_site

if __name__ == '__main__':
    environment = Environment(loader=FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates')))
    
    process_site(environment)
    process_posts(environment)

