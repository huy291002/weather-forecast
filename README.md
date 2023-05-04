# Weather App
![Weather App](/media/weather-app.png)


## How to develop

### 1. Install Docker Desktop
https://www.docker.com/products/docker-desktop/

### 2. Clone and open this repo in your IDE

### 3. Run
```bash
docker-compose up -d
```

If the command is run successfully you should see these lines
```
[+] Running 4/4
 ✔ Network weather-app_default    Created
 ✔ Container weather-app-mongo-1  Started
 ✔ Container weather-app-node-1   Started
 ✔ Container weather-app-react-1  Started
```

### 4. Start developing

React: http://localhost:3000/

Express: http://localhost:5000/

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