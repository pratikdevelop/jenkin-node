pipeline {
    agent any
    stages{
         stage('Build') {
            agent {
                docker {
                    image 'node:20.10.0-alpine3.19'
                    // Run the container on the node specified at the
                    // top-level of the Pipeline, in the same workspace,
                    // rather than on a new node entirely:
                    reuseNode true
                }
            }
            steps {
                sh 'node --version'
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
}
