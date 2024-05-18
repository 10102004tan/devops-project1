docker build -t chiendevj/dev-ops-back-end .

docker run -d --restart=always --name=devops-backend -p 8080:3001 chiendevj/dev-ops-back-end

docker login -u chiendevj

docker push chiendevj/dev-ops-back-end:latest

docker image tag chiendevj/dev-ops-back-end chiendevj/dev-ops-back-end:1.0

docker push chiendevj/dev-ops-back-end:1.0

# List running containers
docker ps

# List all containers
docker ps -a

# Lifecycle container
docker stop devops-backend

docker start devops-backend

docker rm -f devops-backend

# Clean up disk
docker image prune -a

# Show log of a container
docker logs devops-backend

# Run Mysql
docker run --name devops-db -e MYSQL_ROOT_PASSWORD="root12345" -e MYSQL_USER="admin" -e MYSQL_PASSWORD="admin" -e MYSQL_DATABASE="tdc-devops" -p 3306:3006 -d mysql:8.0