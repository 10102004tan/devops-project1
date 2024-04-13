docker build -t coconut2442004/test:tagname .

docker run -d --restart=always --name=devops-backend -p 3000:3000 coconut2442004/test:tagname

docker login -u coconut2442004

docker push coconut2442004/test:tagname:latest

docker image tag coconut2442004/test:tagname coconut2442004/test:1.0

docker push coconut2442004/test:1.0

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