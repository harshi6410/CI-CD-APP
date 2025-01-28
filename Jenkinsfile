pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = 'docker-harshi6410'  // Jenkins credentials ID for Docker Hub
        DOCKER_REGISTRY = 'harshi6410'
        FRONTEND_IMAGE = 'ci-cd-app-frontend'
        BACKEND_IMAGE = 'ci-cd-app-backend'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Tag Docker Images') {
            steps {
                script {
                    sh 'docker tag frontend:latest $DOCKER_REGISTRY/$FRONTEND_IMAGE:latest'
                    sh 'docker tag backend:latest $DOCKER_REGISTRY/$BACKEND_IMAGE:latest'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "$DOCKER_CREDENTIALS", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                        sh 'docker push $DOCKER_REGISTRY/$FRONTEND_IMAGE:latest'
                        sh 'docker push $DOCKER_REGISTRY/$BACKEND_IMAGE:latest'
                    }
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                script {
                    sh 'eval $(minikube docker-env)'  // Ensure Minikube uses the correct Docker daemon
                    sh 'docker pull $DOCKER_REGISTRY/$FRONTEND_IMAGE:latest'
                    sh 'docker pull $DOCKER_REGISTRY/$BACKEND_IMAGE:latest'

                    // Deploy with kubectl (adjust the deployment files accordingly)
                    sh 'kubectl apply -f frontend-deployment.yaml'
                    sh 'kubectl apply -f backend-deployment.yaml'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
