import os


def docopen(path, *args, **kwargs):
    path = os.path.join(os.path.dirname(__file__), '../docs/', path)
    return open(path, *args, **kwargs)

