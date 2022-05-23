proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

upstream nextjs_upstream {
  server nextjs:3000;
}

server {
    listen 80;
    listen [::]:80;
	server_name instaleads.fr www.instaleads.fr;

    location /.well-known/acme-challenge {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$server_name$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name instaleads.fr;

    gzip on;
    gzip_proxied any;
    gzip_comp_level 4;
    gzip_types text/css application/javascript image/svg+xml;

    ssl_certificate /etc/letsencrypt/live/instaleads.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/instaleads.ru/privkey.pem;

    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location /_next/static {
        proxy_cache STATIC;
        proxy_pass http://nextjs_upstream;
    }

    location / {
		proxy_pass http://nextjs_upstream;
	}
}
