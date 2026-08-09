# Begin Again Yoga — `make` runs the dev server.

# Astro 5 needs a recent Node; pin the asdf version used for builds.
export ASDF_NODEJS_VERSION := 22.15.0

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
