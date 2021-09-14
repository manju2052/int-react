node{
    
    
    
    stage("Git Clone"){
     
    git credentialsId: '46cdb7f0-1c73-46f2-8fff-8cead102cff1', url: 'https://github.com/manju2052/int-react.git'
     
    }
    
    stage("Docker Image Build"){
        
        sh "docker build --no-cache -t comtechsayan/int-react-docker ."
        
    }
    
    stage("Docker Login & Push"){
        
        withCredentials([string(credentialsId: 'DockerHubPwd', variable: 'DockerHubPwd')]) {
            
            sh "docker login -u comtechsayan -p ${DockerHubPwd}"
        }
        
        sh "docker push comtechsayan/int-react-docker"
    }

    stage("Remove Local Image"){
        sh "docker rmi -f comtechsayan/int-react-docker"
    }
    
    stage("Run in Docker Swarm Manager"){
        
        sshagent(['Docker_Swarm_Manager_SSH']) {
            
          
            
            sh 'scp -o StrictHostKeyChecking=no  docker-compose.yml ubuntu@172.31.35.129:'
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.35.129 docker stack deploy --prune --compose-file docker-compose.yml reactappprod'
        }
        
    }
    
}