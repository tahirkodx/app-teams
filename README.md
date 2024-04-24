# app-teams

# Running live reload

Add following to capacitor.config.ts

server: {
hostname: "http://localhost:8100",
androidScheme: "https",
url: "http://192.168.10.10:8100",
cleartext: true,
}

# To access the app from local network

ionic serve --address 192.168.10.10
