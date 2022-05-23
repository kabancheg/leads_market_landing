server {
    listen 80;
    listen [::]:80;
	server_name instaleads.fr www.instaleads.fr;

    location /.well-known/acme-challenge {
        root /var/www/certbot;
    }
}
