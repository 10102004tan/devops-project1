docker build -t dongochieu/devops-demo-backend .

docker run -d --restart=always --name=devops-backend -p 8080:3000 dongochieu/devops-demo-backend

docker login -u dongochieu

docker push dongochieu/devops-demo-backend:latest

docker image tag dongochieu/devops-demo-backend dongochieu/devops-demo-backend:1.0

docker push dongochieu/devops-demo-backend:1.0

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

# Run MySQL server
docker run --name devops-db -e MYSQL_ROOT_PASSWORD="root12345" -e MYSQL_USER="admin" -e MYSQL_PASSWORD="admin" -e MYSQL_DATABASE="tdc-devops" -p 3306:3306 -d mysql:8.0


