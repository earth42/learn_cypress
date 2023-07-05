pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:18.14.1'
    }
  }

  stages {
    stage('Build') {
            steps {
                echo 'Building..'
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