#!/bin/bash
npm run build
scp -r build/* root@139.196.24.57:/var/www/www.huashengdong.com/public