import os
import shutil

from post import Post
from pages import render_index_page

if __name__ == "__main__":
    post_paths = ["posts/" + i for i in sorted([i for i in os.listdir("posts") if not i.startswith(".")], key=lambda x: int(x.split("-")[0]), reverse=True)]
    posts = [Post.from_path(path) for path in post_paths]
    if os.path.exists("docs"):
        shutil.rmtree("docs")
    os.mkdir("docs")
    os.chdir("docs")

    # posts
    for post in posts:
        slug = post.get_slug()
        os.makedirs(slug)
        with open(slug + "/index.html", "w") as f:
            post.render(f)
        shutil.copytree("../" + post.metadata["path"], slug, dirs_exist_ok=True)

    with open("posts/index.html", "w") as f:
        Post.render_index(f, posts)

    # pages
    with open("index.html", "w") as f:
        render_index_page(f)

    # CNAME
    shutil.copyfile("../CNAME", "CNAME")
