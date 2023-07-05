pipeline {
  agent {
    // this image provides everything needed to run Cypress
    // docker {
    //   image 'cypress/base:18.14.1'
    // }
  }

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
            sh "npx cpyress run"
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
  }
}