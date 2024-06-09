pipeline{

  agent 'any'
  
stages {
        stage("NPM") {
            steps {
                script {
                    sh '''
						npm install
						npm run build
                    '''
                }
            }
        }
 }
}
