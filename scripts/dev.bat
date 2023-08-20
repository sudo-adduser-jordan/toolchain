set ProjectPath="C:\Users\user1\Desktop\GitHub\algorithm-visualizer\"
set Browser=firefox
cd %ProjectPath%
start cmd.exe /k npm run dev
start %Browser% localhost:3000