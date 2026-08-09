# Begin Again Yoga — `make` runs the dev server.
# Node version comes from .tool-versions (asdf).

.DEFAULT_GOAL := dev

.PHONY: dev build preview

dev: node_modules
	npm run dev

build: node_modules
	npm run build

preview: build
	npm run preview

node_modules: package.json package-lock.json
	npm install
	touch node_modules
