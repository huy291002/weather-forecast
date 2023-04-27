# Weather App

## How to develop

### 1. Install Docker Desktop
https://www.docker.com/products/docker-desktop/

### 2. Clone and open this repo in your IDE

### 3. Run
```bash
docker-compose up -d --build
```

If the command is run successfully you should see these lines
```
[+] Running 4/4
 ✔ Network weather-app_default    Created
 ✔ Container weather-app-mongo-1  Started
 ✔ Container weather-app-node-1   Started
 ✔ Container weather-app-react-1  Started
```
Then open http://localhost:5000/ in your browser you should see
![localhost5000](/media/localhost5000.png)

And open http://localhost:3000/ you should see
![localhost3000](/media/localhost3000.png)

### 4. Start developing

#### How to install node packages
1. Run 
    
    ```
    docker exec -it weather-app-react-1 npm install <package>
    ```

    For example: `docker exec -it weather-app-react-1 npm install react-router-dom`

2. Run
```bash
docker-compose up -d --build
```