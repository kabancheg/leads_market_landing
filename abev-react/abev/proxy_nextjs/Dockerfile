FROM nginxinc/nginx-unprivileged:1-alpine

COPY ./default_old.conf.tpl /etc/nginx/default.conf.tpl
COPY ./run.sh /run.sh

USER root

RUN touch /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/conf.d/default.conf && \
    chmod +x /run.sh

USER nginx

CMD ["/run.sh"]