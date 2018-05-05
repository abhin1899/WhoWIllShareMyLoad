# Who Will Share My Load CCBD Assignment


NodeJS Configuration/Installation link---> https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04
Node Modules To be Installed

1) npm install http --save

2) npm install express --save

3) npm install morgan --save

4) npm install path --save

5) npm install fs --save

use pm2 to run node servers http://pm2.keymetrics.io/

pm2 start server1.js

pm2 start server2.js

pm2 start server3.js

pm2 start server4.js



NGINX Configuration/Installation  link---> https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04 
Go To
/etc/nginx/sites-available/default
And Change The Default File To The File Provided As NGINX Configuration

sudo systemctl start nginx

sudo systemctl reload nginx  (once the changes to nginx configuration file are made)


Mozilla Firefox Proxy Configuration 

--> Go To Preferences

--> Find Proxy Settings in Preferences

--> Select Manual Proxy Configuration

--> Set The HTTP Proxy to 127.0.0.1

--> Then Click On OK Done!!




Using Apache Bench To Bench Mark The Tests

--> balancing_load_among_multiple_server.png -- To demonstrate load balancing

--> single_server.png -- Load is not shared and a singe server is used






use pm2 monit to monitor loads between different node servers