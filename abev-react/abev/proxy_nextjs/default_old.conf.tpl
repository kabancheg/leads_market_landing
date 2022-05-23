proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

upstream nextjs_upstream {
  server nextjs:3000;
}

server {
    listen 80;
    listen [::]:80;
	server_name kvarzone.ru www.kvarzone.ru;

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
    server_name kvarzone.ru;

    gzip on;
    gzip_proxied any;
    gzip_comp_level 4;
    gzip_types text/css application/javascript image/svg+xml;

    ssl_certificate /etc/letsencrypt/live/kvarzone.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kvarzone.ru/privkey.pem;

    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location /api/static {
        alias /vol/static;
    }

    location /_next/static {
        proxy_cache STATIC;
        proxy_pass http://nextjs_upstream;
        add_header X-Cache-Status $upstream_cache_status;
    }

    location /api {
        proxy_pass http://$server_name$request_uri;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_host;
        proxy_redirect off;

        uwsgi_pass              app:9000;
        include                 /etc/nginx/uwsgi_params;
        client_max_body_size    10M;
    }

    location / {
		proxy_pass http://nextjs_upstream;
	}
}
