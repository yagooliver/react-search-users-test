node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t react-search-users-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm react-search-users-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-search-users-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t react-search-users-test --no-cache .'
        sh 'docker tag react-search-users-test localhost:5000/react-search-users-test'
        sh 'docker push localhost:5000/react-search-users-test'
        sh 'docker rmi -f react-search-users-test localhost:5000/react-search-users-test'
      }
    }
  }
  catch (err) {
    throw err
  }
}