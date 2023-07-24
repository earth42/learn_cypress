pipeline {
  agent any

  stages {
    stage('Build') {
            steps {
                echo 'Building..'
                checkout scmGit(branches: [[name: '**']], extensions: [], userRemoteConfigs: [[credentialsId: '19a4518b-b0ea-4bc0-bb5b-fcef72e4085a', url: 'git@github.com:earth42/learn_cypress.git']])
                sh "npm install"
            }
        }

    stage('Test') {
        steps {
            echo 'Testing..'
            sh 'NO_COLOR=1 npx cypress run'
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
  }
}