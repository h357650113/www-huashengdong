#!/bin/bash
npm run build
scp -r build/* root@139.196.24.57:/srv/huashengdong.com/www.huashengdong.com/public