pipeline {
    agent any
    stages { 
        stage('Build') { 
            steps {
                sh 'npm install' 
                echo 'test'
            }
        }
        stage('Test') { 
            steps {
                sh 'node --version'
                sh 'npm --version'
                echo 'test'
            }
        }
        stage('Deploy') { 
            steps {
              echo 'deploy successfully'
            }
        }
    }
}