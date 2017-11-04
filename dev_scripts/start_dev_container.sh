#!/bin/bash

dir=$PWD
parentdir="$(dirname "$dir")"

docker run -it -p 8080:8080 -v $parentdir:/home/src marobs/emoji-dev-container bash
