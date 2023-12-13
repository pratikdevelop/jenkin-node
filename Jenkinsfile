pipeline {
    agent {
        any { image 'node:20.10.0-alpine3.19' }
    }
    stages{
        
        stage('check') { 
                sh 'node --version'
                sh 'npm --version'
        }
        stage('Test') { 
            steps {
                echo 'test version'
            }
        }
        stage('Deploy') { 
            steps {
                echo 'deploy successfully'
            }
        }
    }
}
