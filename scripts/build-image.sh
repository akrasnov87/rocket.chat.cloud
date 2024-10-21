#!/bin/sh

tag=$(./scripts/getCurrentVersion.sh)

docker build  -f scripts/Dockerfile -t akrasnov87/rocket.chat.cloud:$tag . --no-cache