import os
import json
import shutil


API_PATH   = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../docs/api/"))
POSTS_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../posts/"))
ASSET_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../docs"))


PAGE_SIZE = 5


class Post:
    def __init__(self, metadata, content):
        self.title = metadata['title']
        self.published_at = metadata['published']
        self.slug = metadata.get('slug', create_slug(metadata))
        self.description = metadata['description']
        self.content = content

    def __lt__(self, other):
        return self.published_at < other.published_at

    def __repr__(self):
        return self.title


def create_slug(metadata):
    title = metadata['title']
    published_at = metadata['published']
    
    ans = []
    for c in title:
        if c.isalnum():
            ans.append(c)
        else:
            if len(ans) == 0 or ans[-1] != '-':
                ans.append('-')
    return ''.join(ans)


def read_post(path):
    def read_file(p):
        with open(p) as f:
            return f.read()

    metadata = read_file(os.path.join(path, "metadata.json"))
    metadata = json.loads(metadata)
    content = read_file(os.path.join(path, "index.md"))
    return metadata, content


def get_all_posts():
    posts = []
    for year in os.listdir(POSTS_PATH):
        for item in os.listdir(os.path.join(POSTS_PATH, year)):
            path = os.path.join(POSTS_PATH, year, item)
            metadata, content = read_post(path)
            posts.append(Post(metadata, content))

    posts.sort(reverse=True)
    return posts


def copy_assets():
    for year in os.listdir(POSTS_PATH):
        for item in os.listdir(os.path.join(POSTS_PATH, year)):
            path = os.path.join(POSTS_PATH, year, item)
            ignore = lambda _, fs: [f for f in fs if f.endswith('.json') or f.endswith('.md')]
            shutil.copytree(path, ASSET_PATH, dirs_exist_ok=True, ignore=ignore)


def chunk(arr, chunksize):
    n = len(arr)
    i = 0
    while i < n:
        yield arr[i:i + chunksize]
        i += chunksize


def main():
    os.makedirs(API_PATH, exist_ok=True)

    posts = get_all_posts()
    copy_assets()

    chunked_posts = list(chunk(posts, PAGE_SIZE))
    num_chunks = len(chunked_posts)
    for i, ps in enumerate(chunked_posts):
        arr = []
        for p in ps:
            x = {}
            x['title'] = p.title
            x['published_at'] = p.published_at
            x['description'] = p.description
            x['slug'] = p.slug
            arr.append(x)
        data = {'posts': arr, 'next': None}
        if i + 1 < num_chunks:
            data['next'] = '/static/api/posts_%d.json' % (i + 1)
        with open(os.path.join(API_PATH, 'posts_%d.json' % i), 'w') as f:
            f.write(json.dumps(data))

    for p in posts:
        data = {'title': p.title, 'published_at': p.published_at, 'content': p.content}
        with open(os.path.join(API_PATH, '%s.json' % p.slug), 'w') as f:
            f.write(json.dumps(data))



if __name__ == '__main__':
    main()

