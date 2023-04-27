mongoimport \
   --authenticationDatabase=admin \
   --uri='mongodb://mern:merndocker@:27017/test' \
   --collection='data' \
   --file=/data.csv \
   --type=csv \
   --fields="time","solid_humidity","air_humidity","temperature","light_intensity" \
   --maintainInsertionOrder