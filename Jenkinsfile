pipeline {
    agent {
        any { image 'node:20.10.0-alpine3.19' }
    }
    stage('check') { 
        steps {
            sh 'node --version'
            sh 'npm --version'
        }
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
