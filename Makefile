compile:
	python3 src/python/main.py
	cp -R public/* docs/
	npm run build

run:
	npm run watch

clean:
	rm -r docs
