import os, os.path, json
import markdown2, shutil

from slugify import slugify


def check_run_from_project_root_invariant():
    curr_dir = os.path.dirname(os.path.abspath(__file__))
    assert os.path.abspath(os.path.join(curr_dir, '../../')) == os.getcwd()


def get_markdown():
    return markdown2.Markdown(extras=[
        'fenced-code-blocks',
        'metadata',
        'tables',
    ])


def get_post_paths():
    curr_dir = os.path.dirname(os.path.abspath(__file__))
    content_dir = os.path.join(curr_dir, '../../content')
    for path in os.listdir(content_dir):
        if path.endswith('.md'):
            yield os.path.abspath(os.path.join(content_dir, path))


def get_slug_for_post(metadata):
    return slugify(metadata['title']) + '-' + metadata['date']


if __name__ == '__main__':
    check_run_from_project_root_invariant()

    shutil.rmtree('docs')
    os.mkdir('docs')
    shutil.copytree('assets', 'docs', dirs_exist_ok=True)

    markdown = get_markdown()
    all_posts = []
    for path in get_post_paths():
        with open(path) as f:
            html = markdown.convert(f.read())
            html.metadata['slug'] = get_slug_for_post(html.metadata)
            html.metadata['content'] = html
            all_posts.append(html.metadata)

            with open('docs/%s.json' % html.metadata['slug'], 'w') as g:
                g.write(json.dumps(html.metadata))

    with open('docs/posts.json', 'w') as f:
        f.write(json.dumps(all_posts))

