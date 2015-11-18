
clean:
	rm -fr dist

dist:
	mkdir dist
	cat lib/* > dist/fingerbank-client.js

.PHONY: test

test:
	node test/run.js

